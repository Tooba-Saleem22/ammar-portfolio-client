// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-12 px-6">
      {/* Divider */}
      <div className="border-t border-black/20 mt-10 mb-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-light mb-1">Ammar Awan</h3>
          <p className="text-sm font-light text-black/70 break-all">
            ammarawan0098@gmail.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl justify-center">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-black hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </a>
            ),
          )}
        </div>

        {/* Right Side Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-black border border-black px-5 py-2.5 font-light hover:bg-black hover:text-white transition w-[80%] md:w-auto"
          >
            Let's Connect
            <span className="inline-block transform rotate-45 text-xl">➔</span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/20 mt-10"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm font-light mt-6 text-black/60 px-2">
        &copy; {new Date().getFullYear()} Ammar Awan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
