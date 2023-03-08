import cls from './ProfilePageHeader.module.scss'
import { type FC, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/text/Text'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className = '' }) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const readonly = useSelector(getProfileReadonly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    // @ts-expect-error
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')}/>

      {readonly
        ? <Button theme={ButtonTheme.OUTLINED} onClick={onEdit}>{t('Редактировать')}</Button>
        : (
          <div className={cls.btnWrapper}>
            <Button theme={ButtonTheme.OUTLINED} onClick={onSave}>{t('Сохранить')}</Button>
            <Button theme={ButtonTheme.OUTLINED_RED} onClick={onCancelEdit}>{t('Отменить')}</Button>
          </div>
          )
      }
    </div>
  )
}
