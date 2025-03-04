import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: { monthly: 29, quarterly: 79, yearly: 299 },
    features: ["Post 5 Jobs", "Access to 500+ Candidates", "Basic Support", "Basic Job Visibility", "Email Notifications"],
    unavailable: ["AI Job Matching", "Priority Listing", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support"],
    bgButtonColor: "bg-blue-500",
  },
  {
    name: "Standard",
    price: { monthly: 59, quarterly: 159, yearly: 599 },
    features: ["Post 20 Jobs", "Access to 2000+ Candidates", "Standard Support", "Standard Job Visibilty", "Advanced Analytics", "Enhanced Job Visibility", "AI Job Matching", "Priority Listing"],
    unavailable: ["Dedicated Account Manager", "24/7 Support"],
    bgButtonColor: "bg-blue-500",
  },
  {
    name: "Premium",
    price: { monthly: 99, quarterly: 269, yearly: 999 },
    features: ["Unlimited Job Posts", "Access to 5000+ Candidates", "Premium Support", "AI Job Matching", "Priority Listing", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support", "Premium Job Visibility", "Custom Branding"],
    unavailable: [],
    bgButtonColor: "bg-blue-500",
  },
];

const billingOptions = ["monthly", "quarterly", "yearly"];

const RecruiterSubscriptions = () => {
  const [billingKey, setBillingKey] = useState("monthly");

  return (
    <section id="subscriptions" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-5xl font-extrabold text-black mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recruiter Subscription Plans
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Choose the perfect plan to match your hiring needs. Save <span className="font-semibold text-blue-600">20%</span> by choosing a longer plan.
        </p>

        {/* Billing Selection Buttons */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {billingOptions.map((option) => (
            <button
              key={option}
              className={`px-5 py-2 rounded-full text-lg font-medium transition-all ${billingKey === option ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setBillingKey(option)}
            >
              {option === "monthly" ? "Monthly" : option === "quarterly" ? "Quarterly" : "Yearly"}
            </button>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="p-8 border-2 border-blue-500 text-black rounded-lg hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              
              {/* Animated Pricing Switch */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={billingKey}
                  className="text-4xl font-extrabold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  ${plan.price[billingKey]}
                  <span className="text-lg text-gray-600">/{billingKey === "monthly" ? "monthly" : billingKey === "quarterly" ? "quarterly" : "yearly"}</span>
                </motion.p>
              </AnimatePresence>
              
              <p className="text-sm text-gray-600 mt-2">
                {billingKey === "yearly" ? "Billed Annually" : billingKey === "quarterly" ? "Billed Quarterly" : "Billed Monthly"}
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <FaTimesCircle className="mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${plan.bgButtonColor} text-white hover:opacity-80`}
                whileHover={{ scale: 1.05 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-black mb-6">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            {[
              { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription at any time from your account settings." },
              { question: "Do you offer refunds?", answer: "We do not offer refunds, but you can use your subscription until the end of the billing cycle." },
              { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers." },
              { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial for the Standard and Premium plans." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-4 border-l-4 border-blue-500 bg-white shadow rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSubscriptions;
