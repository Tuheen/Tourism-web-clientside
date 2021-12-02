import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import useAuth from '../../../../hooks/useAuth';

const Services = () => {
    const [packageSuccess, setPackageSuccess] = useState(false);
    const { user } = useAuth();
    const [products, setProducts] = useState([])

    useEffect( () => {
        const url =`https://serene-caverns-31345.herokuapp.com/storedProduct/homePage`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{backgroundColor: '#e57373', py: 3}}>
            <Typography sx={{ fontWeight: 600, my: 3, color: '#ef9a9a'}} variant="h2" component="div">
                Explore Tour <br /> Packages!
            </Typography>
            {packageSuccess && <Alert severity="success">Purchase Success</Alert>}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
            {
                products.map(product =><Service
                            key={product._id}
                            service={product}
                            setPackageSuccess={setPackageSuccess}
                        ></Service>)
            }
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;