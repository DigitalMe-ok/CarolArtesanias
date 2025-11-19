import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Info, ShoppingBag, Truck, MessageCircle, MapPin } from 'lucide-react';
import flyer from '../assets/FLYER 2.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Nosotros', icon: Info },
    { id: 'products', label: 'Productos', icon: ShoppingBag },
    { id: 'shipping', label: 'Envíos', icon: Truck },
    { id: 'contact', label: 'Contacto', icon: MessageCircle },
    { id: 'map', label: 'Ubicación', icon: MapPin }
  ];

  const scrollToSection = (id) => {
    console.log("HOLAAAAAAAAAAAAAAAA",id);

    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.offsetTop - navbarHeight;
      
      setTimeout(() =>{
      window.scrollTo({ top: elementPosition,left:0, behavior: 'smooth' });
      },200)
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200/50 shadow-lg"
    >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img src={flyer} alt="Logo Carol Artesanías" className="h-12 w-auto object-contain" />

          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria_label={`Ir a la sección ${link.id}`}

                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-pink-100/50 hover:text-pink-600 font-medium transition-all duration-300"
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden overflow-hidden bg-white/80 border-t border-gray-200 z-400"
        >
          <div className="py-4 space-y-2 px-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.button
                  key={link.id}
                  onClick={() =>scrollToSection(link.id)}
                  whileHover={{ x: 4 }}
                  aria_label={`Ir a la sección ${link.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-pink-100/50 hover:text-pink-600 font-medium transition-all duration-300 z-999"
                >
                  <Icon size={20} />
                  {link.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;