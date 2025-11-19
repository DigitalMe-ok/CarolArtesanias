
import { db } from '../firebase';
import { collection,addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram,  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import banner from "../assets/Banner2.png";

const Contact = () => {
    const [respAnimation,setRespAnimation] = useState(null)
    const[pantWidth,setPantWidth] = useState(null)
    const arregloAnimacion = () =>{
      let pantalla = window.innerWidth;
      console.log(pantalla);
      setPantWidth(pantalla);
      pantalla <= 1340 ? setRespAnimation(true) 
      :
      setRespAnimation(false);
      
      
    }
    useEffect(() =>{
        arregloAnimacion();
        window.addEventListener("resize", (e)=>{
        arregloAnimacion();})
        return () => window.addEventListener("resize",(e)=>{
        arregloAnimacion()})
      },[""])


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();

  
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor, espera un momento 😊',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const contactCollection = collection(db, 'contacto');
    
    addDoc(contactCollection, formData).then(() =>{
      emailjs
      .send(
        'service_6whxu8j', 
        'template_nogi9fg', 
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'GTOhzKsggn6oqmZ_w' 
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Carol te contactará pronto 💌',
          confirmButtonColor: '#d946ef',
          background: '#fffafc',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });

      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar',
          text: 'Hubo un problema al enviar tu mensaje. Intenta nuevamente.',
          confirmButtonColor: '#ef4444',
        });
      });
      
    }).catch((error) => {
      console.error("Error al subir datos: ", error);
      Swal.fire({
        icon:"error",
        title:"No se pudo enviar el mensaje 😔",
        text:"Vuelva a enviarlo más tarde"
      })
    });
    
    
  };
    if(respAnimation === null || pantWidth === null){
      return <div className='w-screen text-xl text-stone-900'>Cargando...</div>
    }
    else{
  return (
    <section id='contact' className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16"
        >
          Contáctanos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Tu Nombre"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Tu Email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <input
                type="tel"
                placeholder="Tu Teléfono"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <textarea
                placeholder="Tu Mensaje"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <button
              aria-label='Enviar fomulario'
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* INFO */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-6 h-6" />
                <span>carolartesaniascba@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-6 h-6" />
                <span>+54 351 614-0868</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-6 h-6" />
                <span>Córdoba, Argentina</span>
              </div>
            </div>

            {/* REDES */}
            <div className="flex gap-4 justify-center pt-8 border-t border-gray-200">
              <a aria-label="Ir al Facebook" href="" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"><Facebook size={20} /></a>
              <a aria-label="Ir al Instagram" href="https://www.instagram.com/carol_artesanias_" className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700"><Instagram size={20} /></a>
              
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{
              opacity: 0, 
              x:respAnimation? 0:50,
              y:respAnimation?50:0
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              y:0
            }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl h-[300px] flex items-center justify-center">
              <img src={banner} alt="Carol respondiendo" className="rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHATSAPP */}
      <motion.a
      aria-label='Link al chat para consultas'
        href="https://wa.me/543516140868"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </section>
  );
}
};

export default Contact;