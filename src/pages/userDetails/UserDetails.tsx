import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from '@mui/material';
import useGetUserResources from './hooks/useGetUserResources';
import Avatar from 'src/components/avatar/Avatar';
import Loader from 'src/components/loader/Loader';
import {
  UserInformationContainerStyles,
  containerStyles,
  labelStyles,
  listStyles,
  textTableStyles,
  userCardStyles
} from './UserDetails.style';

const UserDetails = (): React.ReactElement => {
  const { state: user } = useLocation();
  const { isLoading, error, data: userResources } = useGetUserResources(user.id);

  return (
    <>
      <Box bgcolor={userResources?.color || 'secondary.dark'} sx={containerStyles}>
        <Box p="24px" sx={userCardStyles}>
          <Box>
            <Avatar imageUrl={user.avatar} alt="Profile Picture" width={150} height={150} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              {user.first_name + ' ' + user.last_name}
            </Typography>
            <Link href={`mailto:${user.email}`} underline="none">
              <Typography variant="subtitle1" fontWeight={700} color="textSecondary">
                {user.email}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box p="24px" sx={UserInformationContainerStyles}>
        <Box>
          <Typography variant="h4" mb={2}>
            {`${user.first_name} ${user.last_name}'s Information`}
          </Typography>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <Typography>Error: {error.message}</Typography>
            </Box>
          ) : (
            userResources && (
              <List sx={listStyles}>
                <ListItem>
                  <ListItemText
                    primary="Nickname:"
                    secondary={userResources.name}
                    primaryTypographyProps={labelStyles}
                    secondaryTypographyProps={textTableStyles}></ListItemText>
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Year:"
                    secondary={userResources.year}
                    primaryTypographyProps={labelStyles}
                    secondaryTypographyProps={textTableStyles}></ListItemText>
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Color:"
                    secondary={userResources.color}
                    primaryTypographyProps={labelStyles}
                    secondaryTypographyProps={textTableStyles}></ListItemText>
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Pantone:"
                    secondary={userResources.pantone_value}
                    primaryTypographyProps={labelStyles}
                    secondaryTypographyProps={textTableStyles}></ListItemText>
                </ListItem>
              </List>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default UserDetails;
