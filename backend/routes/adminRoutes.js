const express= require('express')
const Router= express.Router()
const ZoneFares= require('../models/zonefare')
const PeakhourTimings= require('../models/peakhourTimings')
const Pricecap= require('../models/pricecap')
const admincontrollers= require('../controllers/admin')

//capping details
Router.post('/capdetails',admincontrollers.submitCapDetails)
Router.get('/capdetails',admincontrollers.getCapDetails)
Router.delete('/capdetails/:id',admincontrollers.deleetCapDetails)
Router.put('/capdetails/:id',admincontrollers.updateCapDetails)


//charge per zone
Router.post('/zoneCharge',admincontrollers.submitzoneCharge)
Router.get('/zoneCharge',admincontrollers.getZonecharge)
Router.delete('/zoneCharge/:id',admincontrollers.deleteZoneCharge)
Router.put('/zoneCharge/:id',admincontrollers.updateZoneCharge)

//peak timings
Router.post('/peakTimings',admincontrollers.submitpeakTimings)
Router.get('/peakTimings',admincontrollers.getpeakTimings)
Router.delete('/peakTimings/:id',admincontrollers.deletePeakTimings)
Router.put('/peakTimings/:id',admincontrollers.updatepeakTimings)


module.exports=Router