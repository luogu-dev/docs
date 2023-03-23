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
            pages: {},
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
                href: 'https://www.luogu.com.cn',
                label: '洛谷',
                position: 'right'
            }]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} 上海洛谷网络科技有限公司. Built with Docusaurus.`,
            links: [{
                title: '洛谷',
                items: [{
                    label: '洛谷主站',
                    href: 'https://www.luogu.com.cn',
                }, {
                    label: '洛谷网校',
                    href: 'https://class.luogu.com.cn',
                }, {
                    label: '洛谷有题',
                    href: 'https://open.luogu.com.cn',
                }, {
                    label: '洛谷更新日志',
                    to: '/ReleaseNotes',
                }]
            }, {
                title: '用户协议',
                items: [{
                    label: '洛谷用户协议',
                    to: '/ula/luogu',
                }, {
                    label: '洛谷网校用户协议',
                    to: '/ula/class',
                }, {
                    label: '洛谷高级团队服务章程',
                    to: '/ula/premium-team',
                }]
            }, {
                title: '更多',
                items: [{
                    label: '关于我们',
                    to: '/about-us',
                }, {
                    label: '联系我们',
                    to: '/contact-us',
                }, {
                    label: 'GitHub 仓库',
                    href: 'https://github.com/luogu-dev/docs',
                }]
            }]
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula')
        }
    }
};

module.exports = config;
