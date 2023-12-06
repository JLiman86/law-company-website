import Person from "../assets/img/lawyer_banner.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-[70px] bg-gradient-to-b
     from-orange-200 to-white"
    >
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2">
        <div className="relative pb-10">
          <div className="pt-14 text-center">
            <h1 className="leading-[70px]  font-primary  text-6xl font-bold text-primary">
              Your Problem <br />
              <span className="text-accent">Our Goal.</span>
            </h1>
            <p className="mt-10 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              expedita? Magni cumque, fuga doloribus possimus aperiam sint cum
              alias enim?
            </p>
          </div>
          <form
            className="bg-accent p-10 mt-10 block max-w-[400px] mx-auto md:absolute 
          md:w-[350px] lg:w-[400px]  md:left-1/2 md:-translate-x-1/2"
          >
            <h2 className="font-bold  text-2xl text-white text-center">
              Get an appointment
            </h2>
            <div className="w-[60px] h-[6px] bg-white mx-auto mt-2"></div>
            <div className="space-y-4 mt-8">
              <div>
                <input
                  placeholder="Full name"
                  type="text"
                  className="p-2 w-full outline-none text-sm"
                />
              </div>
              <div>
                <input
                  placeholder="Phone"
                  type="phone"
                  className="p-2 w-full outline-none text-sm "
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  className="p-2 w-full outline-none text-sm"
                />
              </div>
              <div>
                <textarea
                  className="p-2 outline-none text-sm w-full min-h-[150px]"
                  placeholder="Your message"
                  id=""
                ></textarea>
              </div>
            </div>

            <button className="block mx-auto mt-5 bg-primary text-white px-4 py-2">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <img src={Person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
