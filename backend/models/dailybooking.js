const Sequelize= require('sequelize')
const sequelize= require('../database')


const dailyBooking= sequelize.define('dailyBookings',{
    id:{type:Sequelize.INTEGER,primaryKey:true,
        autoIncrement:true,
    allowNull:false},
    day:{type:Sequelize.STRING,allowNull:false},
    time:{type:Sequelize.TIME,allowNull:false},
    from:{type:Sequelize.STRING,allowNull:false},
    to:{type:Sequelize.STRING,allowNull:false},
    fare:{type:Sequelize.INTEGER,
        allowNull:false},
    DateOfBooking:{
            type:Sequelize.DATEONLY
        },
});

module.exports= dailyBooking