import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from 'src/components/header/Header';
import Loader from 'src/components/loader/Loader';

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'primary.light', minHeight: '100vh' }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default Layout;
