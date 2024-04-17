import axios from './axios.js'

export const getCalificacionesRequest = () => axios.get('/getCalificaciones');
export const getCalificacionRequest = (id) => axios.get(`/getCalificacion/${id}`);
export const getCalificacionByAlumnoRequest = (id) => axios.get(`/getCalificacionByAlumno/${id}`);
export const addCalificacionRequest = (calificacion) => axios.post('/addCalificacion', calificacion);
export const updateCalificacionRequest = (id, calificacion) => axios.put(`/updateCalificacion/${id}`, calificacion);
export const deleteCalificacionRequest = (id) => axios.delete(`/deleteCalificacion/${id}`);