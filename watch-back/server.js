import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/index.js'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 9000

const DB_KEY = 'mongodb+srv://admin:admin@watch-items.gy0ep.mongodb.net/watch?retryWrites=true&w=majority'

mongoose.connect(DB_KEY, (err) => {
    if(err) throw err
    console.log('Connected to DB');


    routes(app)




    app.listen(PORT, () => console.log('Server is working port 9000'))
})