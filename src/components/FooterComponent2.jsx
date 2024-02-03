import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import BorderRightIcon from '@mui/icons-material/BorderRight';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import BorderVerticalIcon from '@mui/icons-material/BorderVertical';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const FooterComponent2 = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 1,
      color: 'white', 
    }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Join the Community
      </Typography>

      {/* Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderOuterIcon sx={{ fontSize: '4rem' }} />
        </Link>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderRightIcon sx={{ fontSize: '4rem' }} />
        </Link>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderLeftIcon sx={{ fontSize: '4rem' }} />
        </Link>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderInnerIcon sx={{ fontSize: '4rem' }} />
        </Link>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderVerticalIcon sx={{ fontSize: '4rem' }} />
        </Link>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderTopIcon sx={{ fontSize: '4rem' }} />
        </Link>
        <Link href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px' }}>
          <BorderAllIcon sx={{ fontSize: '4rem' }} />
        </Link>
      </Box>
    </Box>
  );
};

export default FooterComponent2;
