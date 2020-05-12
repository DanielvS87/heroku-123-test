const router = require('express').Router()
const Country = require('../models/Country')
const mongoose = require('mongoose')

router.post('/addcountry', (req,res,next)=>{
    const { name, continent, world_cup_wins } = req.body;
    const country = new Country({name, continent, world_cup_wins})
    country.save()
    res.send(country);
})

router.get('/getcountries', (req,res,next)=>{
    Country.find().exec().then(response => console.log(response))
    res.send('country page')
})

router.get('/', (req,res,next)=>{
    res.send('Hello World')
})

module.exports = router;