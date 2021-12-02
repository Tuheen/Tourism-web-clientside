import React from 'react';
import Grid from '@mui/material/Grid';
import img from '../../../../images/banner.jpg'
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 700,
}

const Banner = () => {
    return (
        <Container sx={{backgroundColor: '#ffebee', flexGrow: 1, mt: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: 'left'}} >
                    <Box>
                        <Typography variant="h3" style={{color: '#f44336'}}>
                            Explore Tourism <br /> Worldwide
                        </Typography>
                        <Typography variant= "h6" sx={{ my: 3, fonstSize: 13, color: '#e57373', fontWeight: 300}}>
                            Explore Our Trendy Collection to Match Your Lifestyle
                            <br /> Today
                        </Typography>
                        
                            <Link style={{textDecoration: 'none'}} to="/explore">
                                <Button variant="contained" sx={{backgroundColor: '#ff1744', color:'#ff8a80', my: 4}} >Check Packages</Button>
                            </Link>
                        
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6} >
                    <img style={{ width: '85%', height: '85%'}} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;