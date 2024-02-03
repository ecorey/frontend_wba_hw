import React from 'react';
import { Grid } from '@mui/material';

const FooterColumn = ({ xs, children }) => {
  return (
    <Grid item xs={xs} sx={{ padding: 1, minHeight: '200px' }}> 
      {children} 
    </Grid>
  );
};

export default FooterColumn;
