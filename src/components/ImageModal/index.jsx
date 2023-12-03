import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import useImageModal from "../../hooks/useImageModal";
import ImagesSlider from "./ImagesSlider";

function Index({ image, open, handleClose }) {
  const { selectedImage, sliderRef, handleImageClick, handleKeyDown } =
    useImageModal(image);

  return (
    <Dialog
      onKeyDown={handleKeyDown}
      fullWidth={true}
      maxWidth={"xl"}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <div className="flex justify-center">
          <img
            className="py-2 w-[100%] h-[30vw]"
            src={selectedImage.img}
            alt={selectedImage.title}
            loading="lazy"
          />
        </div>
        <div>
          <ImagesSlider
            selectedImage={selectedImage}
            sliderRef={sliderRef}
            handleImageClick={handleImageClick}
            onKeyDown={handleKeyDown}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Index;
