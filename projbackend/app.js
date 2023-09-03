require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const authRoutes = require('./routes/auth')

//DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/tshirt",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My Routes

app.use('/api', authRoutes)

//Port
const port = process.env.PORT || 8000

//Starting a server
app.listen(port, () => {
    console.log(`App is running at ${port}`)
})