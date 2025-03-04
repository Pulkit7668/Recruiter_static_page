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
        <div className="bg-black text-white p-20 flex flex-col">
          <h3 className="text-2xl font-bold mb-10">Reach Us</h3>
          <p className="mb-4"><span className="font-semibold">Email:</span> contactus@example.com</p>
          <p className="mb-4"><span className="font-semibold">Phone:</span> +1 012 345 6789</p>
          <div className="mt-10">
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