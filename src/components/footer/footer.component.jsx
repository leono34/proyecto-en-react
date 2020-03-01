import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";
import {  faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faGithub,
//   faYoutube,

// } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  // const github = "https://github.com/leono34/proyecto-en-react.git";
  // const facebook = "";
  // const instagram = "";
  let fecha = new Date();
  let ano = fecha.getFullYear();
  return (
    // <footer className="footer">

    //   <div className="text-center">
    //    <ul>
    //      <li ><a  href={facebook} target="_blank"><FontAwesomeIcon className="fa-xs" icon={faFacebook} /></a></li>
    //      <li><a href={instagram} target="_blank"><FontAwesomeIcon className="fa-xs" icon={faInstagram} /></a></li>
    //      <li><a href={github} target="_blank"><FontAwesomeIcon className="fa-xs" icon={faGithub} /></a></li>
    //    </ul>
    //    <p className="copyright">Todos los derechos reservados Copyright 2020 | <b>Petwalker</b></p>
    //   </div>
    // </footer>

    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="block">
              <h3>Nosotros</h3>
              <p>
                Petwalker es la manera más sencilla que tienen los propietarios
                de mascotas para encontrar un cuidador de confianza en su zona.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="block">
              <h3>Suscribirse</h3>
              <p>
                Cada servicio Petwalker que ofrece está cubierto por la Garantía
                Petwalker.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="block">
              <h3>Contactanos</h3>
              <ul className="list-group">
                <li>
                  <p><FontAwesomeIcon icon={faGlobe} /> Calle Boston 220 Las Vegas</p>
                </li>
                <li>              
                  <p> <FontAwesomeIcon icon={faPhone} /> 51-123 456 78 9</p>
                </li>
                <li>
                   <p><FontAwesomeIcon icon={faEnvelope} /> petwalker@gmail.com</p>
                </li>
  
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="" >  
        <Col sm="12" >
  <p className="copyright text-center  ">Todos los derechos reservados Copyright {ano} &nbsp;|&nbsp; <b>Petwalker</b> &nbsp;</p>
        </Col>
        </Row>
      </Container>
      
    </footer>
  );
}

export { Footer };
