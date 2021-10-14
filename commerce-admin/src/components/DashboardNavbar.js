import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Popover,
  List,
  ListItem,
  Divider,
  Button,
  Typography
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
// import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notificationNum, setNotificationNum] = useState(0);
  const renderNotification = useSelector(({ notification }) => notification);

  const { notifications } = renderNotification;

  // const [notifications] = useState([]);
  // const [open, setOpen] = useState(false);
  const [currentEl, setCurrentEl] = useState(null);

  // Function to set current element for the popover
  const accessCurrentEl = (e) => {
    setCurrentEl(e.currentTarget);
  };

  // Function to close popover
  const closePopover = () => {
    setCurrentEl(null);
  };

  const open = !!currentEl;

  const buttonStyle = {
    fontSize: '0.8rem',
    textTransform: 'capitalize',
    padding: '0.3rem 0.6rem',
    fontWeight: 'normal',
    width: '45%'
  };

  useEffect(() => {
    setNotificationNum(notifications.length);
  }, [notificationNum, notifications]);

  return (
    <>
      <AppBar elevation={0} {...rest}>
        <Toolbar>
          <RouterLink to="/">{/* <Logo /> */}</RouterLink>
          <Box sx={{ flexGrow: 1 }} />
          <Hidden xlDown>
            <IconButton color="inherit" size="large" onClick={accessCurrentEl}>
              <Badge badgeContent={notificationNum} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="hamcolor" size="large">
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton color="hamcolor" onClick={onMobileNavOpen} size="large">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* Popover for notification */}
      <Popover
        open={open}
        anchorEl={currentEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        // anchorPosition={{ top: 50, right: 50 }}
        sx={
          {
            // width: '25rem'
            // padding: '2rem',
            // background: 'red'
          }
        }
      >
        <Box
          sx={{
            padding: '1rem 0.3rem',
            width: '15rem'
          }}
        >
          {notifications.length > 0 ? (
            <List>
              {notifications.map((notification) => (
                <>
                  <ListItem
                    key={notification.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start'
                    }}
                  >
                    <Typography sx={{ fontSize: '1.1rem' }}>
                      {notification.notification.msg}
                    </Typography>
                    {notification.type === 'chat-request' && (
                      <Box
                        sx={{
                          marginTop: '0.6rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%'
                        }}
                      >
                        <Button variant="contained" sx={buttonStyle}>
                          Accept
                        </Button>
                        <Button variant="outlined" sx={buttonStyle}>
                          Reject
                        </Button>
                      </Box>
                    )}
                  </ListItem>
                  <Divider variant="fullWidth" component="li" />
                </>
              ))}
            </List>
          ) : (
            <Typography>No new notifications :( </Typography>
          )}
        </Box>
      </Popover>
    </>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
