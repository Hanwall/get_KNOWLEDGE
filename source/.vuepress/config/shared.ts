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
  threeTitle: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: onetTitle,
      collapsable: false,
      sidebarDepth:4,
      children: [
        ['', "索引"],
        '人类起源',
        '人类历史',
        '经验知识'
        
      ]
    }
  ]
  return sidebar
}

