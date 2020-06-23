import React, { Component } from 'react';


class Contact extends Component {

    render() {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12  col-sm-6">
                                <h5>Get in-touch -:</h5>
                                <address>
                                    <strong>Liked</strong> my work <strong>?</strong><br />
                     Want to <strong>collaborate</strong> some to make <strong>awesome websites ?</strong> <br />
                     Then <strong>feel free to contact me</strong> through the contact details given.<br/>
                                    <i className="fa fa-phone fa-2x"></i>&nbsp;&nbsp;+91 81093 65368<br />
                                    <i className="fa fa-phone fa-2x"></i>&nbsp;&nbsp; +91 95180 31441<br />
                                    <i className="fa fa-envelope fa-2x"></i> <a href="mailto:roypdr051099@gmail.com">
                                        &nbsp;&nbsp;roypdr051099@gmail.com</a>
                                </address>
                            </div>
                            <div className="col-12 col-sm align-self-center">
                                <div className="text-center">
                                    <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/priyadarshan-roy-800098189/"><i className="fa fa-linkedin fa-5x"></i></a>
                                    <a className="btn btn-social-icon btn-github" href="https://github.com/RoyPriyadarshan"><i className="fa  fa-github fa-5x"></i></a>
                                    <a className="btn btn-social-icon btn-telegram" href="https://web.telegram.org/#/im"><i className="fa  fa-telegram fa-5x"></i></a>
                                    <a className="btn btn-social-icon btn-google" href="mailto:roypdr051099@gmail.com"><i className="fa  fa-envelope fa-5x faa-bounce  "></i></a>
                                    <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/priyadarshan.roy.56/"><i className="fa fa-facebook fa-5x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <p>© Copyright 2020 All rights reserved <br/>
                                    source to photos used in Webpage: <a href='https://unsplash.com/'>unsplash.com</a> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;