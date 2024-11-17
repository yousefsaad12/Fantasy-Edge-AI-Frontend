import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm'; // Adjust path if necessary
import { loginUser } from '../utilities/auth'; // Assuming this is where your login API call is

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error state on each new submission

    try {
      const result = await loginUser(email, password); // Assuming loginUser makes the API call

      setLoading(false);

      if (result.success) {
        // If login is successful, update the user state and navigate
        setUser(result); // Store user data
        localStorage.setItem('user', JSON.stringify(result)); // Store in localStorage for persistence
        navigate('/'); // Navigate to the home page
      } else {
        setError(result.message || 'An error occurred during login'); // Handle login failure
      }
    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please try again later.');
    }
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
              Login
            </h1>
            <p className="text-gray-500">Login to access your account</p>
          </div>

          {/* Pass props to LoginForm */}
          <LoginForm
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
