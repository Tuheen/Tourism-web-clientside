import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#d50000' }}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Explore Globe
                </Typography>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/explore">
                    <Button color="inherit">Manage <br /> Packages</Button>
                </Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/manageAllOrders">
                    <Button color="inherit">Manage 
                   <br /> All Orders</Button>
                </Link>
                {
                    user?.email &&
                        <Box>
                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/myOrders">
                                <Button color="inherit">My Orders</Button>
                            </NavLink>
                        </Box>
                }
                {
                    user?.email ?
                        <Box>
                            <Button onClick={logout} color="inherit">Logout</Button>

                        </Box>

                        :
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
                            <Button color="inherit">Login</Button>
                        </NavLink>
                }
                </Toolbar>
            </AppBar>
    </Box>
    );
};

export default Navigation;