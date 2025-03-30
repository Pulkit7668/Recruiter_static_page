import React from "react"

export default function CompanyDetailsForm({ formData, handleChange, handleSelectChange, errors }) {
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Hospitality",
    "Construction",
    "Transportation",
    "Other",
  ]

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ]

  const companyTypes = [
    "Sole Proprietorship",
    "Partnership",
    "Limited Liability Company (LLC)",
    "Corporation",
    "Non-profit",
    "Government",
    "Other",
  ]

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Company Details</h3>
        <p className="text-gray-500">Tell us about your company</p>
      </div>

      {/* Company Logo */}
      <div className="mb-6">
        <label htmlFor="logo" className="block font-medium text-gray-700 mb-2">
          Company Logo
        </label>
        <div className="flex items-center">
          {formData.logo ? (
            <div className="relative w-28 h-28 mr-4">
              <img
                src={URL.createObjectURL(formData.logo) || "/placeholder.svg"}
                alt="Company Logo"
                className="w-28 h-28 object-cover border rounded-lg shadow-sm"
              />
              <button
                type="button"
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                onClick={() => handleSelectChange("logo", null)}
              >
                ×
              </button>
            </div>
          ) : (
            <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mr-4 bg-gray-50">
              <span className="text-gray-400 text-sm">No logo</span>
            </div>
          )}
          <input id="logo" name="logo" type="file" accept="image/*" onChange={handleChange} className="hidden" />
          <label
            htmlFor="logo"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors shadow-sm"
          >
            Upload Logo
          </label>
        </div>
        {errors.logo && <p className="text-sm text-red-500 mt-1">{errors.logo}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block font-medium text-gray-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Acme Inc."
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.companyName ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>}
        </div>

        {/* Industry Selection */}
        <div>
          <label htmlFor="industry" className="block font-medium text-gray-700 mb-1">
            Industry <span className="text-red-500">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry || ""}
            onChange={(e) => {
              handleSelectChange("industry", e.target.value)
            }}
            className={`w-full px-4 py-3 border ${
              errors.industry ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors appearance-none bg-white`}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="%23666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="" disabled>
              Select industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && <p className="text-sm text-red-500 mt-1">{errors.industry}</p>}
        </div>

        {/* Company Type */}
        <div>
          <label htmlFor="company_type" className="block font-medium text-gray-700 mb-1">
            Company Type <span className="text-red-500">*</span>
          </label>
          <select
            id="company_type"
            name="company_type"
            value={formData.company_type || ""}
            onChange={(e) => {
              handleSelectChange("company_type", e.target.value)
            }}
            className={`w-full px-4 py-3 border ${
              errors.company_type ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors appearance-none bg-white`}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="%23666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="" disabled>
              Select company type
            </option>
            {companyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.company_type && <p className="text-sm text-red-500 mt-1">{errors.company_type}</p>}
        </div>

        {/* Company Size Selection */}
        <div>
          <label htmlFor="company_size" className="block font-medium text-gray-700 mb-1">
            Company Size <span className="text-red-500">*</span>
          </label>
          <select
            id="company_size"
            name="company_size"
            value={formData.company_size || ""}
            onChange={(e) => {
              handleSelectChange("company_size", e.target.value)
            }}
            className={`w-full px-4 py-3 border ${
              errors.company_size ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors appearance-none bg-white`}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="%23666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="" disabled>
              Select company size
            </option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.company_size && <p className="text-sm text-red-500 mt-1">{errors.company_size}</p>}
        </div>

        {/* Company Location */}
        <div>
          <label htmlFor="company_location" className="block font-medium text-gray-700 mb-1">
            Company Location <span className="text-red-500">*</span>
          </label>
          <input
            id="company_location"
            name="company_location"
            type="text"
            placeholder="City, Country"
            value={formData.company_location}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.company_location ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          />
          {errors.company_location && <p className="text-sm text-red-500 mt-1">{errors.company_location}</p>}
        </div>

        {/* Founded Year */}
        <div>
          <label htmlFor="founded_year" className="block font-medium text-gray-700 mb-1">
            Founded Year
          </label>
          <select
            id="founded_year"
            name="founded_year"
            value={formData.founded_year || ""}
            onChange={(e) => {
              handleSelectChange("founded_year", e.target.value)
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors appearance-none bg-white"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5" fill="none" stroke="%23666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="" disabled>
              Select year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.founded_year && <p className="text-sm text-red-500 mt-1">{errors.founded_year}</p>}
        </div>
      </div>

      {/* Company Description */}
      <div>
        <label htmlFor="company_description" className="block font-medium text-gray-700 mb-1">
          Company Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="company_description"
          name="company_description"
          placeholder="Brief description of your company"
          value={formData.company_description}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${
            errors.company_description ? "border-red-300 bg-red-50" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          rows={3}
        />
        {errors.company_description && <p className="text-sm text-red-500 mt-1">{errors.company_description}</p>}
      </div>

      {/* Company Address */}
      <div>
        <label htmlFor="address" className="block font-medium text-gray-700 mb-1">
          Company Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          placeholder="123 Business St, City, Country"
          className={`w-full px-4 py-3 border ${
            errors.address ? "border-red-300 bg-red-50" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
          value={formData.address}
          onChange={handleChange}
          rows={2}
        />
        {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
      </div>

      {/* Company Website */}
      <div>
        <label htmlFor="website_url" className="block font-medium text-gray-700 mb-1">
          Company Website
        </label>
        <input
          id="website_url"
          name="website_url"
          type="url"
          placeholder="https://example.com"
          value={formData.website_url}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${
            errors.website_url ? "border-red-300 bg-red-50" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-colors`}
        />
        {errors.website_url && <p className="text-sm text-red-500 mt-1">{errors.website_url}</p>}
      </div>
    </div>
  )
}

