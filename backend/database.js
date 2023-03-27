require('dotenv').config()
const Sequelize = require('sequelize')
const sequelize= new Sequelize('metrocard','root',`${process.env.PASSWORD}`,{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize
