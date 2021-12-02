import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container style ={{ backgroundColor: '#d50000'}}>
            <Typography variant="h7" sx ={{ fontWeight: 300, color: 'white'}}>
                All Right Reserved By <br /> Explore Globe 
            </Typography>
        </Container>
    );
};

export default Footer;