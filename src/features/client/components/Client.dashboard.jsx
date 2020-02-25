import React from "react";
import {hola} from "./Dueño.Component";

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
                <div className="col-md-4 cuerpohe">
                  <div className="row">
                    <div className="col-md-12 cuerpo">
                      <img className="img" src="" alt=""/>
                      <p>soy el dueño </p>
                      <hola/>
                    </div>
                    <div className="col-md-12 cuerpo">
                      <img src="" alt=""/>
                      <p>soy el dueño1 </p>
                      <hola/>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 card">
                <div className="card-invitacion">
                   <h5>recomienda a un amigo, Gana S/20</h5>
                   <p>por cada amigo que reserve su estadia ,le daremos un credito de S/20 para su proxima 
                     reserva. </p>
                     <button className="btn btn-warning">invita a un amigo</button>
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
