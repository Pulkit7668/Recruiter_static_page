import React, { useState } from "react";
import Footer from "./Footer";
import Home from "./ClientHome";
import RecruiterHome from "./RecruiterHome";
import AboutUs from "./AboutUs";
import ClientSubscriptions from "./ClientSubscriptions";
import RecruiterSubscriptions from "./RecruiterSubscriptions";
import Services from "./Services";
import ContactUs from "./ContactUs";

const StaticPage = () => {
  const [selectedSection, setSelectedSection] = useState("home");
  const [userType, setUserType] = useState("recruiter");

  const renderSection = () => {
    if (selectedSection === "home") {
      return userType === "recruiter" ? <RecruiterHome /> : <Home />;
    }
    switch (selectedSection) {
      case "about-us":
        return <AboutUs />;
      case "subscriptions":
        return userType === "recruiter" ? <RecruiterSubscriptions /> : <ClientSubscriptions />;
      case "services":
        return <Services />;
      case "contact-us":
        return <ContactUs />;
      default:
        return userType === "recruiter" ? <RecruiterHome /> : <Home />;
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
          <ul className="flex gap-6 font-medium">
            <li>
              <button onClick={() => setSelectedSection("home")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection("about-us")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection("subscriptions")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer">
                Subscriptions
              </button>
            </li>
            {/* Show Services only for recruiters */}
            {userType === "recruiter" && (
              <li>
                <button onClick={() => setSelectedSection("services")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer">
                  Services
                </button>
              </li>
            )}
            <li>
              <button onClick={() => setSelectedSection("contact-us")} className="hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer">
                Contact Us
              </button>
            </li>
          </ul>
          {/* Show Sign Up button only for recruiters */}
          {userType === "recruiter" && (
            <button className="font-semibold hover:text-blue-500 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer">
              Sign Up
            </button>
          )}

          {/* User Type Toggle Button */}
          <div className="relative flex bg-gray-200 rounded-full p-1 w-48 overflow-hidden shadow-md">
            <div
              className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-300 ${
                userType === "client" ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>

            <button
              className={`relative flex-1 text-center py-2 font-semibold transition-all duration-300 cursor-pointer rounded-full 
              ${userType === "recruiter" ? "text-white" : "text-gray-700 hover:text-blue-600 hover:shadow-md"}`}
              onClick={() => setUserType("recruiter")}
            >
              Recruiter
            </button>

            <button
              className={`relative flex-1 text-center py-2 font-semibold transition-all duration-300 cursor-pointer rounded-full 
              ${userType === "client" ? "text-white" : "text-gray-700 hover:text-blue-600 hover:shadow-md"}`}
              onClick={() => setUserType("client")}
            >
              Client
            </button>
          </div>
        </div>
      </nav>

      {renderSection()}

      <Footer />
    </div>
  );
};

export default StaticPage;
