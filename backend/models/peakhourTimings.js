const Sequelize= require('sequelize')
const sequelize= require('../database')

const PeakHourTimings= sequelize.define('peakHourtimings' ,{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    startDay:{
        type:Sequelize.STRING,
        allowNull:false
    },
    endDay:{
        type:Sequelize.STRING,
        allowNull:false
    },
    startTime:{
        type:Sequelize.TIME,
        allowNull:false
    },
    
    endTime:{
        type:Sequelize.TIME,
        allowNull:false
    }
});

module.exports= PeakHourTimings