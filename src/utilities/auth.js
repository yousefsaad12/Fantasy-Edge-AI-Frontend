export async function loginUser(email, password) {
    const loginData = {
      email,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:5235/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      const token = data.token;  // Assuming the token is in 'token' field
  
      // Store the JWT token in localStorage
      localStorage.setItem('jwtToken', token);
  
      return { success: true, token };
  
    } catch (err) {
      console.error('Error during login:', err);
      return { success: false, message: 'Invalid email or password' };
    }
  }
  