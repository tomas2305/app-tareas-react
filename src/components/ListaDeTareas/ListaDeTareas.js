import React, { useState } from 'react';
import './ListaDeTareas.css';
import TareaFormulario from '../TareaFormulario/TareaFormulario';
import Tarea from '../Tarea/Tarea';
 
function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    function agregarTarea(tarea){
       let texto = tarea.texto.trim();
       if(texto){
        tarea.texto = texto;
        const UpdateTareas = [tarea, ...tareas];
        setTareas(UpdateTareas);
       }
    }

    function eliminarTarea(id){
        const updateTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(updateTareas);
    }

    function completarTarea(id){
        const updateTareas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(updateTareas);
    }

    return(
     <>
         <TareaFormulario onSubmit={agregarTarea}/>
         <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea) =>
                <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea}
                />
                )
            }
         </div>
     </>
    );
}
export default ListaDeTareas;