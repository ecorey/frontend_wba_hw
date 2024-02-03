import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const FooterComponent5 = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 1,
      color: 'white', 
    }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
       Resources
      </Typography>

      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Help Center</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Partners</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Activity</Link>
        <Link href="https://www.maths.ed.ac.uk/~v1ranick/papers/seifthreng.pdf" sx={{ margin: '8px 0', color: 'white', textDecoration: 'none', fontWeight: 'normal', fontSize: '0.9rem' }}>Rating</Link>
      </Box>
    </Box>
  );
};

export default FooterComponent5;
