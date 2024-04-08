import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'src/components/layout/Layout';
import NotFound from 'src/pages/notFound/NotFound';

const UserList = lazy(() => import('src/pages/userList/UserList'));
const UserCreation = lazy(() => import('src/pages/userCreation/UserCreation'));
const UserDetails = lazy(() => import('src/pages/userDetails/UserDetails'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<UserList />} />
        <Route path="/userCreation" element={<UserCreation />} />
        <Route path="/:userName/:userId" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
