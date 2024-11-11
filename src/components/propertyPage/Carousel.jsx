import React, { useState } from "react";

const Carousel = () => {
  const slides = [
    "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg?auto=format&fit=max&q=90&w=1500",
    "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/small-living-room-ideas-lisa-dawson-66ba2b7398f74.jpeg?crop=1xw:0.9900990099009901xh;center,top&resize=980:*",
    "https://www.lowermybills.com/page_assets/static/4704f6b2f1b752ce3f98cb09cd587d7a/below-grade-basement.jpg",
    "https://www.houseyog.com/res/designimages/modular-kitchen-design-di1064-16256.jpg",
    "https://example.com/image6.jpg",
    "https://example.com/image7.jpg",
    // Add more image URLs as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllThumbnails, setShowAllThumbnails] = useState(false);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const handleShowAllThumbnails = () => {
    setShowAllThumbnails(!showAllThumbnails);
  };

  return (
    <div>
    
      <div className="flex gap-4 w-full flex-col max-w-4xl mx-auto ">
        <span className="text-3xl font-semibold mt-5">PROPERTY NAME</span>
      {/* Main Image on the Left */}
      <div className="flex-1">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-[600px] rounded-lg"
        />
      </div>

      {/* Thumbnails on the Right */}
      <div className="flex justify-center gap-2 flex-shrink-0">
        {(showAllThumbnails ? slides : slides.slice(0, 5)).map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
              index === currentSlide ? "border-2 border-gray-800" : "border-2 border-transparent"
            }`}
          />
        ))}

        {/* "More" Button */}
        {slides.length > 5 && !showAllThumbnails && (
          <button
            onClick={handleShowAllThumbnails}
            className="w-20 h-20 bg-gray-200 text-sm font-semibold rounded-lg cursor-pointer flex items-center justify-center"
          >
            {slides.length - 5} More
          </button>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Carousel;
