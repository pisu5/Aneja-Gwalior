import React, { useState } from "react";
import Avatar from "./Avtar";
import "../css/Carousel.css";
import { statusCarousel } from "../data/Story";
import ImagesStories from "./Imagies";

const Carousel = () => {
  const handleSlide = (direction) => {
    const slider = document.getElementsByClassName("carousel-body")[0];
    if (direction === "left") slider.scrollBy(-400, 0);
    else slider.scrollBy(400, 0);
  };

  const [showImagesStories, setShowImagesStories] = useState(false);

  const handleAvatarClick = () => {
    setShowImagesStories(true);
  };

  const handleCloseImagesStories = () => {
    setShowImagesStories(false);
  };

  return (
    <section className="check">
      <div className="carousel-body">
        {statusCarousel.map((item, index) => (
          <Avatar
            key={index}
            image={item}
            onClick={handleAvatarClick}
            index={index}
          />
        ))}
      </div>
      {showImagesStories && (
        <ImagesStories onClose={handleCloseImagesStories} />
      )}
    </section>
  );
};

export default Carousel;
