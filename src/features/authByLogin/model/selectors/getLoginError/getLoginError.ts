import { type IStateSchema } from 'app/providers/storeProvider'

export const getLoginError = (state: IStateSchema) => state.login?.error || ''
