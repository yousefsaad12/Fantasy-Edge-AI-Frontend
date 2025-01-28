import { useState } from 'react';
import { loginUser } from '../services/login';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Keep track of the error state
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset the error before starting the login process

    let result = { success: false, message: '', user: null };

    try {
      const response = await loginUser(email, password);

      if (response && response.success) {
        // Successful login
        result = {
          success: true,
          user: { userName: response.userName, email: email },
        };
        localStorage.setItem('jwtToken', response.token);
        localStorage.setItem('userName', response.userName);
        navigate('/');
      } else {
        // Set error message on failure
        result = {
          success: false,
          message: response ? response.message : 'Unexpected error occurred',
          user: null,
        };
        setError(result.message); // Set error in the hook
      }
    } catch (error) {
      console.error('Error during login:', error);
      result = { success: false, message: 'An error occurred during login', user: null };
      setError(result.message); // Set error in the hook
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
