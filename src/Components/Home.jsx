import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaStar, FaArrowRight, FaMobileAlt, FaRocket, FaBuilding, FaSearch, FaTools, FaChartLine } from "react-icons/fa";

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
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Get Started Today <FaArrowRight />
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtl78Sw7XOurL0yxkMc4S-axgLI-FJCtkO9w&s"
            alt="Hiring Process"
            className="w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>

      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-blue-400 opacity-30 rounded-full"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500 opacity-20 rounded-full"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>

    {/* Why Choose Us */}
    <section id="why-choose-us" className="py-16 px-8">
      <h3 className="text-5xl font-extrabold text-center mb-16">
        Empowering Businesses to <br /> <span className="text-blue-600">Thrive with Efficient Workforce</span>
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[{
            title: "Our App",
            icon: <FaMobileAlt size={28} className="text-blue-600" />,
            description: "Streamline your hiring process and optimize your workforce with our powerful job application platform",
          },
          {
            title: "Discover the Power",
            icon: <FaRocket size={28} className="text-green-600" />,
            description: "Experience the seamless integration of our workforce management tools",
          },
          {
            title: "About Us",
            icon: <FaBuilding size={28} className="text-yellow-500" />,
            description: "Unlocking the Potential of Your Team: Innovative Workforce Management Solutions for Business Growth",
          },
          {
            title: "Explore Now",
            icon: <FaSearch size={28} className="text-red-600" />,
            description: "Revolutionize your hiring process with our intuitive and user-friendly platform",
          },
          {
            title: "Our Services",
            icon: <FaTools size={28} className="text-purple-600" />,
            description: "Providing comprehensive hiring solutions to help you build a strong and productive team",
          },
          {
            title: "Optimize Workforce",
            icon: <FaChartLine size={28} className="text-orange-500" />,
            description: "Unlock the full potential of your team and drive business success with our innovative solutions",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-lg shadow-xl flex items-start gap-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

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


    {/* Revolution */}
    <section className="py-16 bg-[#7B7F84]">
      <div className="text-center mb-10">
        <h2 className="text-5xl text-[#FDFDFD] font-extrabold mb-6">
          Revolutionize Your Hiring Process with
        </h2>
        <p className="text-lg font-semibold text-[#FDFDFD]">
          Streamline your workforce management and unlock the full potential of
          your team. Our powerful <br /> job application platform and comprehensive hiring
          solutions will transform the way you build <br /> and manage your workforce.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between text-center">
        {/* Left Section - Heading & Description */}
        <p className="text-lg font-semibold text-[#FDFDFD]">Discover the Transformative Power of Our <br /> Workforce Management Tools</p>
        {/* Center Section - Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="bg-white rounded-full p-6 shadow-lg flex flex-col items-center w-64">
            <img
              src="https://cdn-imgs.dora.run/design/nyO8PEnxUFKvFZfdlUMH8.webp/w/4096/h/4096/format/webp?"
              alt="User"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">Comet tipe</h3>
            <p className="text-gray-500">Job Applicant</p>
          </div>
        </div>

        {/* Right Section - Logo & Text */}
        <div className="md:w-1/3 flex flex-col items-center">
          <img src="https://cdn-imgs.dora.run/design/FwoFAYUsHHQF1PBxLYazez.webp/w/4096/h/4096/format/webp?" alt="Company Logo" className="w-24 mb-4" />
          <p className="text-lg font-semibold text-[#FDFDFD] text-center">
            Unlock New Possibilities for Your Business with <br /> Our Innovative Workforce
            Solutions.
          </p>
        </div>
      </div>
      
    </section>
  </div>
);

export default Home;