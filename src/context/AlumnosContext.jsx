import { createContext, useContext, useState, useEffect } from 'react';
import { getAlumnosRequest } from '../api/alumnos.js';

export const AlumnosContext = createContext();

export const useAlumnos = () => {
  const context = useContext(AlumnosContext);

  if (!context) {
    throw new Error('useAlumnos must be used within an AlumnosProvider');
  }
  return context;
};

export const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([{ nombres: '', apellidos: '', edad: '', grado: '' }]);
  const [alumnoUpdate, setAlumnoUpdate] = useState({ nombres: '', apellidos: '', edad: '', grado: '' });

  const getAlumnos = async () => {
    try {
      const res = await getAlumnosRequest();
      setAlumnos(res.data);

    } catch (error) {
      console.log(error);
      setAlumnos([]);
    }
  };
  const AddAlumno = async () => {
    try {
      const res = await addAlumnoRequest();
      setAlumnos(res.data);
    } catch (error) {
      console.log(error);
      setAlumnos([]);
    }
  }

  const selectAlumno = (alumno) => {
    console.log(alumno);
    setAlumnoUpdate(alumno);
  }

  useEffect(() => {
    getAlumnos();
  }
    , []);

  return (
    <AlumnosContext.Provider value={{
      alumnos,
      alumnoUpdate,
      getAlumnos,
      selectAlumno,
      AddAlumno
    }}>
      {children}
    </AlumnosContext.Provider>
  );
};
