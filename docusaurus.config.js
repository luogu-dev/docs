// @ts-check

// /** @type {import('@docusaurus/types').Config} */
const config = {
    title: '洛谷帮助中心',
    favicon: 'img/favicon.ico',
    url: 'https://help.luogu.com.cn',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans']
    },

    presets: [
        ['@docusaurus/preset-classic', {
            blog: false,
            pages: false,
            docs: {
                sidebarPath: require.resolve('./sidebars.js'),
                routeBasePath: '/',
                remarkPlugins: [require('remark-math')],
                rehypePlugins: [require('rehype-katex')]
            },
            theme: {
                customCss: require.resolve('./src/style.css')
            }
        }]
    ],
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
    }],

    themeConfig: {
        navbar: {
            title: '洛谷帮助中心',
            logo: {
                alt: 'Luogu',
                src: 'img/logo.png'
            },
            items: [{
                type: 'doc',
                docId: 'rules/community/index',
                position: 'left',
                label: '社区规则'
            }, {
                type: 'doc',
                docId: 'rules/academic/index',
                position: 'left',
                label: '学术规范'
            }, {
                type: 'doc',
                docId: 'manual/luogu/index',
                position: 'left',
                label: '主站操作指南'
            }, {
                type: 'doc',
                docId: 'manual/class/index',
                position: 'left',
                label: '网校与付费指南'
            }, {
                type: 'doc',
                docId: 'ula/luogu',
                position: 'left',
                label: '用户协议'
            }, {
                href: 'https://www.luogu.com.cn',
                label: '主站',
                position: 'right'
            }, {
                href: 'https://class.luogu.com.cn',
                label: '网校',
                position: 'right'
            }]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} 上海洛谷网络科技有限公司. Built with Docusaurus.`
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula')
        }
    }
};

module.exports = config;
