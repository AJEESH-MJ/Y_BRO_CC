import React from "react";
import { H1, H2, H3 } from "../../assets/index";
import FeaturedCollections from "../../subSections/featuredCollections/featuredCollections";
import PopularProducts from "../../subSections/popularProducts/popularProducts";
import SpecialOffers from "../../subSections/specialOffers/specialOffers";
import NewArrivalsSection from "../../subSections/newArrivals/newArrivals";
import PhotoGridSection from "../../subSections/photoGrid/photoGrid";
import TestimonialSection from "../../subSections/testimonials/testimonials";
import FeaturesSection from "../../subSections/features/features";

const Homepage = () => {
  return (
    <div className="bg-white">
      <section className="h-[92vh] bg-[#d9d2d5] text-black">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 overflow-hidden">
            <img
              src={H2}
              alt="Hero"
              className="w-[39rem] transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="lg:w-1/2 absolute top-0 right-0 h-full w-[50%] bg-cover bg-center">
            <img
              src={H1}
              alt="Background"
              className="h-[40rem] w-[40rem] absolute top-[25rem] right-[50rem] object-contain -z-5 rotate-15"
            />
          </div>
          <div className="lg:w-1/2 text-center mb-20 z-10 mr-10">
            <p className="text-xl mb-2 text-gray-500 font-poppins">
              Discover the latest Trends @
            </p>
            <h1 className="text-8xl font-bold mb-4 font-bebas-neue text-gray-700">
              Your Authentic Merch Store
            </h1>
            <button className="border-[#565455] border-2 border-double text-gray-700 py-2 px-10 rounded-md text-lg font-semibold font-poppins transition-all transform hover:scale-105 hover:shadow-lg">
              Shop Now
            </button>
          </div>
          <div className="lg:w-1/2 absolute top-0 right-0 h-full w-[50%] bg-cover bg-center overflow-hidden">
            <img
              src={H3}
              alt="Background"
              className="w-[42rem] mt-20 ml-80 transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
      <FeaturedCollections />
      <PopularProducts />
      <SpecialOffers />
      <NewArrivalsSection />
      <PhotoGridSection />
      <TestimonialSection />
      <FeaturesSection />
    </div>
  );
};

export default Homepage;
