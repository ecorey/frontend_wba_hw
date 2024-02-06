import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      dark: '#5E35B1',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "'Kanit', sans-serif",
      color: "#FFFFFF",
    },
    h6: {
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 'bold',
    },
    body1: {
      color: "#969696",
    },
    body2: {
      color: "#969696",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#111111",
        },
        html: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedPrimary: {
          color: "#FFFFFF",
          background: "linear-gradient(90deg, #FCB808 0%, #F9075E 100%)",
          '&:hover': {
            backgroundColor: green[500],
          }, 
        }, 
      }, 
    }, 
  }, 
}); 
