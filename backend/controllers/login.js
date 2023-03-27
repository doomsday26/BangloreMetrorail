const { request } = require("express");
const { v4: uuidv4 } = require("uuid");
const User= require('../models/users')


const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    console.log(`${d1} is less than ${d2}`);
    return -1;
  } else if (date1 > date2) {
    console.log(`${d1} is greater than ${d2}`);
    return 1
  } else {
    console.log(`Both dates are equal`);
    return 0
  }
};

exports.createUser=async (req,res)=>{
//{ name: '1234', email: 'h1.com', package: 'Daily' }
console.log(req.body)
let date= '2023-03-01';
let date2 
switch(req.body.package) {
    case 'Daily':
      date2= '2023-03-01'
      break;
      case 'Monthly':
          date2= '2023-04-01'
          break;
          case 'Weekly':
              date2= '2023-03-08'
              break;
              case 'Regular'  :
                  date=null;
                  date2 = null
                  break
                }
                
                console.log(date)
                console.log(date2)
                let obj={
                    name:req.body.name, email:req.body.email, cardId:uuidv4(), package:req.body.package, startDate:date, expiryDate:date2
                }
                let result= await User.create(obj)
console.log(result)
res.json(obj.cardId)
}



exports.logUser=async(req,res)=>{
console.log(req.body)
console.log("user details")
let users = await User.findAll({where:{cardId:req.body.cardId}})
let user= users[0]
if(!user){
    res.json({success:false,message:"user not found"})
}else{
    console.log(user)
    if(user.package!='Regular'){
  let k=  compareDates(user.expiryDate,req.body.loginDatevalue)
  if(k<0){
      user.package='Regular';
      user.startDate=null;
      user.expiryDate=null
      await user.save();
      
      res.json({success:true,message:"please update your membership, you have been changed to a regular user now,continue booking your journey"})
    }else{
        res.json({success:true,message:"continute to book your journey"})
        
    }
    
}else{
    res.json({success:true,message:"continue to book your journey"})
}

}




}

exports.truncate=async(req,res)=>{
let result= await User.destroy({ truncate: { cascade: true } })
console.log(result)
}