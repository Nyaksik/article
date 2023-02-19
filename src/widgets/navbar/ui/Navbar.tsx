import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { type FC } from 'react'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className || ''])}>
    </div>
  )
}
