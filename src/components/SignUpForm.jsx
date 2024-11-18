import React, { useState } from 'react';
import { motion } from 'framer-motion';
import validatePasswordStrength from "../utilities/passwordValidator"; // Adjust the path to your validator
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

export default function SignUpForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleSubmit,
  error,
  loading, // Loading state for sign-up
}) {
  const [passwordError, setPasswordError] = useState('');
  const [passwordChecks, setPasswordChecks] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
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
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={handlePasswordChange}
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

        {/* Error message */}
        {error && (
          <motion.div
            className="mb-6 text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}

        {/* Submit button */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <button
            type="submit"
            className="w-full bg-[#37003c] rounded-full px-4 py-2 text-white font-semibold shadow-md transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none"
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Signing up...' : 'Sign Up'} {/* Change text when loading */}
          </button>
        </motion.div>

        {/* Login link */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{' '}
          <a
            href="#!" // replace with actual link to login
            className="text-[#37003c] font-medium hover:underline focus:outline-none"
          >
            Log in
          </a>
          .
        </p>
      </form>
    </div>
  );
}
