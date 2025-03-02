import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers, FaClipboardCheck, FaChartLine } from "react-icons/fa";

const RecruiterHome = () => {

  return (
  <div className="font-sans text-gray-900 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/3380/3380209.png"
            alt="Recruiter Hiring"
            className="w-full max-w-md"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {[{
          title: "Intuitive Dashboards",
          desc: "Gain comprehensive visibility into your hiring pipeline.",
          icon: <FaChartLine className="text-blue-600 text-4xl" />
        }, {
          title: "Automated Workflows",
          desc: "Streamline hiring with seamless integrations.",
          icon: <FaClipboardCheck className="text-green-600 text-4xl" />
        }, {
          title: "Tailored Candidate Matching",
          desc: "Personalized recommendations and intelligent screening.",
          icon: <FaUsers className="text-orange-600 text-4xl" />
        }, {
          title: "Simplified Onboarding",
          desc: "Empower new hires with smooth onboarding.",
          icon: <FaArrowRight className="text-purple-600 text-4xl" />
        }, {
          title: "24/7 Support",
          desc: "Reliable assistance for hiring success.",
          icon: <FaClipboardCheck className="text-red-600 text-4xl" />
        }, {
          title: "Scalable Solutions",
          desc: "Flexible offerings for business growth.",
          icon: <FaChartLine className="text-indigo-600 text-4xl" />
        }].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="font-semibold text-xl mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
        Explore Our Solutions
      </button>
    </section>

    {/* Recruiter Benefits */}
    <section className="py-10 text-black flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/10367/10367658.png" 
          alt="Recruitment Benefits" 
          className="w-3/4 md:w-full max-w-sm object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="md:w-1/2 text-start">
        <h3 className="text-4xl font-bold text-gray-700 mb-10">Optimize Your Hiring Process</h3>
        <p className="text-lg font-semibold text-gray-500">Find top candidates quickly with AI-driven matching, automate the hiring process, and improve retention rates.</p>
        <button className="mt-6 border bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer hover:bg-gray-900">
          Post a Job Now
        </button>
      </div>
    </section>

     {/* Trusted by Leading Brands Section */}
     <section className="bg-gray-100 py-12 px-6 md:px-40 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-left">
        <p className="text-sm uppercase text-gray-500">Partner with the Best</p>
        <h2 className="text-3xl font-bold mt-2">Trusted by Leading Brands</h2>
        <p className="mt-4 text-lg text-gray-700">At [Company Name], we are proud to have built strong partnerships with some of the most respected companies in the industry. Our clients trust us to provide innovative solutions and personalized support to elevate their hiring.</p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">Contact Us</button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPppKv_60RVRcmYDrKCnqUuraj_-bLZ-FaWA&s" alt="Trusted by Leading Brands" className="w-full max-w-lg rounded-lg shadow-lg" />
      </div>
    </section>

    {/* Team Section */}
    <section className="text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership Team</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our experienced leadership team is dedicated to making recruitment smarter and more efficient.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 max-w-6xl mx-auto">
         {[
            {
              name: "Jane Doe",
              role: "CEO & Co-Founder",
              image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
            },
            {
              name: "Michael Johnson",
              role: "Head of Operations",
              image: "https://cdn-icons-png.flaticon.com/512/706/706831.png",
            },
            {
              name: "Emily Davis",
              role: "Lead Recruiter",
              image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
            },
            {
              name: "Chris Nguyen",
              role: "HR Specialist",
              image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
            },
            ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 shadow-md" />
              <h3 className="font-semibold text-xl text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
         ))}
        </div>
    </section>

    {/* Hiring component */}
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:flex lg:items-center lg:justify-between py-16">
        {/* left Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpU6JMftsegisnvIAVu-XTLlptyyPcjvPEyA&s"
            alt="Business Professional"
            className="w-80 md:w-96 rounded-lg shadow-lg"
          />
        </div>
        {/* right Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-blue-500 uppercase text-sm font-medium">Revolutionize Your Hiring</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Unlock the Power of Partnership
          </h1>
          <p className="text-gray-600 mt-4">
            At [Company Name], we understand that hiring the right talent is crucial for the
            success of your business. That’s why we’ve dedicated ourselves to providing
            you with innovative solutions and personalized support to
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
