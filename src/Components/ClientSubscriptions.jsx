import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: { monthly: 19, quarterly: 49, yearly: 179 },
    features: ["Access to 50+ Resumes", "Basic Support", "Limited Job Postings", "Email Notifications"],
    unavailable: ["Dedicated Account Manager", "Advanced Analytics", "24/7 Support", "Custom Branding"],
  },
  {
    name: "Professional",
    price: { monthly: 49, quarterly: 129, yearly: 449 },
    features: ["Access to 500+ Resumes", "Standard Support", "Unlimited Job Postings", "Advanced Candidate Filtering", "Job Visibility Boost"],
    unavailable: ["Dedicated Account Manager", "24/7 Support", "Custom Branding"],
  },
  {
    name: "Enterprise",
    price: { monthly: 89, quarterly: 239, yearly: 849 },
    features: ["Unlimited Resume Access", "Priority Support", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support", "Custom Branding", "Job Visibility Boost", "Featured Job Listings"],
    unavailable: [],
  },
];

const faqs = [
  { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, and PayPal for all subscription plans." },
  { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription anytime from your account settings. Your access will remain until the billing period ends." },
  { question: "Is there a free trial available?", answer: "We currently do not offer a free trial, but you can start with the Starter plan and upgrade later." },
];

const ClientSubscriptions = () => {
  const [billingKey, setBillingKey] = useState("monthly");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-5xl font-extrabold text-black mb-6">Client Subscription Plans</motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">Find the right plan for your hiring needs and access top candidates.</p>

        <div className="flex justify-center items-center space-x-4 mb-8">
          {["monthly", "quarterly", "yearly"].map((option) => (
            <button
              key={option}
              className={`px-5 py-2 rounded-full cursor-pointer text-lg font-medium transition-all ${billingKey === option ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setBillingKey(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} className="p-8 border-2 border-blue-500 rounded-lg hover:shadow-lg">
              <h3 className="text-3xl font-bold text-black mb-4">{plan.name}</h3>
              <AnimatePresence mode="wait">
                <motion.p key={billingKey} className="text-4xl font-extrabold">
                  ${plan.price[billingKey]}/
                  <span className="text-lg text-gray-600">{billingKey}</span>
                </motion.p>
              </AnimatePresence>

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

              <motion.button className="mt-6 w-full py-3 rounded-lg text-lg font-semibold bg-blue-500 text-white hover:opacity-80">
                Subscribe
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 📌 FAQ Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-black mb-6 text-center">Frequently Asked Questions</h3>
        <div className="max-w-4xl mx-auto text-left space-y-6">
          {faqs.map((faq, index) => (
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
    </section>
  );
};

export default ClientSubscriptions;
