// src/pages/WorkPage.js
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import CTA from "../components/CTA";

const WorkPage = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-4 mt-8 md:mt-16"
      >
        <h1 className="text-5xl md:text-9xl font-light mb-3 md:mb-6 text-[#ceba9e]">
          Work
        </h1>
        <p className="text-base md:text-xl text-[#ceba9e]/80 mb-8 max-w-2xl mx-auto">
          My latest web design projects and see how we can
          <br /> help bring your ideas to life.
        </p>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-3 rounded-full border-2 border-[#ceba9e] bg-transparent">
            <FaArrowDown className="w-4 h-4 text-[#ceba9e]" />
          </div>
          <span className="uppercase tracking-wider font-light text-[#ceba9e]">
            Work
          </span>
        </motion.div>
      </motion.div>

      {/* Portfolio Section */}
      <div className="w-full py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["img1", "img2", "img3", "img4"].map((img, idx) => (
            <motion.a
              key={idx}
              href={`/project${idx + 1}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 1.5,
                delay: idx * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="overflow-hidden cursor-pointer rounded-md">
                <img
                  src={`/${img}.png`}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[#ceba9e] font-light mt-2 text-left text-lg">
                Project {idx + 1}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default WorkPage;
