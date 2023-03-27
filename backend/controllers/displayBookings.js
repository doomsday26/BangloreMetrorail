const User= require('../models/users')
const DailyBooking=require('../models/dailybooking')
const WeeklyBooking= require('../models/weeklyBooking')




exports.getdailyBookings=async (req,res)=>{
    let id= req.params.id
    let date= req.params.date
    let bookings = await DailyBooking.findAll({where:{UserId:id,DateOfBooking:date},attributes:{exclude:['id', 'createdAt', 'updatedAt', 'UserId']}})
    res.status(200).json(bookings)
}
exports.getweeklyBookings=async(req,res)=>{
    console.log("weekly bookings >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    let id= req.params.id
    let bookings = await WeeklyBooking.findAll({where:{UserId:id},
        attributes:{exclude:['id', 'createdAt', 'updatedAt', 'UserId']}})
    console.log(bookings)
    res.status(200).json(bookings)
}