import express from 'express'
import morgan from 'morgan';

import assetsRoutes from './routes/assets.routes'
import authRoutes from './routes/auth.routes'
import licensesRoutes from './routes/licenses.routes'
import userRoutes from './routes/user.routes'

import { createRoles } from './libs/initialSetUp';

const app = express()
createRoles()

app.use(morgan('dev'));

app.use(express.json())

app.get('/', (req, res) => {
    res.json("foo!")
})

app.use('/api/v1/assets', assetsRoutes)
app.use('/api/v1/licenses', licensesRoutes)
app.use('/api/v1/users', authRoutes)
app.use('/api/users', userRoutes)

export default app;