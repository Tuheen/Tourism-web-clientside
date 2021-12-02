import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PurchaseModal = ({openPurchase, handlePurchaseClose, service, setPackageSuccess}) => {
    const {packageName, Price} = service;
    const {user} = useAuth();
    const initialInfo = {displayName: user.displayName, email: user.email, phone: ''}

    const [purchaseInfo,setPurchaseInfo] = useState(initialInfo);

    const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...purchaseInfo};
    newInfo[field] = value;
    setPurchaseInfo(newInfo);
    }

    const handleConfirmPurchase = e => {
        const exploreProduct ={
            ...purchaseInfo,
            Price,
            packageName
        }

            console.log(exploreProduct);
    fetch('https://serene-caverns-31345.herokuapp.com/explore', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(exploreProduct)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            setPackageSuccess(true);
            handlePurchaseClose();
        }
    })

        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openPurchase}
            onClose={handlePurchaseClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openPurchase}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                {packageName}
                </Typography>
                <form onSubmit={handleConfirmPurchase}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="package"
                        defaultValue={packageName}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="displayName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="address"
                        onBlur={handleOnBlur}
                        defaultValue="Your Address"
                        size="small"
                    />
                     <TextField
                        disabled
                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="orderStatus"
                        defaultValue="Pending Order"
                        size="small"
                    />
                    <Button type= "submit" sx={{backgroundColor: '#ef9a9a'}} variant="contained">Confirm</Button>
                </form>
            </Box>
            </Fade>
        </Modal>
    );
};

export default PurchaseModal;