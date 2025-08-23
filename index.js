import 'dotenv/config'
import express from 'express';
import { authenticationMiddleware } from './middlewares/auth.middleware.js';
import router from './routes/user.routes.js'
import urlRouter from './routes/url.routes.js';

const app = express()

const PORT = process.env.PORT ?? 8000

app.use(express.json())
app.use(authenticationMiddleware)

app.use('/user', router)
app.use(urlRouter)
app.get('/', (req,res) => {
    return res.json({status: 'Server is up and running...'});
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})