/* eslint-disable no-return-await */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from 'utils/axiosClient'
// import { userLogin, verifyToken } from 'views/auth/services/auth.service'
export const userLogin = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axiosClient({ url: '/v1/login', method: 'post', data })
            const { token } = res.data?.data || null
            console.log('API response', res.data.data)
            localStorage.setItem('access_token', token)
            return res.data
        } catch (error) {
            return rejectWithValue(error?.response?.data)
        }
    }
)

export const verifyToken = () => axiosClient({ url: '/v1/verify-token', method: 'get' })

export const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetching: false,
        error: null,
        user: {}
    },
    reducers: {
        clearUserState: (state) => {
            state.isFetching = false
            state.error = null
            state.user = {}
            return state
        },
        setUser: (state, { payload }) => {
            state.isFetching = false
            state.error = null
            state.user = payload
            return state
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isFetching = true
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.isFetching = false
            state.user = payload.data
        },
        [userLogin.rejected]: (state, { payload, error }) => {
            state.isFetching = false
            state.error = payload?.message || error?.message
        }
    }
})
export const { clearUserState, setUser } = loginSlice.actions
export default loginSlice.reducer
