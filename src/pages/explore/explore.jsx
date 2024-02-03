import { Grid, Stack, Box } from "@mui/material";
import { CustomButton } from "../../components/Button";

export default function Explore() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Stack direction="column" spacing={2} alignItems="center">
            
            <CustomButton variant="contained" color="primary">
              EXPLORE
            </CustomButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
