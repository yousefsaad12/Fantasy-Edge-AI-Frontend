import React from 'react';
import { motion } from 'framer-motion';

export default function LoginForm({ email, setEmail, password, setPassword, handleSubmit, error }) {
  return (
    <div className="m-7">
      <form onSubmit={handleSubmit}>
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
          />
        </motion.div>
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
            <a href="#!" className="text-sm text-[#37003c] hover:underline focus:outline-none">
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
          />
        </motion.div>
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
        <motion.div
          className="mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <button
            type="submit"
            className="w-full bg-[#37003c] rounded-full px-4 py-2 text-white font-semibold shadow-md transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none"
          >
            Login
          </button>
        </motion.div>
        <p className="text-sm text-center text-gray-500">
          Don't have an account yet?{" "}
          <a href="#!" className="text-[#37003c] font-medium hover:underline focus:outline-none">
            Sign up
          </a>.
        </p>
      </form>
    </div>
  );
}
