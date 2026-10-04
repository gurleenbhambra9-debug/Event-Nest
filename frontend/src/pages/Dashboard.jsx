import '../assets/Styles/Dashboard.css'

function Dashboard(){
    return(
        <>
         <div className="dashboard">
            <aside className="dashboard-left">
                <div className="dashboard-left-one">
                    <h2 className="navbar-h2"><i className="fa-solid fa-calendar-plus"></i> EventNest</h2>
                </div>
                <div className="dashboard-left-two">
                  <div className="one">
                <i className="fa-solid fa-table-cells-large"></i>
                <h4>Dashboard</h4>
               </div>
               <div className="two">
                <i className="fa-regular fa-calendar-days"></i>
                <h4>My Events</h4>
               </div>
               <div className="three">
                <i className="fa-regular fa-circle-plus"></i>
                <h4>Create Event</h4>
               </div>
               <div className="four">
               <i className="fa-solid fa-ticket"></i>
                <h4>Bookings</h4>
               </div>
               <div className="five">
               <i className="fa-regular fa-comment-dots"></i>
                <h4>Messages</h4>
               </div>
               <div className="six">
               <i className="fa-regular fa-user"></i>
                <h4>Profile</h4>
               </div>
                <div className="seven">
               <i className="fa-solid fa-gear"></i>
                <h4>Settings</h4>
               </div>
                </div>
               
            </aside>
            <main className="dashboard-right">
               <div className="dashboard-right-one">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search Events, Venues or categories'/>
                </div>
                <div className="bell">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className="user">
                    <h3>Jack</h3>
                </div>
                
               </div>
               <div className="dashboard-right-two">
                  <h2 className="dashboard-right-two-h2">
                    WELCOME BACK
                  </h2>
                  <h1 className="dashboard-right-two-h1">Jack</h1>
                  <p className="dashboard-right-two-p">Create moments worth remembering.  </p>
               </div>
               <div className="dashboard-right-three">
                <div className="box1">
                  <i className="fa-regular fa-calendar-days"></i>
                  <h6>5</h6>
                  <h5>Total Events</h5>
                </div>
                <div className="box2">
                    <i className="fa-solid fa-ticket"></i>
                    <h6>23</h6>
                  <h5>Total Bookings</h5>
                </div>
                <div className="box3">
                     <i className="fa-solid fa-user-group"></i>
                    <h6>18</h6>
                  <h5>Attendees</h5>
                </div>
                <div className="box4">
                     <i className="fa-solid fa-star"></i>
                    <h6>4.8</h6>
                  <h5>Avg. Rating</h5>
                </div>
               </div>
            </main>
         </div>
    
        
        </>
    )
}

export default Dashboard