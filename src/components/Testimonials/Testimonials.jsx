import React, { useRef } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import ResponsiveReveal from '../ResponsiveReveal/ResponsiveReveal';

const testimonials = [
  {
    name: 'Amina Rahman',
    role: 'Artist & Group Leader',
    feedback:
      "Hobbex has been a game-changer for me. I’ve connected with amazing people who love painting just like me. It’s more than just a platform — it’s a community.",
    image: 'https://i.ibb.co/7xLM5ZFJ/68.jpg',
  },
  {
    name: 'Sakib Hasan',
    role: 'Cycling Enthusiast',
    feedback:
      "I joined a cycling group in my area, and now we ride together every weekend! Hobbex helped me find real friends who share my hobby.",
    image: 'https://i.ibb.co/gL4H6wYV/34.jpg',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Coding Hobbyist',
    feedback:
      "I was nervous about joining hobby groups online, but Hobbex is safe, clean, and super easy to use. I even started my own JavaScript group!",
    image: 'https://i.ibb.co/Y4hm4HmL/43.jpg',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Photography Explorer',
    feedback:
      "Through Hobbex, I discovered a local photography group that meets every month. It reignited my passion and gave me the courage to start a photo blog.",
    image: 'https://i.ibb.co/6ct086DM/52.jpg',
  },
  {
    name: 'Rima Chowdhury',
    role: 'Baking Lover',
    feedback:
      "I’ve always loved baking, but never knew others nearby did too. Hobbex introduced me to a weekend baking club where we share recipes and have so much fun!",
    image: 'https://i.ibb.co/cckqbxjt/21.jpg',
  },
  {
    name: 'Farhan Kabir',
    role: 'Chess Group Member',
    feedback:
      "Being part of the chess community on Hobbex has made me sharper and more social. The app is intuitive and makes it so easy to stay connected.",
    image: 'https://i.ibb.co/fGLwVv1f/19.jpg',
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  return (
    <section className="">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        What Our Users Say
      </h2>
      <ResponsiveReveal>
        <div className="relative group">
          {/* Left Arrow */}
          <MdArrowBackIosNew
            onClick={slideLeft}
            size={38}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden black-text-dark-mode @min-[640px]:block opacity-0 group-hover:opacity-60 hover:opacity-100 bg-white rounded-full p-2 shadow-md cursor-pointer transition"
          />
          {/* Scrollable Testimonials */}
          <div
            ref={sliderRef}
            className="sm:flex grid grid-cols-1 @min-[554px]:grid-cols-2 gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden"
          >
            {testimonials.map((testimonial, idx) => (          
              <div
                  key={idx}
                  className="sm:w-[280px] md:w-[335px] lg:w-[329px] xl:w-[306px] 2xl:w-[371px] snap-start bg-base-100 border border-base-content/50 rounded-md p-6 shadow hover:shadow-xl transition duration-300 flex-shrink-0"
                >
                  <FaQuoteLeft className="text-2xl text-accent mb-3" />
                  <div className="md:min-h-[120px] xl:min-h-[150px] 2xl:min-h-[120px]">
                    <p className="text-gray-700 white-text-dark-mode mb-4">{testimonial.feedback}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          {/* Right Arrow */}
          <MdArrowForwardIos
            onClick={slideRight}
            size={38}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden @min-[640px]:block opacity-0 group-hover:opacity-60 hover:opacity-100 bg-white black-text-dark-mode rounded-full p-2 shadow-md cursor-pointer transition"
          />
        </div>
      </ResponsiveReveal>
    </section>
  );
};

export default Testimonials;
