import { useEffect, useState } from 'react'
import CardPageComponent from '../../components/CardPageComponent'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import { UserPlusIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

import { useAlumnos } from '../../context/AlumnosContext';
import { useCalificaciones } from '../../context/CalificacionContext';

import { ModalShowCalificacion } from '../../components/Modal/Calificaciones/ModalShowCalificacion';
import { AddCalificacion } from '../../components/Modal/Calificaciones/ModalAddcalificacion'; 


export default function index() {

    const { alumnos } = useAlumnos();
    const { selectAlumno, calificaciones, getCalificacionByAlumno } = useCalificaciones();

    const [openModal, setOpenModal] = useState(false);
    const [openModalAdd, setOpenModalAdd] = useState(false);

    const handleOpenModal = () => setOpenModal(!openModal);
    const handleOpenModalAdd = () => setOpenModalAdd(!openModalAdd);


    const openCalificaciones =  (alumno) => {
        selectAlumno(alumno);
        getCalificacionByAlumno(alumno._id);
        handleOpenModal();
    }

  return (
    <>
        <CardPageComponent>
            <Card>
                <CardHeader floated={false} shadow={false} className='rounded-none' color='transparent'>
                    <div className="mb-8 flex items-center flex-col md:flex-row md:justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                CALIFICACIONES
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Lista de calificaciones de los Alumnos
                            </Typography>   
                        </div> 
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button onClick={handleOpenModalAdd} className="flex items-center gap-3 bg-info" size="sm" >
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Añadir Calificación
                            </Button>
                        </div>          
                    </div>
                </CardHeader>
                <CardBody className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        alumnos.map((alumno, index) => (
                            <Card className="mt-6 max-w-96 min-w-56" key={index}>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {alumno.nombres} {alumno.apellidos}
                                    </Typography>
                                    <Typography>
                                        Grado: {alumno.grado}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    
                                    <Button className='flex justify-between bg-info' onClick={()=>openCalificaciones(alumno)}>

                                        <InformationCircleIcon className="h-5 w-5 mr-2" />
                                            Ver Calificaciones
                                    </Button>

                                </CardFooter>
                            </Card>
                        ))
                    }
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Porfavor Asegurese de seleccionar el alumno
                    </Typography>

                </CardFooter>
            </Card>
        </CardPageComponent>

        <ModalShowCalificacion open={openModal} onClose={handleOpenModal} />
        <AddCalificacion open={openModalAdd} onClose={handleOpenModalAdd} />
    </>
  )
}
