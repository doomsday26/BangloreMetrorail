const Sequelize= require('sequelize')
const sequelize= require('../database')

const PriceCap= sequelize.define('pricecap' ,{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    originZone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    destinationZone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dailyCap:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    
    weeklyCap:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports= PriceCap