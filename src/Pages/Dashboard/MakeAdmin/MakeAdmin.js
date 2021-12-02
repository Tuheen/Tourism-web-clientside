import React, { useState } from 'react';
import { Alert, TextField } from '@mui/material';
import { Button } from '@mui/material';

const MakeAdmin = () => {
    const [ email, setEmail ] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
            console.log(data);
            setEmail('');
            setSuccess(true);
        }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width: '50%'}}
            label="email"
            type="email"
            onBlur={handleOnBlur}
            id="standard-basic"
            variant="standard" />
<Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Succefully made an admin!</Alert>}
        </div>
    );
};

export default MakeAdmin;