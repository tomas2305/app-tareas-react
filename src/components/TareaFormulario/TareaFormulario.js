import React, { useState } from 'react';
import './TareaFormulario.css'
import {v4 as uuidv4} from 'uuid'
 
function TareaFormulario(props){

    const [input, setInput] = useState('');

    function manejarCambioInput(event){
        setInput(event.target.value);
    }

    function manejarEnvio(event){
        event.preventDefault();
        const TareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(TareaNueva)
    }

    return(
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}
        >
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambioInput}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}
export default TareaFormulario;