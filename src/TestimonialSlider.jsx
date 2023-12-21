import Testimonial from './Testimonial';


const TestimonialSlider = () => { 
  return (
    <div className='bg-blue-100 bg-no-repeat'>
    <div className="w-full pb-20 flex items-center justify-center">
      <div className='md:px-32 m-12 w-full'>
        <div className='mt-16 px-8 md-mx-32'>
            <h1 className='text-2xl font-bold'>Testimonials</h1>
            <hr className='border-yellow-500 w-12 border-2 mt-2 mb-4' />
            <h1 className='text-5xl font-bold mb-12'>What they say</h1>
        </div>
        <div className=''>
          <Testimonial />
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSlider;
