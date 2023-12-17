import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="w-full h-full pl-8">
      <div className="flex max-w-lg  py-6 rounded-md gap-8 justify-center items-center">
        <img src={testimonial.url} alt="" className='h-24 w-24 object-contain rounded' />
        <div>
            <p className="text-gray-700 mb-4">{testimonial.message}</p>
            <p className="text-gray-600 font-semibold">{testimonial.author}</p>
            <p className="text-gray-600 text-lg">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
