import React from "react";
import { PG11, PG8, P8, T1 } from "../../assets/index";

const Testimonial = ({ image, name, date, content }) => {
  return (
    <div className="container mx-auto">
      <img src={image} alt={name} className="w-40 h-40 rounded-full mx-auto" />
      <p className="text-center text-gray-700 mt-2 font-semibold text-2xl font-bebas-neue tracking-wider">
        {name}
      </p>
      <p className="text-center text-gray-500 text-sm font-freehand">{date}</p>
      <p className="text-center text-gray-800 mt-4 px-20 font-serif">{content}</p>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      image: PG11,
      name: "Joe Hisaishi: Interview",
      date: "October 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.",
    },
    {
      image: PG8,
      name: "Mind New Artworks To Your Pad",
      date: "September 15, 2023",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: P8,
      name: "Pharell Has The Magic Touch",
      date: "August 22, 2023",
      content:
        "A wonderful product and great customer service. Highly recommended!",
    },
    {
      image: T1,
      name: "Life On Two Wheels",
      date: "July 10, 2023",
      content:
        "I can't believe I ever shopped anywhere else. This is the best online store!",
    },
  ];

  return (
    <div className="bg-white p-8">
      <svg width="1800" height="1" xmlns="http://www.w3.org/2000/svg">
        <line x1="200" y1="0" x2="1600" y2="0" stroke="black" stroke-width="1" />
      </svg>

      <div className="container mx-auto mt-10 mb-20">
        <h1 className="text-3xl mb-10 font-bold font-serif text-gray-700">
          Fresh From The Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              date={testimonial.date}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
      <svg width="1800" height="1" xmlns="http://www.w3.org/2000/svg">
        <line x1="200" y1="0" x2="1600" y2="0" stroke="black" stroke-width="1" />
      </svg>
    </div>
  );
};

export default TestimonialSection;
