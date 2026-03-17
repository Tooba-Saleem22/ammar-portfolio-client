import React from "react";
import Hero from "../components/Hero";
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

  return (
    <div className="bg-black text-white">
      <div className="h-screen flex flex-col items-center justify-start">
        <Hero />

        {/*--------------------------------- Services scrolling marquee-------------------------------------------- */}

        <div className="w-full overflow-hidden pb-10 py-6">
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }} // continuous leftward animation
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-[#ceba9e] text-xl px-4 py-2"
              >
                {React.cloneElement(service.icon, { color: "#ceba9e" })}
                <span>{service.name}</span>
              </div>
            ))}
            {/* Duplicate items for seamless scroll */}
            {services.map((service, index) => (
              <div
                key={"dup-" + index}
                className="flex items-center space-x-4 text-[#ceba9e] text-xl px-4 py-2"
              >
                {React.cloneElement(service.icon, { color: "#ceba9e" })}
                <span>{service.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service detail boxes */}
      <div className="w-full flex flex-wrap justify-center gap-6 py-12 px-4">
        {/* Web Design Box */}
        <div className="bg-[#ceba9e]/10 p-6 rounded-xl max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300">
          <span className="text-[#ceba9e] font-light text-lg mb-1">[01]</span>
          <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
            Web Design
          </h3>
          <p className="text-[#ceba9e] font-light text-lg text-left">
            Visually stunning web designs that captivate your audience by
            blending your brand voice and customer needs.
          </p>
        </div>

        {/* SEO Box */}
        <div className="bg-[#ceba9e]/10 p-6 rounded-xl max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300">
          <span className="text-[#ceba9e] font-light text-lg mb-1">[02]</span>
          <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
            SEO
          </h3>
          <p className="text-[#ceba9e] font-light text-lg text-left">
            Improve your website’s visibility on search engines with optimized
            content and technical SEO strategies.
          </p>
        </div>

        {/* App Store Optimization Box */}
        <div className="bg-[#ceba9e]/10 p-6 rounded-xl max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300">
          <span className="text-[#ceba9e] font-light text-lg mb-1">[03]</span>
          <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
            App Store Optimization
          </h3>
          <p className="text-[#ceba9e] font-light text-lg text-left">
            Boost your mobile app downloads and rankings with proven App Store
            Optimization techniques.
          </p>
        </div>

        {/* Canva Design Box */}
        <div className="bg-[#ceba9e]/10 p-6 rounded-xl max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300">
          <span className="text-[#ceba9e] font-light text-lg mb-1">[04]</span>
          <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
            Canva Design
          </h3>
          <p className="text-[#ceba9e] font-light text-lg text-left">
            Create professional graphics and marketing visuals effortlessly with
            Canva, tailored to your brand.
          </p>
        </div>

        {/* Marketing Box */}
        <div className="bg-[#ceba9e]/10 p-6 rounded-xl max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300">
          <span className="text-[#ceba9e] font-light text-lg mb-1">[05]</span>
          <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
            Marketing
          </h3>
          <p className="text-[#ceba9e] font-light text-lg text-left">
            Promote your business and reach the right audience using effective
            online and offline marketing strategies.
          </p>
        </div>

        {/* WordPress Box */}
        <div className="bg-[#ceba9e]/10 p-6 rounded-xl max-w-xs h-60 flex flex-col justify-start hover:scale-105 transition-transform duration-300">
          <span className="text-[#ceba9e] font-light text-lg mb-1">[06]</span>
          <h3 className="text-[#ceba9e] text-3xl font-light mb-2 text-left">
            WordPress
          </h3>
          <p className="text-[#ceba9e] font-light text-lg text-left">
            Build flexible, secure, and responsive WordPress websites that are
            easy to manage and scale.
          </p>
        </div>
      </div>

      {/*----------------------------------------------Portfolio Section -------------------------------------------------------*/}

      <div className="w-full py-16 px-4 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-7xl font-light mb-2 text-[#ceba9e]">
            Our Projects
          </h2>
          <h3 className="text-xl font-light text-[#ceba9e]/80">
            Some of our recent work
          </h3>
        </div>

        {/* Projects Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project 1 */}
          <a href="/project1" target="_blank" className="group">
            <div className="overflow-hidden  cursor-pointer">
              <img
                src="public\img1.png"
                alt="Project 1"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-[#ceba9e] font-light mt-2 text-left text-lg">
              Project One
            </p>
          </a>

          {/* Project 2 */}
          <a href="/project2" target="_blank" className="group">
            <div className="overflow-hidden cursor-pointer">
              <img
                src="public\img2.png"
                alt="Project 2"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-[#ceba9e] font-light mt-2 text-left text-lg">
              Project Two
            </p>
          </a>

          {/* Project 3 */}
          <a href="/project3" target="_blank" className="group">
            <div className="overflow-hidden  cursor-pointer">
              <img
                src="public\img3.png"
                alt="Project 3"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-[#ceba9e] font-light mt-2 text-left text-lg">
              Project Three
            </p>
          </a>

          {/* Project 4 */}
          <a href="/project4" target="_blank" className="group">
            <div className="overflow-hidden  cursor-pointer">
              <img
                src="public\img4.png"
                alt="Project 4"
                className="w-auto h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-[#ceba9e] font-light mt-2 text-left text-lg">
              Project Four
            </p>
          </a>
        </div>
      </div>

      {/* ------------------------------------------Timeline Section------------------------------------------------- */}

      <div className="w-full py-16 px-4 max-w-6xl mx-auto relative">
        <h2 className="text-[#ceba9e] text-7xl font-light mb-4 text-center">
          The Process
        </h2>

        <p className="text-[#ceba9e]/80 text-center text-lg max-w-2xl mx-auto mb-16 font-light">
          A structured approach focused on delivering impactful results through
          design, strategy, and execution tailored to your business goals.
        </p>

        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-[#ceba9e]/40"></div>

        <div className="relative space-y-">
          {/* 01 */}
          <div className="relative flex justify-end">
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-black text-[#ceba9e] font-light w-9 h-9 flex items-center justify-center border border-[#ceba9e]">
              01
            </span>
            <div className="bg-[#ceba9e]/10 p-10 max-w-lg ml-[2px] hover:scale-105 transition rounded-none">
              <h3 className="text-[#ceba9e] text-3xl font-light mb-3">
                Web Design
              </h3>
              <p className="text-[#ceba9e] text-lg font-light">
                We start by understanding your brand and audience to create
                visually stunning web designs that engage users.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="relative flex justify-start">
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-black text-[#ceba9e] font-light w-9 h-9 flex items-center justify-center border border-[#ceba9e]">
              02
            </span>
            <div className="bg-[#ceba9e]/10 p-10 max-w-lg mr-[2px] hover:scale-105 transition rounded-none">
              <h3 className="text-[#ceba9e] text-3xl font-light mb-3">SEO</h3>
              <p className="text-[#ceba9e] text-lg font-light">
                We optimize your website content and structure to improve
                visibility on search engines and attract the right audience.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="relative flex justify-end">
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-black text-[#ceba9e] font-light w-9 h-9 flex items-center justify-center border border-[#ceba9e]">
              03
            </span>
            <div className="bg-[#ceba9e]/10 p-10 max-w-lg ml-[2px] hover:scale-105 transition rounded-none">
              <h3 className="text-[#ceba9e] text-3xl font-light mb-3">
                App Store Optimization
              </h3>
              <p className="text-[#ceba9e] text-lg font-light">
                We analyze your app and implement strategies to boost downloads,
                improve rankings, and reach your target audience.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="relative flex justify-start">
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-black text-[#ceba9e] font-light w-9 h-9 flex items-center justify-center border border-[#ceba9e]">
              04
            </span>
            <div className="bg-[#ceba9e]/10 p-10 max-w-lg mr-[2px] hover:scale-105 transition rounded-none">
              <h3 className="text-[#ceba9e] text-3xl font-light mb-3">
                Marketing
              </h3>
              <p className="text-[#ceba9e] text-lg font-light">
                We develop and execute marketing campaigns to promote your brand
                and reach your ideal customers effectively.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="relative flex justify-end">
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-black text-[#ceba9e] font-light w-9 h-9 flex items-center justify-center border border-[#ceba9e]">
              05
            </span>
            <div className="bg-[#ceba9e]/10 p-10 max-w-lg ml-[2px] hover:scale-105 transition rounded-none">
              <h3 className="text-[#ceba9e] text-3xl font-light mb-3">
                WordPress Development
              </h3>
              <p className="text-[#ceba9e] text-lg font-light">
                We build responsive, secure, and flexible WordPress websites
                with custom features and easy content management.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------CTA Section ----------------------------------------------------*/}

      <div className="w-full bg-black text-white py-24 relative overflow-hidden">
        {/* Lets Talk Continuous Marquee with +++ */}
        <div className="w-full overflow-hidden py-1 mb-14 border-t border-b border-[#ceba9e]/40">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }} // continuous scroll
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }} // thodi fast
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

        {/* Text */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-base text-[#ceba9e]/80 mb-2">Project in mind?</p>
          <h2 className="text-5xl md:text-8xl font-light text-[#ceba9e] mb-4">
            Let’s make your <br /> Website shine
          </h2>
          <p className="text-lg text-[#ceba9e]/80 mb-8">
            Premium web design, development, and SEO
            <br /> services to help your business stand out.
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ceba9e] text-black px-4 py-2  font-light hover:bg-[#bfa77c] transition"
          >
            Get in Touch
            <span className="transform hue-rotate-30 inline-block">➔</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
