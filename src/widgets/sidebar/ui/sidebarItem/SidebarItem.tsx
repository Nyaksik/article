import cls from './SidebarItem.module.scss'
import { type FC, memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink'
import { useTranslation } from 'react-i18next'
import { type ISidebarItem } from 'widgets/sidebar/model/items'
import classNames from 'shared/lib/classNames/classNames'

interface ISidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem: FC<ISidebarItemProps> = memo(
  ({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation()

    return (
      <AppLink className={classNames(cls.link, { [cls.collapsed]: collapsed })} theme={AppLinkTheme.SECONDARY} to={item.path}>
        <item.icon className={cls.icon} />

        <span>{t(item.text)}</span>
      </AppLink>
    )
  }
)
