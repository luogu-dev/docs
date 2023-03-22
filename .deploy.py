#!/usr/bin/env python3

import os
import oss2
import zipfile
import argparse
import tempfile
import re


def build_parser():
    parser = argparse.ArgumentParser(description='Luogu deploy script')
    parser.add_argument('-p', '--prefix', help='Aliyun OSS Path Prefix')
    parser.add_argument('path', help='built path')
    return parser


def main():
    args = build_parser().parse_args()
    oss_auth = oss2.Auth(os.environ['ALIOSS_AK'], os.environ['ALIOSS_SK'])
    oss_bucket = oss2.Bucket(oss_auth, os.environ['ALIOSS_ENDPOINT'], os.environ['ALIOSS_BUCKET'])
    prefix = (args.prefix.replace('\\', '/').rstrip('/') + '/').lstrip('/')

    built_dir = os.path.join(os.getcwd(), args.path)
    built_files = set([os.path.join(base[len(built_dir):], file).replace('\\', '/').lstrip('/\\')
        for base, _, files in os.walk(built_dir)
        for file in files
    ])

    oss_file_set = set([obj.key for obj in oss2.ObjectIterator(oss_bucket, prefix=prefix) if obj.key])
    files_to_remove = oss_file_set - built_files

    print(f'Files to remove: {files_to_remove}')

    for file in built_files:
        if re.search(r'\.[0-9a-f]{8}\.(js|css)$', file) and prefix + file in oss_file_set:
            print(f'Skipping file {file} (hashed)')
            continue

        full_path = os.path.join(built_dir, *file.split('/'))
        print(f'Putting file {file}')
        result = oss_bucket.put_object(prefix + file, open(full_path, 'rb').read())
        if result.status != 200:
            raise RuntimeError(result)

    print("Removing old files")

    for file in files_to_remove:
        print("Removing file {}".format(file))
        oss_bucket.delete_object(file)


if __name__ == '__main__':
    main()
