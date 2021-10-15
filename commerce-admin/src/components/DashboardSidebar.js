import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  MessageSquare as MessageIcon
} from 'react-feather';
import { enableChatMode, disabledChatMode } from '../actions/chatAction';

import CustomerItem from './customer/CustomerItem';
import { p1, p2, p3, p4 } from '../img';
import NavItem from './NavItem';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith'
// };

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/app/support',
    icon: MessageIcon,
    title: 'Support'
  }
];

const clientProfile = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john23@gmail.com',
    profilePic: p1
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane90@gmail.com',
    profilePic: p2
  },
  {
    id: 3,
    name: 'Mike Doe',
    email: 'mik45@gmail.com',
    profilePic: p3
  },
  {
    id: 4,
    name: 'Jake Doe',
    email: 'jake23@gmail.com',
    profilePic: p4
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const isChatting = useSelector((state) => state.chat.isChatting);
  const currentProfile = useSelector(
    (state) => state.currentUser.currentUserData
  );

  useEffect(() => {
    console.log(currentProfile?.currentUserData);
  }, [currentProfile]);

  const dispatch = useDispatch();

  // Function to change the chatting state by checking pathname
  const changeChatState = () => {
    const currentPath = location.pathname.split('/')[2];
    if (currentPath === 'support') {
      dispatch(enableChatMode());
    }
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    changeChatState();

    // Disable the chat model on unmount
    return () => {
      dispatch(disabledChatMode());
    };
  }, [location.pathname, isChatting]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={currentProfile?.profilePic || p2}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {currentProfile?.name || ''}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {currentProfile?.email || ''}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        {isChatting ? (
          <List>
            {clientProfile.map((userRoom) => (
              <CustomerItem key={userRoom.id} userRoom={userRoom} />
            ))}
          </List>
        ) : (
          <List>
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </List>
        )}
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
