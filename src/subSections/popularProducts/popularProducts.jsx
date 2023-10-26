import React from "react";
import { PP1, PP2, PP3, PP4 } from "../../assets/index";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Denim Shirt",
      image: PP4,
      price: 49.99,
    },
    {
      id: 2,
      name: "Rain Coat",
      image: PP2,
      price: 39.99,
    },
    {
      id: 3,
      name: "Hoddies",
      image: PP3,
      price: 59.99,
    },
    {
      id: 4,
      name: "Travel Backpack",
      image: PP1,
      price: 59.99,
    },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold font-poppins text-gray-700">
          Popular Products
        </h1>
      </div>

      <div className="container mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[15rem] h-[30rem] object-contain mx-auto"
              />
              <div className="-mt-14">
                <h3 className="text-2xl font-semibold font-bebas-neue tracking-wider text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600 font-freehand">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="border-[#565455] border-2 border-double text-gray-700 mt-14 py-2 px-10 rounded-md text-lg font-semibold font-poppins transition-all transform hover:scale-105 hover:shadow-lg">
        View All Products
      </button>
    </section>
  );
};

export default PopularProducts;
