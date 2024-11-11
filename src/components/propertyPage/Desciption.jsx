import React from "react";

const Desciption = () => {
  return (
    <div className="grid grid-cols-2 px-48 mt-16">
      <div className="flex flex-col items-center">
        <div>
            <span className="text-2xl font-semibold">Sample Apartment in Bulacan, Philippines</span>
            <ul className="flex gap-2 text-gray-500 font-semibold flex-wrap mt-2">
                <li>1 Available Apartment -</li>
                <li>3 Bedroom -</li>
                <li>2 Restroom -</li>
                <li>1 Kitchen -</li>
                <li>1 Dirty Kitchen </li>
            </ul>
        </div>
        <div className="w-2/3 h-24 m-5 mt-10  border-2 cursor-pointer border-solid rounded-lg border-gray-300">
           <div className="w-64 flex flex-col justify-center items-center" >
            <img
              src="../src/assets/icon/rentee.svg"
              className="w-16"
              alt="Menu Icon"
              />

            <span className="text-xl font-semibold">Rentee's Reviews & Ratings</span>
              </div>
        </div>
      </div>
      <div className="flex flex-col items-center">right</div>
    </div>
  );
};

export default Desciption;
