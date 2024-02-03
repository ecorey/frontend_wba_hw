import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        height={120}
      >
        <Grid item md={1} sx={{  justifyContent: 'flex-start', display: 'flex' }}>
          {/* <img src={logo} alt="logo" /> */}
        </Grid>
        <Grid item md={4} sx={{ borderRight: "2px solid #424242", justifyContent: 'flex-start', display: 'flex', paddingLeft: 0 }}>
          <div>PREDICTRIX</div>
        </Grid>
        <Grid item md={6}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center"
          >
            {/* Wrap text in Link components */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>Home</div>
            </Link>
            <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>Explore</div>
            </Link>
            
            <Button
              variant="contained"
              color="primary"
              disableElevation
              
            >
              Connect Wallet
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
