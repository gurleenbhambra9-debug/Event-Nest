import '../assets/Styles/Login.css'
import concert5 from '../assets/images/concert5.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import API from '../Api/Api.jsx';
import { useNavigate } from 'react-router-dom';
function Login(){
  const navigate= useNavigate()
  const [loading, setLoading]= useState(false)
  const [loginFormData, setLoginFormData]= useState(
    {
      email:'',
      password:''
    }
  )
  const handleLoginChange= (e)=>{
    setLoginFormData({
      ...loginFormData,
      [e.target.name]:e.target.value
    })
  }
  const handleLoginSubmit=async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const loginResponse= await API.post('/api/login', loginFormData)
      console.log(loginResponse.data)
      localStorage.setItem('token', loginResponse.data.token)
      alert("login successful")
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      if(error.response){
        alert(error.response.data.message|| 'invalid email or password')
      }else{
        alert('something went wrong. plase try again')
      } 
    }finally{
        setLoading(false)
      }
  }
    return(
        <>
        <section id="login">
            <div className="login-left">
               {/* <img src={concert5} alt="" className='login-img'/> */}
            </div>
            <div className="login-right">
                
               <form onSubmit={handleLoginSubmit} className="login-form">
                <h2 className="login-right-h2"><i className="fa-solid fa-calendar-plus"></i>Event Nest</h2>
                  <h3 className="form-h3">Welcome Back</h3>
                  <p className="form-p">Login to your account</p>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" placeholder='enter your email' onChange={handleLoginChange} name="email" value={loginFormData.email}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" placeholder='enter your password' onChange={handleLoginChange} name="password" value={loginFormData.password}/>
                  </div>
                  <div className="form-group">
                    <button className="form-btn" disabled={loading}>{loading? 'logging in': 'login'}</button>
                  </div>
                  <p className="form-p2">Don't have an account? <Link to='/register'>Create account</Link></p>
               </form>
            </div>
        </section>
        
        </>
    )
}

export default Login;