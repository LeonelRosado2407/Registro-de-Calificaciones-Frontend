import {useContext, createContext, useEffect, useState} from 'react'
import { addCalificacionRequest, deleteCalificacionRequest, getCalificacionByAlumnoRequest, getCalificacionesRequest, updateCalificacionRequest } from '../api/calificaciones.js';
import { getMateriaRequest } from '../api/materias.js';
import { set } from 'react-hook-form';

export const CalificacionContext = createContext();

export const useCalificaciones = () => {
  const context = useContext(CalificacionContext);

  if (!context) {
    throw new Error('useCalificaciones must be used within a CalificacionesProvider')
  }

  return context;
}

export const CalificaionProvider = ({children}) => {
    const [calificaciones, setCalificaciones] = useState([]);
    const [alumnoselected, setAlumnoSelected] = useState({nombres: '', apellidos: ''});
    const [ materiaSelected, setMateriaSelected] = useState({materia: '', materiaId: ''});
    const [calificacionSelected, setCalificacionSelected] = useState({});
    const [errors, setErrors] = useState([]);

    const getCalificaciones = async () =>{
        try {
            const res = await getCalificacionesRequest();
            setCalificaciones(res.data);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }
    const selectAlumno = (alumno) => {
        setAlumnoSelected(alumno);
    }
    const selectMateria = (materia) =>{
        setMateriaSelected(materia);
    }
    const selectCalificacion = (calificacion) =>{
        setCalificacionSelected(calificacion);
    }

    const getCalificacionByAlumno = async (id) =>{
        try {
            const res = await getCalificacionByAlumnoRequest(id);
            console.log(res);
            setCalificaciones(res.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    const addCalificacion = async(calificacion) =>{
        try {
            const res = await addCalificacionRequest(calificacion);
            console.log(res);
            getCalificaciones();
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }
    
    }
    const updateCalificaion = async (id, calificacion) =>{
        try {
            const res = await updateCalificacionRequest(id, calificacion);
            console.log(res);
            getCalificacionByAlumno(alumnoselected._id);
        } catch (error) {
            setErrors(error.response.data);
        }
        
    }

    const deleteCalificacion = async (id) =>{
        try {
            const res = await deleteCalificacionRequest(id);
            getCalificacionByAlumno(alumnoselected._id);
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    useEffect(() => {
        getCalificaciones();
    },[]);

    return(
        <CalificacionContext.Provider 
            value={{
                calificaciones,
                alumnoselected,
                materiaSelected,
                calificacionSelected,
                getCalificaciones,
                selectAlumno,
                getCalificacionByAlumno,
                addCalificacion,
                selectMateria,
                selectCalificacion,
                updateCalificaion,
                deleteCalificacion,
            }}
        >
            {children}
        </CalificacionContext.Provider>
    );
}
