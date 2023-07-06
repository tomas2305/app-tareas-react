import React from 'react';
import './ListaTareasPrincipal.css'
import ListaDeTareas from '../ListaDeTareas/ListaDeTareas';
 
function ListaTareas(){
    return(
     <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
     </div>
    );
}
export default ListaTareas;