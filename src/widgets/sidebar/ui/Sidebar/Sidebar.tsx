import classNames from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LangSwitcher } from 'widgets/langSwitcher'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div data-testid={'sidebar'} className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className || ''])}>
      <button data-testid={'sidebar-toggle'} onClick={onToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </div>
  )
}
