import cls from './LoginForm.module.scss'
import { type FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button/Button'
import { Input } from 'shared/ui/input/Input'

interface ILoginFormProps {
  className?: string
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className || ''])}>
      <Input autoFocus={true} placeholder={t('Логин')} className={cls.inputForm} type="text"/>
      <Input placeholder={'Пароль'} className={cls.inputForm} type="text"/>

      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
