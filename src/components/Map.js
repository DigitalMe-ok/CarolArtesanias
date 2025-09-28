import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8"
        >
          Nuestra Ubicación
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Ven a visitarnos en el corazón de Córdoba y vive la experiencia artesanal de cerca.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.759!2d-64.1905!3d-31.4201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3b9f5f5f5f5%3A0x123456789abcdef!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1690000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Córdoba, Argentina"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;