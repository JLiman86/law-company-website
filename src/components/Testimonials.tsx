import TestimonialSlider from "./TestimonialSlider";


const Testimonials = () => {
  return (
    <section>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block"></div>
        <div className="p-5 lg:pl-0"><TestimonialSlider/></div>
      </div>
    </section>
  );
};

export default Testimonials;
