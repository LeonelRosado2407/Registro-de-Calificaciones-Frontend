import { createContext, useContext, useState, useEffect } from 'react';
import { getAlumnosRequest,addAlumnoRequest, getAlumnoRequest,updateAlumnoRequest,deleteAlumnoRequest } from '../api/alumnos.js';

export const AlumnosContext = createContext();

export const useAlumnos = () => {
  const context = useContext(AlumnosContext);

  if (!context) {
    throw new Error('useAlumnos must be used within an AlumnosProvider');
  }
  return context;
};

export const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([{ _id:'', nombres: '', apellidos: '', edad: '', grado: '' }]);
  const [alumnoSelected, setAlumnoSelected] = useState({_id : '', nombres: '', apellidos: '', edad: '', grado: '' });
  const [error, setError] = useState([]);

  const getAlumnos = async () => {
    try {
      const res = await getAlumnosRequest();
      setAlumnos(res.data);

    } catch (error) {
      setError(error.response.data);
      setAlumnos([]);
    }
  };

  const getAlumno = async (id) => {
    try {
      const res = await getAlumnoRequest(id);
      setAlumnos(res.data);
    } catch (error) {
      setError(error.response.data);
      setAlumnos([]);
    }
  };

  const AddAlumno = async (alumno) => {
    try {
      const res = await addAlumnoRequest(alumno);
      getAlumnos();
    } catch (error) {
      setError(error.response.data);
      setAlumnos([]);
    }
  }

  const UpdateAlumno = async(id,alumno) =>{
    try {
      const res = await updateAlumnoRequest(id,alumno);
      getAlumnos();
    } catch (error) {
      setError(error.response.data);
      setAlumnos([]);
    }
  }

  const DeleteAlumno = async (id) =>{
    try {
      const res = await deleteAlumnoRequest(id);
      getAlumnos();
    } catch (error) {
      console.log(error);
      setError(error.response);
      setAlumnos([]);
    }
  }

  const selectAlumno = (alumno) => {
    setAlumnoSelected(alumno);
  }

  useEffect(() => {
    getAlumnos();
  }
  , []);

  return (
    <AlumnosContext.Provider value={{
      alumnos,
      alumnoSelected,
      error,
      getAlumnos,
      getAlumno,
      selectAlumno,
      AddAlumno,
      UpdateAlumno,
      DeleteAlumno
    }}>
      {children}
    </AlumnosContext.Provider>
  );
};
