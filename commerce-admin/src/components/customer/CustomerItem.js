import React from 'react';
import {
  Avatar,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
  Box
} from '@material-ui/core';
// import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { p1 } from '../../img';

const CustomerItem = ({ userRoom }) => {
  const { name, email, profilePic } = userRoom;
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ padding: '0.6rem 0.3rem' }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={profilePic || p1} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {name}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem' }}>{email}</Typography>
            </Box>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  );
};

CustomerItem.propTypes = {
  userRoom: PropTypes.object.isRequired
};

export default CustomerItem;
//   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
