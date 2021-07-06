/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { Button, makeStyles } from '@material-ui/core'
import { lazy, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { userLogin, clearUserState } from 'views/auth/slices/login.slice'
import { ErrorToast, SuccessToast } from 'components/ToastComponent'
import Loader from 'react-loader-spinner'
import { LoginValidation } from '../validations/login.validation'

import('views/auth/auth.css')

const FieldInput = lazy(() => import('components/formComponent/textField'))

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '400px',
    },
'& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Login() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory()
  const { user, isFetching, error } = useSelector((state) => state.auth);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LoginValidation),
  })
  const onFormSubmit = (values) => {
      dispatch(userLogin(values))
  }

  useEffect(() => {
    if (error) {
      ErrorToast(error)
      dispatch(clearUserState({}))
    }
    if (user?.token) {
      history.push('/user/dashboard')
    }
  }, [error, user])
  // useEffect(() => () => dispatch(clearUserState({})), [])

    return (
      <div className="loginContainer">
        {
          isFetching ? <Loader type="Puff" height={60} width={60} /> : ''
        }
        <form className={classes.root} onSubmit={handleSubmit(onFormSubmit)}>
          <h2>This is login page</h2>
          <FieldInput
            name="email"
            type="email"
            control={control}
            defaultValue=""
          />
          <FieldInput
            name="password"
            type="password"
            control={control}
            defaultValue=""
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    );
}
