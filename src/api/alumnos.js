import axios from './axios.js';

export const getAlumnosRequest = () => axios.get('/getAlumnos');
export const getAlumnoRequest = (id) => axios.get(`/getAlumno/${id}`);
export const addAlumnoRequest = (alumno) => axios.post('/addAlumno', alumno);
export const updateAlumnoRequest = (id, alumno) => axios.put(`/updateAlumno/${id}`, alumno);
export const deleteAlumnoRequest = (id) => axios.delete(`/deleteAlumno/${id}`);