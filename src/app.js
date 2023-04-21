import express from 'express'
import morgan from 'morgan';

import assetsRoutes from './routes/assets.routes'

const app = express()

app.use(morgan('dev'));

app.use(express.json())

app.get('/', (req, res) => {
    res.json("foo!")
})

app.use('/api/v1/assets', assetsRoutes)

export default app;