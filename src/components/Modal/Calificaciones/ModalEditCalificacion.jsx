import { useState, useEffect } from "react";
import { Input , Select, Typography, Option } from '@material-tailwind/react';

import Modal from '../Modal.jsx';
import ModalHeader  from '../ModalHeader.jsx';
import ModalBody from '../ModalBody.jsx';

import { useCalificaciones } from '../../../context/CalificacionContext';

export const EditCalificacion = ({open, onClose}) => {
    
    const{ alumnoselected, materiaSelected, calificacionSelected, updateCalificaion } = useCalificaciones();
    
    const [errorValidation, setErrorValidation] = useState('');
    const [alumno, setAlumno] = useState({});
    const [materia, setMateria] = useState({});
    const [calificacion, setCalificacion] = useState(0);

    useEffect(() => {

        setAlumno(alumnoselected);
        setMateria(materiaSelected);

        if (calificacionSelected.calificacion != null || calificacionSelected.calificacion != undefined) {
            setCalificacion(calificacionSelected.calificacion);   
        }
    }
    ,[alumnoselected, materiaSelected, calificacionSelected]);

    const editarCalificaicon = async()=>{
        const objCalificacion = {
            alumnoId: alumno._id,
            materiaId: materia.materiaId,
            calificacion: parseFloat(calificacion)
        }
        console.log(objCalificacion);

        updateCalificaion(calificacionSelected.calificacionId, objCalificacion);
        onClose();
    }


    return (
      <Modal open={open} onClose={onClose} size="xl">
        <ModalHeader className="p-5">
          <div className="flex items-center justify-between">
            <Typography className="mb-1 text-info" variant="h4">
              Editar Calificacón
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
          <Typography color="red">{errorValidation}</Typography>
        </ModalHeader>

        <ModalBody clasName="pl-5 gap-3 mb-10 flex flex-row">
          <Input
            label="Alumno"
            value={alumno.nombres + " " + alumno.apellidos}
            onChange={(e) => setAlumno(e.target.value)}
            readOnly
          />
          <Input
            label="Materia"
            value={materia.materia}
            onChange={(e) => setMateria(e.target.value)}
            readOnly
          />
          <Input
            label="Calificación"
            value={calificacion}
            onChange={(e) => setCalificacion(e.target.value)}
            type="number"
            error={calificacion > 10 || calificacion <= 0 ? true : false}
          />
        </ModalBody>

        <div className="flex flex-col md:flex-row justify-end">
          <button
            className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400"
            onClick={() => {
              onClose();
            }}
          >
            <span className="text-xs font-semibold">CANCELAR</span>
          </button>

          <button
            className="bg-warning mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl"
            type="button"
            onClick={editarCalificaicon}
          >
            <span className="text-xs font-semibold text-background">
              EDITAR CALIFICACIÓN
            </span>
          </button>
        </div>
      </Modal>
    );
}
