import React from "react"

export default function PersonalDetailsForm({ formData, handleChange, errors }) {
  const countryCodes = [
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+7", country: "Russia" },
    { code: "+55", country: "Brazil" },
  ]

  const positions = [
    "CEO",
    "CTO",
    "CFO",
    "COO",
    "HR Manager",
    "Hiring Manager",
    "Recruiter",
    "Director",
    "VP",
    "Manager",
    "Other",
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
        <p className="text-gray-500">Please provide your personal details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="person_name" className="block font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="person_name"
            name="person_name"
            type="text"
            placeholder="John Doe"
            value={formData.person_name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.person_name ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.person_name && <p className="text-sm text-red-500 mt-1">{errors.person_name}</p>}
        </div>

        <div>
          <label htmlFor="person_position" className="block font-medium text-gray-700 mb-1">
            Position <span className="text-red-500">*</span>
          </label>
          <select
            id="person_position"
            name="person_position"
            value={formData.person_position || ""}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.person_position ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors appearance-none bg-white`}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="%23666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="" disabled>
              Select your position
            </option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          {errors.person_position && <p className="text-sm text-red-500 mt-1">{errors.person_position}</p>}
        </div>

        <div>
          <label htmlFor="country_code" className="block font-medium text-gray-700 mb-1">
            Country Code <span className="text-red-500">*</span>
          </label>
          <select
            id="country_code"
            name="country_code"
            value={formData.country_code || ""}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.country_code ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors appearance-none bg-white`}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="%23666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="" disabled>
              Select
            </option>
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} ({country.country})
              </option>
            ))}
          </select>
          {errors.country_code && <p className="text-sm text-red-500 mt-1">{errors.country_code}</p>}
        </div>

        <div>
          <label htmlFor="mobile" className="block font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="9876543210"
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.mobile ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="user_name" className="block font-medium text-gray-700 mb-1">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="johndoe123"
            value={formData.user_name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.user_name ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.user_name && <p className="text-sm text-red-500 mt-1">{errors.user_name}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.password ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
        </div>
      </div>
    </div>
  )
}

