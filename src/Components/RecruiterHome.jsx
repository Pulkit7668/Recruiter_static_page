import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers, FaClipboardCheck, FaChartLine, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Co-Founder",
    image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
    linkedin: "#",
    twitter: "#",
    bio: "Jane has over 15 years of experience in HR tech and talent acquisition.",
  },
  {
    name: "Michael Johnson",
    role: "Head of Operations",
    image: "https://cdn-icons-png.flaticon.com/512/706/706831.png",
    linkedin: "#",
    twitter: "#",
    bio: "Michael specializes in optimizing operational processes and team management.",
  },
  {
    name: "Emily Davis",
    role: "Lead Recruiter",
    image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    linkedin: "#",
    twitter: "#",
    bio: "Emily connects top talents with the right opportunities using AI-powered tools.",
  },
  {
    name: "Chris Nguyen",
    role: "HR Specialist",
    image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
    linkedin: "#",
    twitter: "#",
    bio: "Chris ensures a seamless hiring experience with his expertise in recruitment.",
  },
];

const RecruiterHome = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="font-sans text-gray-900 bg-white relative overflow-hidden">
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
              Hire Top <span className="text-blue-600">Talent</span> Efficiently!
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Post job openings, track applications, and find the perfect candidates for your business.
            </motion.p>
            <motion.button
              className="mt-6 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Get Started Today <FaArrowRight />
            </motion.button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Recruiter Hiring"
              className="w-full max-w-lg rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">Revolutionize Your Hiring Process</h2>
        <p className="mt-4 text-lg text-gray-600">Leverage innovative tools to streamline recruitment and hire smarter.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          {[
            {
              title: "Intuitive Dashboards",
              desc: "Gain comprehensive visibility into your hiring pipeline.",
              icon: <FaChartLine className="text-blue-600 text-4xl" />,
            },
            {
              title: "Automated Workflows",
              desc: "Streamline hiring with seamless integrations.",
              icon: <FaClipboardCheck className="text-green-600 text-4xl" />,
            },
            {
              title: "Tailored Candidate Matching",
              desc: "Personalized recommendations and intelligent screening.",
              icon: <FaUsers className="text-orange-600 text-4xl" />,
            },
            {
              title: "Simplified Onboarding",
              desc: "Empower new hires with smooth onboarding.",
              icon: <FaArrowRight className="text-purple-600 text-4xl" />,
            },
            {
              title: "24/7 Support",
              desc: "Reliable assistance for hiring success.",
              icon: <FaClipboardCheck className="text-red-600 text-4xl" />,
            },
            {
              title: "Scalable Solutions",
              desc: "Flexible offerings for business growth.",
              icon: <FaChartLine className="text-indigo-600 text-4xl" />,
            },
          ].map((feature, index) => (
            <div key={index} className="border border-gray-400 p-6 rounded-lg flex flex-row items-center space-x-5">
              {feature.icon}
              <div className="text-left">
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
          Explore Our Solutions
        </button>
      </section>

      {/* Trusted by Leading Brands Section */}
      <section className="bg-white py-12 px-6 md:px-40 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left">
          <p className="text-sm uppercase text-gray-500">Partner with the Best</p>
          <h2 className="text-3xl font-bold mt-2">Trusted by Leading Brands</h2>
          <p className="mt-4 text-lg text-gray-700">
            At [Company Name], we are proud to have built strong partnerships with some of the most respected companies in the industry. Our clients trust us to provide innovative solutions and personalized support to elevate their hiring.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Trusted by Leading Brands"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership Team</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our experienced leadership team is dedicated to making recruitment smarter and more efficient.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300"
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 shadow-md" />
              <h3 className="font-semibold text-xl text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>

              <div className="flex justify-center space-x-4 mt-3">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl hover:text-blue-800">
                  <FaLinkedin />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xl hover:text-blue-600">
                  <FaTwitter />
                </a>
              </div>

              <p className="mt-3 text-gray-600 text-sm">
                {expanded === index ? member.bio : `${member.bio.substring(0, 50)}... `}
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-blue-500 hover:underline"
                >
                  {expanded === index ? "Show Less" : "Read More"}
                </button>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Guidance */}
      <section className="bg-white py-16 mx-32">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text */}
          <div>
            <p className="text-gray-500 font-medium text-lg">Elevate Your Hiring Game</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
              Streamline Your Recruitment
            </h2>
            <p className="text-blue-600 mt-3 text-lg">
              Discover how our cutting-edge hiring solutions can transform your business.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Personalized Guidance for Your Hiring Needs
              </h3>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                Our team of experts is dedicated to understanding your unique requirements 
                and providing tailored solutions to help you find the right candidates.
              </p>
              <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-800 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Hiring Dashboard" 
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Hiring component */}
      <section className="w-full bg-white">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:flex lg:items-center lg:justify-between py-16">
          {/* left Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <motion.img
              src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Business Professional"
              className="w-80 md:w-96 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          {/* right Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-blue-500 uppercase text-sm font-medium">Revolutionize Your Hiring</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Unlock the Power of Partnership
            </h1>
            <p className="text-gray-600 mt-4">
              At [Company Name], we understand that hiring the right talent is crucial for the success of your business. That’s why we’ve dedicated ourselves to providing you with innovative solutions and personalized support to
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-md font-medium shadow-md hover:bg-gray-900">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecruiterHome;