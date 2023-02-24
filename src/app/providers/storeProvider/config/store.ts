import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'

export function createReduxStore (initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
