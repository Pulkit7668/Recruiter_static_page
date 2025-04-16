import React, { useEffect } from "react"

export default function RazorpayPayment({ plan, onSuccess, onFailure }) {
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const getPlanAmount = () => {
    switch (plan) {
      case "basic":
        return 2900 // ₹29.00 * 100 (Razorpay expects amount in paise)
      case "standard":
        return 5900 // ₹59.00 * 100
      case "premium":
        return 9900 // ₹99.00 * 100
      default:
        return 2900 // Default to basic plan
    }
  }

  const getPlanName = () => {
    switch (plan) {
      case "basic":
        return "Basic Plan"
      case "standard":
        return "Standard Plan"
      case "premium":
        return "Premium Plan"
      default:
        return "Subscription"
    }
  }

  const displayRazorpay = async () => {
    const res = await loadRazorpay()

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your connection")
      onFailure()
      return
    }

    const options = {
      key: "rzp_test_kd6KSYCE0Tm8HI", // Replace with your actual Razorpay key
      amount: getPlanAmount(),
      currency: "INR",
      name: "Recruiter Platform",
      description: `Subscription for ${getPlanName()}`,
      image: "https://your-company-logo.png", // Replace with your company logo
      handler: (response) => {
        onSuccess(response.razorpay_payment_id)
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      notes: {
        plan: plan,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: () => {
          onFailure()
        },
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  useEffect(() => {
    displayRazorpay()
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Processing Payment</h3>
        <p className="mb-6 text-gray-600">Please complete your payment in the Razorpay window.</p>
        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
        <button
          onClick={onFailure}
          className="mt-4 w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          Cancel Payment
        </button>
      </div>
    </div>
  )
}

