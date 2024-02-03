import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const FooterComponent1 = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 1,
      color: 'white', // Ensure text is visible against the black background
    }}>
      <Typography variant="h6" sx={{ marginBottom: 1, color: 'white' }}>
        Stay in the loop
      </Typography>

      <TextField
        label="Email Address"
        variant="outlined"
        size="small"
        sx={{ 
          width: '100%', 
          '.MuiInputLabel-root': { color: 'gray' }, 
          '.MuiOutlinedInput-root': { color: 'white', borderColor: 'white' }, 
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
          '& .MuiOutlinedInput-input': {
            color: 'white', 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray', 
          }
        }}
      />
    </Box>
  );
};

export default FooterComponent1;
