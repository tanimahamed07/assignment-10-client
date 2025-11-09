import React, { useRef } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import slider1 from "../../assets/slider-3.png";
import slider2 from "../../assets/slider-2.png";
import slider3 from "../../assets/slider-1.png";

const images = [
  { original: slider1, originalAlt: "Slide 1" },
  { original: slider2, originalAlt: "Slide 2" },
  { original: slider3, originalAlt: "Slide 3" },
];

const Banner = () => {
  const galleryRef = useRef(null);
  const handleSlideClick = () => {
    if (galleryRef.current) {
      galleryRef.current.pause();
    }
  };

  return (
    <ReactImageGallery
      ref={galleryRef}
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false} 
      autoPlay={true} 
      infinite={true}
      slideInterval={3000}
      showBullets={true}
      onClick={handleSlideClick} // click disables autoplay
    />
  );
};

export default Banner;
