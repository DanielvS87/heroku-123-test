const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const countryRouter = require('./routes/addcountry')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', countryRouter);


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('Connected to Mongo DB')
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(process.env.PORT || 3003, ()=>console.log('Up and Running'))