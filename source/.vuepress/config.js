import { defineConfig } from 'vuepress/config'
import {
  
  Sidebar4Project,
 
  NavItems4Project
} from './config/index'

export default defineConfig(ctx => ({
  //
  theme: '@vuepress/vue',
  dest: '../../vuepress',

  //首页title，描述
  title: '我的教室',
  description: 'Just playing around',
  //如果你的网站会被部署到一个非根路径，你将需要在 .vuepress/config.js 中设置 base
  base: '/get_KNOWLEDGE/',
  //主题设置
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/Hanwall/get_KNOWLEDGE',
    repoLabel: '查看源码',

    // 假如你的文档仓库和项目本身不在一个仓库：
    //docsRepo: 'vuejs/vuepress',
    //导航栏LOGO
    logo: '/logo/loading.gif',
    
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    //默认为 "Edit this page"
    //editLinkText: '帮助我们改善此页面！'
    
    //默认docs
    docsDir: 'source',

    //假如文档放在一个特定的分支下：
    docsBranch: 'master',

    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    //页面滑动
    smoothScroll: true
    //国际化
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: NavItems4ZH,
        sidebar: Sidebar4ZH
      }
    },
  },
  //插件配置
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true],
  //
  extraWatchFiles: ['.vuepress/config/**'],
  evergreen: !ctx.isProd
}))
