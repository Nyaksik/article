import classNames from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LangSwitcher } from 'widgets/langSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import { ISidebarItemsList } from '../../model/items'
import { SidebarItem } from '../sidebarItem/SidebarItem'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = memo(
  ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const links = useMemo(() =>
      (ISidebarItemsList.map((item) =>
        (<SidebarItem item={item} collapsed={collapsed} key={item.path} />)
      )), [collapsed])

    const onToggle = (): void => {
      setCollapsed(prev => !prev)
    }

    return (
      <div data-testid={'sidebar'} className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className || ''])}>
        <Button
          data-testid={'sidebar-toggle'}
          onClick={onToggle}
          className={cls.collapsedBtn}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          square={true}
          size={ButtonSize.L}
        >
          {collapsed ? '>' : '<'}
        </Button>

        <div className={cls.links}>
          {links}
        </div>

        <div className={cls.switchers}>
          <ThemeSwitcher />

          <LangSwitcher short={collapsed} />
        </div>
      </div>
    )
  }
)
