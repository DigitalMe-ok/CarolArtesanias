import colganteOne from "../assets/Foto1.png"
import colganteTwo from "../assets/Foto2.png"
import colganteTres from "../assets/Foto3.png"
import cuadroUno from "../assets/Foto4.png"
import cuadroDos from "../assets/Foto5.png"
import cuadroTres from "../assets/Foto6.png"
import muñecaUno from "../assets/Foto7.png"
import muñecaDos from "../assets/Foto8.png"
import cuadro from "../assets/Foto9.png"
export const categories = {
  colgantes: [
    { id: 1, name: "Colgante Estrella Lunar", price: "$450", image: colganteOne, description: "Hecho a mano con piedras naturales y plata fina." },
    { id: 2, name: "Colgante Flor Eterna", price: "$380", image: colganteTwo, description: "Diseño delicado inspirado en jardines cordobeses." },
    { id: 3, name: "Colgante Flor Eterna", price: "$380", image: colganteTres, description: "Diseño delicado inspirado en jardines cordobeses." }
  ],
  cuadros: [
    { id: 4, name: "Cuadro Sierra Cordobesa", price: "$1200", image: cuadroUno, description: "Pintura acrílica que captura la magia de las sierras." },
    { id: 5, name: "Cuadro Abstracto Colores", price: "$950", image: cuadroDos, description: "Explosión de colores vibrantes y emociones." },
    { id: 6, name: "Colgante Flor Eterna", price: "$380", image: cuadroTres, description: "Diseño delicado inspirado en jardines cordobeses." }
  ],
  muñecas: [
    { id: 7, name: "Muñeca Tradicional", price: "$800", image: muñecaUno, description: "Vestida con telas locales, llena de historia." },
    { id: 8, name: "Muñeca Fantasía", price: "$650", image: muñecaDos, description: "Un toque de magia para coleccionistas soñadores." }
  ],
  otros: [
    { id: 9, name: "Escultura Pequeña", price: "$550", image: cuadro, description: "Detalles finos en madera reciclada." },
    { id: 10, name: "Escultura Pequeña", price: "$550", image: cuadro, description: "Detalles finos en madera reciclada." },
    // { id: 11, name: "Escultura Pequeña", price: "$550", image: "https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Escultura", description: "Detalles finos en madera reciclada." }
  ]
};

export const featuredProducts = [
  { id: 1, name: "Colgante Estrella Lunar", price: "$450", image: cuadroUno, description: "Lo más vendido este mes, ¡agótalo antes de que vuele!" },
  { id: 3, name: "Cuadro Sierra Cordobesa", price: "$1200", image: cuadroDos, description: "Pinta tu hogar con la esencia de Córdoba." },
  { id: 5, name: "Muñeca Tradicional", price: "$800", image: cuadroTres, description: "Regalo perfecto para quienes aman lo auténtico." }
];