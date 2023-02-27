import { type IUserSchema } from 'entities/user'
import { type ILoginSchema } from 'features/authByLogin'
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'

export interface IStateSchema {
  user: IUserSchema
  login?: ILoginSchema
}

export type StateSchemaKey = keyof IStateSchema

export interface IReduxStoreWithManager extends EnhancedStore {
  reducerManager: IReducerManager
}

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}
