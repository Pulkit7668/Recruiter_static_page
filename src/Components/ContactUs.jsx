import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [nameTyped, setNameTyped] = useState("");

  const validateForm = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.message) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success(`Thank you ${form.name}, your message has been sent!`);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setNameTyped("");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
    <motion.section
      id="contact-us"
      className="relative py-16 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-10 h-10 bg-blue-300 rounded-full opacity-50"
          animate={{ y: [0, 15, -10, 0], x: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-green-300 rounded-full opacity-50"
          animate={{ y: [0, -10, 10, 0], x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-900">Contact Us</h3>
        <p className="mt-4 text-lg text-gray-700">
          Get in touch with us for any queries or support.
        </p>
      </div>

      {/* Contact Info */}
      <motion.div
        className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {[["Call Us", "+91 123 456 7890", FaPhone, "text-blue-500"],
          ["Email Us", "support@yourcompany.com", FaEnvelope, "text-green-500"],
          ["Visit Us", "New Delhi, India", FaMapMarkerAlt, "text-red-500"]].map(([title, value, Icon, color], i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition duration-300"
          >
            <Icon className={`${color} text-4xl mb-2`} />
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-gray-600">{value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-14 max-w-3xl mx-auto bg-white p-8 shadow-md rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-semibold text-center text-gray-800">
          {nameTyped ? `Hey ${nameTyped}, Send Us a Message!` : "Send Us a Message"}
        </h4>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {[
            ["name", "Your Name"],
            ["email", "Your Email"],
            ["message", "Your Message", true],
          ].map(([key, placeholder, isTextArea]) => (
            <motion.div key={key} animate={errors[key] ? { x: [-5, 5, -5, 0] } : {}} transition={{ duration: 0.3 }}>
              <label className="block text-gray-700 font-medium">{placeholder}</label>
              {isTextArea ? (
                <textarea
                  rows="4"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                />
              ) : (
                <input
                  type="text"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => {
                    setForm({ ...form, [key]: e.target.value });
                    if (key === "name") setNameTyped(e.target.value);
                  }}
                />
              )}
              {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
    </div>
  );
};

export default ContactUs;