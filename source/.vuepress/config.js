module.exports = {
  title: '我的课堂',
  description: 'hhhhh',
  base: '/get_KNOWLEDGE/',
  themeConfig: {
    //logo: '../resources/logo/loading.gif',

    nav: [
      { text: '方法论', link: '/markdown/1methodology/' },
      { text: '逻辑思维', link: '/markdown/2logic&thinking/' },
      { text: '学科知识',
        items: [
          { text: '主课', items: [{ text: '语文', link: '/markdown/3subject/1mianclass/chinese/' },{ text: '数学', link: '/markdown/3subject/1mianclass/math/' },{ text: '英语', link: '/markdown/3subject/1mianclass/english/' }] },
          { text: '理科', items: [{ text: '物理', link: '/markdown/3subject/2science/physics/' },{ text: '化学', link: '/markdown/3subject/2science/chemistry/' },{ text: '生物', link: '/markdown/3subject/2science/biology/' }] },
          { text: '文科', items: [{ text: '政治', link: '/markdown/3subject/3arts/politics/' },{ text: '历史', link: '/markdown/3subject/3arts/history/' },{ text: '地理', link: '/markdown/3subject/3arts/geography/' }] }
        ]
      },
      { text: 'IT', link: '/markdown/4IT/' },
      { text: '其它', link: '/markdown/5others/' }
      
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