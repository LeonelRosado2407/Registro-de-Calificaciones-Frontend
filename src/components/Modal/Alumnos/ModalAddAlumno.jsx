import ModalHeader from '../ModalHeader'
import Modal from '../Modal'
import {
    Input,
    Typography,
} from "@material-tailwind/react";
import ModalBody from '../ModalBody'
import { useEffect, useState } from 'react';
import { useAlumnos } from '../../../context/AlumnosContext';
import { useForm } from "react-hook-form";

export const AddAlumno = ({ open, onClose }) => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const { AddAlumno, error:AlumnosErrors } = useAlumnos();

    const onSubmit = handleSubmit(async (values) => {
        const ObjRequest = {
            nombres: values.Nombres,
            apellidos: values.Apellidos,
            edad: parseInt(values.Edad),
            grado: parseInt(values.Grado)
        }
        AddAlumno(ObjRequest);

        if(AlumnosErrors.length === 0){
            onClose();
        }
    });
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
                    {
                        AlumnosErrors.map((error,i)=>(
                            <div className="bg-danger p-5 text-background w-full rounded-lg " key={i}>  
                                {error}
                            </div>
                        ))
                    }
                </ModalHeader>

                <form action="" onSubmit={onSubmit}>
                    <ModalBody clasName="pl-5 grid gap-3 mb-10">
                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Nombres
                        </Typography>
                        <Input label="Nombres" {...register("Nombres",{required:true})}/>
                        {errors.Nombres && (<p className="text-red-500">Este campo es requerido</p>)}

                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Apellidos
                        </Typography>
                        <Input label="Apellidos" {...register("Apellidos",{required:true})}/>
                        {errors.Apellidos && (<p className="text-red-500">Este campo es requerido</p>)}

                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Edad
                        </Typography>
                        <Input label="Edad" {...register("Edad",{required:true})}/>
                        {errors.Edad && (<p className="text-red-500">Este campo es requerido</p>)}

                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Grado
                        </Typography>
                        <Input label="Grado" {...register("Grado",{required:true})}/>
                        {errors.Grado && (<p className="text-red-500">Este campo es requerido</p>)}

                    </ModalBody>

                    <div className=" flex flex-col md:flex-row justify-end">
                        <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={onClose}>
                            <span className=" text-xs font-semibold">CANCELAR</span>
                        </button>

                        <button className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " type='submit'>
                            <span className=" text-xs font-semibold text-background">AGREGAR ALUMNO</span>
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export const UpdateAlumno = ({ open, onClose, size }) => {
  const { alumnoSelected, error: AlumnosErrors, UpdateAlumno } = useAlumnos();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (open && alumnoSelected._id !== "") {
            reset({
                Nombres: alumnoSelected.nombres,
                Apellidos: alumnoSelected.apellidos,
                Edad: alumnoSelected.edad,
                Grado: alumnoSelected.grado,
            });
        }
    }, [open, alumnoSelected, reset]);

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        const ObjRequest = {
        nombres: values.Nombres,
        apellidos: values.Apellidos,
        edad: parseInt(values.Edad),
        grado: parseInt(values.Grado),
        };

        UpdateAlumno(alumnoSelected._id, ObjRequest);

        if(AlumnosErrors.length === 0){
            onClose();
        }
    });


  return (
    <div>
      <Modal open={open} onClose={onClose} size={size}>
        <ModalHeader className="p-5">
          <div className="flex items-center justify-between">
            <Typography className="mb-1 text-info" variant="h4">
              Editar Alumno
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
            Por favor proporcione los datos del alumno
          </Typography>

            {
                AlumnosErrors.map((error,i)=>(
                    <div className="bg-danger p-5 text-background w-full rounded-lg " key={i}>  
                        {error}
                    </div>
                ))
            }
        </ModalHeader>
        <form onSubmit={onSubmit}>
          <ModalBody clasName="pl-5 grid gap-3 mb-10">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Nombres
            </Typography>

            <Input
              label="Nombres"
    
              {...register("Nombres", { required: true })}
            />
            {errors.Nombres && (
              <p className="text-red-500">Este campo es requerido</p>
            )}

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Apeliidos
            </Typography>
            <Input
              label="Apellidos"
    
              {...register("Apellidos", { required: true })}
            />
            {errors.Apellidos && (
              <p className="text-red-500">Este campo es requerido</p>
            )}

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Edad
            </Typography>
            <Input 
            label="Edad" 

            {...register("Edad", { required: true })} 
            />
            {errors.Edad && (
              <p className="text-red-500">Este campo es requerido</p>
            )}

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Grado
            </Typography>
            <Input 
            label="Grado" 

            {...register("Grado", { required: true })} 
            />
            {errors.Grado && (
              <p className="text-red-500">Este campo es requerido</p>
            )}
          </ModalBody>

          <div className=" flex flex-col md:flex-row justify-end">
            <button
              className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400"
              onClick={onClose}
            >
              <span className=" text-xs font-semibold">CANCELAR</span>
            </button>

            <button
              className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl "
              // onClick={onClose}
              type="submit"
            >
              <span className=" text-xs font-semibold text-background">
                EDITAR ALUMNO
              </span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const DeleteAlumno = ({ open, onClose }) => {
    const { DeleteAlumno, error: AlumnosErrors, alumnoSelected  } = useAlumnos();
    const [alumno, setAlumno] = useState({ _id: "", nombres: "", apellidos: "", edad: "", grado: "" });

    useEffect(() => {
        if (open && alumnoSelected._id !== "") {
            console.log(alumnoSelected);
        }
    }, [open, alumnoSelected ]);

    const eliminarALumno = async()=>{
        DeleteAlumno(alumnoSelected._id);

        if(AlumnosErrors.length === 0){
            onClose();
        }
    }

    return (
        <div>
          <Modal open={open} onClose={onClose} size="xl">
            <ModalHeader className="p-5">
              <div className="flex items-center justify-between">
                <Typography className="mb-1 text-info" variant="h4">
                  Eliminar Alumno {alumnoSelected.nombres}
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
                ¿Está seguro de que quiere eliminar al alumno {alumnoSelected.nombres}?
              </Typography>
            </ModalHeader>
            {
                // AlumnosErrors.map((error,i)=>(
                //     <div className="bg-danger p-5 text-background w-full rounded-lg " key={i}>  
                //         {error}
                //     </div>
                // ))
            }

            <div className=" flex flex-col md:flex-row justify-end">
            <button
              className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400"
              onClick={onClose}
            >
              <span className=" text-xs font-semibold">CANCELAR</span>
            </button>

            <button
              className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl "
              onClick={eliminarALumno}
              type="submit"
            >
              <span className=" text-xs font-semibold text-background">
                ELIMINAR ALUMNO
              </span>
            </button>
          </div>
          </Modal>
        </div>
      );
};
