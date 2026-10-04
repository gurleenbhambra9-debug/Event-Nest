import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("database is connected succesfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connectDB;