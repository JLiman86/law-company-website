import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
    >
      {testimonials.map((item, idx) => {
        const { text, name, image, position } = item;
        return (
          <SwiperSlide key={idx} >
            <div className="text-accent">
              <FaQuoteLeft size={30} />
            </div>
            <p className="mt-1 mb-5 italic">{text}</p>
            <div className="flex items-center gap-3 pb-6">
              <img src={image} alt="" />
              <div>
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-xs">{position}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
