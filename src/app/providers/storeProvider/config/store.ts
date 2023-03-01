import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import type { IReduxStoreWithManager, IStateSchema } from './stateSchema'
import { userReducer } from 'entities/user'
import { createReducerManager } from './reducerManager'

export function createReduxStore (initialState?: IStateSchema, asyncReducers?: ReducersMapObject<IStateSchema>) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
