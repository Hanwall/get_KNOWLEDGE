// import fs from 'fs'
// import path from 'path'
import { SidebarConfigArray } from 'vuepress/config'

// const officialPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../../../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

export function getStudySidebar (
  onetTitle: string,
  twoTitle: string,
  threeTitle: string,
  fourTitle: string,
  fiveTitle: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: onetTitle,
      collapsable: false,
      sidebarDepth:2,
      children: [
        '',
        '数学基础',
        '科学基础'
      ]
    },
    {
      title: twoTitle,
      collapsable: false,
      sidebarDepth:2,
      children: [
        '算法和数据结构',
        '操作系统'
      ]
    }
  ]
  return sidebar
}

