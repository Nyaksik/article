import { type DeepPartial } from '@reduxjs/toolkit'
import { loginActions, loginReducer } from './loginSlice'
import { type ILoginSchema } from 'features/authByLogin'

describe('login slice', () => {
  test('test set login', () => {
    const state: DeepPartial<ILoginSchema> = { login: '123' }

    expect(loginReducer(state as ILoginSchema, loginActions.setLogin('123'))).toEqual({ login: '123' })
  })

  test('test set password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '123' }

    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' })
  })
})
