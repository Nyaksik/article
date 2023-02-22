import { type IStateSchema } from 'app/providers/storeProvider'

export const getCounter = (state: IStateSchema) => {
  return state.counter
}
