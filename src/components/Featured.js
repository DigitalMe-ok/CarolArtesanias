import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { featuredProducts } from '../data/products';

const Featured = () => {
  const askForProd = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });

  };
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16"
        >
          Productos Destacados
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <button onClick={askForProd} className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-colors">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;