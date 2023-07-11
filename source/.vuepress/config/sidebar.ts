import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getApiSidebar,
  getGuideSidebar,
  getPluginSidebar,
  getThemeSidebar
} from './shared'

export const Sidebar4Project: SidebarConfig4Multiple = {
  '/initwithmarkdown/学习路线/': getApiSidebar(),
  '/initwithmarkdown/中学课程/': getGuideSidebar('指南', '深入'),
  '/initwithmarkdown/大学课程/': getPluginSidebar('插件', '介绍', '官方插件'),
  '/initwithmarkdown/小学课程/': getThemeSidebar('主题', '介绍')
}

