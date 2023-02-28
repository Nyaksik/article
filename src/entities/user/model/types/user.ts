export interface IUser {
  id: string
  login: string
}

export interface IUserSchema {
  authData?: IUser
}
