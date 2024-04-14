import ModalHeader from '../ModalHeader'
import Modal from '../Modal'
import {
    Input,
    Typography,
} from "@material-tailwind/react";
import ModalBody from '../ModalBody'
import { useEffect, useState } from 'react';
import { useMaterias } from '../../../context/MateriasContext';
import { useForm } from "react-hook-form";



export const  AddMateria = ({open, onClose}) => {
    const{ register, handleSubmit, formState:{errors}, reset } = useForm();
    const { addMateria, errors:MateriaErrors } = useMaterias();

    useEffect(()=>{
        if (open == false) {
            reset();
        }
    },[open])

    const onSubmit = handleSubmit(async (data) =>{
        const obMateria ={
            nombre : data.Nombres,
            calificacionAprobatoria: parseFloat(data.calificacionMinima)
        }
        addMateria(obMateria);

        onClose();
    })

    return (
        <div>
            <Modal open={open} onClose={onClose} size='xl'>
                <ModalHeader className="p-5">
                    <div className="flex items-center justify-between">
                        <Typography className="mb-1 text-info" variant="h4">
                            Agregar Una Materia
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
                        Por favor proporcione los datos de la materia
                    </Typography>
                </ModalHeader>

                <form action="" onSubmit={onSubmit}>
                    <ModalBody clasName="pl-5 grid gap-3 mb-10">
                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Nombres
                        </Typography>
                        <Input label="Nombres" {...register("Nombres",{required:true})}/>
                        {errors.Nombres && (<p className="text-red-500">Este campo es requerido</p>)}

                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Calificación Mínima
                        </Typography>
                        <Input label="Calificación Mínima" {...register("calificacionMinima",{required:true})}/>
                        {errors.calificacionMinima && (<p className="text-red-500">Este campo es requerido</p>)}

                    </ModalBody>

                    <div className=" flex flex-col md:flex-row justify-end">
                        <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={onClose}>
                            <span className=" text-xs font-semibold">CANCELAR</span>
                        </button>

                        <button className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " type='submit'>
                            <span className=" text-xs font-semibold text-background">AGREGAR MATERIA</span>
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export const UpdateMateria = ({open, onClose, size}) => {
    const {
      materiaSelected,
      errors: MateriaErrors,
      updateMateria,
    } = useMaterias();

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    useEffect(()=>{
        if (open == false) {
            reset();
        }
    },[open])
    

    useEffect(()=>{
        if (open && materiaSelected._id !== "") {
            console.log(open);

            reset({
                Nombre: materiaSelected.nombre,
                calificacionMinima: materiaSelected.calificacionAprobatoria
            })
        }
    },[open, materiaSelected, reset]);

    const onSubmit = handleSubmit(async (data) =>{
        // console.log(data);
        const obMateria ={
            nombre : data.Nombre,
            calificacionAprobatoria: parseFloat(data.calificacionMinima)
        }

        updateMateria(materiaSelected._id, obMateria);

        onClose();

        
    });

    return (
        <div>
            <Modal open={open} onClose={onClose} size={size}>
                <ModalHeader className="p-5">
                    <div className="flex items-center justify-between">
                        <Typography className="mb-1 text-info" variant="h4">
                            Editar Una Materia
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
                        Por favor proporcione los datos de la materia
                    </Typography>
                </ModalHeader>

                <form action="" onSubmit={onSubmit}>
                    <ModalBody clasName="pl-5 grid gap-3 mb-10">
                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Nombre
                        </Typography>
                        <Input label="Nombre" {...register("Nombre",{required:true})}/>
                        {errors.Nombre && (<p className="text-red-500">Este campo es requerido</p>)}

                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Calificación Mínima
                        </Typography>
                        <Input label="Calificación Mínima" {...register("calificacionMinima",{required:true})}/>
                        {errors.calificacionMinima && (<p className="text-red-500">Este campo es requerido</p>)}

                    </ModalBody>

                    <div className=" flex flex-col md:flex-row justify-end">
                        <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={onClose}>
                            <span className=" text-xs font-semibold">CANCELAR</span>
                        </button>

                        <button className=" bg-warning mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " type='submit'>
                            <span className=" text-xs font-semibold text-background">EDITAR MATERIA</span>
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export const DeleteMateria = ({open, onClose }) =>{
    const {
        materiaSelected,
        errors: MateriaErrors,
        deleteMateria,
      } = useMaterias();
 
    
      const eliminarMateria = async () => {
        deleteMateria(materiaSelected._id);
        onClose();
      }

      return (
        <div>
          <Modal open={open} onClose={onClose} size="xl">
            <ModalHeader className="p-5">
              <div className="flex items-center justify-between">
                <Typography className="mb-1 text-info" variant="h4">
                  Eliminar Alumno {materiaSelected.nombre}
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
                ¿Está seguro de que quiere eliminar La materia {materiaSelected.nombre}?
              </Typography>
            </ModalHeader>

            <div className=" flex flex-col md:flex-row justify-end">
            <button
              className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400"
              onClick={onClose}
            >
              <span className=" text-xs font-semibold">CANCELAR</span>
            </button>

            <button
              className=" bg-danger mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl "
              onClick={eliminarMateria}
              type="submit"
            >
              <span className=" text-xs font-semibold text-background">
                ELIMINAR MATERIA
              </span>
            </button>
          </div>
          </Modal>
        </div>
      );
    
    }
