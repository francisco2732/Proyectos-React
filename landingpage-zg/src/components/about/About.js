import React from "react";
import "./About.css";
import coverImagen from "../../media/control1.gif";
import burguer from "../../media/lunch.png";
import wifi from "../../media/wifi.png";
import xbox from "../../media/xbox.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de Zona-Gamer</h3>
        <p>
          Zona-Gamer nacio como un espacio en el cual puedas disfrutar tus
          juegos favoritos, sin interrupciones, sin prisas y con la comodidad
          que te mereces.
        </p>
        <h3 className="servicios">Nuestros Servicios</h3>
        <div className="menu">
          <img src={burguer} alt="Comida"></img>
          <img src={xbox} alt="Consolas"></img>
          <img src={wifi} alt="wifi"></img>
        </div>
        <div className="servicios-desc">
          <p>Servicio de Alimentos <br></br> y Bebidas</p>
          <p>Consolas de alta gama</p>
          <p>Servicio de Internet</p>

        </div>
      </div>
      <div className="about-img">
        <img src={coverImagen} alt="about 1" border-radius="50px"></img>
      </div>
    </div>
  );
};

export default About;
