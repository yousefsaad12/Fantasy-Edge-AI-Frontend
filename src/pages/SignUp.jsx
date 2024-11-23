import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import SignUpForm from '../components/SignUpForm'; // Import the SignUpForm component
import { signup } from '../services/signIn'; // Import the signup function from sprite.js

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(''); // State to manage the API error
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiError(''); // Reset the error before submission

    try {
      const response = await signup(formData.email, formData.password, formData.name);

      // Handle success: navigate to home page
      setLoading(false);
      console.log('Signup successful:', response);
      navigate('/'); // Redirect to the home page
    } catch (error) {
      setApiError(error.message); // If there's an error, set the API error message
      setLoading(false);
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
              Sign Up
            </h1>
            <p className="text-gray-500">Create a new account</p>
          </div>

          {/* Pass props to SignUpForm */}
          <SignUpForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            apiError={apiError} // Pass apiError prop to SignUpForm
          />
        </motion.div>
      </div>
    </div>
  );
}
