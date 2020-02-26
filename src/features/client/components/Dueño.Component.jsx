import React from "react";

class Hola extends React.Component{
  render(){
    return(
      <div>
        <p>hola cuidador </p>
      </div>
    );
  }
}
class Boton extends React.Component{
  render(){
    return (
      <div>
          <button className="btn btn-warning">Invita a un amigo</button>
      </div>
    )
  }
}



export default Boton 
