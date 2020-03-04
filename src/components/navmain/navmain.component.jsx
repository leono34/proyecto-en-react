import React from "react";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class inNavMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this.logout = this.logout.bind(this)
  }

  logout() {
    sessionStorage.removeItem("usuario");
    this.setState({
      name: ''
    })
    this.props.history.push("login");
  }
  //   const {
  //   className,
  //   history
  // } = props;

  // const logout = () => {

  // }

  componentDidMount() {
    this.setState({
      name: (JSON.parse(sessionStorage.getItem("usuario"))) ? JSON.parse(sessionStorage.getItem("usuario")).usuario : ''
    })
    console.log("sssssssssssssssssssssss")
    console.log(("value", JSON.parse(sessionStorage.getItem("usuario"))) ? JSON.parse(sessionStorage.getItem("usuario")).usuario : '')
  }

  componentWillReceiveProps() {
    console.log("sssssssssssssssssssssss")
    this.setState({
      name: (JSON.parse(sessionStorage.getItem("usuario"))) ? JSON.parse(sessionStorage.getItem("usuario")).usuario : ''
    })
  }

  render() {
    return (
      <Nav
        className={`${this.props.className}`}
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Link className="nav-link" to="/perfil">Wellcome {this.state.name}</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.logout}>
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

}
const NavMain = withRouter(inNavMain);

export {
  NavMain
};
