import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className || ''])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.main}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.about}>О сайте</AppLink>
      </div>
    </div>
  )
}
