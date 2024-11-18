const validatePasswordStrength = (password) => {
    const checks = [
      {
        message: "Password must be at least 8 characters long.",
        valid: password.length >= 8,
      },
      {
        message: "Password must contain at least one uppercase letter.",
        valid: /[A-Z]/.test(password),
      },
      {
        message: "Password must contain at least one digit.",
        valid: /\d/.test(password),
      },
      {
        message: "Password must contain at least one special character.",
        valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      },
    ];
  
    return checks; // Return the checks with their statuses
  };
  
  export default validatePasswordStrength;
  