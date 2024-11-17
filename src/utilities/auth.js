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
      console.log('Response not OK:', response);
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login response:', data); // Check if the response contains the token

    const token = data.token; // Assuming token is in 'token' field
    localStorage.setItem('jwtToken', token);

    return { success: true, token, userName: data.userName };
  } catch (err) {
    console.error('Error during login:', err);
    return { success: false, message: 'Invalid email or password' };
  }
}
