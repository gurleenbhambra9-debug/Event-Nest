import axios from 'axios'

const API= axios.create({
    baseURL:'http://localhost:4000'
})

API.interceptors.request.use=((config)=>{
    try {
        const token=localStorage.getItem("token")
        if(token){
            config.headers.authorization='Bearer ${token}'
        }
    } catch (error) {
        console.log(error)
    }
    return config;
})

export default API;