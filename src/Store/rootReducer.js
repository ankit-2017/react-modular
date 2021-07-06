import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'views/auth/slices/login.slice'

export default combineReducers({
    auth: loginReducer,
})
