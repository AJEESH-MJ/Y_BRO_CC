import React from "react";
import { O1 } from "../../assets/index";

const FlashSaleSection = () => {
  return (
    <div className="h-[35rem] w-full bg-gray-200 flex">
      <div className="w-[50rem]">
        <img src={O1} alt="Flash Sale" className="h-full w-full object-cover" />
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center text-gray-700 relative bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300">
        <div className="ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="100"
            height="120"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path d="M2426 5099 c-19 -15 -216 -398 -672 -1310 -354 -709 -644 -1298 -644 -1309 0 -32 21 -67 47 -79 16 -8 164 -11 470 -11 352 0 444 -3 440 -12 -2 -7 -219 -522 -481 -1144 -262 -622 -476 -1141 -476 -1153 0 -30 52 -81 82 -81 13 0 34 7 46 16 21 14 2714 3205 2755 3264 24 35 21 76 -8 105 l-24 25 -522 0 c-413 0 -520 3 -516 13 2 6 223 356 489 777 267 421 490 775 496 787 20 36 14 82 -13 108 l-24 25 -709 0 c-708 0 -709 0 -736 -21z" />
            </g>
          </svg>
        </div>
        <h2 className="text-2xl -mb-4 font-poppins">Sale is On!</h2>
        <h3 className="text-[8rem] font-bebas-neue tracking-widest font-bold text-blue-500">
          50% OFF
        </h3>
        <p className="text-lg mb-6 -mt-6 w-[20rem] font-serif">
          Hurry, limited time offer. Don't miss out! Shop now and save big.
        </p>
        <button className="border-[#565455] border-2 border-double text-white py-2 px-10 rounded-md text-xl font-semibold font-poppins transition-all transform hover:scale-105 hover:shadow-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default FlashSaleSection;
