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

const MyOrders = () => {
    const { user } = useAuth();
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
        const url =`http://localhost:5000/exploreAll?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/exploreAll/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('You sure want to delete?');
                const remaining = products.filter(row => row._id !== id);
                setProducts(remaining);
            }
        })

    }
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <Container>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Package <br />Name</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.displayName}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.packageName}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                            
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    );
};

export default MyOrders;