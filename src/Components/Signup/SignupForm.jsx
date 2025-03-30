import React, { useState } from "react"
import { X, Check } from "lucide-react"
import PersonalDetailsForm from "./PersonalDetailsForm"
import CompanyDetailsForm from "./CompanyDetailsForm"
import VerificationForm from "./VerificationForm"
import SubscriptionForm from "./SubscriptionForm"
import RazorpayPayment from "./RazorpayPayment"

export default function SignupForm() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [showPayment, setShowPayment] = useState(false)

  const [formData, setFormData] = useState({
    // Company details
    logo: null,
    companyName: "",
    company_description: "",
    industry: "",
    company_type: "",
    company_size: "",
    company_location: "",
    address: "",
    website_url: "",
    founded_year: "",

    // Person details
    person_name: "",
    person_position: "",
    country_code: "",
    mobile: "",
    email: "",
    user_name: "",
    password: "",

    // Verification documents
    goverment_certificate: null,
    bank_statement: null,
    tax_certificate: null,

    // Subscription
    plan: "",
    billingPeriod: "monthly",
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const validateStep1 = () => {
    const stepErrors = {}
    if (!formData.person_name.trim()) stepErrors.person_name = "Full name is required"
    if (!formData.person_position.trim()) stepErrors.person_position = "Position is required"
    if (!formData.country_code.trim()) stepErrors.country_code = "Country code is required"
    if (!formData.mobile.trim() || formData.mobile.length < 10) stepErrors.mobile = "Valid mobile number is required"
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "Valid email is required"
    if (!formData.user_name.trim()) stepErrors.user_name = "Username is required"
    if (!formData.password || formData.password.length < 8)
      stepErrors.password = "Password must be at least 8 characters"
    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const validateStep2 = () => {
    const stepErrors = {}
    if (!formData.companyName.trim()) stepErrors.companyName = "Company name is required"
    if (!formData.company_description.trim()) stepErrors.company_description = "Company description is required"
    if (!formData.industry) stepErrors.industry = "Please select an industry"
    if (!formData.company_type) stepErrors.company_type = "Please select company type"
    if (!formData.company_size) stepErrors.company_size = "Please select company size"
    if (!formData.company_location.trim()) stepErrors.company_location = "Company location is required"
    if (!formData.address.trim()) stepErrors.address = "Enter company address"
    if (formData.website_url && !formData.website_url.startsWith("http"))
      stepErrors.website_url = "Valid website URL required"
    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    } else if (step === 3) {
      // Verification step is optional
      setStep(4)
    }
  }

  const prevStep = () => setStep((prev) => prev - 1)

  const skipStep = () => {
    if (step === 3) {
      setStep(4)
    } else if (step === 4) {
      handleSubmit()
    }
  }

  const handlePayment = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = (paymentId) => {
    console.log("Payment successful with ID:", paymentId)
    setShowPayment(false)
    handleSubmit()
  }

  const handlePaymentFailure = () => {
    setShowPayment(false)
    console.log("Payment failed")
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    console.log("Form submitted:", formData)
    window.location.href = "https://new-repo-admin.vercel.app/"
  }

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between items-center mb-6">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= stepNumber
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              } ${step === stepNumber ? "ring-4 ring-blue-100" : ""}`}
            >
              {step > stepNumber ? <Check size={20} /> : stepNumber}
            </div>
            <span className={`text-xs mt-2 ${step >= stepNumber ? "text-blue-600 font-medium" : "text-gray-500"}`}>
              {stepNumber === 1
                ? "Personal"
                : stepNumber === 2
                  ? "Company"
                  : stepNumber === 3
                    ? "Verification"
                    : "Subscription"}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Create Recruiter Account</h2>
          <button
            className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            onClick={() => (window.location.href = "/")}
          >
            <X size={24} />
          </button>
        </div>

        {renderStepIndicator()}

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>

        {/* Forms */}
        <div className="mt-6">
          {step === 1 && <PersonalDetailsForm formData={formData} handleChange={handleChange} errors={errors} />}
          {step === 2 && (
            <CompanyDetailsForm
              formData={formData}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              errors={errors}
            />
          )}
          {step === 3 && <VerificationForm formData={formData} handleChange={handleChange} errors={errors} />}
          {step === 4 && (
            <SubscriptionForm
              formData={formData}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              errors={errors}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              onClick={prevStep}
            >
              Previous
            </button>
          ) : (
            <div></div> // Empty div to maintain flex spacing
          )}

          {step < 4 ? (
            <div className="flex gap-3">
              {step === 3 && (
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  onClick={skipStep}
                >
                  Skip
                </button>
              )}
              <button
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors shadow-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                onClick={skipStep}
              >
                Skip
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-colors shadow-md"
                onClick={handlePayment}
              >
                Purchase Subscription
              </button>
            </div>
          )}
        </div>

        {/* Razorpay Payment Modal */}
        {showPayment && (
          <RazorpayPayment plan={formData.plan} onSuccess={handlePaymentSuccess} onFailure={handlePaymentFailure} />
        )}
      </div>
    </div>
  )
}

