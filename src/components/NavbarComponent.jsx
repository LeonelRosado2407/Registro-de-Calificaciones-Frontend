import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useAlumnos } from "../context/AlumnosContext";
import { useMaterias } from "../context/MateriasContext";


function NavList() {
  const { getAlumnos } = useAlumnos();
  const { getMaterias } = useMaterias();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/Alumnos" className="flex items-center hover:text-info transition-colors" onClick={getAlumnos}>
            Alumnos
        </NavLink>
      </Typography>

      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/Materias" className="flex items-center hover:text-info transition-colors" onClick={getMaterias}>
            Materias
        </NavLink>
      </Typography>

      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/Calificaciones" className="flex items-center hover:text-info transition-colors" onClick={getMaterias}>
            Calificaciones
        </NavLink>
      </Typography>

      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/Profile" className="flex items-center hover:text-info transition-colors">
            Perfil
        </NavLink>
      </Typography>
      
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/logout" className="flex items-center hover:text-info transition-colors">
            Cerrar Sesión
        </NavLink>
      </Typography>

    </ul>
  );
}
 
export default function NavbarComponent() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <div className="p-5 md:p-10 w-full h-auto">
        <div className="bg-background rounded-lg">
            <Navbar className="mx-auto max-w-full px-6 py-3" color="transparent">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                    variant="h5"
                    className="mr-4 cursor-pointer py-1.5"
                    >
                    <NavLink to="/" className="flex items-center hover:text-info transition-colors">
                        Panel de Alumnos
                    </NavLink>
                    </Typography>
                    <div className="hidden lg:block">
                    <NavList />
                    </div>
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
        </div>
    </div>
  );
}