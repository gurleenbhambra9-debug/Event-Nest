import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'
import dns from 'dns'
import cors from 'cors'
import authRoute from './routes/authRoutes.js'
import eventRoute from './routes/eventRoutes.js'
dns.setServers(['8.8.8.8', '1.1.1.1'])
const app=express();
const PORT=process.env.PORT
connectDB()
app.use(express.json())
app.use(cors())
app.use('/api', authRoute)
app.use('/test', eventRoute)


app.get('/',(req,res)=>{
    res.send("this is home page")
})


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})