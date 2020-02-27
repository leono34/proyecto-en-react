import React from 'react';
import Button from '@material-ui/core/Button';

class Popup extends React.Component {
    render() {
      return (
        <div>
          <div>
              <Formascota/>
            <Button type="submit" size="small" color="secondary"
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
                        <span>Cual es tu tipo de mascota?</span>
                        <div className="row">
                            <div className="col-md-6">
                                <section className="dog">
                                    <span>Dog</span>
                                </section>
                            </div>
                            <div className="col-md-6">
                                    <section className="cat">
                                        <span>Cat</span>
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
                                            <div className="col-md-4 mb-3" id="peso">
                                                    <label for="">Peso :</label>
                                                    <div>
                                                        <input type="number" placeholder="Peso"/><span>kg</span> 
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="row form-group">
                                    <div className="col-md-12 mb-3 " id="tiporaza">
                                        <label for="">Tipo de Raza :</label>
                                        <p>Ingrese las raza que es su mascota si su 
                                            perros son de raza mixta, agregue también 'mixta'
                                        </p>
                                        <div>
                                            <input type="text" placeholder="Tipo de raza"/>
                                        </div>
                                    </div>
                                        </div>
                                        <div className="row form-group" >
                                            <div className="col-md-3 mb-3" id="añoenaños">
                                                <label for="">Año  (años) :</label>
                                                <div>
                                                    <input type="number" placeholder="Año  (años)"/>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3 " id="añoenmeses">
                                                <label for="">Año (Meses) :</label>
                                                <div>
                                                <input className="form-control-danger" type="number" placeholder="Año (Meses)"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6" id="sexo">
                                                <div className="row">
                                                    <div className="col-md-3 mb-3 ">
                                                    <label for="">Sexo :</label>
                                                        <div className="radio">
                                                            <label><input type="radio" name="optradio" checked/>Macho</label>
                                                        </div>
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
            <div className="row">
                <span className="text">¿Tu mascota está castrado o esterealizado?</span>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                    <section className="dog1">
                                        <span className="textomascota">SI</span>
                                    </section>
                            </div>
                            <div className="col-md-6">
                                <section className="cat1">
                                    <span className="textomascota">NO</span>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row">
                    <div className="col-md-12 vetmascota">
                        <div className="form-group">
                            <label for="comment">Nombre de la veterinaria e información de contacto :</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="col-md-12 inmascota">
                        <div className="form-group">
                            <label for="comment">Informacion sobre tu mascota :</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="col-md-12 cuimascota">
                        <div className="form-group">
                            <label for="comment">Cuidados sobre tu mascota :</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="col-md-12 cuimascota">
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