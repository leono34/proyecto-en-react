import React from 'react';
import { Button } from 'react-bootstrap';
import {
  Invita
 } from './Dueño.Component';
import {
  Usuario
} from '../../admin/components';
import Examples from './Card.component';
import {Dueñocard} from './Card.component';

class Dueño extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      mascota:[
        {
          nom_due:"Sebastian",
          nom_masc:"Kiam",
          description:"Perro muy jugueton ,muy travieso pero eso muy obediente"
        },
        {
          nom_due:"Rodrigo",
          nom_masc:"Doki",
          description:"Perro muy jugueton ,muy travieso pero eso muy obediente"
        },
        {
          nom_due:"Isael",
          nom_masc:"Tarzan",
          description:"Perro muy jugueton ,muy travieso pero eso muy obediente"
        }
      ]
    }
  }
  render() {
      let Dueñocards =this.state.mascota.map(mascotita =>{
        return(
          <div className="dueñocard">
              <Dueñocard mascotita={mascotita}/>
          </div> 
        )
      })
    return (
      <div>
        <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 avatar-clie">
                    <Usuario name="leon"/>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 carta-clie">
                    <Invita
                    text='Recomienda a un amigo, Gana S/20'
                    text1='Por cada amigo que reserve su estadia ,le daremos un credito de S/20 para su proxima
                     reserva.'/>
                     <Button variant="danger" >Invita a un amigo</Button>
                  </div>
                </div>
              </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-10">
                <div className="row">
                  {Dueñocards}
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                    <div className="botonam">
                        <Examples/>
                    </div>
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
