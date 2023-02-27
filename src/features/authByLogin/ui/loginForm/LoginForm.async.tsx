import { type FC, lazy } from 'react'
import { type ILoginFormProps } from 'features/authByLogin/ui/loginForm/LoginForm'

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(async () => await import('./LoginForm'))
