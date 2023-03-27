// const User = require("../models/users");
// const PeakhourTimings = require("../models/peakhourTimings");
// const Pricecap = require("../models/pricecap");
// const DailyBooking = require("../models/dailybooking");
// const WeeklyBooking = require("../models/weeklyBooking");
// const ZoneFare = require("../models/zonefare");
// const weekday = [ "Monday","Tuesday",  "Wednesday","Thursday","Friday","Saturday","Sunday",];
// const { Op } = require("sequelize");
// exports.bookOne = async (req, res) => {
//   //console.log(req.body);
  
// let users = await User.findAll({ where: { cardId: req.body.cardId } });
//   let user = users[0];
//   if (!user) {
//     res.status(400).json({
//         success: false,
//         message: "user not found relogin and try again",
//       });
//   }
//   else {
//     let day = new Date(req.body.date).getDay();
//     console.log("dayy>>>>>" + day);
//     day = day + 1;
//     let time = req.body.Time;
//     let isPeak = await PeakhourTimings.findAll({
//       where: {
//         startDay: { [Op.lte]: day },
//         endDay: { [Op.gte]: day },
//         startTime: { [Op.lte]: `${time}:00` },
//         endTime: { [Op.gte]: `${time}:00` },
//       },
//     });
//    //finding fare zone wise
//     let fare = await ZoneFare.findAll({
//       where: {
//         originZone: req.body.onboard,
//         destinationZone: req.body.destination,
//       },
//     });
//     console.log("peak timing or not >>>>>>>>>>>>>");
//     console.log(isPeak.length);
//     console.log("fare calculated >>>>>>>>>>>>>>>");
//     let currentBookingfare = 0;
//     if (isPeak.length > 0) {
//       currentBookingfare = fare[0].PeakHourFare;
//     } else {
//       currentBookingfare = fare[0].normalFare;
//     }

//     if (user.package != "Regular") {
//       let result = await user.createDailyBookings({
//         day: weekday[day - 1],
//         time: req.body.Time,
//         from: req.body.onboard,
//         to: req.body.destination,
//         fare: currentBookingfare,
//       });
//       console.log(result);
//     } else {
//       //for regular user
// // calculate daily fare
// let fares = await user.getDailyBookings({ where: { day: weekday[day - 1], DateOfBooking: req.body.date },
// attributes: {  exclude: ["id","day","time","from","to","createdAt","updatedAt","UserId","DateOfBooking",],},});
// //weekly 
// // let weeklyFare = await user.getWeeklyBookings({where:{from:req.body.onboard,to:req.body.destination, DateOfBooking:req.body.date},attributes:{exclude:['id', 'day', 'from', 'to', 'createdAt', 'updatedAt', 'UserId', 'DateOfBooking']}});

// let totalCurrentDayFare = 0;
// if (fares.length > 0) {
//   fares.forEach((e) => (totalCurrentDayFare += +e.fare));
// }
// let expectedTotalDayFare = currentBookingfare + totalCurrentDayFare;
// //check for daily capping, since capping is only available for the farthest route.so that means if the boarding and destinaton are different then max cap will be the interzone that is farthest,
// //while if the zones are different we have to check if peviously there is an interzonal travel of there is any interzonal travel then the cap will be of interzonal or elseit will be of same zone
// //
// // 
// if(req.body.onboard!=req.body.destination){
//     //eligible for capping
//     //check fof weekly capping, so for that we need total bookings between different zone i.e, zone1->zone2 and zone2=>zone1
    
//     // let weeklyFare2 = await user.getWeeklyBookings({where:{to:req.body.onboard,from:req.body.destination, DateOfBooking:req.body.date},attributes:{exclude:['id', 'day', 'from', 'to', 'createdAt', 'updatedAt', 'UserId', 'DateOfBooking']}});

//     // check for weekly fares by summing up fares from both queries 

// //check for daily capping

// //capping deatils 

// let capping = await Pricecap.findAll({
//   where: {originZone: req.body.onboard,destinationZone: req.body.destination},attributes: {
//     exclude: [ "id","originZone","destinationZone","createdAt","updatedAt",],},});
//     let { dailyCap, weeklyCap } = capping[0].dataValues;


   
//     if (expectedTotalDayFare >= dailyCap) {
// currentBookingfare= dailyCap-totalCurrentDayFare
//     }
//     console.log(currentBookingfare);

// }else{
//     //check if the expected fare is greater than the cap of that zone
//     let capping = await Pricecap.findAll({
//         where: {originZone: req.body.onboard,destinationZone: req.body.destination},attributes: {
//           exclude: [ "id","originZone","destinationZone","createdAt","updatedAt",],},});
//           let { dailyCap, weeklyCap } = capping[0].dataValues;
//     console.log("same station daily cap",  dailyCap)
// console.log("capping1>>>>>>>>>>>>>>>>>>")
// console.log(capping)
//           if(expectedTotalDayFare>=dailyCap){
// //check if there is any previous interzoneal travel
// let check = await user.getDailyBookings({where:{from:{[Op.not]:req.body.onboard}, to:req.body.onboard, DateOfBooking:req.body.date},attributes: {  exclude: ["id","day","time","createdAt","updatedAt","UserId","DateOfBooking",],}})
// console.log("check >>>>>>>>>>>>>>>>>>>>>>>")
// console.log(check)
// console.log(check.length)
// if(check.length>0){
//     //interzonal travel is there so find that zone's price cap
//     let capping2 = await Pricecap.findAll({
//         where: {originZone: check[0].from ,destinationZone: req.body.destination},attributes: {
//           exclude: [ "id","originZone","destinationZone","createdAt","updatedAt",],},});
//           dailyCap = capping2[0].dataValues.dailyCap
// console.log("updated daily cap >>>>>>>>>>>>>>>>",  dailyCap)
// }
// }

// if (expectedTotalDayFare >= dailyCap) {
//     currentBookingfare= dailyCap-totalCurrentDayFare
//         }
//         if(currentBookingfare<=0){
//             currentBookingfare=0
//         }
//         console.log(currentBookingfare);



// }

    
      
//       let result = await user.createDailyBooking({ day:weekday[day-1], time:req.body.Time, from:req.body.onboard, to:req.body.destination, fare:currentBookingfare,DateOfBooking:req.body.date})
//       console.log(result);
      
//     //   let result2 = await user.createWeeklyBooking({ day:weekday[day-1],
//     //     from, to, fare,
//     //     time:req.body.Time, from:req.body.onboard, to:req.body.destination, fare:currentBookingfare,DateOfBooking:req.body.date})
//       //console.log(result);


//     }
//   }
// };
