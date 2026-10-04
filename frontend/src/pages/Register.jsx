import '../assets/Styles/Register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../Api/Api.jsx'
function Register(){
  const navigate=useNavigate();
  const [formData, setFormData]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange=(e)=>{
   setFormData({
...formData,
    [e.target.name]:e.target.value
   }
    
   )

  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
   try {
     const response= await API.post('/api/register', formData)
     console.log(response.data)
     alert("User is registered successfully")
     navigate('/login')
   } catch (error) {
      console.log("error")
      alert("Something went wrong")
   }
   }
    return(
        <>
        <section id="register">
            <div className="register-left">
               {/* <img src={concert5} alt="" className='register-img'/> */}
            </div>
            <div className="register-right">
                
               <form className="register-form" onSubmit={handleSubmit}>
                <h2 className="register-right-h2"><i className="fa-solid fa-calendar-plus"></i>Event Nest</h2>
                  <h3 className="form-h3">Create your EventNest Account</h3>
                  <p className="form-p">Join and start creating amazing events.</p>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">Full Name</label>
                    <input type="text" placeholder='enter your name' name="name" value={formData.name} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" placeholder='enter your email'name="email" value={formData.email} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" placeholder='enter your password' name="password" value= {formData.password} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <button className="form-btn">Create Account</button>
                  </div>
                  <p className="form-p2">Already have an account? <Link to='/login'>Login</Link></p>
               </form>
            </div>
        </section>
        
        
        </>
    )
}

export default Register;