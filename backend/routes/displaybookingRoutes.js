const express= require('express')
const Router= express.Router()
const bookingcontroller= require('../controllers/displayBookings')


Router.get('/dailybookings/:CardId/:date',bookingcontroller.getdailyBookings)
Router.get('/weeklybookings/:CardId',bookingcontroller.getweeklyBookings)


module.exports=Router