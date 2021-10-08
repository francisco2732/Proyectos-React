import React from "react";
import "./Cover.css";
import coverIngenieria from "../../media/coverIngenieria.jpg";
import coverDictamen from "../../media/coverDictamen.jpg";
import coverConstruccion from "../../media/coverConstruccion.jpg";
import coverEstructuras from "../../media/coverEstructuras.jpeg";

const Cover = () => {
  return (
    <div className="cover-title">
      <h1>ESPECIALIDADES</h1>
      <div className="cover-container">
        <div className="cover-content">
          <img className="cover-icon" src={coverDictamen} alt="Icono1"></img>
          <h3>DICTAMEN ESTRUCTURAL</h3>
          <p>Revisión de condiciones estructurales.</p>
        </div>
        <div className="cover-content">
          <img className="cover-icon" src={coverIngenieria} alt="Icono1"></img>
          <h3>INGENIERÍA ESTRUCTURAL</h3>
          <p>
            Análisis y diseño de estructuras. Ingenieria básica y de detalle.
          </p>
        </div>
        <div className="cover-content">
          <img
            className="cover-icon"
            src={coverConstruccion}
            alt="Icono1"
          ></img>
          <h3>CONSTRUCCIÓN</h3>
          <p>Construcción de estructuras en los diferentes sectores</p>
        </div>
        <div className="cover-content">
          <img className="cover-icon" src={coverEstructuras} alt="Icono1"></img>
          <h3>FABRICACIÓN Y MONTAJE DE ESTRUCTURAS METALICAS</h3>
        </div>
      </div>
    </div>
  );
};

export default Cover;
