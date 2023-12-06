import { skills } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b
     from-white to-orange-200 text-primary text-center font-primary"
    >
      <div className="wrapper pt-20 pb-10">
        <h2 className="text-5xl p-3 font-semibold">What we do</h2>
        <p className="max-w-[600px] mx-auto mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error illum,
          odio recusandae deserunt nesciunt voluptate praesentium esse aut est
          quidem reiciendis voluptatem eius, nemo ipsum vel ullam veniam fugit
          quo.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {skills.map((skill)=>{

            const {icon,title,description} = skill
            return <li className="space-y-3">
              <img className="mx-auto h-[40px]" src={icon} alt="" />
              <h3 className="text-4xl font-semibold" >{title}</h3>
              <p>{description}</p>
            </li>
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
