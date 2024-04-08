import { createTheme } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      light: grey[200]
    },
    secondary: {
      main: blue[500],
      light: blue[200]
    }
  }
});
