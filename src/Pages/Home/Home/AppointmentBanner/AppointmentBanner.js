import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../../images/appointment-bg.jpg'
import { Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


const AppointmentBanner = () => {
    return (
            <Container sx={{backgroundColor: '#ff1744', py: 7}}>
                        <Typography variant="h4" sx={{ fontWeight: 600, my: 3, color: '#e3f2fd'}}>
                            Subscribe Us
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, my: 3, color: '#bbdefb'}}>
                            Leave us your mail!
                        </Typography>
                        <Typography variant="h6" sx={{my: 5}} style ={{ fontWeight: 600, my: 3, color: '#ffebee', fontSize: 14, fontWeight: 300}}>
                            Dropping us your email will help us to inform you with all sort of regular offers which will definitely be beneficial for you in the future.
                        </Typography>
                        <Box>
                            <TextField id="standard-basic" sx={{width: '60%'}} label="Drop Your Email" variant="standard" />
                        </Box>
                    </Container>
                    
    );
};

export default AppointmentBanner;