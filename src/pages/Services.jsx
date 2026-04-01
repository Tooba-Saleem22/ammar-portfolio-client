import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import CTA from "../components/CTA";

const Services = () => {
  const ease = [0.22, 1, 0.36, 1];

  const servicesData = [
    {
      title: "WordPress",
      img: "/img1.png",
      sections: [
        {
          heading: "Concept",
          text: "I take time to understand your business needs and audience to develop a strong website concept.",
        },
        {
          heading: "UX / UI Design",
          text: "Clean and user-friendly interfaces designed to match your brand.",
        },
        {
          heading: "Prototype",
          text: "Interactive prototypes to test design and functionality before launch.",
        },
      ],
    },
    {
      title: "SEO & Content",
      img: "/img3.png",
      sections: [
        {
          heading: "Keyword Research",
          text: "We identify high-performing keywords to improve visibility.",
        },
        {
          heading: "Content Strategy",
          text: "Content planning aligned with SEO to drive traffic.",
        },
        {
          heading: "Optimization",
          text: "Continuous improvements to maintain rankings.",
        },
      ],
    },
    {
      title: "ASO",
      img: "/img2.png",
      sections: [
        {
          heading: "App Store Optimization",
          text: "Improve app visibility and downloads.",
        },
        {
          heading: "Keyword Targeting",
          text: "Target the right keywords for better reach.",
        },
        {
          heading: "Performance Monitoring",
          text: "Track and improve app performance.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:mt-16 mt-8 md:text-9xl font-light mb-3 md:mb-6 text-black">
          Web Design <br />& Framer
        </h1>

        <p className="text-base md:text-xl text-black/80 mb-8">
          Services to help your business stand out.
        </p>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 0.6, ease }}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-3 rounded-full border-2 border-black bg-transparent">
            <FaArrowDown className="w-4 h-4 text-black" />
          </div>

          <span className="uppercase tracking-wider font-semibold text-black">
            Services
          </span>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.5, ease }}
        className="w-auto flex justify-center h-[40vh] md:h-[70vh] mt-10 overflow-hidden"
      >
        <img
          src="/services.png"
          alt="Services"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Counters */}
      <div className="w-full py-10 md:py-16 flex flex-wrap justify-center gap-10 md:gap-20 text-black">
        {[
          { label: "Clients", value: "150+" },
          { label: "Projects", value: "300+" },
          { label: "Happy Clients", value: "100%" },
          { label: "Followers", value: "100k" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, delay: idx * 0.2, ease }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-xs md:text-sm uppercase mb-2">
              {item.label}
            </span>
            <span className="text-2xl md:text-5xl">{item.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Services Cards */}
      {servicesData.map((service, idx) => (
        <div key={idx} className="w-full flex justify-center px-4 md:px-0 py-4">
          <div
            className="bg-white border border-black p-4 md:p-6 max-w-2xl w-full rounded-md 
      transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl text-black mb-3">{service.title}</h2>

            {/* Image */}
            <div className="overflow-hidden rounded-md mb-3">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[280px] md:h-[360px] object-cover"
              />
            </div>

            <div className="space-y-3 text-black/90">
              {service.sections.map((sec, i) => (
                <div key={i}>
                  <h3 className="text-base md:text-lg mb-1">{sec.heading}</h3>
                  <p className="text-sm">{sec.text}</p>
                  <hr className="border-t border-black/40 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <CTA />
    </div>
  );
};

export default Services;
