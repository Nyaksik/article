import { type ICounterSchema } from 'entities/counter'
import { type IUserSchema } from 'entities/user'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema
}
