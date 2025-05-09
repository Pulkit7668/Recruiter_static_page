import React, { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = ({ userType, setUserType }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Set userType based on current path when component mounts or location changes
    if (location.pathname.startsWith("/client")) {
      setUserType("client");
    } else if (location.pathname.startsWith("/recruiter")) {
      setUserType("recruiter");
    }
  }, [location.pathname, setUserType]);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
    }
    setIsDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownVisible(false)
    }, 200)
    setDropdownTimeout(timeout)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  const toggleServicesDropdown = () => {
    setIsServicesExpanded(!isServicesExpanded)
  }

  // Handle user type toggle with navigation
  const handleUserTypeToggle = (type) => {
    setUserType(type)
    // Navigate to the appropriate home page
    if (type === "recruiter") {
      navigate("/recruiter")
    } else {
      navigate("/client")
    }
  }

  // Get the home link based on user type
  const getHomeLink = () => {
    return userType === "recruiter" ? "/recruiter" : "/client"
  }

  return (
    <nav className="bg-white text-black py-4 px-4 md:px-10 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-6">
        <Link to={getHomeLink()} className="text-4xl font-bold text-blue-600">
          UrLogo
        </Link>
      </div>

      {/* Mobile Menu Button - Always visible with transparent background */}
      <button
        className="lg:hidden flex items-center bg-transparent"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-black" />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex gap-6 font-medium">
          <li>
            <Link
              to={getHomeLink()}
              className={`hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer ${
                (location.pathname === "/recruiter" && userType === "recruiter") || 
                (location.pathname === "/client" && userType === "client") 
                  ? "text-blue-600 border-b-2 border-orange-500" 
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer ${
                location.pathname === "/about-us" ? "text-blue-600 border-b-2 border-orange-500" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className={`hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer ${
                location.pathname === "/subscriptions" ? "text-blue-600 border-b-2 border-orange-500" : ""
              }`}
            >
              Subscriptions
            </Link>
          </li>
          {/* Show Services only for recruiters */}
          {userType === "recruiter" && (
            <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                className={`hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer ${
                  location.pathname === "/services" ? "text-blue-600 border-b-2 border-orange-500" : ""
                }`}
              >
                Services
              </Link>

              {/* Dropdown */}
              {isDropdownVisible && (
                <div className="absolute right-2 top-8 mt-2 w-[700px] bg-white shadow-md rounded-3xl z-10 p-4">
                  <div className="grid grid-cols-3 gap-6 text-gray-800">
                    {/* Column 1 */}
                    <div className="border-r border-gray-300 pr-4">
                      <h3 className="font-bold mb-2">Resume writing</h3>
                      <ul className="space-y-1 text-gray-500 font-normal">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Text resume
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Visual resume
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Resume critique
                          </a>
                        </li>
                      </ul>
                      <h3 className="font-bold mt-4 mb-2">Find Jobs</h3>
                      <ul className="space-y-1 text-gray-500 font-normal">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Jobs4u
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Priority applicant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="border-r border-gray-300 pr-4">
                      <h3 className="font-bold mb-2">Get recruiter's attention</h3>
                      <ul className="space-y-1 text-gray-500 font-normal">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Resume display
                          </a>
                        </li>
                      </ul>
                      <h3 className="font-bold mt-10 mb-2">Monthly subscriptions</h3>
                      <ul className="space-y-1 text-gray-500 font-normal">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Basic & premium plans
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Column 3 */}
                    <div>
                      <h3 className="font-bold mb-2">Free resume resources</h3>
                      <ul className="space-y-1 text-gray-500 font-normal">
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Resume maker
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Resume quality score
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Resume samples
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-blue-600">
                            Job letter samples
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          )}
          <li>
            <Link
              to="/contact-us"
              className={`hover:text-blue-600 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer ${
                location.pathname === "/contact-us" ? "text-blue-600 border-b-2 border-orange-500" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Show Sign Up button only for recruiters */}
        {userType === "recruiter" && (
          <Link
            to="/signup"
            className="font-semibold hover:text-blue-500 hover:border-b-2 border-orange-500 pb-1 transition-all duration-300 py-1 cursor-pointer"
          >
            Sign Up
          </Link>
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
            onClick={() => handleUserTypeToggle("recruiter")}
          >
            Recruiter
          </button>

          <button
            className={`relative flex-1 text-center py-2 font-semibold transition-all duration-300 cursor-pointer rounded-full 
            ${userType === "client" ? "text-white" : "text-gray-700 hover:text-blue-600 hover:shadow-md"}`}
            onClick={() => handleUserTypeToggle("client")}
          >
            Client
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-center">Main Menu</h2>
            <button className="" onClick={toggleMobileMenu} aria-label="Close menu">
              <X className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          <div className="mt-4">
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <button
                  onClick={() => handleNavigation(getHomeLink())}
                  className="w-full text-left py-2 hover:text-blue-600 transition-all duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about-us")}
                  className="w-full text-left py-2 hover:text-blue-600 transition-all duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/subscriptions")}
                  className="w-full text-left py-2 hover:text-blue-600 transition-all duration-300"
                >
                  Subscriptions
                </button>
              </li>
              {/* Show Services only for recruiters */}
              {userType === "recruiter" && (
                <li className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={toggleServicesDropdown}
                      className="w-full text-left py-2 hover:text-blue-600 transition-all duration-300 flex justify-between items-center"
                    >
                      <span>Services</span>
                      {isServicesExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Mobile Services Dropdown */}
                  {isServicesExpanded && (
                    <div className="mt-2 pl-4 space-y-4">
                      <div>
                        <h3 className="font-bold mb-2 text-sm">Resume writing</h3>
                        <ul className="space-y-2 text-gray-600 text-sm pl-2">
                          <li>
                            <a href="#" className="block py-1">
                              Text resume
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Visual resume
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Resume critique
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2 text-sm">Find Jobs</h3>
                        <ul className="space-y-2 text-gray-600 text-sm pl-2">
                          <li>
                            <a href="#" className="block py-1">
                              Jobs4u
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Priority applicant
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2 text-sm">Get recruiter's attention</h3>
                        <ul className="space-y-2 text-gray-600 text-sm pl-2">
                          <li>
                            <a href="#" className="block py-1">
                              Resume display
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2 text-sm">Monthly subscriptions</h3>
                        <ul className="space-y-2 text-gray-600 text-sm pl-2">
                          <li>
                            <a href="#" className="block py-1">
                              Basic & premium plans
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2 text-sm">Free resume resources</h3>
                        <ul className="space-y-2 text-gray-600 text-sm pl-2">
                          <li>
                            <a href="#" className="block py-1">
                              Resume maker
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Resume quality score
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Resume samples
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1">
                              Job letter samples
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              )}
              <li>
                <button
                  onClick={() => handleNavigation("/contact-us")}
                  className="w-full text-left py-2 hover:text-blue-600 transition-all duration-300"
                >
                  Contact Us
                </button>
              </li>
              {/* Show Sign Up button only for recruiters */}
              {userType === "recruiter" && (
                <li>
                  <button
                    onClick={() => handleNavigation("/signup")}
                    className="w-full text-left py-2 font-semibold hover:text-blue-600 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </li>
              )}
            </ul>

            {/* User Type Toggle Button for Mobile */}
            <div className="mt-6 mb-2">
              <p className="text-sm text-gray-500 mb-2">Switch user type:</p>
              <div className="relative flex bg-gray-200 rounded-full p-1 overflow-hidden shadow-md">
                <div
                  className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-300 ${
                    userType === "client" ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>

                <button
                  className={`relative flex-1 text-center py-2 font-semibold transition-all duration-300 cursor-pointer rounded-full 
                  ${userType === "recruiter" ? "text-white" : "text-gray-700 hover:text-blue-600 hover:shadow-md"}`}
                  onClick={() => handleUserTypeToggle("recruiter")}
                >
                  Recruiter
                </button>

                <button
                  className={`relative flex-1 text-center py-2 font-semibold transition-all duration-300 cursor-pointer rounded-full 
                  ${userType === "client" ? "text-white" : "text-gray-700 hover:text-blue-600 hover:shadow-md"}`}
                  onClick={() => handleUserTypeToggle("client")}
                >
                  Client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}
    </nav>
  )
}

export default Navbar
