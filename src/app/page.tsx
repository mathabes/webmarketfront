import React from 'react';
import Navbar from './Componentes/NavBar';
import AnunciosPromocoes from './Componentes/AnunciosPromocoes';

const Home = () => {
  return (
    <div>
      <Navbar />
      <AnunciosPromocoes />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;