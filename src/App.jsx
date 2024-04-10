import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext.jsx";
import { AlumnosProvider } from "./context/AlumnosContext.jsx";
import ProtectedRoute from './protectedRoute.jsx';


//Pages
import Home from './pages/Home'
import IndexAlumnos from './pages/Alumnos/index' 

//Auth
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Pruebas from './pages/Pruebas';
import LogoutComponent from './components/LogoutComponent.jsx';


function App() {

  return (
    <AuthProvider>
      <AlumnosProvider>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/pruebas" element={<Pruebas />} />
              <Route path="/logout" element={<LogoutComponent />} />

              <Route path='/Alumnos' element={<IndexAlumnos />} />
            </Route>

          </Routes>
        </BrowserRouter>

      </AlumnosProvider>
    </AuthProvider>
  )


}

export default App
