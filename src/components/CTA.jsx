// src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.8, ease }}
      className="w-full bg-black text-white py-2 relative overflow-hidden"
    >
      {/* Marquee / Scrolling text */}
      <div className="w-full overflow-hidden py-1 -mt-10 md:mt-0 mb-14 border-t border-b border-[#ceba9e]/40">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {Array(2)
            .fill(0)
            .map((_, dup) =>
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`${dup}-${index}`}
                    className="flex items-center space-x-1 text-[#ceba9e] text-sm px-2"
                  >
                    <span>Let's Talk</span>
                    <span className="text-[#ceba9e] text-sm font-light">
                      +++
                    </span>
                  </div>
                )),
            )}
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-base text-[#ceba9e]/80 mb-2">Project in mind?</p>
        <h2 className="text-5xl md:text-8xl font-light text-[#ceba9e] mb-4">
          Let’s make your <br /> Website shine
        </h2>
        <p className="text-lg text-[#ceba9e]/80 mb-8">
          Premium web design, development, and SEO <br /> services to help your
          business stand out.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#ceba9e] text-black px-4 py-2 font-light hover:bg-[#bfa77c] transition"
        >
          Get in Touch
          <span className="transform hue-rotate-30 inline-block">➔</span>
        </a>
      </div>
    </motion.div>
  );
};

export default CTA;
