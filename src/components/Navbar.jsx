import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Phone, Layers } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center fixed top-4 md:top-6 z-50">
      <nav
        className="w-[95%] sm:w-[85%] md:w-[70%] backdrop-blur-md rounded-2xl px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(206, 186, 158, 0.2)" }}
      >
        {/* Left Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src="fazool.jpeg"
            alt="profile"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
          />

          {/* Hidden on mobile */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-bold text-sm sm:text-lg">
              Ammar Awan
            </span>

            <div className="flex items-center text-[10px] sm:text-[13px] text-gray-100 gap-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
              Available for work
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-6 text-white text-lg sm:text-2xl">
          <Link to="/" className="group relative p-1">
            <Home className="transition transform group-hover:scale-125" />
            <span className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Home
            </span>
          </Link>

          <Link to="/services" className="group relative p-1">
            <Layers className="transition transform group-hover:scale-125" />
            <span className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Services
            </span>
          </Link>

          <Link to="/about" className="group relative p-1">
            <User className="transition transform group-hover:scale-125" />
            <span className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              About
            </span>
          </Link>

          <Link to="/work" className="group relative p-1">
            <Briefcase className="transition transform group-hover:scale-125" />
            <span className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Work
            </span>
          </Link>

          <Link to="/contact" className="group relative p-1">
            <Phone className="transition transform group-hover:scale-125" />
            <span className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
