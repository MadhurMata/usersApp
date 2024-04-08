import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { API_URL } from 'src/lib/constants/constants';
import { UserResources } from 'src/lib/types/types';

const useGetUserResources = (userId: number): UseQueryResult<UserResources> => {
  const getUserUserResources = async (): Promise<UserResources> => {
    const response = await fetch(`${API_URL}unknown/${userId}`);
    return response.json().then((data) => data.data);
  };
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserUserResources
  });
};

export default useGetUserResources;
