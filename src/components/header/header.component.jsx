import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { NavMain } from "../";
import "./header.scss";
class inHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <header className="header d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <Link className="header__logo" to="/">
                PETWALKER
              </Link>
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

const Header = withRouter(inHeader);
export {
  Header
}