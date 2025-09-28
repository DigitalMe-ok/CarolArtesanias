import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import banner from "../assets/Banner2.png"
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Carol te contactará pronto. 😊');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-20">
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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <textarea
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all"
              >
                Enviar Mensaje
              </button>
            </form>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-6 h-6" />
                <span>carolartesanias@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-6 h-6" />
                <span>+54 351 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-6 h-6" />
                <span>Córdoba, Argentina</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center pt-8 border-t border-gray-200">
              <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"><Facebook size={20} /></a>
              <a href="#" className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500"><Twitter size={20} /></a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl h-[300px] flex items-center justify-center">
              <img
                src={banner}
                alt="Carol respondiendo"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/543511234567"
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
};

export default Contact;