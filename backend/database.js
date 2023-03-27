const Sequelize = require('sequelize')
const sequelize= new Sequelize('metrocard','root','--------',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize
