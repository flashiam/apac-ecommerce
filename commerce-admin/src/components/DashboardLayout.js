import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getChatRequest } from '../actions/notificationAction';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import socket from '../utils/connectSocket';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const DashboardLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256
  }
}));

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const notifs = useSelector(({ notification }) => notification.notifications);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  // Function to emit the client loading state for chat
  const showSupportLoading = (notifications, socketid) => {
    // Loop from notification and show the loading state
    notifications.forEach((notif) => {
      socketid.emit('client-waiting', true, notif.id);
    });
  };

  useEffect(() => {
    console.log(socket);
    if (notifs.length > 0) showSupportLoading(notifs, socket);
    // socket.on('to-admin', (res) => console.log(res));
    dispatch(getChatRequest(socket));
  }, [dispatch, notifs]);

  return (
    <DashboardLayoutRoot>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
