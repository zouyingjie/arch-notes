import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({

  // ~ 开发配置
  dest: 'build/.vuepress/dist',
  host: 'localhost', // dev 的域名
  port: 8080,

  title: '架构笔记',
  description: 'You have to write your own story.',
  base: '/', // gh-page 中是增加了项目名
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],

  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [2, 3] },
    extendMarkdown: md => {
      md.use(require('markdown-it-mermaid').default);
      md.use(require('markdown-it-sub'));
      md.use(require('markdown-it-sup'));
      md.use(require('markdown-it-abbr'));
      md.use(require('markdown-it-ins'));
      md.use(require('markdown-it-figure'));
      md.use(require('markdown-it-smartarrows'));
      md.use(require('markdown-it-fontawesome'));
    }
  },
  theme: defaultTheme({
    docsDir: 'docs',
    docsBranch: 'main',

    hostname: "abc",

    home: false,
    logo: '/images/microservices-logo.svg',

    lastUpdated: '最后更新',


    smoothScroll: true,
    editLinks: true,
    editLinkText: '在GitHub中编辑',

    repo: 'https://github.com/zouyingjie/arch-notes',
    repoLabel: 'GitHub',

    serviceWorker: {
      updatePopup: true
    },
    

    // 导航栏
    navbar: [
      {
        text: '首页', 
        link: '/'
      },
      {
        text: '关于我',
        link: 'https://zouyingjie.github.io',
      }
    ],
      // 侧边栏
    sidebarDepth: 2,

    sidebar: [
  
    {
      text: '通用设计',
      link: '/common-design/',
      collapsable: false,
      children: [
        {
          text: 'API 设计',
          collapsable: false,
          path: '/common-design/api-design/',
          children: [
            '/common-design/api-design/rest',
            '/common-design/api-design/webapi',
            '/common-design/api-design/swagger',
          ]
        },
        {
          text: '软件测试',
          collapsable: false,
          path: '/common-design/software-testing/',
          children: [
            '/common-design/software-testing/unit-test'
          ]
        }
      ]
    },
    {
      text: 'Kubernetes',
      link: '/kubernetes/',
      collapsable: false,
      children: [
        '/kubernetes/01.kubernetes_roadmap.md',
        '/kubernetes/02.kubernetes_pod.md',
      ]
      }
    ],
  }),

  plugins: [
    blogPlugin({}),
    ['vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'center',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'quote',
        before: info => `<div class="quote"><p class="title">${info}</p>`,
        after: '</div>'
      },
    ],
    ['vuepress-plugin-container',
      {
        type: 'not-print',
        defaultTitle: ''
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162170924-1'
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'acf59fc06b2cf691903d',
          // 如果你对"clientSecret"有疑问,可以参考 http://icyfenix.cn/architect-perspective/general-architecture/system-security/authorization.html#oauth2
          clientSecret: '4cbf25bbf327f1164627d2ab43263b07b14c54fe',
          repo: 'awesome-fenix',
          owner: 'fenixsoft',
          admin: ['fenixsoft'],
          labels: ["Gitalk", "Comment"],
          id: '<%- ("icyfenix.cn" + (frontmatter.to.path || window.location.pathname)).slice(-50) %>',
          title: '「Comment」<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
          body: '<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
          distractionFreeMode: false,
          pagerDirection: 'last',
          // proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
          proxy: 'https://fenixsoft-cors.herokuapp.com/https://github.com/login/oauth/access_token'
        }
      }
    ],
    ['@vuepress/back-to-top'],
    // require('./plugins/read-time'),
    // require('./plugins/export')
  ],

  bundler: viteBundler(),
})
