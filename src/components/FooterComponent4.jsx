import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const FooterComponent3 = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 1,
      color: 'white', // Ensure text is visible
    }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        My Account
      </Typography>

      {/* Links in a column */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Profile</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>My Collections</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Create Item</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Settings</Link>
      </Box>
    </Box>
  );
};

export default FooterComponent3;
