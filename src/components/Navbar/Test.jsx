import React from "react";
import { IoMdMenu } from "react-icons/io";

const Test = () => {
  return (
    <div className="bg-white border-t border-gray-200">
      <div className="navbar shadow-sm text-black max-w-7xl mx-auto px-0 ">
        <div className="navbar-start ">
          <div className="dropdown ml-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <a href="#" className="text-teal-600 font-semibold hover:underline">
              SELL WITH US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
