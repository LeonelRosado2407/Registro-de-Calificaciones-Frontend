import ModalHeader from '../ModalHeader'
import Modal from '../Modal'
import {
    Input,
    Typography,
} from "@material-tailwind/react";
import ModalBody from '../ModalBody'
import { useEffect, useState } from 'react';
import { useAlumnos } from '../../../context/AlumnosContext';

export const AddAlumno = ({ open, onClose }) => {
    return (
        <div>
            <Modal open={open} onClose={onClose} size='xl'>
                <ModalHeader className="p-5">
                    <div className="flex items-center justify-between">
                        <Typography className="mb-1 text-info" variant="h4">
                            Agregar Un Nuevo Alumno
                        </Typography>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5" onClick={onClose}>
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </div>
                    <Typography className="mb-5" color="gray" variant="lead">
                        Por favor proporcione los datos del alumno
                    </Typography>
                </ModalHeader>

                <ModalBody clasName="pl-5 grid gap-3 mb-10">
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Nombre
                    </Typography>
                    <Input label="Nombre" />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Edad
                    </Typography>
                    <Input label="Edad" />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Correo
                    </Typography>
                    <Input label="Correo" />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Contraseña
                    </Typography>
                    <Input label="Contraseña" />
                </ModalBody>

                <div className=" flex flex-col md:flex-row justify-end">
                    <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={onClose}>
                        <span className=" text-xs font-semibold">CANCELAR</span>
                    </button>

                    <button className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " onClick={onClose}>
                        <span className=" text-xs font-semibold text-background">AGREGAR ALUMNO</span>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export const UpdateAlumno = ({ open, onClose, size }) => {
    const { alumnoUpdate } = useAlumnos();
    const [nombres, setNombres] = useState(alumnoUpdate.nombres || ''); // Provide initial value for nombres state
    const [apellidos, setApellidos] = useState(alumnoUpdate.apellidos || ''); // Provide initial value for apellidos state
    const [edad, setEdad] = useState(alumnoUpdate.edad || ''); // Provide initial value for edad state
    const [grado, setGrado] = useState(alumnoUpdate.grado || ''); // Provide initial value for grado state

    useEffect(() => {
        setNombres(alumnoUpdate.nombres);
        setApellidos(alumnoUpdate.apellidos);
        setEdad(alumnoUpdate.edad);
        setGrado(alumnoUpdate.grado);
    }, [alumnoUpdate])

    return (
        <div>
            <Modal open={open} onClose={onClose} size={size}>
                <ModalHeader className="p-5">
                    <div className="flex items-center justify-between">
                        <Typography className="mb-1 text-info" variant="h4">
                            Editar Alumno
                        </Typography>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5" onClick={onClose}>
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </div>
                    <Typography className="mb-5" color="gray" variant="lead">
                        Por favor proporcione los datos del alumno
                    </Typography>
                </ModalHeader>

                <ModalBody clasName="pl-5 grid gap-3 mb-10">
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Nombres
                    </Typography>
                    <Input label="Nombre" value={nombres} onChange={e => setNombres(e.target.value)} />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Apeliidos
                    </Typography>
                    <Input label="Apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)} />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Edad
                    </Typography>
                    <Input label="Edad" value={edad} onChange={e => setEdad(e.target.value)} />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Grado
                    </Typography>
                    <Input label="Grado" value={grado} onChange={e => setGrado(e.target.value)} />
                </ModalBody>

                <div className=" flex flex-col md:flex-row justify-end">
                    <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={onClose}>
                        <span className=" text-xs font-semibold">CANCELAR</span>
                    </button>

                    <button className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " onClick={onClose}>
                        <span className=" text-xs font-semibold text-background">EDITAR ALUMNO</span>
                    </button>
                </div>
            </Modal>
        </div>
    )
}
