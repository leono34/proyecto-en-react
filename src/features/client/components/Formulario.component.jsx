import React, {Fragment, useState, useEffect} from 'react';
import {FormularioModal} from './Formulario.Modal';
import CardMascota from './Card.component'


function CuerpoFormulario (){
       //agregado en el local storach
       let cardsIniciales = JSON.parse(localStorage.getItem('agregados'));
       if(!cardsIniciales) {
           cardsIniciales =[];
       }

       //arreglo de agregados (agregar-actualizarMascota)
       const [agregados, guardarAgregados] = useState([cardsIniciales]);
       //use efecto para realizar ciertas opciones cuando el state cambia
       useEffect( ()=>{
           if (cardsIniciales){
               localStorage.setItem('agregados', JSON.stringify(agregados))
           }else{
               localStorage.setItem('agregados', JSON.stringify([]));
           }
       }, [agregados]);

       //funcion que agrege los cards nuevos de los ya registrados
       const crearCard = card =>{
           guardarAgregados([ ...agregados, card]);
       }
       //funcion que elimina una cita por el id
       const eliminarCard =id=>{
           const nuevaCard = agregados.filter(card => card.id !== id);
           guardarAgregados(nuevaCard);
       }

        //mensaje condicional 
        const titulo = agregados.length === 0 ? 'Agrega a tus mascotas' : 'Tus mascotas paseadas'


        return(
            <Fragment>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-6">
                            <h3>{titulo}</h3>
                            {agregados.map(agregar=>(
                                <CardMascota
                                key={agregar.id}
                                agregar={agregar}
                                eliminarCard={eliminarCard}
                                />
                            ))}
                         </div>
                         <div className="col-md-6">
                            <FormularioModal
                            crearCard={crearCard}/>
                         </div>
                     </div>
                 </div>  
            </Fragment>
        )
    }

export{
    CuerpoFormulario
}