import '../assets/Styles/Navbar.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location=useLocation()
  const loginPage= location.pathname === "/login"
  const registerPage= location.pathname === "/register"
  const dashboard= location.pathname === "/dashboard"
  const home= location.pathname === "/"
  const contact=location.pathname === "/contact"
  return (
    <>
    
    <section id={home || contact ? 'home-navbar' :loginPage || registerPage || dashboard? 'login-navbar' : 'navbar'}>
        <div className="navbar-heading">
            <h2 className="navbar-h2"><i className="fa-solid fa-calendar-plus"></i> EventNest</h2>
        </div>

        <div className="navbar-list-items">
           <Link to='/'>Home</Link>
           <Link to='/event'>Events</Link>
           <Link to='/about'>About</Link>
           <Link to='/contact'>Contact</Link>
           
        </div>

        <div className="navbar-button">
            <Link to='/login'>Login</Link>
            <button className="navbar-btn">Get Started</button>
        </div>
    </section>
    
    </>
  )
}

export default Navbar;