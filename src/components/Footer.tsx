import { social } from "../data";

const Footer = () => {
  return (
    <footer id='contact' className="bg-primary">
      <div className="wrapper py-7">
        <div className="flex justify-center items-center gap-10">
          {social.map((item) => {
            return (
              <a href="#">
                <img className="" src={item.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
