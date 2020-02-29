import React from "react";

function Cardmascota(props) {
  const {
    name,
    lastname,
    phone,
    email,
    photo,
    age
  } =  props;

  return (
    <article className="card">
      <figure className="card__figure">
        <img src={photo}/>
      </figure>
      <div className="card__text">
        <ul>
          <li>
            <h2>Nombre y Apellido</h2>
            <h3>{name} {lastname}</h3>
          </li>
          <li>
            <h2>Email</h2>
            <h3>{email}</h3>
          </li>
          <li>
            <h2>Telefono</h2>
            <h3>{phone}</h3>
          </li>
          <li>
            <h2>Edad</h2>
            <h3>{age}</h3>
          </li>
        </ul>
      </div>
    </article>
  )
}


export {
    Cardmascota
}