import { useState,useEffect } from "react";

import Logo from "../assets/img/logo.png";
import { navigation } from "../data";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, isScrolling] = useState(false);


  useEffect(()=>{
     window.addEventListener('scroll',()=>{
      window.scrollY > 0 ? isScrolling(true) : isScrolling(false)
     })
  })
  return (
    <header className={`${scrolling ? "bg-white shadow-2xl" : ""}  fixed w-full top-0 left-0 z-20 transition-all`}>
      <div className="wrapper">
        <nav className="flex items-center justify-between py-3">
          <img src={Logo} alt="" />

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden hover:text-accent"
          >
            <IoMenu size={30} />
          </button>

          <ul className="md:flex items-center justify-center hidden">
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    offset={-70}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="text-accent"
                    to={item.href}
                    className="p-2 text-primary font-semibold cursor-pointer  hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen}  />
    </header>
  );
};

export default Header;
