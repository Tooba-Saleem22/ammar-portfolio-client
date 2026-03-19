import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import CTA from "../components/CTA";

const Services = () => {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative">
      {/* Heading Section */}
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:mt-16 mt-8 md:text-9xl font-light mb-3 md:mb-6 text-[#ceba9e]">
          Web Design <br />& Framer
        </h1>
        <p className="text-base md:text-xl text-[#ceba9e]/80 mb-8">
          Services to help your business stand out.
        </p>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full border-2 border-[#ceba9e] bg-transparent">
            <FaArrowDown className="w-6 h-6 text-[#ceba9e]" />
          </div>
          <span className="uppercase tracking-wider font-semibold text-[#ceba9e]">
            Services
          </span>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-auto flex justify-center h-[40vh] md:h-[101vh] mt-10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/services.avif"
          alt="Services"
          className="w-full h-full object-contain md:object-cover object-center"
        />
      </motion.div>

      {/* Counters Section */}
      <motion.div
        className="w-full py-5 md:py-16 flex flex-wrap justify-center gap-9 md:gap-20 bg-black text-[#ceba9e]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {[
          { label: "Clients", value: "150+" },
          { label: "Projects", value: "300+" },
          { label: "Happy Clients", value: "100%" },
          { label: "Followers", value: "100k" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <span className="text-xs md:text-sm font-light uppercase mb-2">
              {item.label}
            </span>
            <span className="text-2xl md:text-5xl font-light">
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>

      {/* WordPress Section */}
      <motion.div
        className="w-full flex justify-center bg-black mt-8 md:mt-7 px-4 md:px-1 py-1"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="bg-[#181716] border border-[#ceba9e] p-6 md:p-8 max-w-4xl w-full space-y-4 md:space-y-6 rounded-md">
          {/* Heading */}
          <h2 className="text-3xl font-light text-[#ceba9e] mb-2 md:mb-4 text-left">
            WordPress
          </h2>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-md">
            <img
              src="/wordpress service.png"
              alt="WordPress Service"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          {/* Description Sections */}
          <div className="space-y-4 md:space-y-5 text-[#ceba9e]/90 text-sm md:text-base">
            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Concept
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                I take time to understand your business needs and audience to
                develop a unique concept for your website. I'll create
                wireframes that serve as the foundation for your site's design
                and functionality.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />

            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                UX / UI Design
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                I'll design a user-friendly interface that is visually appealing
                and engages your target audience. Your website will be created
                to meet your brand's needs and goals while ensuring a seamless
                user experience.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />

            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Prototype
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                With an interactive prototype, you'll have the ability to test
                your website's functionality before it goes live. This will
                ensure that your website's design and user experience are
                optimized for your audience's needs and preferences.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />
          </div>
        </div>
      </motion.div>

      {/* SEO & Content Section */}
      <motion.div
        className="w-full flex justify-center bg-black px-4 md:px-0 py-8"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="bg-[#181716] border border-[#ceba9e] p-6 md:p-8 max-w-4xl w-full space-y-4 md:space-y-6 rounded-md">
          {/* Heading */}
          <h2 className="text-3xl font-light text-[#ceba9e] mb-2 md:mb-4 text-left">
            SEO & Content
          </h2>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-md">
            <img
              src="/img3.png"
              alt="SEO & Content Service"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          {/* Description Sections */}
          <div className="space-y-4 md:space-y-5 text-[#ceba9e]/90 text-sm md:text-base">
            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Keyword Research
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                We analyze your market and audience to find the most effective
                keywords for your business. This ensures your website ranks
                higher in search results.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />

            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Content Strategy
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                Our team creates a content plan that engages your audience and
                aligns with SEO best practices, helping you grow traffic and
                conversions.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />

            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Optimization
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                We optimize your website and content regularly to maintain
                search engine rankings and ensure your site continues to attract
                relevant traffic.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />
          </div>
        </div>
      </motion.div>

      {/* ASO Section */}
      <motion.div
        className="w-full flex justify-center bg-black px-4 py-0 md:px-0 md:py-1"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="bg-[#181716] border border-[#ceba9e] p-6 md:p-8 max-w-4xl w-full space-y-4 md:space-y-6 rounded-md">
          {/* Heading */}
          <h2 className="text-3xl font-light text-[#ceba9e] mb-2 md:mb-4 text-left">
            ASO
          </h2>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-md">
            <img
              src="img2.png"
              alt="ASO Service"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          {/* Description Sections */}
          <div className="space-y-4 md:space-y-5 text-[#ceba9e]/90 text-sm md:text-base">
            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                App Store Optimization
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                We optimize your mobile app listing to improve visibility in app
                stores and attract more organic downloads.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />

            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Keyword Targeting
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                We research and target the most relevant keywords for your app
                to increase ranking and reach your target audience effectively.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />

            <div>
              <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                Performance Monitoring
              </h3>
              <p className="text-base font-light mb-1 md:mb-2">
                We continuously track app performance metrics to identify
                opportunities for improvement and ensure your app stays
                competitive in the store.
              </p>
            </div>
            <hr className="border-t border-[#ceba9e]/50 my-2" />
          </div>
        </div>
      </motion.div>
      <CTA />
    </div>
  );
};

export default Services;
