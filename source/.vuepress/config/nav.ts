import { NavItem } from 'vuepress/config'

export const NavItem4Project: NavItem[] = [
  { text: '学习路线', link: '/initwithmarkdown/学习路线/' },
  { text: '初等教育课程', link: '/initwithmarkdown/初等教育课程/' },
  { text: '中等教育课程',
    items: [
      { text: '主课', items: [{ text: '语文', link: '/initwithmarkdown/中等教育课程/1mianclass/chinese/' },{ text: '数学', link: '/initwithmarkdown/中等教育课程/1mianclass/math/' },{ text: '英语', link: '/initwithmarkdown/中等教育课程/1mianclass/english/' }] },
      { text: '理科', items: [{ text: '物理', link: '/initwithmarkdown/中等教育课程/2science/physics/' },{ text: '化学', link: '/initwithmarkdown/中等教育课程/2science/chemistry/' },{ text: '生物', link: '/initwithmarkdown/中等教育课程/2science/biology/' }] },
      { text: '文科', items: [{ text: '政治', link: '/initwithmarkdown/中等教育课程/3arts/politics/' },{ text: '历史', link: '/initwithmarkdown/中等教育课程/3arts/history/' },{ text: '地理', link: '/initwithmarkdown/中等教育课程/3arts/geography/' }] }
    ]
  },
  { text: '高等教育课程', link: '/initwithmarkdown/高等教育课程/' },
  { text: '终生教育类目', link: '/initwithmarkdown/终生教育类目/' },

  { text: '兴趣生活', link: 'https://hanwall.github.io/get_LIFESTYLE/' }，
  { text: '工作流', link: 'https://hanwall.github.io/get_WORKSTYLE/' }
]
