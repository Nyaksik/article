import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { userReducer } from 'entities/user'
import { loginReducer } from 'features/authByLogin'

export function createReduxStore (initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    login: loginReducer
  }

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
