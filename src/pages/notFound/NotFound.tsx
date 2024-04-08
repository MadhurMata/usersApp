import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Box } from '@mui/material';

const NotFound = (): React.ReactElement => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', paddingTop: '100px' }}>
      <Box my={4}>
        <Typography variant="h1" component="h1" gutterBottom>
          404 - Not Found
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          The page you are looking for might have been removed or does not exist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
