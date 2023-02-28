import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('get login isLoading test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      // @ts-expect-error
      login: {
        isLoading: true
      }
    }

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false)
  })
})
