import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import './ImageModal.css';

const ImageModal = ({ open, onClose, images, currentImageIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  useEffect(() => {
    if (open) {
      setCurrentIndex(currentImageIndex);
    }
  }, [open, currentImageIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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
          <div className="modal-image-container">
            <img src={images[currentIndex]} alt={`Project image ${currentIndex + 1}`} className="modal-image" />
          </div>
        )}
        <IconButton className="next-button" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ImageModal;
