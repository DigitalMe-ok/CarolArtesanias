import './App.css'
import AboutMe from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Caracteristicas from './Components/Caracteristicas/Caracteristicas'
import Footer from './Components/Footer/Footer'
import Contacto from './Components/Formulario/Formulario'
import NavPrincipal from './Components/Navbar/Navbar'
import MisProductos from './Components/Productos/Productos'
import Envios from './Components/Envios/Envios'




function App() {


  return (
    <>
      <NavPrincipal />
      <Banner />
      <AboutMe />
      <Caracteristicas />
      <MisProductos />
       <Envios />  
      <Contacto />
      <Footer />

    </>
  )
}

export default App
