import express from 'express'
import morgan from 'morgan';

import assetsRoutes from './routes/assets.routes'
import authRoutes from './routes/auth.routes'

import { createRoles } from './libs/initialSetUp';

const app = express()
createRoles()

app.use(morgan('dev'));

app.use(express.json())

app.get('/', (req, res) => {
    res.json("foo!")
})

app.use('/api/v1/assets', assetsRoutes)
app.use('/api/v1/users', authRoutes)

export default app;