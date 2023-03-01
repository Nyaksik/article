import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/providers/storeProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()
