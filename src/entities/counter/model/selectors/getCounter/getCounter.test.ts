import { getCounter } from './getCounter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounter(state as IStateSchema)).toEqual({ value: 10 })
  })
})