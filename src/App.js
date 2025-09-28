import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products';
import Shipping from './components/Shipping';
import Featured from './components/Featured';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner id="home" />
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="shipping"><Shipping /></section>
      <Featured />
      <section id="contact"><Contact /></section>
      <section id="map"><Map /></section>
      <Footer />
    </div>
  );
};

export default App;