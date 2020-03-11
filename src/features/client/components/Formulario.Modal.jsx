import React, {Fragment, useState}  from 'react';
import {Button} from "react-bootstrap";
import uuid from 'uuid/v4';

const FormularioModal = ({crearCard}) =>{

    //estado de mascotas
    const[agregar, actualizarMascota] = useState({
        mascota:'',
        dueño:'',
        raza:'',
        años:'',
        descripcion:'',
        cuidados:'',
    });
    //otro estado
    const[ error, actualizarError ] = useState(false)
    //funcion que agrega datos del usuario en un input
    const actualizarDato = e => {
        actualizarMascota({
            ...agregar,
            [e.target.name]: e.target.value
        });
    }
    //extraciion de valores
    const {mascota, dueño, raza, años,descripcion,cuidados}=agregar;
    //dar click al boton
    const submitForm = e =>{
        e.preventDefault();
        //validar
        if (mascota.trim()=== '' || dueño.trim()=== '' ||
         raza.trim()=== '' || años.trim()=== '' || descripcion.trim()=== ''
         ||cuidados.trim()=== ''){
            actualizarError(true);
            return;
        }
        //eliminar el mensaje previo
        actualizarError(false);
        //selecionar id
        agregar.id =uuid();
        //creaar el card
        crearCard(agregar);
        //reset el form
        actualizarMascota({
        mascota:'',
        dueño:'',
        raza:'',
        años:'',
        descripcion:'',
        cuidados:'',
        });
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
                    >Tipo de Raza:</label>
                    <input 
                    type="text"
                    name="raza"
                    className="col"
                    placeholder="Diga su raza o ponga Mixta"
                    onChange={actualizarDato}
                    value={raza}/>
                    <label>Tipo de Mascota :</label>
                    <input 
                    type="select" 
                    className="col"/>


                    <label
                    >Cuantos años tiene tu mascota :</label>
                    <input 
                    type="number"
                    name="años"
                    className="col"
                    placeholder="Digite solo Años"
                    onChange={actualizarDato}
                    value={años}/>
                    <label
                    >Descripcion de la mascota:</label>
                    <textarea 
                    className="col"
                    name="descripcion"
                    onChange={actualizarDato}
                    value={descripcion}>
                    </textarea>
                    <label
                    >Cuidados sobre tu Mascota:</label>
                    <textarea 
                    className="col"
                    name="cuidados"
                    onChange={actualizarDato}
                    value={cuidados}>
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