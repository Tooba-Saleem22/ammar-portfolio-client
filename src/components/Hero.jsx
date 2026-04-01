import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="h-[45vh] md:h-screen flex flex-col justify-center md:mt-20 items-center text-center bg-white px-4 md:translate-y-0">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 70, scale: 0.9, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1.8, ease }}
        className="text-5xl md:text-9xl font-light mb-3 md:mb-6 text-black"
      >
        Web Designer <span className="block">& Developer</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1.8, delay: 0.3, ease }}
        className="text-lg md:text-xl font-light mb-4 md:mb-12 max-w-xl text-black"
      >
        Premium Web Design, Development, and SEO services to help your business
        stand out.
      </motion.p>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1.6, delay: 0.6, ease }}
        className="flex flex-col items-center gap-2"
      >
        <div className="p-3 rounded-full border-2 border-black bg-transparent">
          <ArrowDown className="w-4 h-4 text-black" />
        </div>

        <span className="uppercase tracking-wider font-semibold text-black">
          Services
        </span>
      </motion.div>
    </section>
  );
}
