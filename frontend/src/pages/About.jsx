import '../assets/Styles/About.css'
import weddingdeco6 from '../assets/images/wedding deco6.jpg'


function About() {
  return (
    <>
    <section id="about">
        <div className="about-one">
           <div className="about-left">
          <h2 className="about-h2">We Bring People and Experiences Together.</h2>
          <p className="about-p">EventNest was created to make event discovery and event management simple, organized and accessible.</p>
        </div>
        <div className="about-right">
            <img src={weddingdeco6} alt="" className='about-right-img'/>
        </div>
        </div>
        <div className="about-two">
            <div className="about-two-a">
              <i className="fa-solid fa-magnifying-glass about-icon"></i>
              <h4 className="about-two-h4">Discover</h4>
              <p className="about-two-p">Find events you'll love.</p>
            </div>
            <div className="about-two-b">
               <i className="fa-solid fa-pen-to-square about-icon"></i>
              <h4 className="about-two-h4">Plan</h4>
              <p className="about-two-p">Create and organize your event.</p>
            </div>
            <div className="about-two-c">
               <i className="fa-solid fa-champagne-glasses about-icon"></i>
              <h4 className="about-two-h4">Celebrate</h4>
              <p className="about-two-p">Bring people together.</p>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default About