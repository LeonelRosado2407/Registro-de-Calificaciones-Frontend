import axios from './axios.js';

export const getAlumnosRequest = () => axios.get('/getAlumnos');
export const addAlumnoRequest = (alumno) => axios.post('/addAlumno', alumno);