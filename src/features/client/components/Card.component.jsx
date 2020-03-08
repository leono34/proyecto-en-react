import React from 'react';
import {Button} from "react-bootstrap";

const CardMascota=({agregar, eliminarCard})=>(
    <div className="card">
        <p>Mascota: <span>{agregar.mascota}</span></p>
        <p>Dueño : <span>{agregar.dueño}</span></p>
        <p>Fecha : <span>{agregar.fecha}</span></p>
        <p>Hora : <span>{agregar.hora}</span></p>
        <p>Descripcion : <span>{agregar.sintomas}</span></p>
        <Button
        className="button eliminar col-7"
        onClick={() => eliminarCard(agregar.id)}>Eliminar &times;</Button>
    </div>    
);

export default CardMascota;