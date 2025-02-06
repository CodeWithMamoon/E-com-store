import React, { useEffect } from 'react';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Added necessary imports
import { register, getUser } from '../../state/Auth/Action'; // Removed duplicate `register` import

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Extracting state using useSelector
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector((state) => state); // Corrected to fetch `auth` state

  // Effect to check JWT and fetch user if exists
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth?.jwt, dispatch]); // Corrected dependency array syntax

  // Form Submission Handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget); // Captures form data

    const userData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Dispatching register action
    dispatch(register(userData));
    console.log('Form Submitted:', userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* First Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          {/* Last Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>

          {/* Password Field */}
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password" // Ensures secure input
              fullWidth
              autoComplete="new-password" // Updated autoComplete for password
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Redirect to Login */}
      <div className="flex justify-center items-center">
        <div className="py-3 flex items-center">
          <p>Already have an account?</p>
          <Button onClick={() => navigate('/login')} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
