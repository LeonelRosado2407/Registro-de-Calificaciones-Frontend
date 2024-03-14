
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Register(){
    return (
        <div className="w-full min-h-screen bg-info flex flex-col items-center justify-center">
            <div className="max-w-screen-md">
                <Card className="bg-background p-5 md:p-10 w-full" shadow={true}>
                    <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-1 m-1" viewBox="0 0 448 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                        </svg>
                        <Typography variant="h3" color="blue-gray">
                            Registrar una Cuenta
                        </Typography>

                    </div>
                    <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Correo Electrónico
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-info"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Contraseña
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-info"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Confirmar Contraseña
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-info"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Button className="mt-6 bg-info" fullWidth>
                            Registrarse
                        </Button>

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            ¿Ya tienes una cuenta?{" "}
                            <Link to="/Login" className="font-medium text-info">
                                Inicia Sesión
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>

        </div>
    );
}