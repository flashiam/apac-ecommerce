import React from 'react';
// import  from 'react';

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
import { useDispatch } from 'react-redux';
import { p1 } from '../../img';
import { currentProfile } from '../../actions/cur_userAction';

const CustomerItem = ({ userRoom }) => {
  const { name, email, profilePic } = userRoom;

  const dispatch = useDispatch();

  const currentUser = (user) => {
    dispatch(currentProfile(user));
  };
  return (
    <>
      <ListItem
        alignItems="center"
        sx={{
          width: '100%',
          cursor: 'pointer',
          padding: '0.6rem 0.3rem'
        }}
        onClick={() => currentUser(userRoom)}
      >
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
