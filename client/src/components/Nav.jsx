import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex items-center justify-between text-white h-16 md:h-16 pr-1 mt-2 md:px-16 bg-black">
      <div className="text-2xl text-white md:text-6xl md:pt-2 font-semibold pl-1">
        <Link to="/">Chartify</Link>
      </div>
      <div className="hidden  md:flex gap-4 text-lg md:text-xl font-normal">
        <ul>
          <li className="font-semibold pr-2">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li className="bg-white text-black rounded-lg py-1 px-2 border-2 hover:bg-indigo-700 hover:text-white ">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className=" md:hidden w-screen flex flex-col items-center text-lg font-normal absolute top-16 bg-black">
          <ul className=" m-1">
            <li className="font-semibold pr-2">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className=" m-1 pb-2">
            <li className="bg-white text-black rounded-lg py-1 px-2 border-2 hover:bg-indigo-700 hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
