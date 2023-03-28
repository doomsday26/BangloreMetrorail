const ZoneFares= require('../models/zonefare')
const PeakhourTiming= require('../models/peakhourTimings')

const PriceCap = require('../models/pricecap')
const { response } = require('express')


exports.submitCapDetails=async (req,res)=>{
    // console.log(req.body)
    try {
      await PriceCap.create({
         originZone:req.body.capZoneA, 
         destinationZone:req.body.capZoneB
         , dailyCap:req.body.dailyCap
         , weeklyCap:req.body.weeklyCap
      })
          res.send({seccuess:true,msg:"capdetais created"})
      
    } catch (error) {
      console.log("error ---------------------------------------------------------------------")
      console.log(error)
      res.status(400).json({success:false,message:"an internal error occured please try again later"})     
          
    }
}

exports.getCapDetails= async(req,res)=>{
  try {
    let details =await PriceCap.findAll({ attributes: {
        exclude: ['createdAt', 'updatedAt']
      }})
    // console.log(details)
    res.status(200).json(details)
    
  } catch (error) {
    console.log("error ---------------------------------------------------------------------")
    console.log(error)
    res.status(400).json({success:false,message:"an internal error occured pleasetry again later"})     
      
  }
}

exports.updateCapDetails=async(req,res)=>{
  let id=req.params.id;
  try {
    let prevCap=await PriceCap.findAll({where:{id:id}})
    prevCap=prevCap[0]
    console.log(prevCap)
  console.log(req.body)
  let newcap= req.body
  prevCap.originZone=newcap.capzoneA
  prevCap.destinationZone= newcap.capzoneB
  prevCap.dailyCap=+newcap.dailycapCharge
  prevCap.weeklyCap=+newcap.weeklyCapCharge
  let result= await prevCap.save()
  console.log(result)
  res.status(200).json({success:true,message:"updated successfully"})
    
  } catch (error) {
    console.log("error ---------------------------------------------------------------------")
    console.log(error)
    res.status(400).json({success:false,message:"an internal error occured please try again later"})     
  
  }

}




exports.deleetCapDetails = async(req,res)=>{
    console.log(req.params.id)
    try {
      let element= await  PriceCap.findAll({where:{id:req.params.id}})
      console.log("cap to be deleted >>>>>>>>>>>>>>>>>>>>>>")
    element = element[0]
    let result= await element.destroy()
    res.status(200).json({success:true,message:"successfuly deleetd the zonal capping detail"})
      
    } catch (error) {
      console.log("error ---------------------------------------------------------------------")
      console.log(error)
      res.status(400).json({success:false,message:"an internal error occured pleasetry again later"})     
    
    }
}


exports.submitzoneCharge=async (req,res)=>{
    // console.log(req.body)
    try {
      await ZoneFares.create({
       originZone:req.body.boardingZone, 
       destinationZone:req.body.destinationZone,
        normalFare:req.body.normalCharge,
         PeakHourFare:req.body.peakCharge
   })
       res.send({seccuess:true,msg:"capdetais created"})
      
    } catch (error) {
      console.log("error ---------------------------------------------------------------------")
      console.log(error)
      res.status(400).json({success:false,message:"an internal error occured please try again later"})     
          
    }
}

exports.getZonecharge= async(req,res)=>{
  try {
    let details =await ZoneFares.findAll({ attributes: {
        exclude: ['createdAt', 'updatedAt']
      }})
    // console.log(details)
    res.status(200).json(details)
    
  } catch (error) {
    console.log(error)
    console.log("error ---------------------------------------------------------------------")
    res.status(400).json({success:false,message:"an internal error occured please try again later"})     
      
  }
}

exports.updateZoneCharge=async(req,res)=>{
  let id = req.params.id
  let newZoneCharges=req.body
  try {
    let prevZoneCharges= await ZoneFares.findAll({where:{id:id}})
    console.log(prevZoneCharges)
console.log(newZoneCharges)
prevZoneCharges=prevZoneCharges[0]
prevZoneCharges.originZone=newZoneCharges.boardingZone
prevZoneCharges.destinationZone=newZoneCharges.destinationZone
prevZoneCharges.PeakHourFare=newZoneCharges.peakCharge
prevZoneCharges.normalFare=newZoneCharges.normalCharge
let result= await  prevZoneCharges.save()
console.log(result)
res.status(200).json({success:true,message:"updated successfully"})

} catch (error) {
  console.log(error)
  console.log("error ---------------------------------------------------------------------")
  res.status(400).json({success:false,message:"an internal error occured please try again later"})     

}
  
}

exports.deleteZoneCharge = async(req,res)=>{
  console.log(req.params.id)

  try {
    let fare= await  ZoneFares.findAll({where:{id:req.params.id}})
    console.log("zonal fare to be deleted >>>>>>>>>>>>>>>>>>>>>>")
  fare = fare[0]
  let result= await fare.destroy()
  res.status(200).json({success:true,message:"cuccessfult deleetd the zonal fare"})
    
  } catch (error) {
    console.log("error ---------------------------------------------------------------------")
res.status(400).json({success:false,message:"an internal error occured please try again later"})    
  }


}


//peak timings

exports.submitpeakTimings=async (req,res)=>{
    console.log(req.body)
try {
  await PeakhourTiming.create({
      startDay:req.body.dayA, endDay:req.body.dayB, startTime:req.body.timeA, endTime:req.body.timeB
  })
  
  res.send({seccuess:true,msg:"capdetais created"})
} catch (error) {
  console.log("error ---------------------------------------------------------------------")
  console.log(error)
  res.status(400).json({success:false,message:"an internal error occured please try again later"})    
}

}

exports.getpeakTimings= async(req,res)=>{
try {
  let details =await PeakhourTiming.findAll({ attributes: {
      exclude: ['createdAt', 'updatedAt']
    }})
  
  res.status(200).json(details)
  
} catch (error) {
  console.log("error ---------------------------------------------------------------------")
  console.log(error)
  res.status(400).json({success:false,message:"an internal error occured please try again later"})     
}
}

exports.updatepeakTimings=async(req,res)=>{
  let id = req.params.id

try {
  
  
  let prevTimings= await PeakhourTiming.findAll({where:{id:id}})
  prevTimings=prevTimings[0]
  console.log(prevTimings)
  console.log(req.body)
  let newtimings= req.body
  prevTimings.startDay= newtimings.dayA 
  prevTimings.endDay=newtimings.dayB
  prevTimings.startTime=newtimings.timeA
  prevTimings.endTime=newtimings.timeB
  let result=await prevTimings.save()
  res.status(200).json({success:true ,message:"data updated successfully"})
} catch (error) {
  console.log("error ---------------------------------------------------------------------")
  console.log(error)
  res.status(400).json({success:false,message:"an internal error occured please try again later"})     

}

}

exports.deletePeakTimings = async(req,res)=>{
  console.log(req.params.id)
try {
  let element= await  PeakhourTiming.findAll({where:{id:req.params.id}})
  console.log("peak hour timing to be deleted >>>>>>>>>>>>>>>>>>>>>>")
  element = element[0]
  let result= await element.destroy()
  res.status(200).json({success:true,message:"successfuly deleetd the zonal peak hour timing"})
  
} catch (error) {
  console.log("error ---------------------------------------------------------------------")
  console.log(error)
  res.status(400).json({success:false,message:"an internal error occured please try again later"})     
  
}



}