import 'dotenv/config'
import express from 'express'

import UserController from './app/controllers/UserControllers'

const app = express()

app.use(express.json())

app.post('/users', UserController.store)

app.listen(3333, () => {
    console.log('Server running on http://localhost:3333')
})