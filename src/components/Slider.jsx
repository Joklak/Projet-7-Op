import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const SliderComponent = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    prevArrow: (
      <button className="slick-prev" onClick={handlePrevClick}>
        <img src={arrowLeft} alt="Previous slide" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next" onClick={handleNextClick}>
        <img src={arrowRight} alt="Next slide" />
      </button>
    )
  };


  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;