import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Image } from 'lucide-react';
import { categories } from '../data/products';

const Products = () => {
  const askForProd = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });

  };
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nuestras Categorías</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </motion.div>
        <div className="space-y-10">
          {Object.entries(categories).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <img src={product.image} alt={product.name} className="w-full h-100 object-cover rounded-2xl mb-4" />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                      <button onClick={askForProd} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition-transform">
                        Ver Más
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;