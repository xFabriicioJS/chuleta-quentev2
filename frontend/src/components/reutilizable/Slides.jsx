import React, { useState } from 'react'

const slides = [
    {url: 'http://localhost:3000/banner_1.jpg', title: "Banner 1"},
    {url: 'http://localhost:3000/banner_2.jpg', title: "Banner 2"},
    {url: 'http://localhost:3000/banner_3.jpg', title: "Banner 3"},

]


function Slides() {

    const [currentIndex, setCurrentIndex] = useState(0);

    

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
      const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
      
      const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
      };
      
      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
      };


    const sliderStyles = {
        height: '100%',
        position: 'relative'  
    };

    const slideStyles ={
        width: '100%',
        height: '100%',
        borderRadius: "10px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
      };
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };
      
      const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };

    

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides