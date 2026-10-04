import user from '../model/user.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/jwt.js';
export const registerUser= async(req,res)=>{
    try {
        const {name, email, password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const existUser= await user.findOne({email})
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"user is already registered"
            })
        }
        const hashPassword= await bcrypt.hash(password,10)
        const registeredUser= await user.create({
            name,
            email,
            password:hashPassword
        })
        return res.status(200).json({
            success:true,
            message:"User is registered successfully",
            data:registeredUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// login controller

export const loginUser= async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const existUser= await user.findOne({email})
        if(!existUser){
            return res.status(400).json({
                success:false,
                message:"user is not registered yet"
            })
        }
        const checkPassword= await bcrypt.compare(password,existUser.password)
        if(!checkPassword){
            return res.status(400).json({
                success:false,
                message:"Invalid password"
            })
        }
        const token=generateToken(existUser._id)
        return res.status(200).json({
            success:true,
            message:"login successfull",
            token,
            data:existUser
        })
    } catch (error) {
         console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}