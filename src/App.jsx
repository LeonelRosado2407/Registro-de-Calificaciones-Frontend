import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext.jsx";
import { AlumnosProvider } from "./context/AlumnosContext.jsx";
import ProtectedRoute from './protectedRoute.jsx';


//Pages
import Home from './pages/Home'
import IndexAlumnos from './pages/Alumnos/index' 
import IndexMaterias from './pages/Materias/Index.jsx';
import IndexCalificaiones from "../src/pages/Calificaiones/index.jsx"

//Auth
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Pruebas from './pages/Pruebas';
import LogoutComponent from './components/LogoutComponent.jsx';
import { MateriasProvider } from './context/MateriasContext.jsx';
import { CalificaionProvider } from './context/CalificacionContext.jsx';


function App() {

  return (
    <AuthProvider>
      <AlumnosProvider>
        <MateriasProvider>
          <CalificaionProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />

                <Route element={<ProtectedRoute />}>

                  <Route path="/pruebas" element={<Pruebas />} />
                  <Route path="/logout" element={<LogoutComponent />} />
                  <Route path="/Alumnos" element={<IndexAlumnos />} />
                  <Route path="/Materias" element={<IndexMaterias />} />
                  <Route path="/Calificaciones" element={<IndexCalificaiones />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CalificaionProvider>
        </MateriasProvider>
      </AlumnosProvider>
    </AuthProvider>
  );


}

export default App
