import React from 'react';
import { Grid } from '@mui/material';

const FooterColumn = ({ xs, children }) => { // Use children instead of content
  return (
    <Grid item xs={xs} sx={{ border: '1px solid white', padding: 1, minHeight: '200px' }}>
      {children} {/* Render children here */}
    </Grid>
  );
};

export default FooterColumn;
