import React from "react";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { FaLaptop, FaWordpress, FaBullhorn } from "react-icons/fa";
import { SiCanva, SiAppstore } from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    { name: "Web", icon: <FaLaptop size={33} /> },
    { name: "SEO", icon: <FaBullhorn size={33} /> },
    { name: "App Store Optimization", icon: <SiAppstore size={33} /> },
    { name: "Canva", icon: <SiCanva size={33} /> },
    { name: "Marketing", icon: <FaBullhorn size={33} /> },
    { name: "WordPress", icon: <FaWordpress size={33} /> },
  ];

  const ease = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-start">
        <Hero />

        {/* Services scrolling marquee */}
        <motion.div
          className="w-full overflow-hidden pb-20 py-12 px-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.6, ease }}
        >
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {services.concat(services).map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-[#ceba9e] text-xl px-4 py-2"
              >
                {React.cloneElement(service.icon, { color: "#ceba9e" })}
                <span>{service.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Service detail boxes */}
      <div className="w-full flex flex-wrap justify-center gap-6 -mt-80 md:mt-10 md:py-20 px-4">
        {[
          {
            id: "01",
            title: "Web Design",
            desc: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
          },
          {
            id: "02",
            title: "SEO",
            desc: "Improve your website’s visibility on search engines with optimized content and technical SEO strategies.",
          },
          {
            id: "03",
            title: "App Store Optimization",
            desc: "Boost your mobile app downloads and rankings with proven App Store Optimization techniques.",
          },
          {
            id: "05",
            title: "Marketing",
            desc: "Promote your business and reach the right audience using effective online and offline marketing strategies.",
          },
          {
            id: "06",
            title: "WordPress",
            desc: "Build flexible, secure, and responsive WordPress websites that are easy to manage and scale.",
          },
        ].map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, delay: idx * 0.2, ease }}
            className="bg-[#ceba9e]/10 p-6 max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300"
          >
            <span className="text-[#ceba9e] font-light text-lg mb-1">
              [{item.id}]
            </span>
            <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
              {item.title}
            </h3>
            <p className="text-[#ceba9e] font-light text-lg text-left">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Portfolio Section */}
      <div className="w-full py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.5, ease }}
            className="text-7xl font-light mb-2 text-[#ceba9e]"
          >
            Our Projects
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.5, delay: 0.2, ease }}
            className="text-xl font-light text-[#ceba9e]/80"
          >
            Some of our recent work
          </motion.h3>
        </div>

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
              transition={{ duration: 1.5, delay: idx * 0.2, ease }}
              className="group"
            >
              <div className="overflow-hidden cursor-pointer">
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

      {/* Timeline Section */}
      <div className="w-full py-16 px-4 max-w-6xl mx-auto relative">
        <h2 className="text-[#ceba9e] text-6xl md:text-7xl font-light mb-4 text-center">
          The Process
        </h2>
        <p className="text-[#ceba9e] text-base text-center md:text-lg max-w-2xl mx-auto mb-16 font-light">
          A structured approach focused on delivering impactful results through
          design, strategy, and execution tailored to your business goals.
        </p>

        <div className="absolute md:left-1/2 left-6 transform -translate-x-1/2 md:h-[95%] h-[calc(100%-2rem)] border-l border-[#ceba9e]/40"></div>

        <div className="relative space-y-10">
          {[
            {
              num: "01",
              title: "Web Design",
              desc: "We start by understanding your brand and audience to create visually stunning web designs that engage users.",
              side: "right",
            },
            {
              num: "02",
              title: "SEO",
              desc: "We optimize your website content and structure to improve visibility on search engines and attract the right audience.",
              side: "left",
            },
            {
              num: "03",
              title: "App Store Optimization",
              desc: "We analyze your app and implement strategies to boost downloads, improve rankings, and reach your target audience.",
              side: "right",
            },
            {
              num: "04",
              title: "Marketing",
              desc: "We develop and execute marketing campaigns to promote your brand and reach your ideal customers effectively.",
              side: "left",
            },
            {
              num: "05",
              title: "WordPress Development",
              desc: "We build responsive, secure, and flexible WordPress websites with custom features and easy content management.",
              side: "right",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, delay: idx * 0.2, ease }}
              className={`flex flex-col md:flex-row relative ${item.side === "right" ? "md:justify-end" : "md:justify-start"}`}
            >
              <span className="absolute md:left-1/2 left-6 transform -translate-x-1/2 bg-black text-[#ceba9e] font-light w-9 h-9 flex items-center justify-center border border-[#ceba9e] z-10 top-[5%]">
                {item.num}
              </span>
              <div
                className={`bg-[#ceba9e]/10 p-5 md:mt-5 mt-7 md:p-10 w-[80%] md:w-auto md:max-w-lg hover:scale-105 transition rounded-none ${item.side === "right" ? "md:ml-10 ml-[14%]" : item.num === "02" || item.num === "04" ? "md:mr-16 md:ml-[0%] ml-[13%]" : "md:mr-10 ml-[14%]"}`}
              >
                <h3 className="text-[#ceba9e] text-2xl md:text-3xl font-light mb-3">
                  {item.title}
                </h3>
                <p className="text-[#ceba9e] text-base md:text-lg font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default Home;
