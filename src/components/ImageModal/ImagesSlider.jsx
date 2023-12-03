import React from "react";
import Slider from "react-slick";
import { imagesData } from "../../data/imagesData";
import SlickArrow from "./SlickArrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImagesSlider({
  selectedImage,
  sliderRef,
  handleImageClick,
  handleKeyDown,
}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlickArrow />,
    prevArrow: <SlickArrow />,
  };

  return (
    <Slider {...settings} ref={sliderRef} className="mx-1 flex justify-center">
      {imagesData.map((item) => (
        <div
          key={item.img}
          onKeyDown={handleKeyDown}
          className={`cursor-pointer w-[95%]  ${
            item.img === selectedImage.img
              ? "rounded border-4 border-solid border-black-900"
              : ""
          }`}
          onClick={() => handleImageClick(item)}
        >
          <img
            className={`w-full h-[10vw]`}
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImagesSlider;
