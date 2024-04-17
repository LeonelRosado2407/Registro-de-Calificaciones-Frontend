import { useState, useEffect } from "react";
import { Input , Typography } from '@material-tailwind/react';

import Modal from '../Modal.jsx';
import ModalHeader  from '../ModalHeader.jsx';
import ModalBody from '../ModalBody.jsx';

import { useCalificaciones } from '../../../context/CalificacionContext';

export const DeleteCalificacion = ({open, onClose, size}) => {
    
    const {alumnoselected, materiaSelected, calificacionSelected, deleteCalificacion } = useCalificaciones();

    const [errorValidation, setErrorValidation] = useState('');
    const [calificacion, setCalificacion] = useState(0);



    useEffect(() => {
        if (calificacionSelected.calificacion != null || calificacionSelected.calificacion != undefined) {
            setCalificacion(calificacionSelected.calificacion);   
        }
    }
    ,[alumnoselected, materiaSelected, calificacionSelected]);

    const eliminarCalificacion = async()=>{
        deleteCalificacion(calificacionSelected.calificacionId);
        onClose();
    }

    return (
        <Modal open={open} onClose={onClose} size={size}>
          <ModalHeader className="p-5">
            <div className="flex items-center justify-between">
              <Typography className="mb-1 text-info" variant="h4">
                Eliminar Calificación
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
                ¿Está Seguro de que desea eliminar la calificación?
            </Typography>
            <Typography color="red">{errorValidation}</Typography>
          </ModalHeader>
  
          <ModalBody clasName="pl-5 justify-center mb-10 items-center flex flex-row">
          <button
              className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400"
              onClick={() => {
                onClose();
              }}
            >
              <span className="text-xs font-semibold">CANCELAR</span>
            </button>
  
            <button
              className="bg-danger mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl"
              type="button"
              onClick={eliminarCalificacion}
            >
              <span className="text-xs font-semibold text-background">
                EDITAR CALIFICACIÓN
              </span>
            </button>
          </ModalBody>
        </Modal>
      );
}