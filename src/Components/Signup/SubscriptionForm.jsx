import React, { useState } from "react";
import { Check, X } from "lucide-react";

export default function SubscriptionForm({ formData, handleSelectChange }) {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const subscriptionPlans = [
    {
      id: "basic",
      name: "Basic",
      price: { monthly: 29, quarterly: 79, yearly: 299 },
      features: ["Post 5 Jobs", "Access to 500+ Candidates", "Basic Support", "Basic Job Visibility", "Email Notifications"],
      unavailable: ["AI Job Matching", "Priority Listing", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support"],
    },
    {
      id: "standard",
      name: "Standard",
      price: { monthly: 59, quarterly: 159, yearly: 599 },
      features: [
        "Post 20 Jobs",
        "Access to 2000+ Candidates",
        "Standard Support",
        "Standard Job Visibility",
        "Advanced Analytics",
        "Enhanced Job Visibility",
        "AI Job Matching",
        "Priority Listing",
      ],
      unavailable: ["Dedicated Account Manager", "24/7 Support"],
      recommended: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: { monthly: 99, quarterly: 269, yearly: 999 },
      features: [
        "Unlimited Job Posts",
        "Access to 5000+ Candidates",
        "Premium Support",
        "AI Job Matching",
        "Priority Listing",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "24/7 Support",
        "Premium Job Visibility",
        "Custom Branding",
      ],
      unavailable: [],
    },
  ];

  const getBillingLabel = () => {
    switch (billingPeriod) {
      case "monthly":
        return "per month";
      case "quarterly":
        return "per quarter";
      case "yearly":
        return "per year";
      default:
        return "per month";
    }
  };

  const calculateSavings = (plan) => {
    if (billingPeriod === "yearly") {
      const monthlyCost = plan.price.monthly;
      const yearlyCost = plan.price.yearly;
      const monthlyCostForYear = monthlyCost * 12;
      const savings = ((monthlyCostForYear - yearlyCost) / monthlyCostForYear) * 100;
      return Math.round(savings);
    }
    return 0;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium">Choose a subscription plan</h3>
        <p className="text-sm text-gray-500">Select a plan that best fits your recruitment needs</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md flex gap-4">
          {['monthly', 'quarterly', 'yearly'].map((period) => (
            <button
              key={period}
              className={`px-4 py-2 rounded ${billingPeriod === period ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setBillingPeriod(period)}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className="cursor-pointer border p-4 rounded-lg shadow-md" onClick={() => handleSelectChange("plan", plan.id)}>
            {plan.recommended && (
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Recommended
              </div>
            )}
            <h4 className="text-xl font-bold">{plan.name}</h4>
            <p className="text-2xl font-bold">${plan.price[billingPeriod]}</p>
            <p className="text-sm text-gray-500">{getBillingLabel()}</p>
            {billingPeriod === "yearly" && calculateSavings(plan) > 0 && (
              <p className="text-xs text-green-600 font-medium">Save {calculateSavings(plan)}% with annual billing</p>
            )}
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">What's included:</h5>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {plan.unavailable.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-medium mb-2 text-gray-500">Not included:</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  {plan.unavailable.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <X className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button className={`w-full mt-4 px-4 py-2 rounded ${formData.plan === plan.id ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`} onClick={() => handleSelectChange("plan", plan.id)}>
              {formData.plan === plan.id ? "Selected" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}