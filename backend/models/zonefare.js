const Sequelize= require('sequelize')
const sequelize= require('../database')

const ZoneFare= sequelize.define('zonefare' ,{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    originZone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    destinationZone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    normalFare:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    
    PeakHourFare:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports= ZoneFare