import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-white p-16 mx-60">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="50"
            height="50"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#4A5568"
              stroke="none"
            >
              <path d="M2410 4629 c-607 -69 -1161 -401 -1508 -907 l-50 -73 -22 98 c-32 147 -11 137 -190 93 -129 -31 -155 -41 -153 -55 0 -10 36 -157 78 -327 79 -314 93 -351 147 -391 53 -40 100 -34 428 47 168 42 312 80 321 84 15 6 13 22 -20 159 -20 84 -39 154 -42 157 -2 3 -67 -11 -143 -30 -76 -19 -141 -33 -143 -30 -9 9 104 169 187 263 251 288 597 487 989 570 171 36 401 38 566 5 726 -144 1251 -737 1301 -1469 l7 -103 158 0 159 0 0 48 c0 26 -5 90 -10 142 -70 672 -473 1246 -1081 1540 -311 150 -665 214 -979 179z" />
              <path d="M640 2353 c0 -27 5 -91 10 -143 60 -578 372 -1094 854 -1413 321 -212 746 -333 1102 -313 405 22 813 174 1146 427 162 123 368 343 467 497 18 28 36 52 40 52 4 0 15 -34 25 -76 10 -42 22 -91 27 -109 l9 -33 152 39 c83 21 153 41 156 43 8 8 -148 627 -169 671 -11 22 -31 49 -46 59 -54 39 -105 33 -433 -48 -168 -42 -312 -80 -321 -84 -15 -6 -13 -22 20 -159 20 -84 39 -154 42 -157 2 -3 68 12 144 33 77 21 142 37 144 35 7 -6 -49 -92 -120 -184 -297 -384 -727 -624 -1219 -681 -469 -53 -1012 175 -1331 559 -225 271 -351 584 -375 930 l-7 102 -158 0 -159 0 0 -47z" />
            </g>
          </svg>
          <p className="text-lg font-semibold font-poppins mt-2">
            Free Shipping and Returns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <svg
          width={50}
          height={50}  
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 14V18"
              stroke="#4A5568"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15"
              stroke="#4A5568"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M17.811 6.5C17.1449 3.91216 14.7958 2 12 2C10.223 2 8.62643 2.7725 7.52779 4"
              stroke="#4A5568"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
          <p className="text-lg font-semibold font-poppins mt-2">Secured Payments</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <svg
          width={50}
          height={50}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4A5568"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>{" "}
            <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z"></path>{" "}
          </svg>
          <p className="text-lg font-semibold font-poppins mt-2">Customer Service</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
