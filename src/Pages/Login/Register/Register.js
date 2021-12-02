import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.jpg'
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const{user, registerUser, isLoading, authError} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match!');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container sx= {{mt:10}}>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Registration</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{width: '75%', m:1 }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        type="text"
                        onBlur={handleOnBlur}
                        variant="standard"/>
                    <TextField
                        sx={{width: '75%', m:1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard"/>
                    <TextField
                        sx={{width: '75%', m:1 }}
                        id="standard-basic"
                        label="Your Password"
                        name="password"
                        type="password"
                        onBlur={handleOnBlur}
                        variant="standard"/>
                    <TextField
                        sx={{width: '75%', m:1 }}
                        id="standard-basic"
                        label="Retype Password"
                        name="password2"
                        type="password"
                        onBlur={handleOnBlur}
                        variant="standard"/>
                    <Button sx={{ width: '75%', m:1}} type="submit" variant="contained">Register</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/login">
                            <Button variant="text">Already Registered? Please, Login</Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully reg</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} sx={{mt: 10}}>
                    <img src={login} style={{width: '100%'}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;