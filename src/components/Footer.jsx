import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
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
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#111111',
        color: 'white',
        padding: 2,
      }}
    >
      {/* Grid for the upper 80% of the footer */}
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

      
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          paddingTop: 2,
        }}
      >
        © {year} Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
