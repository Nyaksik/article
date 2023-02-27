import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IReduxStoreWithManager, type IStateSchema } from './stateSchema'
import { userReducer } from 'entities/user'
import { createReducerManager } from './reducerManager'

export function createReduxStore (initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }) as IReduxStoreWithManager

  store.reducerManager = reducerManager

  return store
}
