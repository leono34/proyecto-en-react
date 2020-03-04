import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Parrafo } from './Dueño.Component';

class Formascota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sexo: "",
      // // tipomascota: "",
      // // nomdueño: "",
      // // peso: "",
      // // raza: "",
      // // año: "",
      // // meses: "",
      // // tipo: "",
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
            <Form.Group className="col-md-4">
              <label htmlfor="sexo">Sexo :</label>
              <Form.Group>
                <label check>
                  <input type="radio" name="sexo" value="Macho" />
                  Macho
                </label>
                <label check>
                  <input type="radio" name="sexo" value="Hembra" />
                  Hembra
                </label>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4">
              <label htmlfor="tipo">Tipo :</label>
              <Form.Group>
                <label check>
                  <input type="radio" name="tipo" value="perro" />
                  Perro
                </label>
                <label check>
                  <input type="radio" name="tipo" value="gato" />
                  Gato
                </label>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4">
              <label htmlfor="Castrado">Esta Castrado? </label>
              <Form.Group>
                <label check>
                  <input type="radio" name="Castrado" value="si" />
                  Si
                </label>
                <label check>
                  <input type="radio" name="Castrado" value="no"  />
                  No
                </label>
              </Form.Group>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="col-md-4" controlId="formGridEmail">
              <label htmlFor="nom_masc">Nombre de la Mascota :</label>
              <Form.Control size="lg" type="text" id="nom_masc" name="nom_masc" required placeholder="Ingresa su Nombre" />
            </Form.Group>
            <Form.Group className="col-md-4" controlId="formGridPassword">
              <label htmlFor="peso">Peso :</label>
              <Form.Control size="lg" type="number" id="peso" name="peso" required placeholder="Cual es el peso" />
            </Form.Group>
            <Form.Group className="col-md-4" controlId="formGridPassword">
              <label htmlFor="edad">Edad :</label>
              <Form.Control size="lg" type="text" id="edad" name="edad" required placeholder="Cuantos años tiene" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="col-md-6" controlId="formGridPassword">
              <label htmlFor="">Tipo de Raza :</label>
              <Form.Control size="lg" type="text" placeholder="Ingrese el tipo de raza" />
              <Parrafo
                        text='Ingrese las raza que es su mascota si su 
                        perros son de raza mixta, agregue también "mixta"'
                      />
            </Form.Group>
            <Form.Group className="col-md-6">
              <label htmlfor="">Podemos Verlo </label>
              <Form.Group>
                <input type="file" name="radio1" />
              </Form.Group>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="col-md-4">
              <label htmlfor="">Nombre de la veterinaria e info de
                          contacto : </label>
              <Form.Group>
                <input type="textarea" name="text" id="exampleText" />
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4">
              <label htmlfor="">Informacion sobre tu mascota : </label>
              <Form.Group>
                <input type="textarea" name="text" id="exampleText" />
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-4">
              <label htmlfor="">Cuidados sobre tu mascota : </label>
              <Form.Group>
                <input type="textarea" name="text" id="exampleText" />
              </Form.Group>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <label for="comment">
              Asegúrese de incluir el horario típico y de
              masilla de su perro, cuánto lo alimenta y
              cualquier instrucción de medicación</label>
          </Form.Row>
        </Form>
      </form>
    );
  }
}
export { Formascota };
