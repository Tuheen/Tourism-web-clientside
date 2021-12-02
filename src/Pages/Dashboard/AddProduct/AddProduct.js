import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import { useState } from 'react';
import { Typography } from '@mui/material';
import Navigation from '../../Shared/Header/Navigation/Navigation';

const AddProduct = () => {
    const [purchaseInfo, setPurchaseInfo] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        purchaseInfo[field] = value;
        // console.log(purchaseInfo);
        setPurchaseInfo(purchaseInfo);
    }

    const handlePurchaseSubmit = e => {
        const addingProduct = {
            ...purchaseInfo
        }
        fetch('https://serene-caverns-31345.herokuapp.com/storedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addingProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <Typography variant="h4" sx={{ mb: 3, mt: 5,color: '#ef5350'}}>Create A Package</Typography>
            <Container>
                <form onSubmit={handlePurchaseSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="packageName"
                        onBlur={handleOnBlur}
                        defaultValue="Package Name"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="description"
                        onBlur={handleOnBlur}
                        defaultValue="Package Description"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="url"
                        onBlur={handleOnBlur}
                        defaultValue="Image URL"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="Price"
                        onBlur={handleOnBlur}
                        defaultValue="Package Price"
                        size="small"
                    />
                    <Button sx={{backgroundColor: '#ff1744'}} type= "submit" variant="contained">Create A Package</Button>
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;