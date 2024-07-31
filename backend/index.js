import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'
import bookingRoute from './Routes/booking.js'

const __dirname = path.resolve()

dotenv.config()

const app = express()
const port = process.env.PORT || 8000


const corsOptions = {
    orgin:true
}




app.get('/', (req,res) => {
    res.send('App Started')
})


mongoose.set('strictQuery', false)
const connectDB =async() => {
    try {
       await mongoose.connect(process.env.MONGO_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log('MongoDB is connected')
    } catch (err) {
        console.log('connection failed',err)

    }
}


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/bookings', bookingRoute)

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


app.listen(port, () => {
    connectDB()
    console.log("server is running " + port)
})