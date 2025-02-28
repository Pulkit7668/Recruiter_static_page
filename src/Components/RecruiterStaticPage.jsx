import React, { useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Subscriptions from "./Subscriptions";
import Services from "./Services";
import ContactUs from "./ContactUs";

const RecruiterStaticPage = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  const renderSection = () => {
    switch (selectedSection) {
      case "home":
        return <Home />;
      case "about-us":
        return <AboutUs />;
      case "subscriptions":
        return <Subscriptions />;
      case "services":
        return <Services />;
      case "contact-us":
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-50 text-black py-4 px-10 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-6">
          <button onClick={() => setSelectedSection("home")} className="text-4xl font-bold text-blue-600">
            UrLogo
          </button>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <button onClick={() => setSelectedSection("home")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection("about-us")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection("subscriptions")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1">
                Subscriptions
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection("services")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection("contact-us")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1">
                Contact Us
              </button>
            </li>
          </ul>
          <button className="font-semibold hover:text-blue-500 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1">
            Sign Up
          </button>
        </div>
      </nav>

      {renderSection()}

      <Footer />
    </div>
  );
};

export default RecruiterStaticPage;