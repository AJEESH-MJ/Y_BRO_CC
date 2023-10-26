// NewArrivalsSection.js

import React from "react";
import { NA1 } from "../../assets";

const NewArrivalsSection = () => {
  // Replace these placeholders with actual product data
  const newArrivals = [
    {
      id: 1,
      name: "Product 1",
      image: NA1,
      price: "Rs.29.00",
      rating: 5, // Replace with the actual rating for the product
    },
    {
      id: 2,
      name: "NA1",
      image: NA1,
      price: "Rs.39.00",
      rating: 3,
    },
    {
      id: 3,
      name: "NA3",
      image: NA1,
      price: "Rs.49.00",
      rating: 4, // Replace with the actual rating for the product
    },
    {
      id: 4,
      name: "NA4",
      image: NA1,
      price: "Rs.49.00",
      rating: 4, // Replace with the actual rating for the product
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 font-poppins text-gray-700">
          New Arrivals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((product) => (
            <div key={product.id} className="relative p-4 rounded-lg group">
              <div className="bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[30rem] rounded-lg"
                />
                <button className="-mt-12 flex w-full items-center justify-center transform opacity-0 group-hover:opacity-100 bg-gray-700 border-2 border-gray-700 text-white font-semibold font-poppins px-4 py-3 hover:bg-gray-500 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-2 font-bebas-neue tracking-wider">{product.name}</h3>
              <p className="text-gray-600 mt-1 font-freehand">{product.price}</p>
              <div className="flex items-center justify-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < product.rating ? "#f5f50a" : "none"}
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path
                      d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
