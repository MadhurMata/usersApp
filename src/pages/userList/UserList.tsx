import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { List, Typography } from '@mui/material';
import useFetchUsers from './hooks/useFetchUsers';
import { User } from 'src/lib/types/types';
import UserCard from 'src/components/userCard/UserCard';
import Loader from 'src/components/loader/Loader';

const UserList = (): React.ReactElement => {
  const { ref, inView } = useInView();
  const { data, status, error, fetchNextPage, isFetchingNextPage } = useFetchUsers();
  const users = data?.pages?.map((users) => users.data).flat();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      {status === 'pending' ? (
        <Loader />
      ) : status === 'error' ? (
        <Typography>Error: {error.message}</Typography>
      ) : (
        <List>
          {!!users?.length &&
            users.map((user: User) => <UserCard ref={ref} user={user} key={user.id} />)}
          {isFetchingNextPage && <p>Loading more users...</p>}
        </List>
      )}
    </>
  );
};

export default UserList;
