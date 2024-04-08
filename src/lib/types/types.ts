import { z } from 'zod';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserList {
  pageParams: number[];
  pages: [
    {
      data: User[];
    }
  ];
}

export interface UserResources {
  name: string;
  year: string;
  color: string;
  pantone_value: string;
}

export const schema = z
  .object({
    firstName: z.string().min(1, { message: 'First Name required' }),
    lastName: z.string().min(1, { message: 'Last Name required' }),
    email: z.string().email()
  })
  .required();

export type FormFields = z.infer<typeof schema>;
