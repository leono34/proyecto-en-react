import React from "react";
import Button from '@material-ui/core/Button';

class Dueño extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dueño">
        <div className="row">
          <div className="col-md-12">
            <div className="row separar">
              <div className="col-md-3 cuerpohe">
                <div className="row">
                  <div className="col-md-12 cuerpo">
                    <input className="imagen" type="button" />
                    <img src="" alt="" />
                    <p>Nombre del Dueño </p>
                  </div>
                  <div className="col-md-12 nombre">
                    <p> Edita tu Perfil </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 card">
                <div className="card-invitacion">
                  <h5>Recomienda a un amigo, Gana S/20</h5>
                  <p>Por cada amigo que reserve su estadia ,le daremos un credito de S/20 para su proxima
                        reserva. </p>
                  <Button size="small" color="secondary">
                    Invita a un amigo 
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-3 card-nuevo ">
                <div className="mascotacard">
                  <p>Por cada amigo que reserve su estee su</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Dueño
}
