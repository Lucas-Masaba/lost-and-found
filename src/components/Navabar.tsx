import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import "../assets/home.css";
import { RxHamburgerMenu as Burger } from "react-icons/rx";
import { AiOutlineClose as Close } from "react-icons/ai";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "FOUND", link: "/found-items" },
    { name: "LOST", link: "/lost-items" },
    { name: "REPORT", link: "/report-item" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between py-4 bg-white md:flex md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <span className="pt-2 mr-1 text-3xl text-indigo-600">
            {/* <ion-icon name="logo-ionic"></ion-icon> */}
          </span>
          FindIt
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-4 md:hidden"
        >
          {open ? <Close /> : <Burger />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <NavLink
                to={link.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "rounded-sm bg-slate-300 px-2 py-1"
                    : "px-2 py-1"
                }
                // className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
