import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import BorderRightIcon from '@mui/icons-material/BorderRight';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const FooterComponent2 = () => {
  const theme = useTheme();

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
        {[BorderOuterIcon, BorderRightIcon,BorderInnerIcon, BorderTopIcon, BorderAllIcon].map((IconComponent, index) => (
          <Link key={index} href="https://www.palomar.edu/math/wp-content/uploads/sites/134/2017/09/Dimension-Theory.pdf" sx={{ margin: '0 8px', display: 'flex' }}>
            <IconComponent sx={{ 
              fontSize: {
                xs: '2rem', 
                sm: '3rem', 
                md: '4rem', 
              } 
            }} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default FooterComponent2;
