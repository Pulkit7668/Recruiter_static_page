import React from "react"
import { CheckCircle } from "lucide-react"

export default function VerificationForm({ formData, handleChange, errors }) {
  const renderFileUpload = (fieldName, label, description) => {
    const file = formData[fieldName]

    return (
      <div className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-800">{label}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          {file && (
            <div className="flex items-center text-green-500">
              <CheckCircle size={18} className="mr-1" />
              <span className="text-sm font-medium">Uploaded</span>
            </div>
          )}
        </div>

        <div className="mt-4">
          {file ? (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
              <span className="text-sm truncate max-w-[200px] font-medium">{file.name}</span>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="px-3 py-1.5 text-xs bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                  onClick={() => window.open(URL.createObjectURL(file), "_blank")}
                >
                  View
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 text-xs bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                  onClick={() => {
                    const mockEvent = {
                      target: {
                        name: fieldName,
                        value: null,
                        type: "file",
                        files: [],
                      },
                    }
                    handleChange(mockEvent)
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-2">
              <input
                id={fieldName}
                name={fieldName}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor={fieldName}
                className="inline-block px-4 py-2.5 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-colors shadow-sm"
              >
                Upload Document
              </label>
            </div>
          )}
          {errors[fieldName] && <p className="text-sm text-red-500 mt-1">{errors[fieldName]}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Document Verification</h3>
        <p className="text-gray-500">
          Upload your company documents for verification. This step is optional but recommended for faster approval.
        </p>
      </div>

      <div className="space-y-6">
        {renderFileUpload(
          "goverment_certificate",
          "Government Certificate",
          "Upload a valid government-issued business registration certificate",
        )}

        {renderFileUpload("bank_statement", "Bank Statement", "Upload a recent bank statement (last 3 months)")}

        {renderFileUpload("tax_certificate", "Tax Certificate", "Upload your company's tax registration certificate")}
      </div>

      <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> Document verification helps us confirm your company's legitimacy and can speed up your
          account approval process. All documents are securely stored and handled with strict confidentiality.
        </p>
      </div>
    </div>
  )
}

