import React, { useState } from "react";
import { imagesData } from "../data/imagesData";

function useImageModal(image) {
  const [selectedImage, setSelectedImage] = useState(image);
  const sliderRef = React.useRef(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleKeyDown = (e) => {
    // arrow up/down button should select next/previous list element
    if ([37, 38, 39, 40].includes(e.keyCode)) {
      const findIndex = imagesData.findIndex(
        (item) => item.img === selectedImage.img
      );
      let selectedIndex;
      if (e.keyCode === 39 || e.keyCode === 40) {
        selectedIndex = findIndex === imagesData.length - 1 ? 0 : findIndex + 1;
      } else if (e.keyCode === 37 || e.keyCode === 38) {
        selectedIndex = findIndex === 0 ? imagesData.length - 1 : findIndex - 1;
      }
      setSelectedImage(imagesData[selectedIndex]);
      sliderRef.current.slickGoTo(selectedIndex);
    }
  };

  return {
    selectedImage,
    sliderRef,
    handleImageClick,
    handleKeyDown,
  };
}

export default useImageModal;
