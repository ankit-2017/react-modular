import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { clearUserState } from 'views/auth/slices/login.slice'
import { useHistory } from 'react-router-dom'

import('views/dashboard/user.css')

export default function UserDashboard() {
  const dispatch = useDispatch()
  const history = useHistory()
  const Logout = () => {
    localStorage.removeItem('access_token')
    dispatch(clearUserState({}))
    history.push('/')
  }
    return (
      <div className="user_dashboard_container">
        <p>this is user dashboard page</p>
        <br />
        <div>
          <Button onClick={Logout} variant="contained" color="primary">Logout</Button>
        </div>

      </div>
)
}
