import '../assets/Styles/Home.css'

function Home(){


    return(
        <>
        <section id="Home">
            <h2 className="home-h2">Every Event Deserves Its <span> Perfect Moment.</span></h2>
            <p className="home-p">Discover, create and manage memorable events — all in one place.</p>
            <div className="home-btns">
                <button className="home-btn1">Explore Events</button>
                <button className="home-btn2">Create Event</button>
            </div>
        </section>
        </>
    )
}

export default Home;