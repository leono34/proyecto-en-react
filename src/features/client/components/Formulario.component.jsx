import React from 'react';
import { Button } from 'react-bootstrap';
import {Parrafo} from './Dueño.Component';

class Formascota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: "",
      // tipomascota: "",
      // nomdueño: "",
      // peso: "",
      // raza: "",
      // año: "",
      // meses: "",
      // tipo: "",
      // photo:"",
      // Castrado: "",
      // infovet: "",
      // infomasc: "",
      // cuimasc: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("state", this.state)
  //   // fetch("http://localhost:3000/users", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(this.state),
  //   //   headers: {
  //   //     "Content-type": "application/json; charset=UTF-8"
  //   //   }
  //   // })
  //   //   .then(response => response.json())
  //   //   .then(json => {
  //   //     this.setState({
  //   //       users: [...this.state.users, json]
  //   //     });
  //   //     console.log(json);
  //   //   });
  // }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Your favorite flavor is: ' + this.state);
  }
  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(response => {
        this.setState({
          users: response
        });
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12 text">
            <div className="row">
              <div className="col-md-12">
                <div className="row tabla">
                  <Parrafo text="Cual es tu tipo de Mascota?" />
                  <div className="col-md-12">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <div className="row form-group">
                          <div className="col-md-3 mb-3 " id="nombre">
                            <label htmlfor="sexo">Sexo :</label>
                            <div className="radio">
                              <input
                                name="sexo"
                                value="macho"
                                onChange={this.handleChange}
                                type="radio"
                              />
                              Macho &nbsp; &nbsp; &nbsp;
                              <input
                                name="sexo"
                                value="hembra"
                                onChange={this.handleChange}
                                type="radio"
                              />
                              Hembra
                            </div>
                          </div>
                          {/* <div className="col-md-3 mb-3 " id="nombre">
                            <label htmlfor="tipo">Tipo :</label>
                            <div className="radio">
                              <input
                                name="tipo"
                                value="perro"
                                onChange={this.handleChange}
                                type="radio"
                              />
                              Perro &nbsp; &nbsp; &nbsp;
                              <input
                                name="tipo"
                                value="gato"
                                onChange={this.handleChange}
                                type="radio"
                              />
                              Gato
                            </div>
                          </div>
                          <div className="col-md-2 mb-3" id="nombre">
                            <label htmlfor="Castrado">Castrado ?</label>
                            <div className="radio">
                              <input
                                name="Castrado"
                                value="si"
                                onChange={this.handleChange}
                                type="radio"
                              />
                              SI &nbsp; &nbsp; &nbsp;
                              <input
                                name="Castrado"
                                value="no"
                                onChange={this.handleChange}
                                type="radio"
                              />
                              NO
                            </div>
                          </div>
                          <div className="col-md-4 mb-3" id="nombre"> 
                            <label htmlfor="photo">Podemos verlo?</label>
                            <input
                              required
                              type="file"
                              name="photo"
                              id="photo"
                              value={this.state.photo}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-3 mb-3" id="nombre">
                            <label htmlfor="nomdueño">Nombre :</label>
                            <div>
                              <input
                                required
                                name="nomdueño"
                                id="nomdueño"
                                value={this.state.nomdueño}
                                onChange={this.handleChange}
                                className="form-control-danger"
                                type="text"
                                placeholder="Nombre"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3" id="nombre">
                            <label htmlfor="peso">Peso :</label>
                            <div>
                              <input
                                required
                                id="peso"
                                name="peso"
                                value={this.state.peso}
                                onChange={this.handleChange}
                                type="number"
                                placeholder="Peso"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3" id="nombre">
                            <label htmlfor="años">Año (años) :</label>
                            <div>
                              <input
                                required
                                name="años"
                                id="años"
                                value={this.state.años}
                                onChange={this.handleChange}
                                type="number"
                                placeholder="Año  (años)"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 mb-3 " id="nombre">
                            <label htmlfor="meses">Año (Meses) :</label>
                            <div>
                              <input
                                required
                                name="meses"
                                id="meses"
                                value={this.state.meses}
                                onChange={this.handleChange}
                                className="form-control-danger"
                                type="number"
                                placeholder="Año (Meses)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12 mb-3 " id="nombre">
                            <label htmlfor="raza">Tipo de Raza :</label>
                            <Parrafo
                              text='Ingrese las raza que es su mascota si su 
                              perros son de raza mixta, agregue también "mixta"'
                            />
                            <div>
                              <input
                                required
                                name="raza"
                                id="raza"
                                value={this.state.raza}
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Tipo de raza"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row"> 
                          <div className="col-md-4" id="nombre">
                            <div className="form-group">
                              <label for="comment">
                                Nombre de la veterinaria e info de
                                contacto :
                              </label>
                              <hr/>
                              <textarea
                                value={this.state.infovet}
                                onChange={this.handleChange}
                                className="form-control"
                                rows="5"
                                id="infovet"
                                name="infovet"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-4" id="nombre">
                            <div className="form-group">
                              <label for="comment">
                                Informacion sobre tu mascota :
                              </label>
                              <hr/>
                              <textarea
                                className="form-control"
                                value={this.state.infomasc}
                                onChange={this.handleChange}
                                rows="5"
                                id="infomasc"
                                name="infomasc"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-4" id="nombre">
                            <div className="form-group">
                              <label for="comment">
                                Cuidados sobre tu mascota :
                              </label>
                              <hr/>
                              <textarea
                                className="form-control"
                                value={this.state.cuimasc}
                                onChange={this.handleChange}
                                rows="5"
                                id="cuimasc"
                                name="cuimasc"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12" id="nombre">
                            <div className="form-group">
                              <label for="comment">
                                Asegúrese de incluir el horario típico y de
                                masilla de su perro, cuánto lo alimenta y
                                cualquier instrucción de medicación
                              </label>
                            </div>
                          </div>
                          <div className="row">
                          <div className="col" >
                              <Button
                                type="submit"
                                value="submit"
                                variant="primary">
                                Agregar
                              </Button>
                            </div>
                          </div>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>{JSON.stringify(this.state)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export { Formascota };
