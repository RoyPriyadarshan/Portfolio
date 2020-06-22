import React, { Component } from 'react';


class AboutMe extends Component {

    render() {
        return (
            <div className='container '>

                <div className=''>
                <div className='backAbout '>
                    <br></br>
                <h2 className='aboutme'><strong>About Me</strong></h2>
                <br></br>
                <div className='container'>
                    <h4 className='aboutDescription'>
                    <span className='fa fa-quote-left fa-lg' ></span> &nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm <strong>Priyadarshan Roy</strong>, a <strong> Web Developer  <span className='fa fa-code fa-lg' ></span>, Designer and Robotics Enthusiast <span className='fa fa-reddit-alien '></span></strong>. I started my interest in Robotics but later on, I was really amazed by the beautiful field of <strong>Web Development</strong>.<br></br> I can help you with building some amazing and stunning websites. Don't believe me? Check out my&nbsp; <strong><span className='fa fa-github-alt fa-lg'></span>&nbsp;Github</strong> profile, where you can find some of the amazing projects I have done.<br></br> As a programmer, I like to show off. Hey, don't judge me, being a <strong><span className='fa fa-terminal fa-lg'></span>&nbsp;programmer</strong> is not a piece of cake. I have learnt programming through the hard way which includes multiple sleepless nights, following multiple course materials and much more.<br></br> Well I really don't want to bore you with my struggles but want to mesmerize you with my work. Hope you like my profile. Looking forward to connect with you.&nbsp;&nbsp;&nbsp;&nbsp; <span className='fa fa-quote-right fa-lg ' ></span>
                    </h4>
                    <br></br>
                </div>
                </div>
                </div>
                
            </div>
        );
    }
}

export default AboutMe;