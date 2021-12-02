import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';

const ManageOrders = () => {
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
        const url ='http://localhost:5000/storedProduct';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/storedProduct/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('You sure to delete this?');
                const remaining = products.filter(row => row._id !== id);
                setProducts(remaining);
            }
        })

    }
    return (
            <Container sx={{mt: 10}}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.packageName}
                            </TableCell>
                            <TableCell align="right">{row.Price}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                            
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>

    );
};

export default ManageOrders;