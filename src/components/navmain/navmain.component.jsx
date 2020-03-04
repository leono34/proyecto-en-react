import React from "react";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function inNavMain(props) {
  const {
    className,
    history
  } = props;

  const logout = () => {
    sessionStorage.removeItem("token");
    history.push("login");
  }

  return (
    <Nav
      className={`${className}`}
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Link className="nav-link" to="/perfil">Wellcome Administrador, Luis</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={logout}>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const NavMain = withRouter(inNavMain);

export {
  NavMain
};
