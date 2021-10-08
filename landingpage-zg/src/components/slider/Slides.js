import React from 'react';
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://i.imgur.com/uWj61sD.jpg",
        alt: 'Promo 1',
        desc: 'Noche Gamer',
    },
    {
        src: 'https://i.imgur.com/zmML4EW.png',
        alt: 'Promo 2',
        desc: 'Jueves 2X1',
    },
    {
        src: 'https://i.imgur.com/ntK5H2p.jpg?1',
        alt: 'Promo 3',
        desc: 'Juega y Gana',
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} width = "100%" />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;