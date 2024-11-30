import React from "react";
import image from './host_image/449607960_3302276399903439_335103846955689173_n.jpg'
const Desciption = () => {
  return (
    <div className="grid grid-cols-2 px-48 mt-16">
      <div className="flex flex-col">
        <div>
          <span className="text-2xl font-semibold">
            Sample Apartment in Bulacan, Philippines
          </span>
          <ul className="flex gap-2 text-gray-500 font-semibold flex-wrap mt-2">
            <li>1 Available Apartment -</li>
            <li>3 Bedroom -</li>
            <li>2 Restroom -</li>
            <li>1 Kitchen -</li>
            <li>1 Dirty Kitchen </li>
          </ul>
        </div>
        <div className="ratingsContainer w-full flex items-center gap-1 mt-2 font-semibold ">
          <svg
            className="w-4 h-4 text-yellow-300 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span>5.0</span>•
          <span className="underline">1 review</span>
        </div>
        <div className="hosted w-full h-24 flex gap-3 items-center border-y-2 mt-12">
          <img className="w-12 h-12 rounded-full" src={image} alt="" />
          <div className="w-full h-full py-5 flex flex-col">
            <span className="text-2xl font-semibold">Hosted by Ariel</span>
            <span className="text-1xl font-semibold text-gray-500 gap-2">Web Developer</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">right</div>
    </div>
  );
};

export default Desciption;
