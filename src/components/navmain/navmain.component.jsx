import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavMain(props) {
  const {
    className
  } = props;

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
        <Nav.Link>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export { NavMain };
