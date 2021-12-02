import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import PurchaseModal from './../../../Explore/PurchaseModal/PurchaseModal';

const Service = ({service, setPackageSuccess}) => {
    const { description, url, Price, packageName } = service;
    const [openPackage, setPackageOpen] = React.useState(false);
    const handlePurchaseOpen = () => setPackageOpen(true);
    const handlePurchaseClose = () => setPackageOpen(false);

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        image={url}
                        alt="Apartment Image"
                    />
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 200, my: 2, color: '#ef5350'}} component="div">
                            {packageName}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 400, color: '#ffcdd2'}}>
                            {description}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, my: 1, color: '#ef9a9a'}} component="div">
                            {Price} USD
                        </Typography>
                    </CardContent>
                    <Button onClick={handlePurchaseOpen} sx={{my: 2, backgroundColor: '#ef9a9a'}} variant="contained">Get the Package</Button>
                </Card>
            </Grid>
            <PurchaseModal
                service={service}
                openPurchase={openPackage}
                handlePurchaseClose={handlePurchaseClose}
                setPackageSuccess={setPackageSuccess}
        ></PurchaseModal>
    </>
    );
};

export default Service;