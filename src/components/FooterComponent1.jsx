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
          '.MuiInputLabel-root': { color: 'gray' }, // Label color
          '.MuiOutlinedInput-root': { color: 'white', borderColor: 'white' }, // Input text color
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Border hover color
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Border color when the input is focused
          },
          '& .MuiOutlinedInput-input': {
            color: 'white', // Input text color
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray', // Label color when the input is focused
          }
        }}
      />
    </Box>
  );
};

export default FooterComponent1;
