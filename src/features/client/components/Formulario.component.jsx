import React from 'react';
import { Button } from 'react-bootstrap';
import {Parrafo} from './Dueño.Component';
import { Formularioto } from 'react-bootstrap';
class Popup extends React.Component {
    render() {
      return (
        <div>
          <div>
              <Formascota/>
            <Button type="submit" size="small" variant="info"
             onClick=  {this.props.closePopup} >
                Enviar
            </Button>
          </div>
        </div>
      );
    }
  }
  class BotonFormulario extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div>
            <Button size="small" color="primary"
             onClick={this.togglePopup.bind(this)}> Añadir Mascota</Button>
          {this.state.showPopup ? 
            <Popup
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };

export {
    BotonFormulario
}

class Formascota extends React.Component {
    render() {
      return (
        <div>
            <div className="row">
                <div className="col-md-12 text">
                      <Parrafo
                      text='Cual es tu tipo de Mascota?'/>
                        <div className="row">
                            <div className="col-md-6">
                                <section className="dog">
                                    <Parrafo text='Dog'/>
                                </section>
                            </div>
                            <div className="col-md-6">
                                <section className="cat">
                                    <Parrafo text='Cat'/>
                                </section>
                            </div>
                        </div>
                                <div className="row">
                    <div className="col-md-12">
                        <div className="row tabla">
                            <div className="col-md-12">
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <div className="row form-group">
                                            <div className="col-md-6 mb-3" id="nombre">
                                                    <label for="">Nombre :</label>
                                                <div>
                                                    <input className="form-control-danger" type="text" placeholder="Nombre"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3" id="nombre">
                                                    <label for="">Peso :</label>
                                                    <div>
                                                        <input type="number" placeholder="Peso"/>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="row form-group">
                                    <div className="col-md-12 mb-3 " id="nombre">
                                        <label for="">Tipo de Raza :</label>
                                        <Parrafo text='Ingrese las raza que es su mascota si su 
                                            perros son de raza mixta, agregue también "mixta"'/>
                                        <div>
                                            <input type="text" placeholder="Tipo de raza"/>
                                        </div>
                                    </div>
                                        </div>
                                        <div className="row form-group" >
                                            <div className="col-md-4 mb-3" id="nombre">
                                                <label for="">Año  (años) :</label>
                                                <div>
                                                    <input type="number" placeholder="Año  (años)"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3 " id="nombre">
                                                <label for="">Año (Meses) :</label>
                                                <div>
                                                <input className="form-control-danger" type="number" placeholder="Año (Meses)"/>
                                                </div>
                                            </div>
                                            <div className="col-md-8" id="nombre">
                                                <div className="row">
                                                    <div className="col-md-3 mb-3 ">
                                                    <label for="">Sexo :</label>
                                                        <div className="radio">
                                                            <label><input type="radio" name="optradio" checked/>Macho</label>
                                                        </div>
                                                    </div> 
                                                    <div className="col-md-3 mb-3">
                                                    <label for="">&nbsp;</label>
                                                    <div className="radio">
                                                        <label><input type="radio" name="optradio"/>Hembra </label>
                                                  </div>
                                                </div>  
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
            <Parrafo text='¿Tu mascota está castrado o esterealizado?'/>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                    <section className="dog1">
                                    <Parrafo text='SI'/>
                                    </section>
                            </div>
                            <div className="col-md-6">
                                <section className="cat1">
                                    <Parrafo text='NO'/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row">
                    <div className="col-md-12"  id="nombre">
                        <div className="form-group">
                            <label for="comment">Nombre de la veterinaria e información de contacto :</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="col-md-12"  id="nombre">
                        <div className="form-group">
                            <label for="comment">Informacion sobre tu mascota :</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="col-md-12"  id="nombre">
                        <div className="form-group">
                            <label for="comment">Cuidados sobre tu mascota :</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="col-md-12"  id="nombre">
                        <div className="form-group">
                            <label for="comment">Asegúrese de incluir el horario típico y de masilla
                                 de su perro, cuánto lo alimenta y cualquier instrucción de medicación</label> 
                         </div>
                    </div>
                </div>
        </div>
      );
    }
  }

export {
  Formascota
}



class Formularioto extends React.Component {
  render(){
    return(
      <div>
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ingreas tu email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
    );    
  }
}
export{
  Formularioto
}