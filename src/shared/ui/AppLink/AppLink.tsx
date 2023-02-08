import classNames from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { to, className = '', children, theme = AppLinkTheme.PRIMARY } = props

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
}
