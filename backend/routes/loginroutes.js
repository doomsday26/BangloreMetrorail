const express= require('express')
const Router= express.Router()
const logincontroller= require('../controllers/login')


Router.post('/signup',logincontroller.createUser)
Router.post('/login',logincontroller.logUser)
Router.get('/deleteAll',logincontroller.truncate)





module.exports=Router