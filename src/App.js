// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    // Add other customization options here
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>
            PREDICTRIX
          </p>
          <Button variant="contained" color="primary">
            Click Here
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
