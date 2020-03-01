import React from 'react';

class Formulario extends React.Component {

  render() {

    return (

      <form className="mb-5">
        <div className="form-group">
          <label htmlFor="nya" className="negrita">Nombres y Apellidos</label>
          <input type="text" className="form-control" id="nya" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="negrita">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="asunto" className="negrita">Asunto</label>
          <input type="text" className="form-control" id="asunto" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje" className="negrita">Mensaje</label>
          <textarea className="form-control" id="mensaje" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    )
  }
}

export { Formulario }

function Avatar(props){
  return (
    <div className="card " style={{width:"18rem"}}>
      <div className="center">
        <div className=" d-flex justify-content-around p-3">
          <img className="rounded-circle" width="80" height="80"
          src={props.url}
          alt={props.nombre}/>
        </div>
        <h6 className="p-3 text-center"> {props.nombre} </h6>
      </div>
    </div>
  )
}

export { Avatar }