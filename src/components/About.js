import { motion } from 'framer-motion';
import { Heart, Palette } from 'lucide-react';
import about from '../assets/banner.jpg';
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre Carol Artesanías
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={about}
              alt="Carol en su taller"
              className="rounded-3xl shadow-2xl w-65"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              En Carol Artesanías celebramos la belleza de lo hecho a mano. Cada una de nuestras piezas nace de la pasión, la creatividad y la dedicación por mantener vivas las tradiciones artesanales, combinando técnicas ancestrales con un toque contemporáneo que las hace únicas. Desde delicados textiles bordados hasta objetos de cerámica y decoración cuidadosamente elaborados, cada creación refleja nuestro compromiso con la calidad, la autenticidad y el detalle.

              Nuestro objetivo es que cada pieza no solo decore, sino que también inspire y conecte con quienes la eligen. Creemos que el arte artesanal tiene el poder de transformar espacios, generar emociones y convertirse en parte de historias personales y memorias que duran toda la vida.

              En Carol Artesanías valoramos los materiales nobles, los procesos responsables y la originalidad, porque cada objeto debe ser tan especial como la persona que lo recibe. Nos enorgullece ofrecer creaciones que transmiten calidez, personalidad y autenticidad, para que tu hogar o tus regalos tengan siempre un toque único.

              Descubrí el mundo de Carol Artesanías y sumergite en la magia de lo hecho a mano, donde cada detalle cuenta y cada pieza tiene alma.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro compromiso es llevar arte auténtico a tus manos, con materiales sostenibles y mucho amor. ¡Descubre cómo una simple idea se convierte en tesoro eterno!
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-2xl"
              >
                <Heart className="w-6 h-6 text-pink-500" />
                <span className="font-semibold">Hecho con Amor</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-100 to-pink-100 p-4 rounded-2xl"
              >
                <Palette className="w-6 h-6 text-teal-500" />
                <span className="font-semibold">100% Artesanal</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;