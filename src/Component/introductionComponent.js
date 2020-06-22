import React, { Component } from 'react';
import Typical from 'react-typical';
import { Jumbotron } from 'reactstrap';
import Image from 'react-bootstrap/Image'


class Introduction extends Component {

    render() {
        return (

            <div className='container'>
                <Jumbotron className='col-12 col-md-10'>
                    <div className='col-12 col-md-7' >
                        <h1 className='intro'>Hi, I'm Priyadarshan Roy</h1>
                        <h2 className='welcome'>
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'Welcome to my Portfolio.', 1000
                                ]}
                            />
                        </h2>

                        <h3 className='typer'>
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'I\'m a Programmmer.', 1000,
                                    'I\'m a Web Developer.', 1000,
                                    'I\'m a Web Designer.', 1000,
                                    'I build beautiful Websites.', 1000,
                                    'I\'m a Robotics Enthusiast.', 1000,
                                    'I\'m a Bibliophile.', 1000
                                ]}
                            />
                        </h3>
                    </div>
                    <div>
                    <Image src="./Images/intro" rounded />
                    </div>
                </Jumbotron>
            </div>


        );
    }
}

export default Introduction;