import React from 'react'
import Navbar from './navbar'
import "./home.css"

const Home = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <Navbar />
                <div className="main">
                    <h1>Coming Soon</h1>
                </div>
                <div className="about">
                    <div className="flex-child">
                        <h1>About </h1>
                        <p>
                            Figili is a groundbreaking platform revolutionizing the dining experience for customers and restaurants. By seamlessly integrating advanced technology and eliminating outdated practices, we provide innovative solutions to enhance every aspect of the dining journey. Our commitment to removing barriers ensures a consistently exceptional experience, where satisfaction is guaranteed. Join Figili in this transformative journey where technology meets tradition, setting a new standard for dining excellence.</p>
                        <p>                            Join us on this transformative journey, where Figili empowers both customers and restaurants alike, setting the stage for a new era in the world of dining—where technology meets tradition, and excellence is the only standard.                        </p>
                    </div>
                </div>

                <div className="contact">
                    Contact
                </div>
            </div>


        </React.Fragment >
    )
}

export default Home