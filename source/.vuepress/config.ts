import { defineConfig } from 'vuepress/config'

import { Sidebar4Project,
        NavItems4Project
} from './config/index'



module.exports = {
  title: '我的知识库',
  description: 'Just playing around', 


  //主题设置
  themeConfig: {
    //首页title，描述
   
    //如果你的网站会被部署到一个非根路径，你将需要在 .vuepress/config.js 中设置 base
    base: '/get_KNOWLEDGE/',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/Hanwall/get_KNOWLEDGE',
    repoLabel: '查看源码',

    // 假如你的文档仓库和项目本身不在一个仓库：
    //docsRepo: 'vuejs/vuepress',
    //导航栏LOGO
    logo: '/logo/loading.gif',
    // 默认是 false, 设置为 true 来启用
    editLinks: true ,
    //默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    
    //默认docs
    docsDir: 'source',
    //假如文档放在一个特定的分支下：
    docsBranch: 'master',

    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    //页面滑动效果
    smoothScroll: true,
    //本页更新时间
    lastUpdated: '最后更新',
    //search: false,
    //导航栏
    nav: NavItems4Project,
    //侧边栏
    sidebar: Sidebar4Project
     
    },
 
  //插件使用配置，记得安装不自带的插件不然不报错也不起作用
  plugins: [
    ['@vuepress/last-updated',true],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',{
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/medium-zoom', true]
    
  ],
  // if (ctx.isProd){
  //   plugins.append[['@vssue/vuepress-plugin-vssue',{
  //     platform: 'github-v4', //v3的platform是github，v4的是github-v4
  //     locale: 'zh', //语言
  //     // 其他的 Vssue 配置
  //     owner: 'Hanwall', //github账户名
  //     repo: 'get_KNOWLEDGE', //github一个项目的名称
  //     clientId: '4ce2c7ccdf5fabf1b86d',//注册的Client ID
  //     clientSecret: 'c9930a2c05c5114c3ee776be94a08925a9f03093',//注册的Client Secret
  //     autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
  //   }]]

  // }

  //Markdown 文件的 headers (标题 & 小标题) 会在准备阶段被提取出来，并存储在 this.$page.headers 中。默认情况下，VuePress 会提取 h2 和 h3 标题。你可以通过这个选项来修改提取出的标题级别。
  Markdown: {
      extractHeaders: [ 'h2', 'h3', 'h4' ,'h5']
  },
  //指定额外的需要被监听的文件。你可以监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新。
  extraWatchFiles: ['.vuepress/config/**'],

  //如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 true，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积。
  //evergreen: !ctx.isProd,

  configureWebpack: {
    resolve: {
      alias: {
        '@alias': ''
      }
    }
  }

}

