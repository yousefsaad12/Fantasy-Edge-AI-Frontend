import React, { useState } from 'react';
import { motion } from 'framer-motion';
import validatePasswordStrength from "../utilities/passwordValidator";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUpForm({
  formData, // receive formData as a prop
  handleChange, // receive handleChange as a prop
  handleSubmit,
  loading,
  apiError, // Receive the API error prop
}) {
  const [passwordError, setPasswordError] = useState('');
  const [passwordChecks, setPasswordChecks] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    handleChange(e);  // Use handleChange to update the password
    const checks = validatePasswordStrength(newPassword);
    setPasswordChecks(checks); // Set validation checks
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="m-7">
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
            UserName (Without Space)
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}  // Use formData here
            onChange={handleChange}  // Handle change with handleChange
            className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#37003c] focus:border-[#37003c]"
            required
          />
        </motion.div>

        {/* Email input */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@company.com"
            value={formData.email}  // Use formData here
            onChange={handleChange}  // Handle change with handleChange
            className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#37003c] focus:border-[#37003c]"
            required
          />
        </motion.div>

        {/* Password input */}
        <motion.div
          className="mb-6 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="password" className="text-sm text-gray-600">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
              name="password"
              id="password"
              placeholder="Your Password"
              value={formData.password}  // Use formData here
              onChange={handlePasswordChange}  // Handle password change
              className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#37003c] focus:border-[#37003c]"
              required
            />
            {/* Eye icon to toggle visibility */}
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-gray-600" size={20} />
              ) : (
                <FaEye className="text-gray-600" size={20} />
              )}
            </div>
          </div>

          {/* Password validation checks */}
          <div className="mt-2">
            {passwordChecks.map((check, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className={`text-xs ${check.valid ? 'text-green-500' : 'text-red-500'}`}
                >
                  {check.valid ? '✓' : '✘'}
                </span>
                <span className="text-sm text-gray-600">{check.message}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API Error Message */}
        {apiError && (
          <motion.div
            className="mb-6 text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {apiError} {/* Display the actual API error message */}
          </motion.div>
        )}

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-4 bg-[#37003c] text-white rounded-3xl shadow-md hover:bg-[#a7006c] focus:outline-none focus:ring-2 focus:ring-[#37003c]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {loading ? 'Loading...' : 'Create Account'}
        </motion.button>
      </form>
    </div>
  );
}
