import React, {useState, useEffect} from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {

const testimonials = [
    {
      url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-3.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      title: "BSc, Software Engineering",
    },
    {
      url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-1.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Cina",
      title: "BSc, Software Engineering",
    },
    {
      url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-2.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Deep",
      title: "BSc, Software Engineering",
    },
    {
      url:"https://thepixelcurve.com/html/edubin/images/testimonial/t-1.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Yg Taye",
      title: "BSc, Software Engineering",
    },
    // Add more testimonials as needed
  ];
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesPerView based on window width
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
    //   navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
            <div className="w-full h-full pl-4 mt-0 ">
                <div className="flex max-w-lg py-6 rounded-md gap-8 justify-center items-center shadow-2xl bg-white pl-2">
                    <img src={testimonial.url} alt="" className='h-24 w-24 object-contain rounded' />
                    <div>
                        <p className="text-gray-700 mb-4">{testimonial.message}</p>
                        <p className="text-gray-600 font-semibold">{testimonial.author}</p>
                        <p className="text-gray-600 text-lg">{testimonial.title}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
