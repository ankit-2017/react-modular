import authModule from 'views/auth/auth.routes'
import userModule from 'views/dashboard/user.routes'

export default [
        ...authModule,
        ...userModule,
    ]
