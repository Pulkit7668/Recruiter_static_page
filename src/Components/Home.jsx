import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaStar } from "react-icons/fa";

const Home = () => (
  <div className="font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-white">
    {/* Hero Section */}
    <section id="home" className="text-center py-20">
      <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Find the Best Talent Faster & Smarter!
      </motion.h2>
      <p className="mt-4 text-lg text-gray-700">Post jobs, track applications, and hire the right candidates effortlessly.</p>
      <motion.button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300" whileHover={{ scale: 1.05 }}>
        Get Started Today
      </motion.button>
    </section>

    {/* Why Choose Us */}
    <section id="why-choose-us" className="py-16 px-8">
      <h3 className="text-3xl font-bold text-center">Why Choose UrLogo?</h3>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[{ title: "AI-Powered Matching", icon: <FaBriefcase size={28} />, description: "Our AI-powered matching algorithm ensures you find the best candidates quickly and efficiently." },
          { title: "Easy Job Posting", icon: <FaUsers size={28} />, description: "Post jobs with ease and reach a large pool of qualified candidates in no time." },
          { title: "Verified Candidate Profiles", icon: <FaStar size={28} />, description: "All candidate profiles are verified to ensure you get the best talent." },
          { title: "Subscription Plans", icon: <FaBriefcase size={28} />, description: "Choose from a variety of subscription plans that suit your hiring needs." },
          { title: "24/7 Support", icon: <FaUsers size={28} />, description: "Our support team is available 24/7 to assist you with any queries or issues." },].map((item, index) => (
          <motion.div key={index} className="p-6 bg-white rounded-lg shadow flex items-start gap-4" whileHover={{ scale: 1.05 }}>
            {item.icon}
            <div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Interactive Statistics */}
    <section className="text-center py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h3 className="text-3xl font-bold mb-20">Our Impact</h3>
      <div className="mt-8 flex justify-around gap-12 mb-10 text-xl font-semibold">
        {[{ label: "Recruiters", value: "5K+", icon: <FaUsers size={40} /> },
          { label: "Hires Made", value: "10K+", icon: <FaBriefcase size={40} /> },
          { label: "Satisfaction", value: "98%", icon: <FaStar size={40} /> },].map((stat, index) => (
          <motion.div key={index} className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
            <div className="mb-4">{stat.icon}</div>
            <p className="text-4xl font-bold">{stat.value}</p>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 px-8">
      <h3 className="text-3xl font-bold text-center">What Recruiters Say</h3>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[{ name: "Rahul Sharma", review: "This platform made hiring so much easier!" },
          { name: "Neha Agarwal", review: "A must-have tool for every recruiter." },
          { name: "Amit Verma", review: "The best recruitment platform I've used." },
          { name: "Priya Singh", review: "Highly recommend for all recruiters." },
          { name: "Vikram Patel", review: "Efficient and user-friendly." },
          { name: "Anjali Mehta", review: "Great support and features." },
          { name: "Rohit Kumar", review: "The user interface is very intuitive." },
          { name: "Sneha Kapoor", review: "Excellent customer service." },
          { name: "Manish Gupta", review: "Helped us find the right candidates quickly." },].map((testimonial, index) => (
          <motion.div key={index} className="p-6 bg-white shadow-md rounded-lg" whileHover={{ scale: 1.05 }}>
            <p className="text-gray-700">"{testimonial.review}"</p>
            <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Ready to Hire Top Talent?
      </motion.h2>
      <p className="mt-4 text-lg">Post jobs and start hiring in minutes!</p>
      <motion.button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-200 transition-all duration-300" whileHover={{ scale: 1.05 }}>
        Start Hiring Now
      </motion.button>
    </section>
  </div>
);

export default Home;