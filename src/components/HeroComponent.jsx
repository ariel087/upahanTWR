import { useState, useEffect, useRef } from "react";
import CategoriesComponent from "./CategoriesComponent";
import LoginModalComponent from "./modals/LoginModalComponent";
import SignupModalComponent from "./modals/SignupModalComponent";

// Carousel item component
const CarouselItem = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX > touchEndX + 50) {
      nextSlide(); // Swipe left
    } else if (touchStartX < touchEndX - 50) {
      prevSlide(); // Swipe right
    }
  };

  // Add touch event listeners
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchmove", handleTouchMove);
      carousel.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchmove", handleTouchMove);
        carousel.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [touchStartX, touchEndX]);

  return (
    <div ref={carouselRef} className="carousel relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="carousel-controls absolute hidden lg:block left-2 bottom-10 px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 z-10"
      >
        ❮
      </button>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="carousel-controls absolute hidden lg:block right-2 bottom-10 px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 z-10"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center mt-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-customColor-light" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroComponent = () => {
  const slides = [
    "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg?auto=format&fit=max&q=90&w=1500",
    "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/small-living-room-ideas-lisa-dawson-66ba2b7398f74.jpeg?crop=1xw:0.9900990099009901xh;center,top&resize=980:*",
    "https://www.lowermybills.com/page_assets/static/4704f6b2f1b752ce3f98cb09cd587d7a/below-grade-basement.jpg",
    "https://www.houseyog.com/res/designimages/modular-kitchen-design-di1064-16256.jpg",
    // Add more image URLs as needed
  ];

  // State to track liked status for each heart icon
  const [likedItems, setLikedItems] = useState(Array(13).fill(false));

  const toggleLike = (index) => {
    setLikedItems((prev) => {
      const newLikes = [...prev];
      newLikes[index] = !newLikes[index]; // Toggle the like state
      return newLikes;
    });
  };

  return (
    <>

      {/* Search form */}
      <form className="max-w-md mt-10 mx-auto sm:w-full md:w-10/12 lg:w-8/12">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Locations."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-customColor-light hover:opacity-75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <CategoriesComponent />

      {/* Grid list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 shadow-sm lg:grid-cols-4 2xl:grid-cols-5 gap-5 w-full h-[65vh] p-4 items-center overflow-auto">
  {Array.from({ length: 13 }).map((_, index) => (
    <div
      key={index}
      className="bg-white mt-10 w-full rounded-lg min-h-80 flex flex-col items-center relative cursor-pointer hover:shadow-lg transition-shadow"
      onClick={(e) => {
        // Check if click is from heart or carousel
        const isHeartClick = e.target.closest('.heart');
        const isCarouselClick = e.target.closest('.carousel-controls');
        
        // Only open new tab if not clicking heart or carousel
        if (!isHeartClick && !isCarouselClick) {
          window.open(`/property?id=${index}`, '_blank'); // Replace with your actual property URL
        }
      }}
    >
      {/* Wrap Carousel in a div with carousel-controls class */}
      <div>
        <CarouselItem slides={slides} />
      </div>

      <div
        className="heart absolute right-2 top-2"
        onClick={(e) => {
          e.stopPropagation(); // Prevent container click
          toggleLike(index);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={likedItems[index] ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={likedItems[index] ? "red" : "currentColor"}
          className="w-7 h-7 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 2.349 1.587 4.297 3.943 6.38L12 21.75l5.057-7.12C19.413 12.547 21 10.6 21 8.25z"
          />
        </svg>
      </div>

      <div className="w-full h-10 flex justify-between p-2 whitespace-nowrap">
        <p className="text-xl">Pulilan, Bulacan</p>
        <div className="flex items-center pr-2 space-x-2 h-5 w-22">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-300 ml-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
             </svg>
            ))} 
            <span>5.0</span>
        </div>
      </div>
      <p className="text-base italic text-start w-full px-2 text-gray-500">
        Apartment
      </p>
      <p className="text-base font-bold text-start w-full my-2 px-2">
        ₱ 3,000
      </p>
    </div>
  ))}
  <LoginModalComponent />
  <SignupModalComponent />
</div>    </>
  );
};

export default HeroComponent;
