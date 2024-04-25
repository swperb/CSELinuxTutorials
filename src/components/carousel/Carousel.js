// components/MyCarousel.js
import React from 'react';
import Slider from 'react-slick';
import styles from '@/components/carousel/Carousel.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: false
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings} className={styles.slide}>
        <div>
          <img src="/penguin-159784_1280.png" alt="Slide 1"  />
        </div>
        <div>
          <img src="/code-1839406_1280.jpg" alt="Slide 2"  />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
