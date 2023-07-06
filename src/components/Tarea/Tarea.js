import React from 'react';
import './Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
 
function Tarea(props){
    return(
     <div className={`tarea-contenedor ${ props.completada ? 'completada' : ''}`.trimEnd()}>
        <div 
            className='tarea-texto'
            onClick={() => props.completarTarea(props.id)}
        >
            {props.texto}
        </div>
        <div 
            className='tarea-contenedor-iconos'
            onClick={() => props.eliminarTarea(props.id)}
        >
            <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
     </div>
    );
}
export default Tarea;