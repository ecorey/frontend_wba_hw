import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)(({ theme }) => ({
  
  border: `2px solid ${theme.palette.secondary.main}`, 
  
}));
