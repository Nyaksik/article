import cls from './LoginForm.module.scss'
import { memo, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button/Button'
import { Input } from 'shared/ui/input/Input'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { login as authByLogin } from '../../model/services/login/login'
import { TextTheme, Text } from 'shared/ui/text/Text'
import { getLoginLogin } from '../../model/selectors/getLoginLogin/getLoginLogin'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export interface ILoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const login = useSelector(getLoginLogin)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginActions.setLogin(value))
  }, [dispatch])
  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLogin = useCallback(async () => {
    // TODO разобраться с типами
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const result = await dispatch(authByLogin({
      login,
      password
    }))

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, login, password, onSuccess])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className || ''])}>
        <Text title={t('Форма авторизации')}></Text>

        {error && <Text text={error} theme={TextTheme.ERROR}></Text>}

        <Input value={login} onChange={onChangeLogin} autoFocus={true} placeholder={t('Логин')} className={cls.inputForm}
               type="text"/>

        <Input value={password} onChange={onChangePassword} placeholder={t('Пароль')} className={cls.inputForm} type="text"/>

        <Button disabled={isLoading} onClick={onLogin} className={cls.loginBtn}>{t('Войти')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
