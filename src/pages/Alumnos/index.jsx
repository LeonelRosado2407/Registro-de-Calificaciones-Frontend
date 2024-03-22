import CardPageComponent from "../../components/CardPageComponent";

import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";

import {
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Card,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";
import Modal from "../../components/Modal/Modal";
import ModalHeader from "../../components/Modal/ModalHeader";
import ModalBody from "../../components/Modal/ModalBody";

//  nombre,edad,correo y contraseña
export default function index() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

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
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70">
                      <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                        <span>Nombre</span>
                      </Typography>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70">
                      <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                        <span>Correo</span>
                      </Typography>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70">
                      <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                        <span>Materia 1</span>
                      </Typography>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70">
                      <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                        <span>Materia 2</span>
                      </Typography>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70">
                      <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                        <span>Materia 3</span>
                      </Typography>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70">
                      <Typography variant="h6" color="white" className="flex items-center justify-between gap-2 font-bold leading-none opacity-70">
                        <span>Editar</span>
                      </Typography>
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="">
                    <Typography variant="small" color="blue-gray" className="font-normal p-4" >
                      Leoponcio
                    </Typography>
                  </td>
                  <td className="">
                    <Typography variant="small" color="blue-gray" className="font-normal p-4">
                        Leoponcio123@gmail.com
                      </Typography>
                  </td>
                  <td className="">
                    <Typography variant="small" color="blue-gray" className="font-normal p-4">
                      10
                    </Typography>
                  </td>
                  <td className="">
                    <Typography variant="small" color="blue-gray" className="font-normal p-4">
                      10
                    </Typography>
                  </td>
                  <td className="">
                    <Typography variant="small" color="blue-gray" className="font-normal p-4">
                      10
                    </Typography>
                  </td>
                  <td className="">
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
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

      <Modal open={open} onClose={handleOpen} size='xl'>
        <ModalHeader className="p-5">
          <div className="flex items-center justify-between">
            <Typography className="mb-1 text-info" variant="h4">
              Agregar Un Nuevo Alumno
            </Typography>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5"onClick={handleOpen}>
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
            <Input label="Nombre"/>

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Edad
            </Typography>
            <Input label="Edad"/>

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Correo
            </Typography>
            <Input label="Correo"/>

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Contraseña
            </Typography>
            <Input label="Contraseña"/>
        </ModalBody>

        <div className=" flex flex-col md:flex-row justify-end">
          <button className="bg-transparent mx-2.5 px-7 py-2.5 rounded-md hover:bg-gray-400" onClick={handleOpen}>
            <span className=" text-xs font-semibold">CANCELAR</span>
          </button>

          <button className=" bg-info mx-2.5 px-7 py-2.5 rounded-md hover:shadow-xl " onClick={handleOpen}>
            <span className=" text-xs font-semibold text-background">AGREGAR USUARIO</span>
          </button>
        </div>
      </Modal>
    </>

  );
}
