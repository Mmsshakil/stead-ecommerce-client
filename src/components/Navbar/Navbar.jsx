import React from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import logo from "../../../public/logo.jpg";

const Navbar = () => {
  return (
    <div className="bg-[#0D1B2A]">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto text-white font-sans py-2 md:py-3 px-1 md:px-0">
        <div className=" flex flex-row items-center justify-between space-y-2 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <span>
              <img src={logo} alt="logo" className="w-10" />
            </span>
            <span className="text-sm md:text-xl font-bold">FALCON</span>
          </div>

          {/* Search Bar */}
          <div className="w-32 md:w-full md:max-w-2xl mx-0 md:mx-4">
            <div className="flex rounded-md overflow-hidden  bg-white shadow-sm">
              <input
                type="text"
                placeholder="Search for anything..."
                className="input w-full  text-white rounded-none px-4 py-2 focus:outline-none"
              />
              <button
                className="bg-teal-500 px-1 md:px-4 flex items-center justify-center"
                aria-label="Search"
              >
                <FiSearch className="text-white" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative cursor-pointer" aria-label="Cart">
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-[10px] font-bold rounded-full px-1">
                2
              </span>
            </div>
            <FiUser className="text-xl cursor-pointer" aria-label="User" />
          </div>
        </div>
      </div>

      {/* Middle Menu */}
      <div className="bg-white border-t border-gray-200">
        <div className="navbar shadow-sm text-black max-w-7xl mx-auto px-0 ">
          <div className="navbar-start ">
            <div className="dropdown ml-1">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {/* <div tabIndex={0} role="button" className="btn btn-ghost "> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>

                <div className="text-teal-600 ">
                  <h1>Categories</h1>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                    Mother & Baby
                  </a>
                </li>
                <li>
                  <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                    Automotive
                  </a>
                </li>
                <li>
                  <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                    Sports Gear
                  </a>
                </li>

                <li>
                  <a>Customer Service</a>
                  <ul className="p-2">
                    <li>
                      <a className="text-teal-600"> Track Order</a>
                    </li>
                    <li>
                      <a className="text-teal-600"> Sell With Us</a>
                    </li>
                    <li>
                      <a className="text-teal-600"> Help Center</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex gap-2 items-center font-bold text-teal-600">
              <span className=" text-xl">
                <IoMdMenu></IoMdMenu>
              </span>
              <a>Categories</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                  Electronics
                </a>
              </li>
              <li>
                <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                  Mother & Baby
                </a>
              </li>
              <li>
                <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                  Automotive
                </a>
              </li>
              <li>
                <a className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
                  Sports Gear
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="hidden md:flex items-center gap-1 md:gap-4 text-xs text-gray-500 mt-2 md:mt-0 whitespace-nowrap">
              <a href="#" className="hover:text-teal-600">
                TRACK ORDER
              </a>
              <a href="#" className="hover:text-teal-600">
                HELP CENTER
              </a>
              <a
                href="#"
                className="text-teal-600 font-semibold hover:underline"
              >
                SELL WITH US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-0 py-2 text-sm text-gray-500">
          <span>Home</span> &gt; <span>Tops</span> &gt;{" "}
          <span className="text-blue-600 font-medium">T-Shirts</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
