import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getStudySidebar
} from './shared'

export const Sidebar4Project: SidebarConfig4Multiple = {
  '/initwithmarkdown/计算机科学/': getStudySidebar('计算机科学理论','计算机科学基础','编程语言','工具集','架构')
}

