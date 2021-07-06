/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// import {  } from 'react'
import { Route, Redirect } from 'react-router-dom'
// do not remove this line
import ConfigureAppStore from 'Store/store'

import { useDispatch, useSelector } from 'react-redux'
import { verifyToken, setUser } from 'views/auth/slices/login.slice'

const loggedIn = (dispatch) => {
    const store = ConfigureAppStore()
    const user = store.getState().auth?.user
    if (user?.token) {
        return true
    }
        const token = localStorage.getItem('access_token')
        if (token) {
            return verifyToken()
            .then((res) => {
              dispatch(setUser(res?.data?.data))
              return true
            })
            .catch(() => {
                localStorage.removeItem('access_token')
                return false
            })
        }
            return false
}

export const RouteGuard = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  if (!rest.private) {
    return <Route {...rest} render={(props) => <Component {...props} />} />
  }

      return (
        <Route
          {...rest}
          render={(props) => (loggedIn(dispatch) ? (
            <Component {...props} />
          ) : (
            <Redirect to={{
              pathname: '/'
            }}
            />
          ))}
        />
)
          }
