import { PencilIcon, UserPlusIcon, ArchiveBoxIcon  } from "@heroicons/react/24/solid"
import {
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
    Card,
    Alert,
  } from "@material-tailwind/react";

  import { useEffect,useState } from "react";
  import { useMaterias } from "../../context/MateriasContext";
  import CardPageComponent from "../../components/CardPageComponent";
  import Table from "../../components/Tabla/TablaComponent";
  import { AddMateria, DeleteMateria, UpdateMateria } from "../../components/Modal/Materias/ModalMaterias";


export default function Index() {
    const {errors} = useMaterias();
    const headers = ["Nombre","Calificación Mínima", "Opciones"];
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openError, setOpenError] = useState(false);

    useEffect(()=>{
        if(errors.length > 0){
            setOpenError(true);
        }else{
            setOpenError(false);
        }
    },[errors]);


    const { materias, selectMateria } = useMaterias();

    const handleOpen = () => setOpenAdd(!openAdd);
    const handleUpdate = () => setOpenUpdate(!openUpdate);
    const handleDelete = () => setOpenDelete(!openDelete);

    const openUpdateModal = (materia) =>{
        selectMateria(materia);
        handleUpdate();
    }

    const openDeleteModal = (materia) =>{
        selectMateria(materia);
        handleDelete();
    }

    return (
      <>
      <CardPageComponent>
        <Card>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none"
          color="transparent"
        >
          <div className="mb-8 flex items-center flex-col md:flex-row md:justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
            Materias
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
            Lista de información de las Materias
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
            onClick={handleOpen}
            className="flex items-center gap-3 bg-info"
            size="sm"
            >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Añadir
            Materia
            </Button>
          </div>
          </div>

          <div className="absolute top-0 right-0">
          <Alert
            open={openError}
            onClose={() => setOpenError(false)}
            className="bg-warning z-100"
            ref={(el) => {
            if (el && openError) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            }}
          >
            {
            errors.map((error,index)=>{
              return (
              <Typography  className=" text-yellow-900" key={index}>
                {error}
              </Typography>
              );
            })
            }
          </Alert>
          </div>

        </CardHeader>
        <CardBody className="overflow-scroll md:overflow-hidden px-5">
          <Table>
          <thead>
            <tr>
            {headers.map((header, index) => {
              return (
              <th
                className="cursor-pointer border-y border-blue-gray-100 bg-info p-4 transition-colors hover:bg-opacity-70"
                key={index}
              >
                <Typography
                variant="h6"
                color="white"
                className="flex items-center justify-between gap-2 font-bold leading-none opacity-70"
                >
                <span>{header}</span>
                </Typography>
              </th>
              );
            })}
            </tr>
          </thead>
          <tbody>
            {materias.map((materia) => {
            return (
              <tr key={materia._id}>
              <td className="">
                <Typography
                variant="small"
                color="blue-gray"
                className="font-normal p-4"
                >
                {materia.nombre}
                </Typography>
              </td>

              <td className="">
                <Typography
                variant="small"
                color="blue-gray"
                className="font-normal p-4"
                >
                {materia.calificacionAprobatoria}
                </Typography>
              </td>
              <td className="">
                <Tooltip content="Editar Materia">
                <IconButton
                  variant="text"
                  onClick={() => {
                  openUpdateModal(materia);
                  }}
                >
                  <PencilIcon className="h-4 w-4 text-warning" />
                </IconButton>
                </Tooltip>
                <Tooltip content="Eliminar Materia">
                <IconButton
                  variant="text"
                  onClick={() => {
                  openDeleteModal(materia);
                  }}
                >
                  <ArchiveBoxIcon className="h-4 w-4 text-danger" />
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
          <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
          >
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

      <AddMateria open={openAdd} onClose={handleOpen} size='xl'/>
      <UpdateMateria open={openUpdate} onClose={handleUpdate} size='xl'/>
      <DeleteMateria open={openDelete} onClose={handleDelete} size='xl'/>
      </>
    );
}
