// src/pages/ContactPage.js
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center min-h-screen px-4 md:px-0 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-light mb-4 text-[#ceba9e]">
          How can I help you?
        </h1>
        <p className="text-base md:text-xl text-[#ceba9e]/80">
          Got a project or collaboration in mind? Reach out, and I’ll get back
          to you soon!
        </p>
      </motion.div>

      {/* Form + Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-6xl flex flex-col md:flex-row gap-12"
      >
        {/* Left side: Form */}
        <form className="flex-1 flex flex-col gap-4 bg-[#181716] border border-[#ceba9e] p-6 md:p-8 rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1a1918] border border-[#ceba9e]/50 p-3 rounded-md text-white placeholder-[#ceba9e]/60 focus:outline-none focus:border-[#ceba9e]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#1a1918] border border-[#ceba9e]/50 p-3 rounded-md text-white placeholder-[#ceba9e]/60 focus:outline-none focus:border-[#ceba9e]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#1a1918] border border-[#ceba9e]/50 p-3 rounded-md text-white placeholder-[#ceba9e]/60 focus:outline-none focus:border-[#ceba9e]"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-[#1a1918] border border-[#ceba9e]/50 p-3 rounded-md text-white placeholder-[#ceba9e]/60 focus:outline-none focus:border-[#ceba9e] resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#ceba9e] text-black font-semibold px-6 py-2 rounded-md hover:scale-105 transition-transform duration-300 w-[150px] text-left"
          >
            Book a Call
          </button>
        </form>

        {/* Right side: Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="overflow-hidden rounded-md border border-[#ceba9e] w-full h-full max-h-[480px] shadow-lg">
            <img
              src="/img2.png"
              alt="Contact"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
