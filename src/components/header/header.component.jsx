import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavMain } from "../";
import { Link } from "react-router-dom";

// import { addJump } from "../prueba/jump";

import "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    //  const el = document.querySelector('header');
    //    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    //   window.addEventListener('scroll', this.handleScroll);
    //   addJump('homeJump', 'landing-page')
    //    addJump('aboutJump', 'about', -92);
    //   addJump('servicesJump', 'services', -92);
    //   addJump('workJump', 'work-with-us', -92);
    //  addJump('contactJump', 'contact', -92);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      // <header className=   {this.state.scroll > this.state.top ? "header-background" : ""}>
      //   <div className="inside-container">
      //     <Link className="header-logo" to="/">Petwalker</Link>
      //     <nav>
      //       <ul className="header-nav">
      //         <li className="homeJump">H O M E</li>
      //         <li className="aboutJump">A B O U T</li>
      //         <li className="servicesJump">S E R V I C E S</li>
      //         <li className="workJump">W O R K &nbsp; W I T H &nbsp; U S</li>
      //         <li className="contactJump">C O N T A C T</li>
      //       </ul>
      //     </nav>
      //   </div>
      // </header>
      <header className="header d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <a className="header__logo" href="">
                PETWALKER
              </a>
            </Col>
            <Col className="text-right">
              <NavMain className="justify-content-end" />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export { Header };
