import React from 'react';

export default function PersonalDetailsForm({ formData, handleChange, errors }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block font-medium">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block font-medium">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="mobileNumber" className="block font-medium">Mobile Number</label>
        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.mobileNumber && <p className="text-sm text-red-500 mt-1">{errors.mobileNumber}</p>}
      </div>
    </div>
  );
}