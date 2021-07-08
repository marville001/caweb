import React from 'react'

import "../styles/home.scss"
import shrine from "../images/shrine.jpg"
import dkut from "../images/dkut.jpeg"
import Title from '../components/Title';
import { Button } from '@material-ui/core';
const Home = (props) => {
    console.log(props);
    return (
        <div className="home">

            {/* Hero Section */}
            <div className="hero">
                <div className="hero-content">
                    <div className="container">
                        <h1>Blessed Sister Irene Stefani Catholic Action Dedan Kimathi University Of Technology
                        </h1>
                        <p><i>"All for Jesus, Nothing for me."</i></p>
                    </div>
                </div>
            </div>

            {/* Welcome */}
            <div className="welcome">
                <div className="container welcome-content">
                    <div className="welcome-left">
                        <img alt="Welcome to DeKUTCC" src={dkut} />
                    </div>
                    <div className="welcome-right">
                        <Title title="Welcome to DeKUTCC" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat nesciunt perspiciatis commodi distinctio doloribus nulla, architecto sunt deserunt facere!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat nesciunt perspiciatis commodi distinctio doloribus nulla, architecto sunt deserunt fa fugiat nesciunt perspiciatis commodi distinctio doloribus nulla, architecto sunt deserunt facere!</p>

                        <Button className="learn-more-btn" color="secondary" variant="contained">Learn More</Button>
                    </div>
                </div>
            </div>

            {/* Shrine */}
            <div className="shrine">
                <div className="container shrine-content">
                    <div className="shrine-left">
                        <img alt="Blessed Sister Irene Shrine" src={shrine} />
                    </div>
                    <div className="shrine-right">
                        <Title title="Blessed Sister Irene Shrine" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat nesciunt perspiciatis commodi distinctio doloribus nulla, architecto sunt deserunt facere!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat nesciunt perspiciatis commodi distinctio doloribus nulla, architecto sunt deserunt fa fugiat nesciunt perspiciatis commodi distinctio doloribus nulla, architecto sunt deserunt facere!</p>

                        <Button className="learn-more-btn" color="secondary" variant="contained">Learn More</Button>
                    </div>
                </div>
            </div>

            {/* Events */}
            <div className="events">
                <div className="container events-content">
                    <Title title="Event Calendar" />
                    <hr />
                    <div className="event">
                        <div className="event-date">
                            <h2>22-34</h2>
                            <h3>July-24</h3>
                        </div>
                        <hr />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <hr />
                    <div className="event">
                        <div className="event-date">
                            <h2>22-34</h2>
                            <h3>July-24</h3>
                        </div>
                        <hr />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <hr />
                    <div className="event">
                        <div className="event-date">
                            <h2>22-34</h2>
                            <h3>July-24</h3>
                        </div>
                        <hr />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <hr />
                    <Button className="more-events-btn" color="secondary" variant="contained">View Calendar</Button>
                </div>
            </div>
        </div>
    )
}

export default Home
