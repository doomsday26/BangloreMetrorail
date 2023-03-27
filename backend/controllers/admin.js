const ZoneFares= require('../models/zonefare')
const PeakhourTiming= require('../models/peakhourTimings')

const PriceCap = require('../models/pricecap')


exports.submitCapDetails=async (req,res)=>{
    // console.log(req.body)
await PriceCap.create({
   originZone:req.body.capZoneA, 
   destinationZone:req.body.capZoneB
   , dailyCap:req.body.dailyCap
   , weeklyCap:req.body.weeklyCap
})
    res.send({seccuess:true,msg:"capdetais created"})
}

exports.getCapDetails= async(req,res)=>{
let details =await PriceCap.findAll({ attributes: {
    exclude: ['createdAt', 'updatedAt']
  }})
// console.log(details)
res.status(200).json(details)
}

exports.updateCapDetails=async(req,res)=>{}

exports.deleetCapDetails = async(req,res)=>{
    console.log(req.params.id)
    let element= await  PriceCap.findAll({where:{id:req.params.id}})
    console.log("cap to be deleted >>>>>>>>>>>>>>>>>>>>>>")
  element = element[0]
  let result= await element.destroy()
  res.status(200).json({success:true,message:"successfuly deleetd the zonal capping detail"})
}



//// zone charge

// {
//     boardingZone: 'zone1',
//     destinationZone: 'zone1',
//     peakCharge: '30',
//     normalCharge: '25'
//   }

exports.submitzoneCharge=async (req,res)=>{
    // console.log(req.body)
   await ZoneFares.create({
    originZone:req.body.boardingZone, 
    destinationZone:req.body.destinationZone,
     normalFare:req.body.normalCharge,
      PeakHourFare:req.body.peakCharge
})
    res.send({seccuess:true,msg:"capdetais created"})
}

exports.getZonecharge= async(req,res)=>{
let details =await ZoneFares.findAll({ attributes: {
    exclude: ['createdAt', 'updatedAt']
  }})
// console.log(details)
res.status(200).json(details)
}

exports.updateZoneCharge=async(req,res)=>{}

exports.deleteZoneCharge = async(req,res)=>{
    console.log(req.params.id)
  let fare= await  ZoneFares.findAll({where:{id:req.params.id}})
  console.log("zonal fare to be deleted >>>>>>>>>>>>>>>>>>>>>>")
fare = fare[0]
let result= await fare.destroy()
res.status(200).json({success:true,message:"cuccessfult deleetd the zonal fare"})
}


//peak timings

exports.submitpeakTimings=async (req,res)=>{
    console.log(req.body)
   // { dayA: 'Monday', dayB: 'saturday', timeA: '07:00', timeB: '10:31' }
   //new Date(`${loginDatevalue}T00:00`)
    await PeakhourTiming.create({
        startDay:req.body.dayA, endDay:req.body.dayB, startTime:req.body.timeA, endTime:req.body.timeB
    })
    
    res.send({seccuess:true,msg:"capdetais created"})
}

exports.getpeakTimings= async(req,res)=>{
let details =await PeakhourTiming.findAll({ attributes: {
    exclude: ['createdAt', 'updatedAt']
  }})
// console.log(details)
res.status(200).json(details)
}

exports.updatepeakTimings=async(req,res)=>{}

exports.deletePeakTimings = async(req,res)=>{

    console.log(req.params.id)
    let element= await  PeakhourTiming.findAll({where:{id:req.params.id}})
    console.log("peak hour timing to be deleted >>>>>>>>>>>>>>>>>>>>>>")
  element = element[0]
  let result= await element.destroy()
  res.status(200).json({success:true,message:"successfuly deleetd the zonal peak hour timing"})
}