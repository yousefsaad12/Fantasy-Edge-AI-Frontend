// signup.js (sprite file)
export async function signup(email, password, name) {
  try {
    const response = await fetch(import.meta.env.VITE_SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: name,  // Ensure this matches what the backend expects
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();  // Read the error response
      console.error('Signup failed:', errorData);
      throw new Error(errorData.message || 'Signup failed'); // Improved error message handling
    }

    const data = await response.json();
    console.log('Signup success:', data); // Log success response
    return data; // Return the data to be used by the component
  } catch (error) {
    console.error('Error during signup:', error.message);
    throw error; // Rethrow to be handled in the calling component
  }
}
