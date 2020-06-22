import React, { Component } from 'react';
import './App.css';
import Chart from "./Component/chartComponent";
import Introduction from "./Component/introductionComponent";
import AboutMe from "./Component/aboutMeComponent";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import { Parallax } from "react-parallax";



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
  // height: 
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
        <Navbar dark expand="md" >
          <div className="container">
            <NavbarBrand className="mr-auto" href="/"><img height="30" width="41" alt='P.D.R' /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className='col-md-12 justify-content-end'>
                <NavItem className='navItem'>
                  <a onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 500, ease: 'inCirc' })} ><span className="fa fa-home fa-lg"></span>{' '} Home {' '} <span> </span> </a>
                </NavItem>

                <NavItem className='navItem'>
                  <a onClick={() => scrollToComponent(this.AboutMe, { offset: 0, align: 'top', duration: 500, ease: 'inCirc' })} >{' '}<span className="fa fa-child fa-lg"></span>{' '} About Me </a>
                </NavItem>

                <NavItem className='navItem'>
                  <a onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 500 })} ><span className="fa fa-stack-overflow fa-lg"></span>{' '} Skills</a>
                </NavItem>

                <NavItem className='navItem'>
                  <a onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 500 })} ><span className="fa fa-paper-plane fa-lg"></span>{' '} Contact Me</a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div style={styles}>
          <Parallax
            bgImage={require('./Images/Intro.jpg')}
            strength={500}
            blur={{ min: -2, max: 7 }}
          >
            <div style={{ height: 800 }}>
              <div style={insideStyles}>
                <section className='Home' ref={(section) => { this.Home = section; }}><Introduction /></section>
              </div>
            </div>
          </Parallax>
        </div>
        <div style={styles}>
          <Parallax
            bgImage={require('./Images/aboutMe.jpg')}
            strength={500}
            blur={{ min: -2, max: 7 }}
          >
            <div style={{ height: 800 }}>
              <div style={insideStyles}>
              <section className='AboutMe' ref={(section) => { this.AboutMe = section; }}><AboutMe /></section>
              </div>
            </div>
          </Parallax>
        </div>
        <br></br>
        <section className='Skills' ref={(section) => { this.Skills = section; }}><Chart /></section>



      </>
    );
  }
}
export default App;
