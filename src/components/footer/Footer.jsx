import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXTwitter,faInstagram,faYoutube,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.svg";

const CrevoFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-pink-50 to-pink-200 px-5 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 justify-center items-center md:gap-40 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <section >
              <img src={logo} alt={"Crevo Logo"} className="w-20 h-20 " />

              <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Crevo is an online tool that helps users easily create and
                customize professional portfolios to showcase their skills,
                projects, and experience without needing coding knowledge.
              </p>
            </section>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="text-black hover:text-pink-500 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                className="text-black hover:text-red-500 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Template Section */}
          <div className="col-span-1 py-8">
           <div className="">
             <h3 className="text-lg font-semibold text-gray-700 mb-4 ">
              Template
            </h3>
            <div>
              <ul className="space-y-3">
                <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-sm font-bold Nunito Sans serif"
              >
                Login
              </a>
              <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-sm  font-bold Nunito Sans serif"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-sm font-bold Nunito Sans serif"
              >
                Dashboard
              </a>
              </ul>
            </div>
           </div>
          </div>

          {/* About Us Section */}
          <div className="col-span-1 py-8">
            <div className="">
               <h3 className="text-lg font-semibold text-gray-700 mb-4">
              About Us
            </h3>
            <div>
              <ul className="space-y-3">
                 <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-sm font-bold Nunito Sans serif"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-sm font-bold Nunito Sans serif"
              >
                Legal Notice
              </a>
              </ul>
            </div>
            </div>
           
          </div>

          {/* Support Section */}
          <div className="col-span-1 py-8">
            <div className="">
                 <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Support
            </h3>
            <div>
             <ul className="space-y-3">
               <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-sm  font-bold Nunito Sans serif"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-black hover:text-gray-800 transition-colors text-smfont-bold font-bold Nunito Sans serif"
              >
                Contact Us
              </a>
             </ul>
            </div>

            </div>
         
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-300 pt-6 Nunito Sans serif">
          <p className="text-black text-sm">Copyright © 2025 Crevo</p>
        </div>
      </div>
    </footer>
  );
};

export default CrevoFooter;
