import { Box } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="https://source.unsplash.com/random/1440x450"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://source.unsplash.com/random/1440x450"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://source.unsplash.com/random/1440x450"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Carousel = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="responsive"
      disableButtonsControls={true}
    
    
    />
  );
};

export default Carousel;
