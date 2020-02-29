import React from 'react';
import { Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {
  Invita
 } from './Dueño.Component';
import {Formascota, BotonFormulario} from './Formulario.component';
import {
  Usuario
} from '../../admin/components';

class Dueñocard extends React.Component {
  render(){
    return(
    <div>
        <Card style={{ width: '25rem',height:'25rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#"><Button variant="success">Card Link</Button></Card.Link>
            <Card.Link href="#"><Button variant="success">Another Link</Button></Card.Link>
          </Card.Body>
        </Card>
    </div>
    );
  }
}

class Dueño extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  <div className="col-md-7 carta-clie">
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
              <div className="col-md-3"></div>
              <div className="col-md-8">
                <div className="row">
                  <div className="Dueñocard">
                  <Dueñocard/>
                </div> 
                  <div className="botonam">
                    <Button> Añadir Mascota</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Formascota/>
        </div>
      </div>
    );
  }
}

export {
  Dueño
}
