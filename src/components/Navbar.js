import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link as ListItemLink,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import companyLogo from '../assets/images/AllataLogo1.png';

const Navbar = ({ image }) => {
  return (
    <Grid container spacing={12} direction='row'>
      <AppBar>
        <Toolbar>
          <Grid item xs={1}>
            <img src={companyLogo} height='60px' width='60px' />
          </Grid>
          <Grid item xs={1}>
            <Typography variant='h3'>Allata</Typography>
          </Grid>

          <Grid item xs={1} align-content='flex-end'>
            <Typography>
              <Link
                component={ListItemLink}
                color='secondary'
                underline='none'
                to='/'
              >
                Home
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>
              <Link
                component={ListItemLink}
                color='secondary'
                underline='none'
                to='/about'
              >
                About
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
