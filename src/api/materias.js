import axios from './axios.js';

export const getMateriasRequest = () => axios.get('/getMaterias');
export const getMateriaRequest = (id) => axios.get(`/getMatera/${id}`);
export const addMateriaRequest = (materia) => axios.post('/addMateria',materia);
export const updateMateriaRequest = (id,materia) => axios.put(`/updateMateria/${id}`,materia);
export const deleteMateriaRequest = (id) => axios.delete(`/deleteMateria/${id}`);