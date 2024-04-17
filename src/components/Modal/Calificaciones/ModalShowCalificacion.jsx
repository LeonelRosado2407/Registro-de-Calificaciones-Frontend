import { useState, useEffect } from 'react'
import Modal from '../Modal.jsx';
import ModalHeader  from '../ModalHeader.jsx';
import ModalBody from '../ModalBody.jsx';

import { useCalificaciones } from '../../../context/CalificacionContext';
import { Input, Typography } from '@material-tailwind/react';

import { PencilIcon } from '@heroicons/react/16/solid';
import { EditCalificacion } from './ModalEditCalificacion.jsx';
import { DeleteCalificacion } from './ModalDeleteCalificacion.jsx';

export const ModalShowCalificacion = ({open, onClose}) => {

    const {alumnoSelected, calificaciones, selectMateria, selectCalificacion } = useCalificaciones();

    const [obCalificacion, setObCalificacion] = useState([]);

    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    
    const handleOpenModalEdit = () => setOpenModalEdit(!openModalEdit);
    const handleOpenModalDelete = () => setOpenModalDelete(!openModalDelete);

    const openEditModal = async (calificacion) => {
        const objMateria ={
            materiaId: calificacion.materiaId,
            materia: calificacion.materia,
        }
        // console.log(objMateria);
        selectMateria(objMateria);
        selectCalificacion(calificacion);
        handleOpenModalEdit();
    }
    const openDeleteModal = async (calificacion) => {
        const objMateria ={
            materiaId: calificacion.materiaId,
            materia: calificacion.materia,
        }
        // console.log(objMateria);
        selectMateria(objMateria);
        selectCalificacion(calificacion);
        handleOpenModalDelete();
    }

    useEffect(() => {
        if (calificaciones.calificaciones != undefined || calificaciones.calificaciones != null) {
            setObCalificacion(calificaciones.calificaciones);

        }
    }, [calificaciones]);




    return(
        <>
        <Modal open={open} onClose={onClose} size="xl">
        <ModalHeader className="p-5">
            <div className="flex items-center justify-between">
                <Typography className="mb-1 text-info" variant="h4">
                    Calificaciones de <span className='text-black'>{calificaciones.alumno}</span>
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
                Por favor proporcione la calificación correspondiente
            </Typography>
        </ModalHeader>

            <ModalBody clasName="pl-5 grid gap-3 mb-10">
                {
                    obCalificacion.map((calificacion, index) => {
                        return(
                            <div key={index}>
                                <div className='flex md:justify-between flex-col md:flex-row'>
                                    <Typography className="-mb-1 w-full" color="blue-gray" variant="h6">
                                        {calificacion.materia}
                                    </Typography>
                                    <div className="w-full flex flex-row gap-2">
                                        <Input 
                                            label="Calificación" 
                                            value={calificacion.calificacion} 
                                            readOnly
                                            error={calificacion.reprobado}
                                        />

                                        <button className=" bg-warning mx-1 px-4 py-2.5 rounded-md hover:shadow-xl " onClick={()=>{
                                            openEditModal(calificacion)
                                            }}>
                                            <PencilIcon className="h-5 w-5 text-background" />
                                        </button>

                                        <button className=" bg-danger mx-1 px-4 py-2.5 rounded-md hover:shadow-xl " onClick={() => {
                                            openDeleteModal(calificacion)
                                        }}>
                                            <PencilIcon className="h-5 w-5 text-background" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </ModalBody>

            <div className=" flex flex-col md:flex-row justify-end">
                <button className=" bg-success mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " onClick={onClose}>
                    <span className=" text-xs font-semibold text-background">ACEPTAR CALIFICACIONES</span>
                </button>
            </div>
    </Modal>
    
    <EditCalificacion open={openModalEdit} onClose={handleOpenModalEdit} /> 
    <DeleteCalificacion open={openModalDelete} onClose={handleOpenModalDelete} size="sm"/>

    </>

    );

}


