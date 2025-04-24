const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError('Please enter both email and password.');
    return;
  }

  try {
    const formData = new URLSearchParams();
    formData.append('username', email); // Use 'username' (FastAPI expects)
    formData.append('password', password);

    const response = await fetch('https://d-final.onrender.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Important!
      body: formData,
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.detail || 'Invalid credentials.');
      return;
    }

    const result = await response.json();
    localStorage.setItem('token', result.access_token);  // Save token (after backend upgrade)
    window.location.href = '/deals'; // Redirect to deals page
  } catch (err) {
    setError('Login failed. Please check your network and try again.');
  }
};
