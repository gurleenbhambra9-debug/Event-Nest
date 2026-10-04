import event from '../model/event.js'

// create event
export const createEvent= async(req,res)=>{
    try {
        const {
            title,
            description,
            date,
            time,
            location,
            category,
            image,
        }=req.body;
        if(!title|| !date|| !time|| !location ||!category){
            return res.status(400).json({
                success:false,
                message:"title, date, time, location and catetgory are required"
            })
        }
        const createdEvent= await event.create({
             title,
            description,
            date,
            time,
            location,
            category,
            image,
            createdBy: req.user._id
        })
        return res.status(200).json({
            success:true,
            message:"event is created"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// read events
export const readEvents= async(req,res)=>{
    try {
        const allEvents= await event.find({
            createdBy:req.user._id
        })
        return res.status(200).json({
            success:true,
            message:"events are fetched",
            count:allEvents.length,
            data:allEvents
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// single event

export const readSingleEvent= async(req,res)=>{
    try {
        const singleEvent= await event.findOne({
            createdBy:req.user._id,
            _id:req.params.id
        })
        return res.status(200).json({
            success:true,
            message:"event is fetched",
            data:singleEvent
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// update event

export const updateEvent= async(req,res)=>{
    try {
        const updatedEvent= await event.findOneAndUpdate({
            createdBy:req.user._id,
            _id:req.params.id
        },
        req.body,
        {
         new:true
        })
        return res.status(200).json({
            success:true,
            message:"event is updated",
            data:updatedEvent
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// delete event

export const deleteEvent= async(req,res)=>{
    try {
        const deletedEvent= await event.findOneAndDelete({
            createdBy:req.user._id,
            _id:req.params.id
        }
)
return res.status(200).json({
    success:true,
    message:"event is deleted",
    data:deletedEvent
})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}