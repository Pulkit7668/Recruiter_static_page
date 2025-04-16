import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/ClientHome"
import RecruiterHome from "./Components/RecruiterHome"
import AboutUs from "./Components/AboutUs"
import ClientSubscriptions from "./Components/ClientSubscriptions"
import RecruiterSubscriptions from "./Components/RecruiterSubscriptions"
import Services from "./Components/Services"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"
import SignUp from "./Components/Signup/SignupForm" // Assuming you have this component

const App = () => {
  const [userType, setUserType] = useState("recruiter")
  const hideFooterRoutes = ["/signup"];

  // Render the appropriate subscriptions component based on user type
  const SubscriptionsComponent = () => {
    return userType === "recruiter" ? <RecruiterSubscriptions /> : <ClientSubscriptions />
  }

  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Navbar userType={userType} setUserType={setUserType} />

        {/* Add padding to account for fixed navbar */}
        <div className="pt-20">
          <Routes>
            {/* Redirect root to the appropriate home page based on user type */}
            <Route path="/" element={<Navigate to={userType === "recruiter" ? "/recruiter" : "/client"} replace />} />

            {/* Separate routes for client and recruiter home pages */}
            <Route path="/client" element={<Home />} />
            <Route path="/recruiter" element={<RecruiterHome />} />

            {/* Other routes */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/subscriptions" element={<SubscriptionsComponent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>

        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </div>
    </Router>
  )
}

export default App
