const express= require('express')
const Router= express.Router()
const bookingcontroller= require('../controllers/booking')


Router.post('/bookNew',bookingcontroller.bookOne)
//Router.post('/login',)



module.exports=Router