import express from 'express';

import router from './routes/user.routes.js'

const app = express()

const PORT = process.env.PORT ?? 8000

app.use(express.json())

app.use('/user', router)

app.get('/', (req,res) => {
    return res.json({status: 'Server is up and running...'});
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})