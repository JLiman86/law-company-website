const Subscribe = () => {
  return (
    <section
      className="bg-gradient-to-b
     from-white to-orange-200 font-primary text-center text-primary"
    >
      <div className="wrapper py-20">
        <h2 className="font-semibold text-3xl">Subscribe To Our Newslatter</h2>
        <p className="mt-3 text-xl">
          Be first to get the latest news about us.
        </p>
        <form className=" gap-4 flex flex-col md:flex-row md:items-center md:justify-center max-w-[400px] mx-auto mt-10">
          <input
            placeholder="Your email address"
            className="outline-none  flex-1  p-2"
            type="text"
            name=""
            id=""
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="text-white  px-6 py-2 bg-primary font-body"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
