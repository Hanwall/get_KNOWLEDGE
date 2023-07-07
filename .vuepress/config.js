module.exports = {
  title: '我的课堂',
  description: 'hhhhh',

  themeConfig: {
    //logo: '../resources/logo/loading.gif',

    nav: [
      { text: '方法论', link: '/markdown/methodology/' },
      { text: '逻辑思维', link: '/markdown/logic&thinking/' },
      { text: '学科知识', link: '/markdown/subject/' },
      { text: '技能', link: '/markdown/skill/' },
      { text: '其它', link: '/markdown/others/' },
      { text: '游戏', link: '/markdown/lifestyle/' }
    ],

    sidebar: 'auto',

    plugins: [
      ['@vuepress/search', {searchMaxSuggestions: 10}],
       '@vuepress/last-updated'
    ],

    lastUpdated: 'Last Updated', // string | boolean //最后更新时间


    nextLinks: true,  // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
   
    prevLinks: true,  // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接


    smoothScroll: true // 页面滚动效果
   
    }
}