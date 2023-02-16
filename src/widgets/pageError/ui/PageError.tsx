import cls from './PageError.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'

interface IPageErrorProps {
  className?: string
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className || ''])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>

      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
