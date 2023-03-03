import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/text/Text'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { Input } from 'shared/ui/input/Input'

interface IProfileCardProps {
  className?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className || ''])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />

        <Button theme={ButtonTheme.OUTLINED}>{t('Редактировать')}</Button>
      </div>

      <div className={cls.content}>
        <div className={cls.items}>
          <Input value={data?.first} placeholder={t('Имя')} />
          <Input value={data?.last} placeholder={t('Фамилия')} />
          <Input value={data?.age as string | undefined} placeholder={t('Возраст')} />
          <Input value={data?.city} placeholder={t('Город')} />
          <Input value={data?.country} placeholder={t('Страна')} />
          <Input value={data?.currency} placeholder={t('Валюта')} />
        </div>
      </div>
    </div>
  )
}
