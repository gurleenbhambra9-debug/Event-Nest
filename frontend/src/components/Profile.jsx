import '../assets/Styles/Profile.css'
import profile from '../assets/images/profile.jpg'

function Profile(){
    return(
        <>
        <section id="profile">
            <h1 className="profile-h1">My Profile</h1>
            <p className="profile-p">Manage your personal information</p>
            <div className="profile-boxes">
                <div className="profile-boxes-left">
                <img src={profile} mode="" className='profile-img'/>
                 <h3 className="profile-h3">Jack</h3>
                 <h4 className="profile-h4">jack@gmail.com</h4>
                 <input type="file" accept="image/*" className='profile-img-selection'/>
                </div>
                <div className="profile-boxes-right">
                   <form bindsubmit="" className="profile-form">
                    <h2 className="profile-form-h2">Personal Information</h2>
                    <div className="form-group-profile">
                        <label htmlFor="">Full Name</label>
                        <input type="text" value="jack"/>
                    </div>
                    <div className="form-group-profile">
                        <label htmlFor="">Email</label>
                        <input type="text" value="jack@gmail.com"/>
                    </div>
                     <div className="form-group-profile">
                        <label htmlFor="">Phone</label>
                        <input type="tel" value="+91 888888888"/>
                    </div>
                    <div className="form-group-profile">
                        <button className="form-profile-btn">
                            Edit Profile
                        </button>
                    </div>
                    <div className="form-group-profile">
                        <button className="form-profile-btn">
                            Change Password
                        </button>
                    </div>
                   </form>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Profile;