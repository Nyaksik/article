import type React from 'react'
import { RouterPath } from 'shared/config/routeConfig/routerConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import SheetIcon from 'shared/assets/icons/sheet.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface ISidebarItem {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const ISidebarItemsList: ISidebarItem[] = [
  {
    path: RouterPath.main,
    icon: HomeIcon,
    text: 'Главная'
  },
  {
    path: RouterPath.about,
    icon: SheetIcon,
    text: 'О сайте'
  },
  {
    path: RouterPath.profile,
    icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true
  }
]
