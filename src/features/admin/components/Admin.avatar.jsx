import React from "react";
import Button from "@material-ui/core/Button";

class Avatar extends React.Component {
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

export { Avatar };


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
