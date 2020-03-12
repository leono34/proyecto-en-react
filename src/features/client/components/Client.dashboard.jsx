import React from 'react';
import {CuerpoFormulario} from './Formulario.component';
import {Usuario } from '../../admin/components/Admin.avatar';

class Dueño extends React.Component {
  render() {
    return (
      <div>
          <div className="row mb-5">
              <Usuario/>
          <div className="col-md-8  mt-3">
              <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Recomienda a un amigo, gana S/ 20 </h3>
                    <p className="card-text">Por cada amigo que reserve su primera estadía, le daremos un crédito de S/ 20 para su próxima reserva..</p>
                    <a href="http://localhost:3000/#/perfil" className="btn btn-warning">Invita a un amigo</a>
                  </div>
                </div>
  
          </div>
          </div>
            <CuerpoFormulario/>
      </div>
    );
  }
}

export {
  Dueño
}
