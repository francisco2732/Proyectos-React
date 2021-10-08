import React from "react";
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Promos ZG</h2>
      </div>

      <Carousel
        plugins={[
            'arrows',
            'infinite',
            'centered',
            {
            resolve: slidesToShowPlugin,
            options: {
                numberOfSlides: 3,
            },
            },

            {
            resolve: autoplayPlugin,
            options: {
                interval: 2000,
            },
            },
        ]}
        
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={500}
        centered
        offset={50}
        itemWidth={600}
        slides={Slides}
        breakpoints={{            /* SE CONFIGURA EL CAROUSEL PARA QUE NO TENGA FLECHAS Y SEA RESPONSIVO */
          960: {
            slidesPerPage: 2,
            arrows: false,
            itemWidth: 250,
          },
        }}
      >
      </Carousel>
    </div>
  );
};

export default Slider;