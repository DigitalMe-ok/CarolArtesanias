import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const date = new Date();
    const [respAnimation,setRespAnimation] = useState(null)
    const[pantWidth,setPantWidth] = useState(null)
    const arregloAnimacion = () =>{
      let pantalla = window.innerWidth;
      console.log(pantalla);
      setPantWidth(pantalla);
      pantalla <= 1095 ? setRespAnimation(true) 
      :
      setRespAnimation(false);
      
      
    }
    useEffect(() =>{
        arregloAnimacion();
        window.addEventListener("resize", (e)=>{
          let pantalla = window.innerWidth

          
          setPantWidth(pantalla)})
        return () => window.addEventListener("resize",(e)=>{
          let pantalla = window.innerWidth

          
          setPantWidth(pantalla)})
      },[""])
    
    if(respAnimation === null || pantWidth === null){
      return <div className='w-screen text-xl text-stone-900'>Cargando...</div>
    }
    else{
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className={`${pantWidth >990? "grid grid-cols-4" : "flex flex-col "} ${pantWidth <= 1115? " gap-1  ": "gap-8"  } mb-8`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Carol Artesanías</h3>
            <p className="text-gray-300 mb-4">
              Creaciones únicas hechas con pasión en Córdoba. Cada pieza es un pedacito de alma artesanal.
            </p>
            <div className="flex gap-4">
              <a aria_label="Ir al Facebook" href="" className="text-2xl hover:text-pink-400"><Facebook /></a>
              <a aria_label="Ir al Instagram" href="https://www.instagram.com/carol_artesanias_" className="text-2xl hover:text-pink-400"><Instagram /></a>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Mapa del Sitio</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a aria_label="Ir a la sección inicial" href="#home" className="hover:text-pink-400">Inicio</a></li>
              <li><a aria_label="Ir a la sección nosotros" href="#about" className="hover:text-pink-400">Nosotros</a></li>
              <li><a aria_label="Ir a la sección de productos" href="#products" className="hover:text-pink-400">Productos</a></li>
              <li><a aria_label='Ir a la sección de contacto' href="#contact" className="hover:text-pink-400">Contacto</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ 
              opacity: 0,
              x: respAnimation? 0:50,
              y:respAnimation?50:0 
            }}
            whileInView={{
              opacity: 1,
              x: respAnimation?0:0,
              y:respAnimation?0:0 
            }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>carolartesaniascba@gmail.com</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+54 351 614-0868</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Córdoba, Argentina</span></div>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; {date.getFullYear()} Carol Artesanías. Hecho con ❤️ en Córdoba, Argentina.</p>
        </div>
      </div>
    </footer>
  );
}
};

export default Footer;