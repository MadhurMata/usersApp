import { UseInfiniteQueryResult, useInfiniteQuery } from '@tanstack/react-query';
import { API_URL } from 'src/lib/constants/constants';
import { UserList } from 'src/lib/types/types';

const useFetchUsers = (): UseInfiniteQueryResult<UserList> => {
  const fetchUsers = async (pageParam: number) => {
    const res = await fetch(`${API_URL}users?page=${pageParam}`);
    return res.json();
  };

  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam }) => fetchUsers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // Check if there are more pages available based on the `total_pages` property
      if (lastPage.data && lastPage.total_pages) {
        return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
      }
      return undefined;
    }
  });
};

export default useFetchUsers;
