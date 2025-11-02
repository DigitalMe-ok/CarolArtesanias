import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Carol Artesanías</h3>
            <p className="text-gray-300 mb-4">
              Creaciones únicas hechas con pasión en Córdoba. Cada pieza es un pedacito de alma artesanal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-pink-400"><Facebook /></a>
              <a href="#" className="text-2xl hover:text-pink-400"><Instagram /></a>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Mapa del Sitio</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-pink-400">Inicio</a></li>
              <li><a href="#about" className="hover:text-pink-400">Nosotros</a></li>
              <li><a href="#products" className="hover:text-pink-400">Productos</a></li>
              <li><a href="#contact" className="hover:text-pink-400">Contacto</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
};

export default Footer;