import classNames from 'shared/lib/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/Button/Button'
import { type FC } from 'react'

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button className={classNames(cls.LangSwitcher, {}, [className || ''])} theme={ThemeButton.CLEAR}
            onClick={toggle}>{t('Язык')}</Button>
  )
}
