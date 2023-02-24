import classNames from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LangSwitcher } from 'widgets/langSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import SheetIcon from 'shared/assets/icons/sheet.svg'
import { useTranslation } from 'react-i18next'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

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
          <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RouterPath.main}>
            <HomeIcon className={cls.icon} />

            <span>{t('Главная')}</span>
          </AppLink>

          <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RouterPath.about}>
            <SheetIcon className={cls.icon} />

            <span>{t('О сайте')}</span>
          </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher short={collapsed} />
      </div>
    </div>
  )
}
