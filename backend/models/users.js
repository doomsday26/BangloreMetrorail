const Sequelize = require('sequelize')
const sequelize= require('../database')

const User=sequelize.define('User',{
id:{type:Sequelize.INTEGER,
alloNull:false,
autoIncrement:true,
primaryKey:true
},
name:{
    type:Sequelize.STRING,
    alloNull:false
},
email:{
    type:Sequelize.STRING,
    alloNull:false
},
cardId:{
    type: Sequelize.UUID,
    alloNull:false
},
package:{
    type:Sequelize.STRING,
    alloNull:false
},
startDate:{
    type:Sequelize.DATEONLY
},
expiryDate:{
    type:Sequelize.DATEONLY
}

})

module.exports=User