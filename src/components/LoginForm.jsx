import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Ensure Link is imported

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  error,
  loading, // Include the loading state prop
}) {
  return (
    <div className="m-7">
      <form onSubmit={handleSubmit}>
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
          className="mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            {/* Forgot password link */}
            <a
              href="#!"
              className="text-sm text-[#37003c] hover:underline focus:outline-none"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#37003c] focus:border-[#37003c]"
            required
          />
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
            {loading ? 'Logging in...' : 'Login'} {/* Change text when loading */}
          </button>
        </motion.div>

        {/* Sign up link */}
        <p className="text-sm text-center text-gray-500">
          Don't have an account yet?{' '}
          <Link
            to="/signUp"
            className="text-[#37003c] font-semibold hover:text-[#6d0044] hover:underline transition-all duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  );
}
