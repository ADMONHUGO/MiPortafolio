import './App.css'
import AptitudesComponent from './components/Aptitudes'
import DatosPersonales from './components/DatosPersonales'
import LenguajeHerramientasConponent from './components/LenguajesHerramientas'
import PortafolioComponent from './components/Portafolio'

function App() {
  return (
    <>
        <DatosPersonales/>
        <AptitudesComponent/>
        <LenguajeHerramientasConponent/>
        <PortafolioComponent />
    </>
  )
}

export default App
