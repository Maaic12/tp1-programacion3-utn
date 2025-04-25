import React from "react";
import Header from "../Componentes/Header";
import MainHome from "../Componentes/MainHome";
import Footer from "../Componentes/Footer";

const Home = () => {
  let sad = {
    nombre: "Miguel Medina",
    apodo: "Maic",
    edad: 21,
    pais: "Argentina",
    ciudad: "Tucumán",
    email: "miguelmedinakpo@gmail.com",
    lenguajes: ["JavaScript", "Python", "HTML", "CSS", "React"],
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
