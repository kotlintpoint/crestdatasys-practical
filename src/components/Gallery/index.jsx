import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { imagesData } from "../../data/imagesData";
import ImagesHeader from "../ImagesHeader";
import ImageModal from "../ImageModal";
import useGallery from "../../hooks/useGallery";

export default function Index() {
  const { open, selectedImage, handleClose, handleImageClick } = useGallery();

  return (
    <>
      <ImagesHeader
        heading={"Photo Gallery"}
        subHeading={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <ImageList cols={4}>
        {imagesData.map((item) => (
          <ImageListItem
            key={item.img}
            className="cursor-pointer"
            onClick={() => handleImageClick(item)}
          >
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      {open && (
        <ImageModal
          open={open}
          handleClose={handleClose}
          image={selectedImage}
        />
      )}
    </>
  );
}
