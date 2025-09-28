import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock } from 'lucide-react';

const Shipping = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Envíos a Todo el País
        </motion.h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Llegamos a cada rincón de Argentina con el mismo cuidado que ponemos en cada creación. ¡Tu artesanía favorita a la puerta de tu casa!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <Truck className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Rápido y Seguro</h3>
            <p className="text-gray-600">Envíos express con seguimiento en tiempo real.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <Shield className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Protección Total</h3>
            <p className="text-gray-600">Empaques especiales para que llegue impecable.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">A Todo el País</h3>
            <p className="text-gray-600">Desde Córdoba hasta Ushuaia, sin excepciones.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;