import { useState, useEffect } from "react";
import { Input , Select, Typography, Option } from '@material-tailwind/react';

import Modal from '../Modal.jsx';
import ModalHeader  from '../ModalHeader.jsx';
import ModalBody from '../ModalBody.jsx';

import { useAlumnos } from "../../../context/AlumnosContext.jsx";
import { useMaterias } from "../../../context/MateriasContext.jsx";
import { useCalificaciones } from '../../../context/CalificacionContext';

export const AddCalificacion = ({open, onClose}) => {

    const {alumnoSelected, calificaciones, addCalificacion} = useCalificaciones();
    const { materias } = useMaterias();
    const { alumnos } = useAlumnos();
    
    const [materia, setMateria] = useState("");
    const [alumno, setAlumno] = useState("");
    const [calificacion , setCalificacion] = useState("");
    const [errorValidation , setErrorValidation] = useState("");

    useEffect(() => {
        if (materia == "" || alumno == "" || calificacion == "") {
            setErrorValidation("Todos los campos son requeridos");
        }else{
            setErrorValidation("");
        }
    }, [materia, alumno, calificacion])

    const onSubmit = async () => {

        if (materia === "" || alumno === "" || calificacion === "" ) return null;
        if (parseFloat(calificacion) >10) return setErrorValidation("La calificación no puede ser mayor a 10");

        const obCalificacion= {
            alumnoId: alumno,
            materiaId: materia,
            calificacion: parseFloat(calificacion)
        }
        addCalificacion(obCalificacion);
        onClose();
        resetFields();
    };

    const resetFields = () =>{
        setMateria("");
        setAlumno("");
        setCalificacion("");
    }




    return (
        <Modal open={open} onClose={onClose} size="xl">
            <ModalHeader className="p-5">
                <div className="flex items-center justify-between">
                    <Typography className="mb-1 text-info" variant="h4">
                        Agregar Calificación
                    </Typography>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={onClose}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <Typography className="mb-5" color="gray" variant="lead">
                    Por favor proporcione los Datos Correspondientes
                </Typography>
                <Typography color="red" >{errorValidation}</Typography>
            </ModalHeader>

                <ModalBody clasName="pl-5 gap-3 mb-10 flex flex-row">
                    
                    <div className="w-72">
                        <Select label="Materia"
                        value={materia}
                        onChange={(value) => setMateria(value)}
                        error={materia === "" ? true : false}
                        >
                            {
                                materias.map((materia,index)=>{
                                   return <Option key={index} value={materia._id}>{materia.nombre}</Option>
                                })
                            }
                        </Select>
                    </div>

                    <div className="w-72">
                        <Select label="Alumno" 
                        value={alumno}
                        onChange={(value) => setAlumno(value)}
                        error={alumno === "" ? true : false}
                        >
                            {
                                alumnos.map((alumno,index)=>{
                                   return <Option key={index} value={alumno._id}>{alumno.nombres + " " + alumno.apellidos}</Option>
                                })
                            }
                        </Select>
                    </div>

                    <div className="w-72">
                        <Input label="Calificación" onChange={(e)=>{
                            setCalificacion(e.target.value);
                        }}
                        error={calificacion === ""? true: false}
                        type="number"
                        value={calificacion}
                        />
                    </div>


                </ModalBody>

                <div className="flex flex-col md:flex-row justify-end">

                    <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={()=>{
                        onClose();
                        resetFields();
                    
                    }} >
                        <span className="text-xs font-semibold">CANCELAR</span>
                    </button>

                    <button className="bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl" type="button" onClick={onSubmit}>
                        <span className="text-xs font-semibold text-background">
                            AGREGAR CALIFICACIÓN
                        </span>
                    </button>

                </div>
        </Modal>
    );

}

