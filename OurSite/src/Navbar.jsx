import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-28 py-7 bg-lime-600 h-16 w-full">
        <nav-part1>
          <logo className="flex items-center text-white">
            <h1 className="text-2xl font-bold ">Logo</h1>
          </logo>
        </nav-part1>
        <nav-part2 className="flex items-center ">
          <ul className="flex items-center gap-20 text-lg text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav-part2>
        <nav-part3>
          <btn className="flex items-center text-white gap-12">
            <img
              className="h-8 "
              src="https://img.icons8.com/?size=50&id=7695&format=png"
              alt=""
            />
            <button className="px-5 py-2 bg-black rounded">Contact Us</button>
          </btn>
        </nav-part3>
          <img
            className="menu"
            src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png"
            alt=""
          />
      </div>
    </>
  );
};

export default Navbar;
