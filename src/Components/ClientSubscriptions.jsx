import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaChevronDown } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: { monthly: 19, quarterly: 49, yearly: 179 },
    features: ["Access to 50+ Resumes", "Basic Support", "Limited Job Postings", "Email Notifications"],
    unavailable: ["Dedicated Account Manager", "Advanced Analytics", "24/7 Support", "Custom Branding"],
    color: "border-blue-500 text-blue-600",
    bgColor: "bg-blue-50",
    bgButtonColor: "bg-blue-500",
  },
  {
    name: "Professional",
    price: { monthly: 49, quarterly: 129, yearly: 449 },
    features: ["Access to 500+ Resumes", "Standard Support", "Unlimited Job Postings", "Advanced Candidate Filtering", "Job Visibility Boost" ],
    unavailable: ["Dedicated Account Manager", "24/7 Support", "Custom Branding"],
    color: "border-green-500 text-green-600",
    bgColor: "bg-green-50",
    bgButtonColor: "bg-green-500",
  },
  {
    name: "Enterprise",
    price: { monthly: 89, quarterly: 239, yearly: 849 },
    features: ["Unlimited Resume Access", "Priority Support", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support", "Custom Branding", "Job Visibility Boost", "Featured Job Listings"],
    unavailable: [],
    color: "border-purple-500 text-purple-600",
    bgColor: "bg-purple-50",
    bgButtonColor: "bg-purple-500",
  },
];

const faqs = [
  { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, and PayPal for all subscription plans." },
  { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription anytime from your account settings. Your access will remain until the billing period ends." },
  { question: "Is there a free trial available?", answer: "We currently do not offer a free trial, but you can start with the Starter plan and upgrade later." },
];

const ClientSubscriptions = () => {
  const [billingKey, setBillingKey] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-5xl font-extrabold text-gray-900 mb-6">Client Subscription Plans</motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">Find the right plan for your hiring needs and access top candidates.</p>

        <div className="flex justify-center items-center space-x-4 mb-8">
          {["monthly", "quarterly", "yearly"].map((option) => (
            <button
              key={option}
              className={`px-5 py-2 rounded-full text-lg font-medium transition-all ${billingKey === option ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setBillingKey(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} className={`p-8 ${plan.bgColor} border-2 ${plan.color} rounded-lg shadow-md`}>              
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
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

              <motion.button className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold ${plan.bgButtonColor} text-white hover:opacity-80`}>Subscribe</motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
              <button className="flex justify-between w-full text-lg font-medium" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                {faq.question}
                <FaChevronDown className={`transition-transform ${openFaq === index ? "rotate-180" : "rotate-0"}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-3 text-gray-600">
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSubscriptions;
