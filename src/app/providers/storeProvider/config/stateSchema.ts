import { type IUserSchema } from 'entities/user'
import { type ILoginSchema } from 'features/authByLogin'

export interface IStateSchema {
  user: IUserSchema
  login: ILoginSchema
}
