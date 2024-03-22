import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


//Pages
import Home from './pages/Home'
import IndexAlumnos from './pages/Alumnos/index' 

//Auth
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Pruebas from './pages/Pruebas';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Alumnos" element={<IndexAlumnos />} />
        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
      
    </BrowserRouter>
  )


}

export default App
