import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm'; // Adjust path if necessary
import useLogin from '../hooks/useLogin'; // Import the custom hook

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const { email, setEmail, password, setPassword, error, loading, handleSubmit } = useLogin();
  
  const [loginError, setLoginError] = useState(null); // Local state for login error handling

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);

    if (result.success) {
      // If login is successful, update the user state and navigate
      setUser(result.user); // Store user data
      localStorage.setItem('user', JSON.stringify(result.user)); // Store in localStorage for persistence

      // Optionally store token in localStorage as well for authorization
      if (result.token) {
        localStorage.setItem('authToken', result.token); // Store the token for future requests
      }

      navigate('/'); // Navigate to the home page
    } else {
      // Handle failure (e.g., incorrect credentials)
      setLoginError(result.message); // Update error state
      console.error(result.message);
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
            handleSubmit={handleFormSubmit}
            loading={loading} // Pass loading state
          />

          {/* Show error message if exists */}
          {loginError && (
            <div className="mt-4 text-red-500 text-center">
              <p>{loginError}</p>
            </div>
          )}

          {/* Optional: You could add a link for "Forgot password?" here */}
        </motion.div>
      </div>
    </div>
  );
}
