
import NavBar from './assets/components/NavBar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Inicio from './assets/pages/Inicio'
import QuienSoy from './assets/pages/QuienSoy'
import Proyectos from './assets/pages/Proyectos'
import Contacto from './assets/pages/Contacto'
import { Box } from '@mui/material'
import Boton from './assets/components/Boton'

function App() {
  const navLinks=[
    {
        title:"Inicio", path:"/"
    },
    {
        title:"Quien Soy?", path:"/QuienSoy"
    },
    {
        title:"Proyectos", path:"/Proyectos"
    },
    {
        title:"Contacto", path:"/Contacto"
    },
]

  return (
   
      <Box marginTop={16}>
      <BrowserRouter>
      <NavBar navLinks={navLinks}/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/QuienSoy" element={<QuienSoy/>}/>
      <Route path="/Proyectos" element={<Proyectos/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>
      
      
      </Routes>
      <Boton></Boton>
      </BrowserRouter>
       </Box>
   
  )
}

export default App
