// src/Components/Envios/Envios.jsx
import React from "react";
import "./Envios.css"; // 👈 estilos separados

const Envios = () => {
  return (
    <section className="envios">
      <h2 className="envios-title">Envíos</h2>
      <p className="envios-text">
        Realizamos envíos a todo el país con la seguridad y rapidez que tu compra merece.
        Contamos con diferentes opciones para que elijas la que mejor se adapte a vos.
      </p>

      <div className="envios-cards">
        <div className="envio-card">
          <h3>Envío Estándar</h3>
          <p>Entrega en 3 a 5 días hábiles.</p>
        </div>
        <div className="envio-card">
          <h3>Envío Express</h3>
          <p>Recibí tu pedido en 24 a 72 horas.</p>
        </div>
        <div className="envio-card">
          <h3>Retiro en tienda</h3>
          <p>Podés retirar gratis en nuestro local.</p>
        </div>
      </div>
      <div className="envios-correos">
        <h3 className="correos-title">Trabajamos con:</h3>
        <div className="correos-logos">
          <img src="/images/Correo_Argentino_Logo.svg.png" alt="Correo Argentino"  />
          <img src="/images/correo-oca-logo-png_seeklogo-507837-removebg-preview.png" alt="OCA" />
          <img src="/images/Logo-Andreani-removebg-preview.png" alt="Andreani" />
        </div>
      </div>
    </section>
  );
};

export default Envios;
