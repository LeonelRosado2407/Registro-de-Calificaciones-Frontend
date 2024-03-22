import { useState,useEffect } from "react";
import CardPageComponent from "../components/CardPageComponent";
import { Card, Typography } from "@material-tailwind/react";

export default function Home() {
    const [currentData, setCurrentData] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentData(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const options = { timeZone: 'America/Mexico_City' };
    const formattedDate = currentData.toLocaleString('en-US', options);

    
    return(
        <CardPageComponent>
            <Card className="w-full min-h-screen" color="transparent">
                <figure className="relative min-h-screen w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src="/src/assets/img/logoMaster.png"
                        alt="nature image"
                    />
                    <div>
                      
                    </div>
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>

                        <Typography color="gray" className="mt-2 font-normal">
                            {formattedDate}
                        </Typography>
                        </div>
                        <Typography variant="h5" color="blue-gray">
                            xd
                        </Typography>
                    </figcaption>
                </figure>
            </Card>
        </CardPageComponent>
        );
    }

