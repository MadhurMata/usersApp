import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <CircularProgress size={80} thickness={4} color="primary" />
    </Box>
  );
};

export default Loader;
