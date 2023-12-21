import React, { useState, useEffect } from 'react';
import Testimonial from './components/Testimonial';

const testimonials = [
  {
    url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-3.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
    title: "BSc, Software Engineering",
  },
  {
    url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-3.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Cina",
    title: "BSc, Software Engineering",
  },
  {
    url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-3.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Deep",
    title: "BSc, Software Engineering",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const hasMultipleTestimonials = testimonials.length > 1;

  useEffect(() => {
    // Automatic sliding every 5 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentSlide]);

  const containerWidth = `${testimonials.length * 100}%`;
  const slideWidth = '65%';
  return (
    <div className="bg-blue-300 w-full h-screen flex items-center justify-center overflow-hidden">
      <div className='m-12 md:m-32 bg-gray-200 w-full'>
        <div className='mt-16 px-8'>
            <h1 className='text-2xl font-bold'>Testimonials</h1>
            <hr className='border-yellow-500 w-12 border-2 mt-2 mb-4' />
            <h1 className='text-5xl font-bold mb-12'>What they say</h1>
        </div>
        <div className="flex flex-col items-center w-full transition-transform duration-500 ease-in-out transform">
          <div className='scroll-container'>
              <div className='scroll-item scroll-container flex md:flex-row'>
                <div className='scroll-item '>
                  <Testimonial testimonial={testimonials[currentSlide]} />
                </div>

                {hasMultipleTestimonials && (
                  <div className="scroll-item hidden md:flex">
                    <Testimonial testimonial={testimonials[(currentSlide + 1) % testimonials.length]} />
                  </div>
                )}
              </div>
            </div>
          <div className='flex gap-2 mb-16'>
            <button onClick={prevSlide} className="text-red-600 hover:text-gray-800">
              o
            </button>
            <button onClick={nextSlide} className="text-red-600 hover:text-gray-800">
              o
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center items-center w-full transition-transform duration-500 ease-in-out transform">
          <div className=" overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out transform"
              style={{
                width: containerWidth,
                transform: `translateX(-50%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`w-full ${slideWidth}`}>
                  <Testimonial testimonial={testimonial} />
                </div>
              ))}

              {hasMultipleTestimonials && (
                <div className='hidden md:flex w-full'
                >
                  <Testimonial testimonial={testimonials[(currentSlide + 1) % testimonials.length]} />
                </div>
              )}
            </div>
            <div className='flex gap-2'>
              <button onClick={prevSlide} className="text-red-600 hover:text-gray-800 ">
                o
              </button>
              <button onClick={nextSlide} className="text-red-600 hover:text-gray-800">
                o
              </button>
            </div> 
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
