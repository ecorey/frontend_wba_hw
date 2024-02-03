import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import FooterColumn from './FooterColumn';
import FooterComponent1 from './FooterComponent1';
import FooterComponent2 from './FooterComponent2';
import FooterComponent3 from './FooterComponent3';
import FooterComponent4 from './FooterComponent4';
import FooterComponent5 from './FooterComponent5';
import FooterComponent6 from './FooterComponent6';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#111111',
        color: 'white',
        padding: 2,
      }}
    >
      {/* Grid for the upper part of the footer */}
      <Grid container spacing={0}>
        {/* First row with 2 cols */}
        <FooterColumn xs={6}>
          <FooterComponent1 />
        </FooterColumn>
        <FooterColumn xs={6}>
          <FooterComponent2 />
        </FooterColumn>

        {/* Second row with different width columns */}
        <FooterColumn xs={4.8}>
          <FooterComponent3 />
        </FooterColumn>
        <FooterColumn xs={2.4}>
          <FooterComponent4 />
        </FooterColumn>
        <FooterColumn xs={2.4}>
          <FooterComponent5 />
        </FooterColumn>
        <FooterColumn xs={2.4}>
          <FooterComponent6 />
        </FooterColumn>
      </Grid>

      {/* Separation Bar */}
      <Box sx={{ height: '1px', backgroundColor: 'dimgrey', marginTop: 8, marginBottom: 2 }} />

      {/* Bottom Row for Copyright and Legal Links */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ py: 8 }}>
        {/* Copyright on the Left */}
        <Grid item>
          <Typography variant="body2">
            © {year} | All Rights Reserved.
          </Typography>
        </Grid>

        {/* Legal Links on the Right */}
        <Grid item>
          <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontWeight: 'light', marginRight: 1 }}>Privacy Policy</Link>
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'light' }}>|</Typography>
            <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontWeight: 'light', marginLeft: 1 }}>Terms of Service</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
