import { useLocation } from 'react-router-dom';
import { Box, Typography, Toolbar, AppBar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from 'src/components/iconButton/IconButton';

const Header = () => {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
        <Toolbar>
          {location.pathname === '/' ? null : (
            <IconButton srcUrl="/" label="Back">
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
            Users App
          </Typography>
          {location.pathname === '/' && (
            <IconButton srcUrl="/userCreation" label="Add User">
              <PersonAddIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
