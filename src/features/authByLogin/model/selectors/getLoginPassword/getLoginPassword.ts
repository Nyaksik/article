import { type IStateSchema } from 'app/providers/storeProvider'

export const getLoginPassword = (state: IStateSchema) => state.login?.password || ''
