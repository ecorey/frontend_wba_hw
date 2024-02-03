import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const FooterComponent6 = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 1,
      color: 'white', // Ensure text is visible
    }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
       Company
      </Typography>

      {/* Links in a column */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>About</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Carrers</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Blog</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Contact Us</Link>
      </Box>
    </Box>
  );
};

export default FooterComponent6;
