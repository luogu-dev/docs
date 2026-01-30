import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PluginOptions as LocalSearchPluginOptions } from '@easyops-cn/docusaurus-search-local';
import { themes as PrismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default {
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

    markdown: {
        mdx1Compat: {
            comments: false,
            admonitions: false,
            headingIds: true /* until they provide a new syntax */
        }
    },

    presets: [
        ['@docusaurus/preset-classic', {
            blog: false,
            pages: {},
            docs: {
                sidebarPath: './sidebars.ts',
                async sidebarItemsGenerator(context) {
                    const { item, defaultSidebarItemsGenerator } = context;
                    const finalItems = await defaultSidebarItemsGenerator(context);
                    if(item.dirName === 'manual/class') {
                        finalItems.push({ type: 'ref', id: 'manual/luogu/team/premium' });
                    }
                    return finalItems;
                },
                routeBasePath: '/',
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex]
            },
            theme: {
                customCss: './src/style.css'
            }
        } satisfies Preset.Options]
    ],

    themes: [
        ['@easyops-cn/docusaurus-search-local', {
            indexDocs: true,
            indexBlog: false,
            docsRouteBasePath: ["/rules", "/manual", "/ula"],
            language: ["en", "zh"],
            hashed: true
        } satisfies LocalSearchPluginOptions]
    ],

    stylesheets: [{
        href: 'https://cdn.luogu.com.cn/assets/katex:0.16.7/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkaaFwHlcI',
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
                label: '网校与付费服务'
            }, {
                href: 'https://www.luogu.com.cn',
                label: '洛谷',
                position: 'right'
            }]
        },
        footer: {
            style: 'dark',
            copyright: `
                Copyright © ${new Date().getFullYear()} 上海洛谷网络科技有限公司. Built with Docusaurus.<br />
                <small><a href="http://beian.miit.gov.cn" target="_blank">沪ICP备18008322号</a></small>
            `,
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
                    href: 'https://ti.luogu.com.cn',
                }, {
                    label: '洛谷开放平台',
                    href: 'https://docs.lgapi.cn/open',
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
                items: [ {
                    label: '主站更新日志',
                    to: '/release-note',
                }, {
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
            theme: PrismThemes.github,
            darkTheme: PrismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
} satisfies Config;
