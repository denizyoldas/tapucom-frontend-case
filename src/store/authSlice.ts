import { IUser } from '@/types/common.model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '.'

export interface AuthState {
  authState: boolean
  user: IUser
}

const initialState: AuthState = {
  authState: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    role: ''
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload
    },
    setAuthUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    }
  }
})

export const { setAuthState, setAuthUser } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState
export const selectUser = (state: AppState) => state.auth.user

export default authSlice.reducer
