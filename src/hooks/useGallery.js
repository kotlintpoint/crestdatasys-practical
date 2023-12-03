import React, { useState } from "react";

function useGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  return {
    open,
    selectedImage,
    handleClose,
    handleImageClick,
  };
}

export default useGallery;
