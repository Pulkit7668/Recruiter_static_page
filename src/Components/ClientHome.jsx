import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaMobileAlt, FaRocket, FaBuilding, FaSearch, FaTools, FaChartLine } from "react-icons/fa";
import ReviewsSlider from "./ReviewsSlider";
import BusinessSection from "./BussinessSection";

const Home = () => (
  <div className="font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
    {/* Hero Section */}
    <section id="home" className="mx-10 py-20 px-8 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find the Best <span className="text-blue-600">Talent</span> Faster & Smarter!
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Post jobs, track applications, and hire the right candidates effortlessly.
          </motion.p>
          <motion.button
            className="mt-6 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open("https://play.google.com/store/apps/details?id=your.app.id", "_blank", "noopener,noreferrer")}
          >
            Get Started Today <FaArrowRight />
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <motion.img
            src="https://cdn-imgs.dora.run/design/C6pnTNpIEvTJJNRLnn7TEL.webp/w/4096/h/4096/format/webp?"
            alt="Hiring Process"
            className="w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </section>

    {/* Bussiness Section */}
    <BusinessSection />
    
    {/* unlock */}
    <section className="py-10 text-black flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Section - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="https://cdn-imgs.dora.run/design/G7hgymR0bK4HaFt5HFoOW7.webp/w/4096/h/4096/format/webp?" 
          alt="Our Impact" 
          className="w-3/4 md:w-full max-w-sm object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Content */}
      <div className="md:w-1/2 text-start">
        <h3 className="text-4xl font-bold text-gray-700 mb-10">Unlock the Potential of </h3>
        <p className="text-lg font-semibold text-gray-500">Streamline your hiring process and optimize your workforce <br /> management with our powerful job application platform. <br /> Experience the benefits of efficient workforce management and <br /> drive your business forward</p>
        <button className="mt-6 border bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer">
          Apply Now
        </button>
      </div>
    </section>

    {/* Empowering */}
    <section className="py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-10">
        {/* Left Part - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-5xl text-gray-700 font-extrabold mb-10">
            Empowering <br /> Businesses to Thrive with Comprehensive
          </h3>
          <p className="text-lg font-semibold text-gray-400 mb-6">
            Maximize your team's productivity and drive business growth with our
            innovative workforce management platform. Simplify your hiring process,
            optimize your workforce.
          </p>
          <button className="mt-4 border bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer hover:bg-gray-600">
            Learn More
          </button>
        </div>

        {/* Right Part - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERldmVsb3BtZW50fGVufDB8fDB8fHww" 
            alt="Business Growth" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>


    {/* ReviewsSlider */}
    <ReviewsSlider />
  </div>
);

export default Home;