import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SignUpForm from '../components/SignUpForm'; // Adjust the import path if needed

export default function SignUp() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError(null);
      
    }, 2000);
  };

  return (
    <div className="flex items-center min-h-screen bg-white">
      <div className="container mx-auto">
        <motion.div
          className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold bg-gradient-to-br from-[#37003c] to-[#da0043] bg-clip-text text-transparent">
              Sign Up
            </h1>
            <p className="text-gray-500">Create a new account</p>
          </div>

          {/* Pass props to SignUpForm */}
          <SignUpForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            error={error}
            loading={loading} // Pass loading state
          />
        </motion.div>
      </div>
    </div>
  );
}
