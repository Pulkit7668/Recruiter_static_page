import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import PersonalDetailsForm from "../Signup/PersonalDetailsForm";
import CompanyDetailsForm from "../Signup/CompanyDetailsForm";
import SubscriptionForm from "../Signup/SubscriptionForm";

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    address: "",
    plan: "",
    billingPeriod: "monthly",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateStep1 = () => {
    const stepErrors = {};
    if (!formData.fullName.trim()) stepErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 8) stepErrors.password = "Password must be at least 8 characters";
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) stepErrors.mobileNumber = "Valid mobile number is required";
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep2 = () => {
    const stepErrors = {};
    if (!formData.companyName.trim()) stepErrors.companyName = "Company name is required";
    if (!formData.industry) stepErrors.industry = "Please select an industry";
    if (!formData.companySize) stepErrors.companySize = "Please select company size";
    if (formData.website && !formData.website.startsWith("http")) stepErrors.website = "Valid website URL required";
    if (!formData.address.trim() || formData.address.length < 5) stepErrors.address = "Enter company address";
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if ((step === 1 && validateStep1()) || (step === 2 && validateStep2())) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);
  const skipSubscription = () => navigate("/login");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Create Recruiter Account</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => navigate("/")}
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600">
          {step === 1
            ? "Step 1: Personal Details"
            : step === 2
            ? "Step 2: Company Information"
            : "Step 3: Choose Subscription"}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${step * 33.33}%` }}
          ></div>
        </div>

        {/* Forms */}
        <form onSubmit={handleSubmit} className="mt-4">
          {step === 1 && <PersonalDetailsForm formData={formData} handleChange={handleChange} errors={errors} />}
          {step === 2 && <CompanyDetailsForm formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} errors={errors} />}
          {step === 3 && <SubscriptionForm formData={formData} handleChange={handleChange} errors={errors} />}
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button type="button" className="px-4 py-2 border rounded" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 3 ? (
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded ml-auto" onClick={nextStep}>
              Next
            </button>
          ) : (
            <div className="flex gap-2 ml-auto">
              <button type="button" className="px-4 py-2 border rounded" onClick={skipSubscription}>
                Skip
              </button>
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                Complete Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
