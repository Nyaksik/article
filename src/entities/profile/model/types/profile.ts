import { type Country, type Currency } from 'shared/const/common'

export interface IProfile {
  first: string
  last: string
  age: number
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface IProfileSchema {
  data?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}
