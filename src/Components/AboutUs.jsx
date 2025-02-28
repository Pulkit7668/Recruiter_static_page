import React from "react";
import { motion } from "framer-motion";
import { AiOutlineRocket, AiOutlineTeam } from "react-icons/ai";
import { FaHandshake, FaBullseye, FaSearch, FaUsers, FaClock, FaMobileAlt, FaAward, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to <span className="font-semibold text-blue-600">Our Company</span>, the ultimate platform connecting job seekers with top recruiters seamlessly.
        </motion.p>
      </div>

      {/* Who We Are */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</motion.h3>
        <motion.p className="text-gray-700 max-w-4xl mx-auto mb-8">
          At <span className="font-semibold text-blue-600">Our Comapny</span>, we believe in empowering careers. Our AI-driven platform connects talented job seekers with leading employers, ensuring the best match for their skills and aspirations.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {[
          { title: "Our Mission", content: "Empowering job seekers with a seamless experience.", icon: <AiOutlineRocket className="text-blue-500 text-4xl" /> },
          { title: "Our Vision", content: "Bridging the gap between talent and opportunity.", icon: <FaBullseye className="text-red-500 text-4xl" /> },
          { title: "Our Strengths", content: "AI-powered job matching, top recruiters, and real-time updates.", icon: <FaHandshake className="text-green-500 text-4xl" /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-xl rounded-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <motion.h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "AI-Powered Job Matching", desc: "We analyze your skills and recommend jobs that fit you best.", icon: <FaSearch className="text-4xl text-blue-500" /> },
            { title: "Verified Recruiters", desc: "We ensure that only legitimate companies post job listings.", icon: <FaUsers className="text-4xl text-green-500" /> },
            { title: "Real-Time Updates", desc: "Stay updated with the latest job openings instantly.", icon: <FaClock className="text-4xl text-yellow-500" /> },
            { title: "Mobile Friendly", desc: "Apply for jobs from anywhere with our mobile-responsive platform.", icon: <FaMobileAlt className="text-4xl text-purple-500" /> },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 transform hover:scale-105 transition duration-300"
            >
              {feature.icon}
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Core Values */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <motion.h3 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</motion.h3>
        <motion.div className="grid md:grid-cols-3 gap-10">
          {[{ title: "Innovation", desc: "We continuously improve our platform to provide cutting-edge solutions.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
            { title: "Integrity", desc: "Transparency and trust are the foundation of our platform.", icon: <FaHandshake className="text-green-500 text-4xl" /> },
            { title: "Excellence", desc: "We strive for perfection to provide the best experience for our users.", icon: <FaBullseye className="text-red-500 text-4xl" /> }
          ].map((value, index) => (
            <motion.div key={index} className="p-6 bg-white shadow-xl rounded-xl" whileHover={{ scale: 1.05 }}>
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h4 className="text-2xl font-semibold text-gray-800">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Our Achievements */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <motion.h3 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</motion.h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "100,000+ Successful Hires", icon: <FaAward className="text-4xl text-yellow-500" /> },
            { title: "10,000+ Verified Companies", icon: <AiOutlineTeam className="text-4xl text-green-500" /> },
            { title: "AI-Driven Job Matching Excellence", icon: <FaLightbulb className="text-4xl text-blue-500" /> },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl transform hover:scale-105 transition duration-300"
            >
              <div className="mb-4 flex justify-center">{achievement.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800">{achievement.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
