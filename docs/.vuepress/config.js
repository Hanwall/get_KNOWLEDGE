module.exports = {
  title: '我的课堂',
  description: 'hhhhh',
  base: '/get_KNOWLEDGE/',
  themeConfig: {
    //logo: '../resources/logo/loading.gif',

    nav: [
      { text: '方法论', link: '/markdown/methodology/' },
      { text: '逻辑思维', link: '/markdown/logic&thinking/' },
      { text: '学科知识',
        items: [
          { text: '主课', items: [{ text: '语文', link: '/markdown/skill/' },{ text: '数学', link: '/markdown/skill/' },{ text: '英语', link: '/markdown/skill/' }] },
          { text: '理科', items: [{ text: '物理', link: '/markdown/skill/' },{ text: '化学', link: '/markdown/skill/' },{ text: '生物', link: '/markdown/skill/' }] },
          { text: '文科', items: [{ text: '政治', link: '/markdown/skill/' },{ text: '历史', link: '/markdown/skill/' },{ text: '地理', link: '/markdown/skill/' }] }
        ]
      },
      { text: '技能', link: '/markdown/skill/' },
      { text: '其它', link: '/markdown/others/' },
      {
        text: '游戏',
       
        items: [
          { text: '游戏', link: '/language/chinese/' },
          { text: '音乐', link: '/language/chinese/' },
          { text: '画画', link: '/language/chinese/' },
          { text: '运动', link: '/language/japanese/' }
        ]
      }
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