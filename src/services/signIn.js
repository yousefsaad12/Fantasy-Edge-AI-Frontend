export async function signupUser(email, password, userName) {
    const signupData = {
      email,
      password,
      userName,
    };
  
    try {
      const response = await fetch(import.meta.env.VITE_SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
  
      if (!response.ok) {
        console.log('Response not OK:', response);
        throw new Error('Signup failed');
      }
  
      const data = await response.json();
      console.log('Signup response:', data); // Check the response data
  
      const token = data.token; // Assuming token is in 'token' field
      localStorage.setItem('jwtToken', token);
  
      return { success: true, token, userName: data.userName };
    } catch (err) {
      console.error('Error during signup:', err);
      return { success: false, message: 'Error during signup' };
    }
  }
  