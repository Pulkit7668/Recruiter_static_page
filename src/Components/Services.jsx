import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaUsers, FaChartLine, FaHandshake, FaClipboardCheck, FaRocket, FaBullhorn, FaShieldAlt, FaGlobe, FaPlus, FaMinus } from "react-icons/fa";

const services = [
  {
    title: "Job Posting",
    description: "Post your job openings and attract top talent with our easy-to-use platform.",
    icon: <FaBriefcase className="text-blue-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Candidate Screening",
    description: "Get AI-powered candidate recommendations and find the best match for your roles.",
    icon: <FaUsers className="text-green-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Employer Branding",
    description: "Enhance your company’s visibility and attract more candidates with custom branding.",
    icon: <FaChartLine className="text-purple-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Recruitment Assistance",
    description: "Our expert recruiters help you find and hire the best talent faster.",
    icon: <FaHandshake className="text-yellow-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Application Tracking",
    description: "Easily track and manage job applications with our streamlined system.",
    icon: <FaClipboardCheck className="text-red-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Growth Acceleration",
    description: "Scale your hiring process efficiently and grow your team with ease.",
    icon: <FaRocket className="text-indigo-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Automated Job Alerts",
    description: "Receive instant notifications about new job matches and opportunities.",
    icon: <FaBullhorn className="text-pink-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Data Security",
    description: "We ensure top-level encryption and security to protect your recruitment data.",
    icon: <FaShieldAlt className="text-teal-500 text-5xl mx-auto mb-4" />,
  },
  {
    title: "Global Talent Access",
    description: "Expand your hiring reach with access to a worldwide pool of candidates.",
    icon: <FaGlobe className="text-orange-500 text-5xl mx-auto mb-4" />,
  },
];

const faqs = [
  {
    question: "How does the job matching work?",
    answer:
      "Our platform analyzes your skills, experience, and preferences to recommend the most relevant job opportunities.",
  },
  {
    question: "Is there a cost to post jobs?",
    answer:
      "We offer both free and premium job posting options. Premium plans provide more visibility and advanced features.",
  },
  {
    question: "Can I track my job applications?",
    answer:
      "Yes, you can track all your job applications in your personal dashboard, keeping everything organized.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email or live chat for assistance with any queries or issues.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use top-level encryption and security measures to protect your data and privacy.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-4xl font-bold text-gray-900">Our Services</h3>
        <p className="mt-4 text-lg text-gray-700">
          We offer a range of services to help you find the best talent quickly and efficiently.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div 
        className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {service.icon}
            <h4 className="text-2xl font-semibold text-gray-800">{service.title}</h4>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="mt-20 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h3 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h3>
        <p className="mt-4 text-lg text-gray-700">Find answers to the most common questions about our platform.</p>
      </motion.div>

      <motion.div 
        className="mt-10 max-w-6xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition duration-300"
            onClick={() => toggleFAQ(index)}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
              {openIndex === index ? (
                <FaMinus className="text-blue-500 text-xl" />
              ) : (
                <FaPlus className="text-gray-600 text-xl" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-3 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
