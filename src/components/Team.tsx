import { team } from "../data";

const Team = () => {
  return (
    <section
      id="team"
      className="bg-gradient-to-b
     from-orange-200 to-white text-primary text-center font-primary"
    >
      <div className="wrapper pt-20 pb-10">
        <h2 className="text-5xl p-3 font-semibold">Our Attourneys</h2>
        <p className="font-body italic max-w-[600px] mx-auto mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error illum,
          odio recusandae deserunt nesciunt voluptate praesentium esse aut est
          quidem reiciendis voluptatem eius, nemo ipsum vel ullam veniam fugit
          quo.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {team.map((item) => {
            const { image, name,position, description } = item;
            return (
              <li className="space-y-3">
                <img className="mx-auto " src={image} alt="" />
                <h2 className="text-4xl font-semibold">{name}</h2>
                <h3 className="text-2xl">{position}</h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Team