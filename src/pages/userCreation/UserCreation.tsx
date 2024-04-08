import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField, Typography, Box } from '@mui/material';
import useCreateUserQuery from './hooks/useCreateUserQuery';
import Modal from 'src/components/modal/Modal';
import { FormFields, schema } from 'src/lib/types/types';
import { formStyles } from './UserCreation.style';

const UserCreation = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: createUser, error, isSuccess } = useCreateUserQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (formFields: FormFields) => {
    createUser({ formFields });
  };

  useEffect(() => {
    if (error || isSuccess) {
      isSuccess && reset();
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }
  }, [error, isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={formStyles}>
        <TextField
          {...register('firstName')}
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName?.message || ''}
        />
        <TextField
          {...register('lastName')}
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName?.message || ''}
        />
        <TextField
          {...register('email')}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message || ''}
        />
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create User'}
        </Button>
        {error && (
          <Modal
            isOpen={isOpen}
            modalTitle="Error"
            color="error.main"
            modalContent={<Typography color="secondary.dark">Error creating user</Typography>}
            onHandleClose={() => setIsOpen(false)}
          />
        )}
        {isSuccess && (
          <Modal
            isOpen={isOpen}
            modalTitle="Success"
            color="success.main"
            modalContent={<Typography color="secondary.dark">User created successfully</Typography>}
            onHandleClose={() => setIsOpen(false)}
          />
        )}
      </Box>
    </form>
  );
};

export default UserCreation;
