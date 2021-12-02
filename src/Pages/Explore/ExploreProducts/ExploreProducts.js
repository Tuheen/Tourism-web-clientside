import { Alert, Container, Grid, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import { Button } from '@mui/material';

const ExploreProducts = () => {
const [purchaseSuccess, setPurchaseSuccess] = useState(false);
const { user } = useAuth();
const [products, setProducts] = useState([])

useEffect( () => {
    const url=`http://localhost:5000/storedProduct`
    fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
}, [])
    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 3, mt: 5,color: '#ef5350'}}>Manage Packages</Typography>
            <Link to="/addProduct" style={{textDecoration: 'none'}}><Button style={{backgroundColor: '#ff1744', color: 'white'}}>Add Packages</Button></Link>

            {purchaseSuccess && <Alert severity="success">Purchase Success</Alert>}
                <Grid container spacing={2}>
                    <Product></Product>
                </Grid>
        </Container>
    );
};

export default ExploreProducts;