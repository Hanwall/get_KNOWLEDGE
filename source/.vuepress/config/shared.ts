// import fs from 'fs'
// import path from 'path'
import { SidebarConfigArray } from 'vuepress/config'

// const officialPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../../../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

export function getStudyLineSidebar (
  onetTitle: string,
  twoTitle: string,
  threeTitle: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: onetTitle,
      collapsable: false,
      sidebarDepth:5,
      children: [
        ['', "宇宙的诞生和发展"],
        '地球的诞生和发展',
        '生命的起源和生物演化',
        '人类的起源和人类历史'
      ]
    },
    {
      title: twoTitle,
      collapsable: false,
      sidebarDepth:5,
      children:[
        '社会结构',
        '职业结构',
        '长夜结构'
      ]
    },
    {
      title: threeTitle,
      collapsable: false,
      sidebarDepth:5,
      children:[
        '什么是知识',
        '什么是逻辑思维',
        '为什么要讲究学习方法',
        '终生教育'
      ]
    }
  ]
  return sidebar
}

export function getThemeSidebar (
  groupA: string,
  introductionA: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'blog-theme',
        'inheritance'
      ]
    }
  ]
  return sidebar
}

export function getApiSidebar (): SidebarConfigArray {
  return ['cli', 'node']
}

export function getPluginSidebar (groupA, groupB): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'typescript-as-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]

  return sidebar
}
