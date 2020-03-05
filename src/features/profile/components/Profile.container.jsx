import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container">
      <div className="row">
          <div className="col-4  mt-3">
              <aside className="side-nav" id="show-side-navigation1">
                
                  <div className="heading">
                  
                  <img src={require('../../../images/04.jpg')} alt="malus" className="img-fluid"/>
                    <div className="info pt-3">
                     
                   
                      <h3 className="hello-msg  text-dark  "  >Lucia Mendes P.</h3>
                     
                    </div>
                    
                  </div>
               <div className="d-flex justify-content-center pt-3   ">
                  <a href="http://localhost:3000/#/perfil"  className=" btn-outline-warning  " >Edita tu perfil </a>
                
               </div>
                  
                </aside>
               
          </div>
          <div className="col-8  mt-3 ">
              <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Recomienda a un amigo, gana S/ 20 </h3>
                    <p className="card-text">Por cada amigo que reserve su primera estadía, le daremos un crédito de S/ 20 para su próxima reserva..</p>
                    <a href="http://localhost:3000/#/perfil" className="btn btn-warning">Invita a un amigo</a>
                  </div>
                </div>
  
          </div>
      </div>
      <div className="row container-fluid ">
          <div className="col-4 mt-4 ">
              <div className="card  ">
                  <h3 className="card-title text-center pt-2"> Balance</h3>
                  <div className="card-body row">
                   
                    <div className="col-6  " >
                      <h3 className="card-title  pt-2 pb-2 ">S/40.00</h3>
          
                      <h6 className="card-subtitle mb-2 text-muted">Redimible</h6>
                      <a href="http://localhost:3000/#/perfil"  className=" btn-outline-warning" >Retirar dinero </a>
                     
                    </div>
                    <div className="col-6  "  >
                      <h3 className="card-title pt-2 pb-2 ">S/40.00</h3>
                      
                      <h6 className="card-subtitle mb-2 text-muted">Total</h6>
                  
                      <a href="http://localhost:3000/#/perfil"  className=" btn-outline-warning" >Aplicar código promocional </a>
                    
                    </div>
                  </div>
                </div>     
          </div>
          <div className="col-4 mt-4">
              <div className="card">
                  <h6 className="card-title p-2">Agrega tus mascotas o edita su información</h6>
                  <img src={require('../../../images/malumin1.jpeg')} alt="malus" className="img-fluid"/>
                  <div className="card-body bg-secondary d-flex justify-content-around">
                      <li><a href="http://localhost:3000/#/perfil"><i className="fa fa-pencil fa-fw"></i><span>edit</span></a></li>
                     <li><a href="http://localhost:3000/#/perfil"><i className="fa fa-eye"></i><span>view</span></a></li>                                        
                  </div>
                </div>              
                
          </div>
          <div className="col-4 mt-4">
              <div className="card p-5">
                 
                 <div className="card-body d-flex justify-content-center">
                  
                      <button type="button" className="btn btn-outline-warning"> Agrega tus mascotas </button>
                   
                  </div>
                </div>
                             
          </div>
      </div>
  </section>
    )
  }
}

export {
  Profile
}