import { useState } from 'react';
import { loginUser } from '../services/login';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let result = { success: false, message: '', user: null }; // Default result

    try {
      const response = await loginUser(email, password);

      if (response && response.success) {
        // If login is successful, return success and user data
        result = {
          success: true,
          user: { userName: response.userName, email: email }, // You can adjust user data as needed
        };
        localStorage.setItem('jwtToken', response.token);
        localStorage.setItem('userName', response.userName);
        navigate('/');
      } else {
        // Handle error messages
        result = {
          success: false,
          message: response ? response.message : 'Unexpected error occurred',
          user: null,
        };
      }
    } catch (error) {
      console.error('Error during login:', error);
      result = { success: false, message: 'An error occurred during login', user: null };
    }

    setLoading(false);
    return result;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSubmit,
  };
}
