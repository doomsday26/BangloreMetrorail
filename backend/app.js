const express= require('express')
const app= express()
const cors= require('cors')
app.use(cors())
app.use(express.json())
const PriceCap= require('./models/pricecap')
const ZoneFare= require('./models/zonefare')
const PeakHourtimings=require('./models/peakhourTimings')
const User= require('./models/users')
const WeeklyBookings=require('./models/weeklyBooking')
const DailyBookings=require('./models/dailybooking')
const adminroutes= require('./routes/adminRoutes')
const loginRoutes=require('./routes/loginroutes')
const bookingroutes= require('./routes/bookingroutes')
const displayBookings= require('./routes/displaybookingRoutes')

User.hasMany(WeeklyBookings)
WeeklyBookings.belongsTo(User)

User.hasMany(DailyBookings),
DailyBookings.belongsTo(User)

const sequelize= require('./database')

app.use('/admin',adminroutes);
app.use(loginRoutes)
app.use(displayBookings)
app.use('/booking',bookingroutes)
 

sequelize
.sync()
//.sync({alter: true})
//.sync({force:true})
.then(result=>{
    console.log("connected to the databse")
}).catch(err=>{
    throw new Error(err)
})


app.listen(3000,()=>{
    console.log(" listening on port 3000")
})