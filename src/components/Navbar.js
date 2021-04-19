import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link as ListItemLink,
} from '@material-ui/core';
import companyLogo from '../assets/images/AllataLogo1.png';

const Navbar = ({ image }) => {
  return (
    <AppBar>
      <Toolbar>
        <img src={companyLogo} height='60px' width='60px' />
        <Box pl={4} pr={4}>
          <Typography variant='h3'>Allata</Typography>
        </Box>
        <Typography>
          <Link
            component={ListItemLink}
            color='secondary'
            underline='none'
            to='/'
          >
            Home
          </Link>

          <Link
            component={ListItemLink}
            color='secondary'
            underline='none'
            to='/about'
          >
            About
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
