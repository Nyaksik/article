import { type IStateSchema } from 'app/providers/storeProvider'

export const getLoginLogin = (state: IStateSchema) => state.login?.login || ''
