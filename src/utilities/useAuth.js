import { useState } from 'react';
import { loginUser } from './auth';

export default function useAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, message } = await loginUser(email, password);

    if (success) {
      // Handle successful login, like redirecting to another page
      console.log('Login successful');
    } else {
      setError(message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
}
