// import React, { useState } from "react";

// const MultiStepSignup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     experience: "",
//     skills: "",
//     resume: null,
//     jobPreferences: "",
//     location: "",
//     notifications: false,
//   });

//   // Input Change Handler
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     });
//   };

//   // Navigation Functions
//   const handleNext = () => setStep((prev) => prev + 1);
//   const handleBack = () => setStep((prev) => prev - 1);
//   const handleSubmit = () => {
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-xl font-semibold text-center mb-4">Step {step} of 3</h2>

//         {/* Step 1: Personal Details */}
//         {step === 1 && (
//           <div>
//             <h3 className="text-lg font-medium mb-3">Personal Details</h3>
//             <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//           </div>
//         )}

//         {/* Step 2: Professional Details */}
//         {step === 2 && (
//           <div>
//             <h3 className="text-lg font-medium mb-3">Professional Details</h3>
//             <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <input type="text" name="skills" placeholder="Skills (comma-separated)" value={formData.skills} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <input type="file" name="resume" onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//           </div>
//         )}

//         {/* Step 3: Job Preferences */}
//         {step === 3 && (
//           <div>
//             <h3 className="text-lg font-medium mb-3">Job Preferences</h3>
//             <input type="text" name="jobPreferences" placeholder="Job Preferences" value={formData.jobPreferences} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <input type="text" name="location" placeholder="Preferred Location" value={formData.location} onChange={handleChange} className="w-full border rounded p-2 mb-2" />
//             <label className="flex items-center gap-2 mt-2">
//               <input type="checkbox" name="notifications" checked={formData.notifications} onChange={handleChange} className="w-4 h-4" />
//               <span>Receive Job Alerts</span>
//             </label>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           {step > 1 && <button onClick={handleBack} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>}
//           {step < 3 ? (
//             <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
//           ) : (
//             <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiStepSignup;
