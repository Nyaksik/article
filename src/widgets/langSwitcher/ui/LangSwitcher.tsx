import classNames from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { type FC, memo } from 'react'

interface ILangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<ILangSwitcherProps> = memo(
  ({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = (): void => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
      <Button className={classNames('', {}, [className || ''])} theme={ButtonTheme.CLEAR}
              onClick={toggle}>{t(short ? 'Короткий язык' : 'Язык')}</Button>
    )
  }
)
