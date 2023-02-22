import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/storeProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('should return value', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounterValue(state as IStateSchema)).toEqual(10)
  })
})
