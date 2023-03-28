const User= require( '../models/users')
const DailyBooking=require('../models/dailybooking')
const WeeklyBooking= require('../models/weeklyBooking')




exports.getdailyBookings=async (req,res)=>{
    let id= req.params.CardId
    let date= req.params.date
    console.log(id,date)
    
try {
    


    
    let user= await User.findAll({where:{cardId:id},attributes:{exclude:[
        'name', 'email', 'cardId', 'package', 'startDate', 'expiryDate', 'createdAt', 'updatedAt'
    ]}})
    let userId=user[0].id
    let bookings = await DailyBooking.findAll({where:{UserId:userId,DateOfBooking:date},attributes:{exclude:['id', 'createdAt', 'updatedAt', 'UserId']}})
    res.status(200).json(bookings)
    
    } catch (error) {
 console.log(error)
        res.status(404).json({success:false,message:"unfortunately data has not been processed please try again"})   
    }
}
exports.getweeklyBookings=async(req,res)=>{
    console.log("weekly bookings >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let id= req.params.CardId

try {
    
    let user= await User.findAll({where:{cardId:id},attributes:{exclude:[
        'name', 'email', 'cardId', 'package', 'startDate', 'expiryDate', 'createdAt', 'updatedAt'
    ]}})
    let userId=user[0].id
    let bookings = await WeeklyBooking.findAll({where:{UserId:userId},
        attributes:{exclude:['id', 'createdAt', 'updatedAt', 'UserId']}})
        console.log(bookings)
        res.status(200).json(bookings)
        
    } catch (error) {
        console.log(error)
        res.status(404).json({success:false,message:"unfortunately data has not been processed please try again"})   
   
    }
}