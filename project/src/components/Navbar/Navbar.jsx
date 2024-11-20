import React from "react";
// import style from "./Navbar.module.css";
// import style from "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
const Navbar = () => {
  return (
    <div className="px-10 py-6">
      <nav className="flex justify-between items-center">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="">
          <ul className="flex gap-16 text-base font-semibold">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>

            <li>
              <Link
                className="bg-primary px-5 py-2.5 rounded-full text-white font-bold"
                to="/Touch"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
