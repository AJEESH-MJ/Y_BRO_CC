import React from "react";
import { F1, F2, F3, F4 } from "../../assets/index";

const FeaturedCollections = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 font-poppins text-gray-700">
          Featured Collections
        </h1>
        <p className="text-lg text-gray-400 font-serif mb-8 w-[50rem] mx-auto">
          Explore our carefully curated collection of top products, handpicked
          just for you. Discover the latest trends and must-have items that will
          elevate your shopping experience.
        </p>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#e3efef] h-[15rem] w-[33rem] rounded-lg p-6 shadow-md flex justify-start items-start flex-col">
              <h1 className="text-2xl font-semibold font-poppins">T-Shirts</h1>
              <p className="text-lg text-gray-400 hover:scale-95 transition duration-300">View products &rarr;</p>
              <img
                src={F1}
                alt=""
                className="w-[18rem] h-[18rem] object-contain rounded-md -mt-28 ml-60 hover:scale-95 transition duration-300"
              />
            </div>

            <div className="bg-[#f2fad5] h-[19rem] w-[33rem] rounded-lg p-6 shadow-md ml-[2px] flex justify-start items-start flex-col">
              <h1 className="text-2xl font-semibold font-poppins">Hoddie</h1>
              <p className="text-lg text-gray-400 hover:scale-95 transition duration-300">View products &rarr;</p>
              <img
                src={F2}
                alt=""
                className="w-[18rem] h-[18rem] object-contain rounded-md -mt-20 ml-56 hover:scale-105 transition duration-300"
              />
            </div>

            <div className="bg-[#f0cdf3] h-[19rem] w-[33rem] rounded-lg p-6 shadow-md -mt-[60px] flex justify-start items-start flex-col">
              <h1 className="text-2xl font-semibold font-poppins">Backpacks</h1>
              <p className="text-lg text-gray-400 hover:scale-95 transition duration-300">View products &rarr;</p>
              <img
                src={F3}
                alt=""
                className="w-[24rem] h-[24rem] object-contain rounded-md -mt-28 ml-60 hover:scale-105 transition duration-300"
              />
            </div>

            <div className="bg-[rgb(157,217,245)] h-[15rem] w-[33rem] rounded-lg p-6 shadow-md mt-1 ml-[2px] flex justify-start items-start flex-col">
              <h1 className="text-2xl font-semibold font-poppins">Jeans</h1>
              <p className="text-lg text-gray-400 hover:scale-95 transition duration-300">View products &rarr;</p>
              <img
                src={F4}
                alt=""
                className="w-[28rem] h-[28rem] object-contain rounded-md -mt-56 ml-40 hover:scale-95 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
