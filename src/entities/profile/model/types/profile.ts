import { type Currency } from 'entities/currency/model/types/currency'
import { type Country } from 'entities/country/model/types/country'

export interface IProfile {
  first?: string
  last?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface IProfileSchema {
  data?: IProfile
  form?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}
