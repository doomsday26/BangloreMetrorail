const Sequelize= require('sequelize')
const sequelize= require('../database')


const Weeklybookings= sequelize.define('WeeklyBookings',{
    id:{type:Sequelize.INTEGER,primaryKey:true,
        autoIncrement:true,
    allowNull:false},
    day:{type:Sequelize.STRING,allowNull:false},
    from:{type:Sequelize.STRING,allowNull:false},
    to:{type:Sequelize.STRING,allowNull:false},
    fare:{type:Sequelize.INTEGER,
        allowNull:false},
    DateOfBooking:{
            type:Sequelize.DATEONLY,
            allowNull:false
        },
});

module.exports= Weeklybookings