import colganteOne from "../assets/colgante.jpeg"
import colganteTwo from "../assets/colgante2.jpeg"
import colganteTres from "../assets/Foto3.png"
import cuadroUno from "../assets/Foto4.png"
import cuadroDos from "../assets/Foto5.png"
import cuadroTres from "../assets/Foto6.png"
import muñecaUno from "../assets/muniecaImg.jpeg"
import almohadaInf from "../assets/almohadonInfantil.jpeg"
import papaNoel from "../assets/papaNoel.jpeg";
import buhoNeg from "../assets/buhoNeg.jpeg";
import buhoGris from "../assets/buhoGris.jpeg";
import almohadaBuho from "../assets/Foto9.png";
import brujitas from "../assets/brujitas.jpeg"
import munieco from "../assets/munieco1.jpeg";
import decoInf from "../assets/decoracionInf.jpeg"
import decoInf2 from "../assets/decoracionInf2.jpeg"

export const categories = {
  DecoHogar: [
    { id: 1, name: "Colgante Estrella Lunar", image: colganteOne, description: "" },
    { id: 2, name: "Colgante de Búho negro artesanal.", image: buhoNeg, description: "Colgante hecho a mano con diseño de búho, elaborado con materiales textiles y detalles cuidados. Ideal para decorar puertas, paredes o regalar un detalle lleno de encanto." },
    { id: 3, name: "Colgante de Búho gris artesanal.", image: buhoGris, description: "Colgante hecho a mano con diseño de búho, elaborado con materiales textiles y detalles cuidados. Ideal para decorar puertas, paredes o regalar un detalle lleno de encanto." },
    { id: 4, name: "Colgante", image: colganteTwo, description: "" },
  ],
  DecoMesa: [
    { id: 5, name: "Posa vasos de crochet", image: cuadroUno, description: "" },
    { id: 6, name: "Individual de crochet", image: cuadroDos, description: "" },
    { id: 7, name: "Cubre cubiertos de crochet", image: cuadroTres, description: "" }
  ],
  Infantil: [
    { id: 8, name: "Muñeca de tela", image: muñecaUno, description: "" },
    { id: 9, name: "Almohadón infantil", image: almohadaInf, description: "" },
    { id: 10, name: "Almohadón búho", image: almohadaBuho, description: "" },
    { id: 11, name: "Muñeco de tela", image: munieco, description: "Decoración infantil ideal para los más pequeños." },
    { id: 12, name: "Posa lapices", image: decoInf2, description: "Un posa lápices ideal para los más pequeños." },
    { id: 13, name: "Cuadro Vive y Rie", image: decoInf, description: "Cartel decorativo pintado en tonos vibrantes con la frase “Vive y Ríe”, ideal para colgar o apoyar en estantes, entradas o rincones especiales del hogar." }

  ],
  Especiales_de_temporada: [
    { id: 13, name: "Decoración de temporada", image: brujitas, description: "Muñequitas de tela para la decoración del hogar." },
    
    // { id: 11, name: "Escultura Pequeña", price: "$550", image: "https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Escultura", description: "Detalles finos en madera reciclada." }
  ]
};

export const featuredProducts = [
  { id: 1, name: "DecoHogar", image: cuadroUno, description: "Base para platos." },
  { id: 3, name: "Ediciones Especiales", image: papaNoel, description: "Decorción navideña." },
  { id: 5, name: "DecoHogar", image: cuadroTres, description: "Guarda cubiertos." }
];