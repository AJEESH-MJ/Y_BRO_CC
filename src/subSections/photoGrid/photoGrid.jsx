/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { PG1, PG2, PG3, PG4, PG5, PG6, PG7, PG8, PG9, PG10, PG11, PG12, } from '../../assets';

const PhotoGridSection = () => {
  // Replace the placeholders with your photo URLs
  const photos = [
    PG1,
    PG2,
    PG3,
    PG4,
    PG5,
    PG6,
    PG7,
    PG8,
    PG9,
    PG10,
    PG11,
    PG12,
    // PG13,
    // PG14,
    // PG15,
    // PG16,
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 px-14">
            <h2 className="text-6xl font-lighter tracking-widest font-bebas-neue text-gray-700">
              FASHIONABLE +
            </h2>
            <h2 className="text-[8rem] text-blue-500 mb-4 -mt-14 font-freehand">
              empowered!
            </h2>
            <p className="text-gray-600 mb-4 font-serif">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. 
            </p>
            <p className="text-gray-600 mt-4 mb-4 font-serif">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <button className="border-[#565455] border-2 border-double text-gray-700 py-2 px-10 rounded-md text-lg font-semibold font-poppins transition-all transform hover:scale-105 hover:shadow-lg">
              Shop Now
            </button>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative aspect-w-1 aspect-h-1 h-[12rem]">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="object-cover w-full h-full rounded-md transition-all transform hover:scale-105"
                />
              </div>
            ))}
          </div>
      </div>
    </div>
    </div>
  );
};

export default PhotoGridSection;
