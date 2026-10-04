import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
    },
    description:{
        type:String,
        default: "This is default description",
        trim: true,
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        trim: true,
    },
    category:{
        type:String,
        required:true,
        enum:["sports", "music", "education", "business", "other"]
    },
    image:{
        type:String,
        default:null
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:true
})

const event= mongoose.model("event", eventSchema)
export default event;