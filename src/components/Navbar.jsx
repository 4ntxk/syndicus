import { styles } from "../styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { menu, close } from "../assets";
import { navLinks } from "../constants/instant.js";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-gradient-to-r from-bgpurple from-45% to-bgblue uppercase`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logov1.png"
            alt="logo"
            className="w-32 h-20 object-contain xs:hidden md:block"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ml-3">
          {navLinks.map((nav) => (
            <Link
              to={`${nav.id}`}
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </Link>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-bgblue from-45% to-primary border-solid absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <Link
                  to={`${nav.id}`}
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
