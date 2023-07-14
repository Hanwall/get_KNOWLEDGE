import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getApiSidebar,
  getStudyLineSidebar,
  getPluginSidebar,
  getThemeSidebar
} from './shared'

export const Sidebar4Project: SidebarConfig4Multiple = {
  '/initwithmarkdown/学习路线/': getStudyLineSidebar('人类发展','知识是什么','终生学习'),
  '/initwithmarkdown/中学课程/': getApiSidebar(),
  '/initwithmarkdown/大学课程/': getPluginSidebar('插件', '介绍'),
  '/initwithmarkdown/小学课程/': getThemeSidebar('主题', '介绍')
}

