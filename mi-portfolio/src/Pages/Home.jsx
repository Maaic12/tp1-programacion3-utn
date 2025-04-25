import React from "react";
import Header from "../Componentes/Header";
import MainHome from "../Componentes/MainHome";
import Footer from "../Componentes/Footer";
import imgMaic from '../assets/Maic.jpeg'

const Home = () => {
  let sad = {
    nombre: "Miguel Medina",
    apodo: "Maic",
    imagen: imgMaic,
    edad: 21,
    pais: "Argentina",
    provincia: "Tucumán",
    email: "miguelmedinakpo@gmail.com",
    lenguajes: ["JavaScript", "Python", "HTML", "CSS", "C#"],
  };

  return (
    <div>
      <Header />
      <MainHome {...sad} />
      <Footer />
    </div>
  );
};

export default Home;
