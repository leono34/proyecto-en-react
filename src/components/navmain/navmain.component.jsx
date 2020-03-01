import React from "react";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";

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
        <Nav.Link href="/home">Wellcome Administrador, Luis</Nav.Link>
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
