const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const countryRouter = require('./routes/addcountry')

const app = express()

mongoose.connect("mongodb+srv://daniel:d1002v1987s@cluster0-lbqwv.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('Connected to Mongo DB')
})

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', countryRouter);

app.listen(process.env.PORT || 3003, ()=>console.log('Up and Running'))