// src/App.js
import React from 'react';
import TopNav from "./components/TopNav";
import { CssBaseline, Box } from "@mui/material";
import Home from "./pages/home/index";



function App() {
  return (
    <>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <TopNav />
        <Box component="main" flexGrow={1}>
          <Home />
        </Box>
      </Box>
    </>
  );
}

export default App;
