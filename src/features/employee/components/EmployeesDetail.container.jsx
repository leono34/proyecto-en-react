import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class EmployeesDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("props", this.props)
  }
 
  
  render() {
    console.log(this.props.match.params.id)
   
    return (
      // <div>
      //   {/* EmployeesDetail {this.props.match.params.id} */}

      //   aki son los detalles
      // </div>
      
      <section className="container">
      <div className="row">
        <div className="col-md col-lg-4 p-3 ">
         
            <div className="card" style={{width: "18rem"}} >             
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
                  <a href=" #"><img alt="woman" className="  rounded-circle"  src="{foto}" />
                    <span className=" name d-flex justify-content-center ">aitor</span>
                  </a></div>
                <div className=" profile_picture p-3 ">
                  <a href=" #"><img alt="woman" className="  rounded-circle" 
                      src="{foto}" />
                    <span className=" name d-flex justify-content-center ">Ramiro</span>
                    </a></div>
                           
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
    )
  }
}

export {
  EmployeesDetail
}