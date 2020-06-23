import React, { Component } from 'react';
import './App.css';
import Chart from "./Component/chartComponent";
import Introduction from "./Component/introductionComponent";
import AboutMe from "./Component/aboutMeComponent";
import Projects from "./Component/projectComponent";
import Contact from "./Component/contactComponent";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import { Parallax } from "react-parallax";
import Reveal from 'react-reveal/Reveal';



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  // height: auto,
  width: 1300,
  
};



class App extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md sticky-top" stickTo='bottom' >
          <div className="container">
            <NavbarBrand className="mr-auto" href="/"><img height="30" width="41" alt='P.D.R' /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className='col-md-12 justify-content-end'>
                <NavItem className='navItem'>
                  <a className='btn' onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 2500, ease: 'outCirc' })} ><span className="fa fa-home fa-lg"></span>{' '} Home {' '} <span> </span> </a>
                </NavItem>

                <NavItem className='navItem'>
                  <a className='btn' onClick={() => scrollToComponent(this.AboutMe, { offset: 0, align: 'top', duration: 2500, ease: 'outCirc' })} >{' '}<span className="fa fa-child fa-lg"></span>{' '} About Me </a>
                </NavItem>

                <NavItem className='navItem'>
                  <a className='btn' onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 2500, ease: 'outCirc' })} ><span className="fa fa-cogs fa-lg"></span>{' '} Skills</a>
                </NavItem>

                <NavItem className='navItem'>
                  <a className='btn' onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 2500, ease: 'outCirc' })} ><span className="fa  fa-cubes fa-lg"></span>{' '} Projects</a>
                </NavItem>

                <NavItem className='navItem'>
                  <a className='btn' onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 2500, ease: 'outCirc' })} ><span className="fa fa-paper-plane fa-lg"></span>{' '} Contact Me</a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <section className='Home' ref={(section) => { this.Home = section; }}>
        <div style={styles}>
          <Parallax
            bgImage={require('./Images/Intro.jpg')}
            strength={700}
            blur={{ min: -2, max: 3 }}
          >
            <div style={{ height: 800 }}>
              <div style={insideStyles}>
              <Reveal effect="fadeInUp">
                <Introduction />
                </Reveal>
              </div>
            </div>
          </Parallax>
        </div>
        </section>

        <section className='AboutMe' ref={(section) => { this.AboutMe = section; }}>
        <div style={styles}>
          <Parallax
            bgImage={require('./Images/aboutMe.jpg')}
            strength={700}
            blur={{ min: -2, max: 5 }}
          >
            <div style={{ height: 1000 }}>
              <div style={insideStyles}>
              <AboutMe />
              </div>
            </div>
          </Parallax>
        </div>
        </section>

        <section className='Skills' ref={(section) => { this.Skills = section; }}>
        <div style={styles}>
          <Parallax
            bgImage={require('./Images/aboutMe.jpg')}
            strength={300}
            blur={{ min: -2, max: 5 }}
          >
            <div style={{ height: 800 }}>
              <div style={insideStyles}>
              <Chart />
              </div>
            </div>
          </Parallax>
        </div>
        </section>

        <section className='Projects' ref={(section) => { this.Projects = section; }}>
        <div  style={styles}>
          <Parallax
            bgImage={require('./Images/aboutMe.jpg')}
            strength={300}
            blur={{ min: -2, max: 5 }}
          >
            <div style={{ height: 1000 }}>
              <div style={insideStyles}>
              <Projects/>
              </div>
            </div>
          </Parallax>
        </div>
        </section>

        <section className='Contact' ref={(section) => { this.Contact = section; }}>
        <div style={styles}>
          <Parallax
            bgImage={require('./Images/contact.jpg')}
            strength={300}
            blur={{ min: -2, max: 5 }}
          >
            <div style={{ height: 800 }}>
              <div style={insideStyles}>
              <Contact/>
              </div>
            </div>
          </Parallax>
        </div>
        </section>
        
      </>
    );
  }
}
export default App;
