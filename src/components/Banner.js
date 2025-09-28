import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import fondoOne from "../assets/fondo1.png"
import fondoTwo from "../assets/fondo2.png"
const Banner = ({ id }) => {
  const images = [
    fondoTwo,
    fondoOne
  ];
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="relative h-[100vh] overflow-hidden bg-gradient-to-r from-pink-200 via-purple-100 to-teal-100 pt-16 md:pt-0">
      <motion.div
        key={current}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${images[current]})` }}
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <motion.div
          className="text-center text-white px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white-300 to-green-400 bg-clip-text text-transparent">
            Carol Artesanías
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Donde cada pieza cuenta una historia hecha con manos cordobesas y corazón artesanal.
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-300 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explora Nuestras Creaciones
          </button>
        </motion.div>
      </div>
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
      >
        <ArrowRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;