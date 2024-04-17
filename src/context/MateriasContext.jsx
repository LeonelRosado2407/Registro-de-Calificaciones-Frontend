import { createContext, useContext, useState, useEffect } from "react";
import { addMateriaRequest, getMateriaRequest, getMateriasRequest,updateMateriaRequest,deleteMateriaRequest } from "../api/materias";


export const MateriasContext = createContext();

export const useMaterias = () =>{
    const context = useContext(MateriasContext);

    if (!context) {
        throw new Error('useMaterias must be used within an MateriasProvider')
    }

    return context;
};

export const MateriasProvider = ({ children }) => {
    const [materias, setMaterias]  = useState([]);
    const [materiaSelected, setMateriaSelected] = useState({});
    const [errors, setErrors] = useState([]);

    const getMaterias = async () => {
        try {
            const res = await getMateriasRequest();
            setMaterias(res.data);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }

    const getMateria = async (id) =>{
        try {
            const res = await getMateriaRequest(id);
            setMateriaSelected(res.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    const addMateria = async (materia) => {
        try {
            const res = await addMateriaRequest(materia);
            setMateriaSelected(res.data);

            const newmaterias = materias.concat(res.data);
            setMaterias(newmaterias);

            setErrors([]);

        } catch (error) {
            setErrors(error.response.data);
        }
    }
    const selectMateria = (materia) => {
        setMateriaSelected(materia);
    }

    const updateMateria = async (id,materia) => {
        try {
            const res = await updateMateriaRequest(id,materia);

            const newmaterias = materias.map((materiaMap)=>{
                if (materiaMap._id === id) {
                    materiaMap.nombre = materia.nombre;
                    materiaMap.calificacionAprobatoria = materia.calificacionAprobatoria;
                }
                return materiaMap;
            })
            setMaterias(newmaterias);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }
    }
    const deleteMateria = async (id) => {
        try {
            const res = await deleteMateriaRequest(id);

            const newMaterias = materias.filter((materia) => materia._id !== id);

            setMaterias(newMaterias);

        } catch (error) {
            setErrors(error.response.data);
        }
    }

    useEffect(() => {
        getMaterias();
    },[]);

    useEffect(() => {
        if (errors.length > 0) {

            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [errors]);

    return (
        <MateriasContext.Provider
            value={{
                materias,
                materiaSelected,
                errors,
                getMaterias,
                selectMateria,
                getMateria,
                addMateria,
                updateMateria,
                deleteMateria
            }}
        >
            {children}
        </MateriasContext.Provider>
    );
}