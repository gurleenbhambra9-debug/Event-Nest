import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './components/Profile.jsx'
function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>} />
    </Routes>
      
    </>
  )
}

export default App
