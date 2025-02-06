import React from 'react';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate=useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const Data = new FormData(event.currentTarget); // Capture form data
        const userdata = {
            email: Data.get('email'),
            password: Data.get('password')
        };
        console.log("Form Submitted:", userdata); // Replace with API call or state update logic
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  
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
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className=' flex justify-center items-center'>
                <div className='py-3 flex items-center'>
                    <p>Dont have account?</p>
                    <Button onClick={()=>navigate("/register")} className=' ml-5' size='small'>Register</Button>
                </div>

            </div>
        </div>
    );
};

export default LoginForm ;
