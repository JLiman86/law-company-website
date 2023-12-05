import { IoMdClose } from "react-icons/io";
import { navigation } from "../data";
import { Link } from "react-scroll";

type SideBarProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const SideBar = ({ setIsOpen, isOpen }: SideBarProps) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      }  fixed w-screen h-screen top-0 left-0 bg-primary translate-x-full flex items-center justify-center transition-all`}
    >
      <ul>
        {navigation.map((item, idx) => (
          <li className="text-white text-center" key={idx}>
            <Link
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              to={item.href}
              className=" cursor-pointer p-3 text-xl hover:text-accent"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="absolute top-7 left-7 p-5 text-white hover:text-accent"
      >
        <IoMdClose size={30} />
      </button>
    </div>
  );
};

export default SideBar;
