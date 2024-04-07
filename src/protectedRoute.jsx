import { useAuth } from "./context/AuthContext.jsx"
import {
    Navigate, 
    Outlet
} from "react-router-dom";

import LoadingComponent from "./components/LoadingComponent.jsx";

export default function protectedRoute() {

    const{usuario, isAutenticated, loading} = useAuth();

    console.log(isAutenticated,loading);

    if(loading) return <LoadingComponent/>
    if (!loading && !isAutenticated) return <Navigate to={'/login'}/>

  return (
    <Outlet/>
  );
}
