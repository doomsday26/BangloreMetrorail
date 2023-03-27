const express= require('express')
const Router= express.Router()
const bookingcontroller= require('../controllers/displayBookings')


Router.get('/dailybookings/:id/:date',bookingcontroller.getdailyBookings)
Router.get('/weeklybookings/:id',bookingcontroller.getweeklyBookings)


module.exports=Router