import React from 'react';
import {Button} from "react-bootstrap";

const CardMascota=({agregar, eliminarCard})=>(
    <div className="card">
        <p>Mascota: <span>{agregar.mascota}</span></p>
        <p>Dueño : <span>{agregar.dueño}</span></p>
        <p>Peso : <span>{agregar.peso}</span></p>
        <p>Raza : <span>{agregar.raza}</span></p>
        <p>Tipo de mascota : <span>{agregar.timascota}</span></p>
        <p>Castrado :<span>{agregar.castrado}</span></p>
        <p>Cuantos años tiene : <span>{agregar.años}</span></p>
        <p>Descripcion : <span>{agregar.descripcion}</span></p>
        <p>Cuidados Mascota : <span>{agregar.cuidados}</span></p>
        <Button
        className="button eliminar col-7"
        onClick={() => eliminarCard(agregar.id)}>Eliminar &times;</Button>
    </div>    
);

export default CardMascota;