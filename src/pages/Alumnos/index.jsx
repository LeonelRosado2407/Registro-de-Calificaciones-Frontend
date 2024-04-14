import { PencilIcon, UserPlusIcon, ArchiveBoxIcon  } from "@heroicons/react/24/solid"
import {
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Card
} from "@material-tailwind/react";
import { useEffect,useState } from "react";
import CardPageComponent from "../../components/CardPageComponent.jsx";
import Table from '../../components/Tabla/TablaComponent.jsx';

import { useAlumnos } from "../../context/AlumnosContext";
import { AddAlumno, UpdateAlumno, DeleteAlumno } from "../../components/Modal/Alumnos/ModalAddAlumno.jsx";

//  nombre,edad,correo y contraseña
export default function index() {

  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpen = () => setOpenAdd(!openAdd);
  const handleOpenUpdate = () => setOpenUpdate(!openUpdate);
  const handleDelete = () => setOpenDelete(!openDelete);

  const openUpdateModal = (alumno) => {
    selectAlumno(alumno);
    handleOpenUpdate();
  }

  const openDeleteModal = (alumno) => {
    selectAlumno(alumno);
    handleDelete();
  }


  const { alumnos, selectAlumno } = useAlumnos();

  const headers = ["Nombres", "Apellidos", "Edad", "Grado", "Opciones"]

  return (
    <>
      <CardPageComponent>
        <Card>
          <CardHeader floated={false} shadow={false} className="rounded-none" color="transparent">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Alumnos
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Lista de información de Alumnos
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button onClick={handleOpen} className="flex items-center gap-3 bg-info" size="sm">
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Añadir Alumno
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardBody className="overflow-scroll md:overflow-hidden px-5">
            <Table>
              <thead>
                <tr>
                  {headers.map((header, index) => {
                    return (
                      <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70" key={index}>
                        <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                          <span>{header}</span>
                        </Typography>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => {
                  return (
                    <tr key={alumno._id}>
                      <td className="">
                        <Typography variant="small" color="blue-gray" className="font-normal p-4" >
                          {alumno.nombres}
                        </Typography>
                      </td>
                      <td className="">
                        <Typography variant="small" color="blue-gray" className="font-normal p-4">
                          {alumno.apellidos}
                        </Typography>
                      </td>
                      <td className="">
                        <Typography variant="small" color="blue-gray" className="font-normal p-4">
                          {alumno.edad}
                        </Typography>
                      </td>
                      <td className="">
                        <Typography variant="small" color="blue-gray" className="font-normal p-4">
                          {alumno.grado}
                        </Typography>
                      </td>
                      <td className="">
                        <Tooltip content="Editar Alumno">
                          <IconButton variant="text" onClick={() => {
                            openUpdateModal(alumno)
                          }}>
                            <PencilIcon className="h-4 w-4 text-warning" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Eliminar Alumno">
                          <IconButton variant="text" onClick={() => {
                            openDeleteModal(alumno)
                          }}>
                            <ArchiveBoxIcon className="h-4 w-4 text-danger"  />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </CardPageComponent>

      <AddAlumno open={openAdd} onClose={handleOpen} size='xl' />
      <UpdateAlumno open={openUpdate} onClose={handleOpenUpdate} size='xl' />
      <DeleteAlumno open={openDelete} onClose={handleDelete} size='xl' />

    </>

  );
}
