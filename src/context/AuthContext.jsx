
import { 
    createContext, 
    useState, 
    useContext, 
    useEffect 
} from "react";

import { 
    registerRequest,
    loginRequest, 
    verifyTokenRequest
 } from "../api/auth.js";

import Cookies from "js-cookie";
//creamos un contexto
export const AuthContext = createContext();

//usamos el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

//creamos un provider
export const AuthProvider = ({children}) => {

    const [usuario, setUsuario] = useState(null);
    const [isAutenticated, setIsAutenticated] = useState(false);
    const [errors, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user)=>{
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUsuario(res.data);
            setIsAutenticated(true);
        } catch (error) {
            // console.log(error.response.data);
            setError(error.response.data);
        }
    }

    const singIn = async(user) =>{
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setUsuario(res.data);
            setIsAutenticated(true);
        } catch (error) {
            console.log(error);
            // setError(error.response.data);
        }
    }

    useEffect(()=>{
        if (errors.length > 0) {

            const timer = setTimeout(() => {
                setError([]);
            }, 3000);

            return () => clearTimeout(timer);
        }
    },[errors]);

    useEffect(()=>{
        async function checkLogin() {
            const cookies = Cookies.get();
            // console.log(cookies);
        
            if (!cookies.access_token) {
                setIsAutenticated(false);
                setLoading(false);
                return setUsuario(null);
            }

            try {
                const res = await verifyTokenRequest(cookies.access_token)  
                // console.log(res);
                if (!res.data) {
                    setIsAutenticated(false);
                    setLoading(false);
                    return;
                } 

                setIsAutenticated(true);
                setUsuario(res.data);
                setLoading(false); 
            } catch (error) {
                setIsAutenticated(false);
                setUsuario(null);
                setLoading(false);
            }
            
        }
        checkLogin();
    },[]);


    return (

        <AuthContext.Provider value={{
            signup,
            singIn,
            usuario,
            isAutenticated,
            errors,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}
