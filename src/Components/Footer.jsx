import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { label: "Facebook", icon: <FaFacebookF />, url: "", color: "text-blue-600" },
    { label: "Instagram", icon: <FaInstagram />, url: "", color: "text-pink-500" },
    { label: "Twitter", icon: <FaTwitter />, url: "", color: "text-blue-400" },
    { label: "LinkedIn", icon: <FaLinkedinIn />, url: "", color: "text-blue-800" },
  ];

  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", path: "" },
        { name: "About", path: "" },
        { name: "Services", path: "" },
        { name: "Contact", path: "" },
        { name: "Terms & Conditions", path: "" },
      ],
    },
    {
      title: "Explore Our Solutions",
      items: [
        { name: "Workforce Management", path: "" },
        { name: "Hiring Solutions", path: "" },
        { name: "Team Optimization", path: "" },
        { name: "Business Growth", path: "" },
      ],
    },
  ];

  return (
    <footer className="text-gray-800 lg:mx-20 py-20">
      <div className="mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-4xl font-bold mb-10 text-blue-600">UrLogo</h2>
            <p className="mt-2 text-xs text-gray-500">
              All trademarks are the property of their respective owners <br /> All rights reserved
              2024 Info Edge (India) Ltd.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4">
            {links.map((section, idx) => (
              <div key={idx}>
                <h5 className="font-bold mb-2">{section.title}</h5>
                <ul>
                  {section.items.map((item, id) => (
                    <li key={id} className="mb-1">
                      <Link to={item.path} className="hover:text-blue-600">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Apply on the Go Section */}
          <div className="p-4 text-center">
            <h5 className="font-bold mb-4">Connect with us</h5>
            <div className="flex items-center justify-center space-x-5">
              {socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.url}
                  aria-label={link.label}
                  className={`${link.color} hover:opacity-80`}
                >
                  <span className="text-2xl">{link.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;