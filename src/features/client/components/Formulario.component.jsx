import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Parrafo } from './Dueño.Component';

class Formascota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       sexo: "",
       tipo: ""
      // // tipomascota: "",
      // // nomdueño: "",
      // // peso: "",
      // // raza: "",
      // // año: "",
      // // meses: "",
      
      // // photo:"",
      // // Castrado: "",
      // // infovet: "",
      // // infomasc: "",
      // // cuimasc: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
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
      <form onSubmit={this.handleSubmit} className="form_general">
        <Form>
          <Form.Row>            
            <Form.Group className="col-md-4" id="nombre">
              <label htmlfor="sexo">Sexo :</label>
              <Form.Group>
                <label check>
                  <input type="radio" name="sexo" value="Macho" onChange={this.handleChange} />
                  Macho
                </label>
                <label check>
                  <input type="radio" name="sexo" value="Hembra" onChange={this.handleChange} />
                  Hembra
                </label>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlfor="tipo">Tipo :</label>
              <Form.Group>
                <label>
                  <input type="radio" name="tipo" value="Perro" onChange={this.handleChange} />
                  Perro
                </label>
                <label >
                  <input type="radio" name="tipo" value="Gato" onChange={this.handleChange} />
                  Gato
                </label>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlfor="Castrado">Esta Castrado? </label>
              <Form.Group>
                <label check>
                  <input type="radio" name="Castrado" value="si" onChange={this.handleChange} />
                  Si
                </label>
                <label check>
                  <input type="radio" name="Castrado" value="no" onChange={this.handleChange}  />
                  No
                </label>
              </Form.Group>
            </Form.Group>
          </Form.Row>
{/* 
          <Form.Row>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlFor="nom_masc">Nombre de la Mascota :</label>
              <Form.Control size="lg" type="text" id="nom_masc" name="nom_masc" required placeholder="Ingresa su Nombre" />
            </Form.Group>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlFor="peso">Peso :</label>
              <Form.Control size="lg" type="number" id="peso" name="peso" required placeholder="Cual es el peso" />
            </Form.Group>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlFor="edad">Edad :</label>
              <Form.Control size="lg" type="text" id="edad" name="edad" required placeholder="Cuantos años tiene" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="col-md-6" id="nombre">
              <label htmlFor="">Tipo de Raza :</label>
              <Form.Control size="lg" type="text" placeholder="Ingrese el tipo de raza" />
              <Parrafo
                        text='Ingrese las raza que es su mascota si su 
                        perros son de raza mixta, agregue también "mixta"'
                      />
            </Form.Group>
            <Form.Group className="col-md-6" id="nombre">
              <label htmlfor="">Podemos Verlo </label>
              <Form.Group>
                <input type="file" name="radio1" />
              </Form.Group>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlfor="infovet">Nombre de la veterinaria e info de
                          contacto : </label>
              <Form.Group>
                <Form.Control as="textarea" rows="3" name="text" id="infovet" name="infovet" cols="40"/>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4" id="nombre">
              <label  htmlfor="">Informacion sobre tu mascota : </label>
              <Form.Group>
                <Form.Control as="textarea" rows="3"  name="text" id="infomasc" name="infomasc" cols="40"/>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4" id="nombre">
              <label htmlfor="">Cuidados sobre tu mascota : </label>
              <Form.Group>
                <Form.Control as="textarea" rows="3" name="text" id="cuimasc" name="cuimasc" cols="40"/>
              </Form.Group>
            </Form.Group>
          </Form.Row>
          */}
          <Form.Row >
            <Form.Group>
              <label htmlfor="comment">
                  Asegúrese de incluir el horario típico y de
                  masilla de su perro, cuánto lo alimenta y
                  cualquier instrucción de medicación</label>
            </Form.Group>
            <Form.Group>
              <Button  size="lg" type="submit"value="submit" variant="success"> Agregar  </Button>
            </Form.Group>
          </Form.Row>
        </Form>
        <p>{JSON.stringify(this.state)}</p>
      </form>
    );
  }
}
export { Formascota};
