import React, { useState, useEffect } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import "./ImageModal.css";

const ImageModal = ({ open, onClose, images, currentImageIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    if (open) {
      setCurrentIndex(currentImageIndex);
      setScale(1);
      setTranslateX(0);
      setTranslateY(0);
    }
  }, [open, currentImageIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => {
      const newScale = Math.max(prevScale - 0.2, 1);
      if (newScale === 1) {
        setTranslateX(0);
        setTranslateY(0);
      }
      return newScale;
    });
  };

  const handleDragStart = (event) => {
    if (scale > 1) {
      setIsDragging(true);
      setStartX(event.clientX);
      setStartY(event.clientY);
    }
  };

  const handleDrag = (event) => {
    if (isDragging && scale > 1) {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      setTranslateX((prevX) => prevX + deltaX);
      setTranslateY((prevY) => prevY + deltaY);
      setStartX(event.clientX);
      setStartY(event.clientY);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-content">
        <IconButton className="close-button" onClick={onClose}>
          <CloseIcon />
        </IconButton>

        <IconButton className="prev-button" onClick={handlePrev}>
          <ArrowBackIosNewIcon />
        </IconButton>

        {images[currentIndex] && (
          <div
            className="modal-image-container"
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <img
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              className="modal-image"
              style={{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: !isDragging ? "transform 0.3s ease" : "none",
                cursor: scale > 1 ? "grab" : "default",
              }}
            />
          </div>
        )}

        <IconButton className="next-button" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>

        <IconButton onClick={handleZoomIn} color="primary" id="zoom-in-button">
          <ZoomInIcon />
        </IconButton>

        <IconButton
          onClick={handleZoomOut}
          color="primary"
          id="zoom-out-button"
        >
          <ZoomOutIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ImageModal;
