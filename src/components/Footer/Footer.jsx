import React from "react";
import logo from "../../../public/logo.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import google from "../../../public/google.png";
import master from "../../../public/master.png";
import visa from "../../../public/visa.png";
import express from "../../../public/express.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0C1220] text-white px-6 py-10 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Logo and Contact */}
            <div className="flex flex-col gap-2 md:gap-10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-4">
                  <img src={logo} alt="logo" className="w-10" />
                  <h2 className="text-3xl font-bold">FALCON</h2>
                </div>
                <div>
                  <p className="text-sm mb-4">
                    Experience our new platform &amp; Enjoy exiting deals and
                    offers on your day to day
                  </p>
                </div>
              </div>

              <div className="flex flex-col  gap-1 md:gap-4">
                <div className="flex gap-2 justify-center items-center">
                  <span className=" font-bold text-xl ">
                    <TfiLocationPin></TfiLocationPin>
                  </span>
                  <p>House #64, Road 13, ASA Center, Uttara, Dhaka-1402</p>
                </div>
                <div className="flex gap-2  items-center">
                  <span className=" font-bold text-xl ">
                    <PiPhoneCall></PiPhoneCall>
                  </span>
                  <p>01729-1497201</p>
                </div>
                <div className="flex gap-2  items-center">
                  <span className=" font-bold text-xl ">
                    <MdOutlineMail></MdOutlineMail>
                  </span>
                  <p>falcon@gmail.com</p>
                </div>
              </div>

              <div>
                <div className="flex gap-4 items-center  text-2xl">
                  <div>
                    <h1>Follow us on</h1>
                  </div>

                  <div>
                    <FaFacebook></FaFacebook>
                  </div>
                  <div>
                    <FaInstagram></FaInstagram>
                  </div>
                  <div>
                    <FiTwitter></FiTwitter>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-gray-400">ABOUT</h3>
              <ul className="space-y-0 md:space-y-2 ">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Cancellation &amp; Returns</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-gray-400">HELP</h3>
              <ul className="space-y-0 md:space-y-2">
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">My Orders</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>

            {/* Support and Apps */}

            <div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-gray-400">
                  Need Support?
                </h3>
                <button className="btn btn-outline text-white w-2/3 mb-6 space-x-2">
                  <span className="font-bold text-lg md:text-2xl text-teal-600">
                    <MdOutlineSupportAgent></MdOutlineSupportAgent>
                  </span>
                  <span className="text-sm md:text-lg">10724-7814XX</span>
                </button>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-gray-400">
                  DOWNLOAD APP
                </h3>
                <div className="space-y-4">
                  <img
                    src={google}
                    className="w-40 rounded-sm"
                    alt="Google Play"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payments */}
          <div className="my-3 md:my-10  border-b border-gray-700 py-1 md:py-6 text-center flex justify-end items-center gap-5">
            <div>
              <p className=" text-sm md:text-xl mb-4 text-gray-400">
                PAYMENTS ACCEPTED
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4">
              <img src={visa} className="h-6 md:h-12" alt="VISA" />
              <img src={master} className="h-6 md:h-12" alt="Mastercard" />
              <img
                src={express}
                className="h-6 md:h-12"
                alt="American Express"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-white">Falcon ©2025. Design by xyz</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
