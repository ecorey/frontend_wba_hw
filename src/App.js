// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from "./components/TopNav";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import Home from "./pages/home/index";
import Explore from "./pages/explore/explore";
import { theme } from './styles/theme'; 
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <TopNav />
          <Box component="main" flexGrow={1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </Box>
          <Footer /> 
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

