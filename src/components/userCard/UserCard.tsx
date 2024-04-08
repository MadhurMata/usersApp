import React, { Ref, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, ListItemText, Card } from '@mui/material';
import Avatar from 'src/components/avatar/Avatar';
import { User } from 'src/lib/types/types';

interface UserDetailsProps {
  user: User;
}

const UserCard = forwardRef(
  ({ user }: UserDetailsProps, ref: Ref<HTMLLIElement>): React.ReactElement => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/${user.first_name} ${user.last_name}/${user.id}`, { state: user });
    };

    return (
      <ListItem ref={ref} key={user.id} onClick={handleClick}>
        <Card
          sx={{
            p: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
          }}>
          <Avatar imageUrl={user.avatar} alt="Profile Picture" width={104} height={104} />
          <ListItemText primary={`${user.first_name} ${user.last_name}`} secondary={user.email} />
        </Card>
      </ListItem>
    );
  }
);

UserCard.displayName = 'UserCard';

export default UserCard;
