import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getStudySidebar
} from './shared'

export const Sidebar4Project: SidebarConfig4Multiple = {
  '/initwithmarkdown/学习思路/': getStudySidebar('关于人类','大脑的进化','逻辑思维')
}

