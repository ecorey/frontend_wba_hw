import { Grid, Stack, Box } from "@mui/material";
import { CustomButton } from "../../components/Button";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '700px' }}> {/* Increase the minHeight as needed */}
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={12}>
          <Stack direction="column" spacing={2} alignItems="center">
            
            
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
