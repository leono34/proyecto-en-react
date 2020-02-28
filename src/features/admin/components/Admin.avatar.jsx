import React from "react";
import Button from "@material-ui/core/Button";
import grafico from '../../../images/pelusa.jpg'

import { Row, Col } from "react-bootstrap";


class Boton extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>PAOLO</h1>
        </div>
        <Button variant="contained" color="bg-primary">
          EDITAR
        </Button>
      </div>
    );
  }
}

export { Boton };


class Cards extends React.Component {
  render() {
    return (
      <div className="col-lg-4 p-5 text-center">
        <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777" />
        </svg>
        <h2>Servicio 3</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
      </div>
    );
  }
}

export { Cards };


function Usuario(props) {
    return (
      <div className="col-lg-4 p-8 text-center d-inline-block">
        
        <h6> {props.name} </h6>
        <hr className="size:4px" />
        <p><a className="btn btn-secondary" href="#" role="button">Editar Perfil </a></p>
      </div>
    );
  
}

export { Usuario };



function Crud(props) {
  console.log("props", props);
  return (
    <div className="col-lg-4 border border-info ">
      <h2>Pagina del Administrado</h2>
      <p>Se pueden realizar varios CRUD</p>
      <p><a className="btn btn-secondary" href="#" role="button">CRUD &raquo;</a></p>
    </div>
  );
}

export { Crud };



class Imagen extends React.Component {
  render() {
    return (
      <div className="col-lg-4 p-5 text-center border border-dark">
        <img src={grafico} alt="grafico" />
        <p><a className="btn btn-secondary" href="#" role="button">Detalle</a></p>
      </div>
    );
  }
}

export { Imagen };
