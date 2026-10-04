import jwt from 'jsonwebtoken'
import user from '../model/user.js'
export const authMiddle= async(req,res,next)=>{
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token=req.headers.authorization.split(" ")[1]
        }
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token not found"
            })
        }
        const decode= await jwt.verify(token, process.env.SECRET_KEY)
        const userData= await user.findById(decode.id)
        if(!userData){
            return res.status(401).json({
                success:false,
                message:"no user found"
            })
        }
        req.user=userData
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}