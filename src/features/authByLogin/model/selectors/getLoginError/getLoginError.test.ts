import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getLoginError } from './getLoginError'

describe('get login error test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      // @ts-expect-error
      login: {
        error: 'error'
      }
    }

    expect(getLoginError(state as IStateSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginError(state as IStateSchema)).toEqual('')
  })
})
