import axios from 'axios'
import { login } from './login'
import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('login', () => {
  test('success login', async () => {
    const userData = { login: 'admin', id: '1' }

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

    const thunk = new TestAsyncThunk(login)

    const result = await thunk.callThunk({ login: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userData)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(login)

    const result = await thunk.callThunk({ login: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
