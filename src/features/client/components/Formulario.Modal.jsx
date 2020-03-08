import React, {Fragment, useState}  from 'react';
import {Button} from "react-bootstrap";
import uuid from 'uuid/v4';

const FormularioModal = ({crearCard}) =>{

    //estado de mascotas
    const[agregar, actualizarMascota] = useState({
        mascota:'',
        dueño:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    //otro estado
    const[ error, actualizarError ] = useState(false)
    //funcion que agrega datos del usuario en un input
    const actualizarDato = e => {
        actualizarMascota({
            ...agregar,
            [e.target.name]: e.target.value
        })
    }
    //extraciion de valores
    const {mascota, dueño, fecha, hora,sintomas}=agregar;
    //dar click al boton
    const submitForm = e =>{
        e.preventDefault();
        //validar
        if (mascota.trim()=== '' || dueño.trim()=== '' ||
         fecha.trim()=== '' || hora.trim()=== '' ||sintomas.trim()=== ''){
            actualizarError(true);
            return;
        }
        //eliminar el mensaje previo
        actualizarError(false);
        //selecionar id
        agregar.id =uuid( );
        //creaar el card
        crearCard(agregar);
        //reset el form
        actualizarMascota({
        mascota:'',
        dueño:'',
        fecha:'',
        hora:'',
        sintomas:''
        })
    }

    return(
        <Fragment>
            <h3>Agrega a tu Mascota</h3>
            {error ?<p className="alerta-error">Todos los
            campos son  obligatorios</p>  :null}
            <form   
            onSubmit ={submitForm}>
                    <label
                    >Nombre Mascota :</label>
                    <input 
                    type="text"
                    name="mascota"
                    className="col"
                    placeholder="Tu Mascota"
                    onChange={actualizarDato}
                    value={mascota}/>
                    <label
                    >Nombre Dueño :</label>
                    <input 
                    type="text"
                    name="dueño"
                    className="col"
                    placeholder="Nombre del Dueño"
                    onChange={actualizarDato}
                    value={dueño}/>
                    <label
                    >Fecha de Nacimiento:</label>
                    <input 
                    type="date"
                    name="fecha"
                    className="col"
                    onChange={actualizarDato}
                    value={fecha}/>
                    <label
                    >Hora de reserva:</label>
                    <input 
                    type="time"
                    name="hora"
                    className="col"
                    onChange={actualizarDato}
                    value={hora}/>
                    <label
                    >Descripcion de la mascota:</label>
                    <textarea 
                    className="col"
                    name="sintomas"
                    onChange={actualizarDato}
                    value={sintomas}>
                    </textarea>
                    <Button 
                    type="submit"
                    className="col-3"
                    variant="outline-danger">
                    Agregar
                    </Button>
            </form>
        </Fragment>
        
    );
}

export{
    FormularioModal
}