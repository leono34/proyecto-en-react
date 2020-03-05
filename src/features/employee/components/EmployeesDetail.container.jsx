import React from "react";


import {

 
  Link
} from "react-router-dom";
class EmployeesDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("props", this.props)
  }
  render() {
    const {
      // nombre,
      // apellido,
      // titulo,
      // descripcion,
      // foto,
      // fotoMask,
      // nombreMask
    } = this.state.info;
    console.log("hola render", this.state.info)
  }

  
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
       {/* <Container>
      
        </Container>
         <section className="container"> 
          <div className="row">
            <div className="col-md col-lg-4 p-3 ">
              <div className="card" style={{ width: "30rem" }} >
                <img className="card-img-top" alt="paseador"  width="200"   src={foto}  />
                
                <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                </div> 
              </div>
            </div>
            <div className="col-md col-lg-8  bg-light pt-3">
              <div className="row">
                <div className="col-7 ">
                  <h3 className="text-center">Mascotas que Cuide</h3>
                  <div className="dogs d-flex ">
                    <div className="profile_picture p-3 ">
                    
                        <img  alt="mascota" className="  rounded-circle"  width="70"   src={fotoMask}  />
                        <span className=" name d-flex justify-content-center ">{nombreMask}</span>
                      </div>
                    <div className=" profile_picture p-3 ">
                    <img  alt="mascota" className="  rounded-circle"  width="50"   src={fotoMask}  />
                        <span className=" name d-flex justify-content-center ">{nombreMask}</span>
                      </div>
                    <div className=" profile_picture p-3 ">
                    <img  alt="mascota" className="  rounded-circle"  width="50"   src={fotoMask}  />
                        <span className=" name d-flex justify-content-center ">{nombreMask}</span> 
                    
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
        
          <Link to="/cuidadores"   type="button" className="btn btn-outline-warning  m-2 " >Atras</Link>
       </section>*/}
      </div>
    )
  }
}

export {
  EmployeesDetail
}