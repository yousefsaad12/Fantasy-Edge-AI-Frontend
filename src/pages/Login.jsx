import React from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm';
import useAuth from '../utilities/useAuth';

export default function Login() {
  const { email, setEmail, password, setPassword, error, handleSubmit } = useAuth();

  return (
    <div className="flex items-center min-h-screen bg-white">
      <div className="container mx-auto">
        <motion.div
          className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold bg-gradient-to-br from-[#37003c] to-[#da0043] bg-clip-text text-transparent">
              Login
            </h1>
            <p className="text-gray-500">Login to access Analyzer</p>
          </div>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            error={error}
          />
        </motion.div>
      </div>
    </div>
  );
}
