import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

class EmployeesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios.get(`http://127.0.0.1:8000/serviciosrest/servicioscliente/${params.id}/`)
      .then(({ data }) => {
        this.setState({
          info: data
        })
      })
    console.log("holaaa dipMount", this.props)
  }

  componentDidUpdate() {
    console.log("holaaa didupdate", this.props)
  }
  render() {
    const {
      nombre,
      apellido
    } = this.state.info;
    console.log("hola render", this.state.info)

    console.log("nombre", nombre);
    console.log("apellido", apellido);
    return (
      // <div>
      //   {/* EmployeesDetail {this.props.match.params.id} */}

      //   aki son los detalles
      // </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Titulo</Card.Title>
                  <Card.Text>
                    Descripcion
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
        <section className="container">
          <div className="row">
            <div className="col-md col-lg-4 p-3 ">
              <div className="card" style={{ width: "18rem" }} >
                <img className="card-img-top" alt="paseador" />
                <div className="card-body">
                  <h5 className="card-title">titulo</h5>
                  <p className="card-text">descripcion </p>
                </div>
              </div>
            </div>
            <div className="col-md col-lg-8  bg-light pt-3">
              <div className="row">
                <div className="col-7 ">
                  <h3 className="text-center">Perros que Cuide</h3>
                  <div className="dogs d-flex ">
                    <div className="profile_picture p-3 ">
                      <a href="#"><img alt="mascota" className="  rounded-circle"
                        src="{foto}" />
                        <span className=" name d-flex justify-content-center ">gutty</span>
                      </a></div>
                    <div className=" profile_picture p-3 ">
                      <a href=" #"><img alt="woman" className="  rounded-circle" src="{foto}" />
                        <span className=" name d-flex justify-content-center ">aitor</span>
                      </a></div>
                    <div className=" profile_picture p-3 ">
                      <a href=" #"><img alt="woman" className="  rounded-circle"
                        src="{foto}" />
                        <span className=" name d-flex justify-content-center ">Ramiro</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col-5 shadow">
                  <h3 className="text-center">Tarifa</h3>
                  <div className="table-responsive">
                    <table className="table table-striped table-sm">
                      <thead>
                        <tr>
                          <th>Valoración</th>
                          <th>
                            <span className="stars  text-warning " rel="tooltip" data-original-title="Valoración media">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                            </span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Paseo</td>
                          <td>S/ 30 soles</td>
                        </tr>
                        <tr>
                          <td>Alojamiento</td>
                          <td>S/ 20 soles</td>
                        </tr>
                        <tr>
                          <td>Cuidado a Domicilio</td>
                          <td>S/ 25 soles</td>
                        </tr>
                        <tr>
                          <td>Baño</td>
                          <td>S/ 25 soles</td>
                        </tr>
                        <tr>
                          <td>Entrenamiento</td>
                          <td>S/ 30 soles</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href=" " type="button" className="btn btn-outline-warning  m-2 ">Atras</a>
        </section>
      </div>
    )
  }
}
export {
  EmployeesDetail
}