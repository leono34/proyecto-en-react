import React from "react";
import { Container } from "react-bootstrap";
import "./main.scss";

function Main(props) {
  const { children } = props;
  return (
    <main className="main">
      <Container>{children}</Container>
    </main>
  );
}

export { Main };
