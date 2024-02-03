import React from 'react';
import { Grid, Typography } from '@mui/material';

const FooterColumn = ({ xs, content }) => { 
  return (
    <Grid item xs={xs} sx={{ border: '1px solid white', padding: 1, minHeight: '200px' }}>
      <Typography variant="body1">{content}</Typography>
      {/* You can add more content or structure here as needed */}
    </Grid>
  );
};

export default FooterColumn;
