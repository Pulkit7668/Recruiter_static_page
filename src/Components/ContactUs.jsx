// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { toast } from "react-hot-toast";

// const ContactUs = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [errors, setErrors] = useState({});
//   const [nameTyped, setNameTyped] = useState("");

//   const validateForm = () => {
//     let newErrors = {};
//     if (!form.name) newErrors.name = "Name is required.";
//     if (!form.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       newErrors.email = "Enter a valid email.";
//     }
//     if (!form.message) newErrors.message = "Message cannot be empty.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       toast.success(`Thank you ${form.name}, your message has been sent!`);
//       setForm({ name: "", email: "", message: "" });
//       setErrors({});
//       setNameTyped("");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-100 to-white py-16 px-6">
//       <section id="contact-us" className="relative py-16 px-6 overflow-hidden">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-4xl font-bold text-gray-900">Contact Us</h3>
//           <p className="mt-4 text-lg text-gray-700">
//             Get in touch with us for any queries or support.
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {[
//             ["Call Us", "+91 123 456 7890", FaPhone, "text-blue-500"],
//             ["Email Us", "support@yourcompany.com", FaEnvelope, "text-green-500"],
//             ["Visit Us", "New Delhi, India", FaMapMarkerAlt, "text-red-500"],
//           ].map(([title, value, Icon, color], i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition duration-300"
//             >
//               <Icon className={`${color} text-4xl mb-2`} />
//               <h4 className="text-lg font-semibold">{title}</h4>
//               <p className="text-gray-600">{value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <div className="mt-14 max-w-3xl mx-auto bg-white p-8 shadow-md rounded-2xl">
//           <h4 className="text-2xl font-semibold text-center text-gray-800">
//             {nameTyped ? `Hey ${nameTyped}, Send Us a Message!` : "Send Us a Message"}
//           </h4>
//           <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
//             {[
//               ["name", "Your Name"],
//               ["email", "Your Email"],
//               ["message", "Your Message", true],
//             ].map(([key, placeholder, isTextArea]) => (
//               <div key={key}>
//                 <label className="block text-gray-700 font-medium">{placeholder}</label>
//                 {isTextArea ? (
//                   <textarea
//                     rows="4"
//                     className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                     placeholder={placeholder}
//                     value={form[key]}
//                     onChange={(e) => setForm({ ...form, [key]: e.target.value })}
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                     placeholder={placeholder}
//                     value={form[key]}
//                     onChange={(e) => {
//                       setForm({ ...form, [key]: e.target.value });
//                       if (key === "name") setNameTyped(e.target.value);
//                     }}
//                   />
//                 )}
//                 {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
//               </div>
//             ))}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Connect With Us</h2>
        <p className="text-gray-700 text-lg mt-2">
          We would love to respond to your queries and help you succeed. Feel free to get in touch with us.
        </p>
      </div>

      {/* Contact Form & Info Section */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Left Section - Contact Form */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Send your request</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 transition"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 7890"
                  className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Product Demo"
                className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Message</label>
              <textarea
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition resize-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-32 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="bg-blue-800 text-white p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Reach Us</h3>
          <p className="mb-4"><span className="font-semibold">Email:</span> contactus@example.com</p>
          <p className="mb-4"><span className="font-semibold">Phone:</span> +1 012 345 6789</p>
          <div className="mt-4">
            <p className="font-semibold">Address:</p>
            <p>#212, Ground Floor, 7th Cross</p>
            <p>Some Layout, Some Road, Koramangala</p>
            <p>Bengaluru 560001</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
