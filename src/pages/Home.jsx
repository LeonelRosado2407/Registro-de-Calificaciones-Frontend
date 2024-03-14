import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";


export default function Home() {
  
        return (
            <div className="w-full min-h-screen bg-info flex flex-col items-center">
                <div className=" w-full max-h-full p-5 md:p-10">
                    <Card className="w-full max-h-full p-5">
                        <Typography variant="h3" color="blue-gray">
                            Aquí debería ir el Navbar pero aun no lo he creado
                        </Typography>
                    </Card>
                </div>
                <div className=" w-full max-h-full px-5 md:px-10">
                    <Card className="w-full min-h-screen">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                            </Typography>
                            <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                </div>

            </div>
        );
    }

