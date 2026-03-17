import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Phone, Layers } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center fixed top-6 z-50">
      <nav
        className="w-[85%] md:w-[70%] backdrop-blur-md rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(206, 186, 158, 0.2)" }} // #ceba9e 20% opacity
      >
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg">Ammar Awan</span>
            <div className="flex items-center text-[13px] text-gray-100 gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for work
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-white text-2xl">
          <Link to="/" className="group relative p-1">
            <Home className="transition transform group-hover:scale-125" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Home
            </span>
          </Link>

          {/* Services Icon */}
          <Link to="/services" className="group relative p-1">
            <Layers className="transition transform group-hover:scale-125" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Services
            </span>
          </Link>

          <Link to="/about" className="group relative p-1">
            <User className="transition transform group-hover:scale-125" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              About
            </span>
          </Link>

          <Link to="/work" className="group relative p-1">
            <Briefcase className="transition transform group-hover:scale-125" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Work
            </span>
          </Link>

          <Link to="/contact" className="group relative p-1">
            <Phone className="transition transform group-hover:scale-125" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
