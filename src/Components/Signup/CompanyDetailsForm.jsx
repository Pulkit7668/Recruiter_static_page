import React from "react";

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
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ];

  return (
    <div className="space-y-4">
      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block font-medium">Company Name</label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          placeholder="Acme Inc."
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>}
      </div>

      {/* Industry Selection */}
      <div>
        <label htmlFor="industry" className="block font-medium">Industry</label>
        <select
          id="industry"
          name="industry"
          value={formData.industry || ""}
          onChange={(e) => {
            console.log("Selected Industry:", e.target.value); // Debugging
            handleSelectChange("industry", e.target.value);
          }}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="" disabled>Select industry</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
        {errors.industry && <p className="text-sm text-red-500 mt-1">{errors.industry}</p>}
      </div>

      {/* Company Size Selection */}
      <div>
        <label htmlFor="companySize" className="block font-medium">Company Size</label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize || ""}
          onChange={(e) => {
            console.log("Selected Company Size:", e.target.value); // Debugging
            handleSelectChange("companySize", e.target.value);
          }}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="" disabled>Select company size</option>
          {companySizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        {errors.companySize && <p className="text-sm text-red-500 mt-1">{errors.companySize}</p>}
      </div>

      {/* Company Website */}
      <div>
        <label htmlFor="website" className="block font-medium">Company Website (optional)</label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://example.com"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.website && <p className="text-sm text-red-500 mt-1">{errors.website}</p>}
      </div>

      {/* Company Address */}
      <div>
        <label htmlFor="address" className="block font-medium">Company Address</label>
        <textarea
          id="address"
          name="address"
          placeholder="123 Business St, City, Country"
          className="w-full px-3 py-2 border rounded-md resize-none"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
      </div>
    </div>
  );
}
