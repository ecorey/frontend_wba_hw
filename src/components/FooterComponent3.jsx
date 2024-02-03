import React from 'react';
import { Box, Typography } from '@mui/material';
import ScubaDivingSharpIcon from '@mui/icons-material/ScubaDivingSharp';

const FooterComponent3 = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 1,
      color: 'white', 
    }}>
      
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        <ScubaDivingSharpIcon sx={{ marginRight: 1 }} />
        <Typography variant="h6">
          X-Chain
        </Typography>
      </Box>

      
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
      </Typography>
    </Box>
  );
};

export default FooterComponent3;
