import '../assets/Styles/Contact.css'

function Contact(){
    return(
        <>
        <section id="contact">
            <div className="contact-left">
              <h2 className="contact-left-h2">Let's Talk</h2>
              <p className="contact-left-p">Have a question, want to organize an event, or need help with a booking? We're here to help.</p>
              <div className="info">
                <div className="info1">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4 className="info-h4">Chandigarh, India</h4>
                </div>
                <div className="info2">
                    <i className="fa-solid fa-envelope"></i>
                    <h4 className="info-h4">hello@eventnest.com</h4>
                </div>
                <div className="info3">
                    <i className="fa-solid fa-phone"></i>
                    <h4 className="info-h4">+91 98765 43210</h4>
                </div>
              </div>
            </div>
            <div className="contact-right">
                 
                    <form bindsubmit="" className='contact-form'>
                        <div className="form-group-contact">
                           <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Your Name'/>
                        </div>
                        <div className="form-group-contact">
                           <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Your Email'/>
                        </div>
                        <div className="form-group-contact">
                           <label htmlFor="">Subject</label>
                        <input type="text" placeholder='Enter Your subject'/>
                        </div>
                        <div className="form-group-contact">
                           <label htmlFor="">Message</label>
                          <textarea rows={5} placeholder='Type your message'/>
                        
                        </div>
                        <button className='contact-form-btn'>Send Message</button>
                    </form>
                  
            </div>
        </section>
        
        
        </>
    )
}

export default Contact;