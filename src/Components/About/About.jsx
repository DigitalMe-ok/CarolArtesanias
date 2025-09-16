import { Image } from "@chakra-ui/react";
import aboutImage from "../../assets/aboutme.png";
import './About.css'
function AboutMe() {
    return (
        <div className="About">
            <div className="CardContainer">
                <h2 className="tituloContainer">Por qué Carol Artesanias</h2>
                <p className="descripcion">En Carol Artesanías celebramos la belleza de lo hecho a mano. Cada una de nuestras piezas nace de la pasión, la creatividad y la dedicación por mantener vivas las tradiciones artesanales, combinando técnicas ancestrales con un toque contemporáneo que las hace únicas. Desde delicados textiles bordados hasta objetos de cerámica y decoración cuidadosamente elaborados, cada creación refleja nuestro compromiso con la calidad, la autenticidad y el detalle.

Nuestro objetivo es que cada pieza no solo decore, sino que también inspire y conecte con quienes la eligen. Creemos que el arte artesanal tiene el poder de transformar espacios, generar emociones y convertirse en parte de historias personales y memorias que duran toda la vida.

En Carol Artesanías valoramos los materiales nobles, los procesos responsables y la originalidad, porque cada objeto debe ser tan especial como la persona que lo recibe. Nos enorgullece ofrecer creaciones que transmiten calidez, personalidad y autenticidad, para que tu hogar o tus regalos tengan siempre un toque único.

Descubrí el mundo de Carol Artesanías y sumergite en la magia de lo hecho a mano, donde cada detalle cuenta y cada pieza tiene alma.</p>
            </div>
            <div className="imagenContainer">
                <Image src={aboutImage} className="imgAbout"></Image>
            </div>
        </div>
    )
}
export default AboutMe;