import React from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <div className="w-full text-white font-sans bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  space-y-2 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl">🦅</span>
            <span className="text-xl font-bold">FALCON</span>
          </div>

          {/* Search Bar */}
          <div className="w-full md:max-w-2xl mx-0 md:mx-4">
            <div className="flex rounded-md overflow-hidden bg-white shadow-sm">
              <input
                type="text"
                placeholder="Search for anything..."
                className="input w-full text-black rounded-none px-4 py-2 focus:outline-none"
              />
              <button
                className="bg-teal-500 px-4 flex items-center justify-center"
                aria-label="Search"
              >
                <FiSearch className="text-white" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
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
        <div className="max-w-7xl mx-auto text-sm text-gray-700 flex flex-wrap items-center justify-between px-4 md:px-6 py-2">
          {/* Left Nav Items */}
          <div className="flex flex-nowrap overflow-x-auto gap-4 text-sm font-medium">
            <div className="text-teal-600 font-semibold flex items-center gap-1">
              <span className="font-bold text-teal-600 ">
                <IoMdMenu></IoMdMenu>
              </span>
              <h1 className="">Categories</h1>
            </div>

            <div className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Electronics
            </div>

            <div className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Home Appliances
            </div>

            <div className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Mother & Baby
            </div>

            <div className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Automotive
            </div>

            <div className="hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Sports Gear
            </div>
          </div>

          {/* Right Nav Links */}
          <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2 md:mt-0 whitespace-nowrap">
            <a href="#" className="hover:text-teal-600">
              TRACK ORDER
            </a>
            <a href="#" className="hover:text-teal-600">
              HELP CENTER
            </a>
            <a href="#" className="text-teal-600 font-semibold hover:underline">
              SELL WITH US
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 text-sm text-gray-500">
          <span>Home</span> &gt; <span>Tops</span> &gt;{" "}
          <span className="text-blue-600 font-medium">T-Shirts</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
