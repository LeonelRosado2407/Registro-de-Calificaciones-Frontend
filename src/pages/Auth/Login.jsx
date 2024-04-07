import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import EmailIcon from "../../components/icons/EmailIcon";
import CandadoIcon from "../../components/icons/CandadoIcon";

import { useAuth } from "../../context/AuthContext";
import { useForm ,} from "react-hook-form";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";


export default function Login() {

    const {register,handleSubmit, formState:{errors}} = useForm();

    const { singIn, isAutenticated, errors: LoginErrors } = useAuth();

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(isAutenticated){
            navigate("/");
        }
    },[isAutenticated])

    const onSubmit = handleSubmit(data =>{
        singIn(data);
    })

    return (
        <div className="w-full min-h-screen bg-info flex flex-col items-center justify-center">
            <div className="max-w-screen-md">
                <Card className="bg-background p-5 md:p-10 w-full" shadow={true}>
                    <div className="flex flex-row items-center justify-center">
                        <Typography variant="h3" color="blue-gray">
                            Iniciar Sesión
                        </Typography>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-1 m-1" viewBox="0 0 448 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                        </svg>
                    </div>
                {
                    LoginErrors.map((error,i)=>(
                        <div className=" text-background  bg-danger p-2  " key={i}>  
                            {error}
                        </div>
                    ))
                }
                    <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
                        <div className="mb-1 flex flex-col gap-6">
                            <div className="flex flex-row">
                                <EmailIcon className="pr-2" color='black' />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Correo Electrónico
                                </Typography>
                            </div>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-info"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("email",{required:true})}
                            />
                            {errors.email && (<p className="text-red-500">Este campo es requerido</p>)}
                                                        
                            <div className="flex flex-row">
                                <CandadoIcon className="pr-2" color="warning"/>
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Contraseña
                                </Typography>
                            </div>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-info"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("password",{required:true})}
                            />
                            {errors.password && (<p className="text-red-500">Este campo es requerido</p>)}
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    Recuérdame
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                            className=" checked:bg-info checked:border-info"
                        />
                        <Button className="mt-6 bg-info" fullWidth type="submit">
                            Iniciar Sesión
                        </Button>

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            ¿No tienes una cuenta?{" "}
                            <Link to="/Register" className="font-medium text-info">
                                Regístrate
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>

        </div>

    );
}