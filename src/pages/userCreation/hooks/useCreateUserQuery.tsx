import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { API_URL } from 'src/lib/constants/constants';
import { FormFields } from 'src/lib/types/types';

const useCreateUserQuery = ({
  formFields
}: {
  formFields?: FormFields;
} = {}): UseMutationResult<Response, Error, unknown, unknown> => {
  const createUser = async () =>
    await fetch(`${API_URL}users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formFields)
    });

  return useMutation({
    mutationFn: createUser
  });
};

export default useCreateUserQuery;
