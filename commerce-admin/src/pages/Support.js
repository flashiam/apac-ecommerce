import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Container,
  Button,
  TextField,
  IconButton,
  Typography
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ChevronLeft, MessageSquare, Paperclip, Send } from 'react-feather';
import PropTypes from 'prop-types';
import socketClient from 'socket.io-client';

const url = 'http://localhost:8000';

const Message = ({ msgDetails, socket }) => {
  const { id, msg } = msgDetails;

  const adminMsgStyle = {
    right: 0,
    p: 2,
    borderRadius: 2,
    backgroundColor: 'primary.main',
    display: 'inline-block',
    maxWidth: '50%',
    color: 'background.paper'
  };

  const customerMsgStyle = {
    left: 0,
    p: 2,
    borderRadius: 2,
    backgroundColor: 'background.paper',
    display: 'inline-block'
  };

  // Function to check user
  // const isAdmin = () => id?.slice(id.length - 2, id.length) === 'ad';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: id === socket?.id ? 'flex-end' : 'flex-start',
        pb: 1
      }}
    >
      <Box sx={id === socket?.id ? adminMsgStyle : customerMsgStyle}>
        <p>{msg}</p>
      </Box>
      <Typography sx={{ fontSize: '0.6rem', color: '#333' }}>12:23</Typography>
    </Box>
  );
};

const Support = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [socket, setSocket] = useState({});
  const dummyDiv = useRef(null);
  // let supportChats = [];

  // Function to auto scroll when new message arrives
  const moveScroll = () => {
    dummyDiv.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to send message to customer
  const onMessageSend = (name, msg) => {
    if (msg === '') {
      alert('Type something first!!');
    } else if (message && socket) {
      const adminMsg = {
        id: socket?.id,
        name,
        msg
      };
      console.log(socket);
      socket?.emit('user-msg', adminMsg);
      setMessage('');
    } else {
      console.log(socket);
    }
  };

  // Function to set chats
  const fetchChats = (chatMsg) => {
    setChats((prevMsg) => [...prevMsg, chatMsg]);
    moveScroll();
  };

  useEffect(() => {
    // Connecting to socket instance
    const newSocket = socketClient(url);
    setSocket(newSocket);
    // Checking network logs
    newSocket.on('connect', () => console.log('Connected to server'));
    newSocket.on('error', (reason) => console.log(reason));
    newSocket.on('connect_failed', (reason) => console.log(reason));
    newSocket.on('server-msg', (res) => fetchChats(res));

    // Disconnecting from socket instance
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Apac-Admin | Support</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          position: 'relative',
          pt: 3,
          mx: 3,
          pb: '4rem'
        }}
      >
        <Container maxWidth="lg">
          <Button variant="text">
            <ChevronLeft />
            Back
          </Button>
          {/* Chat messages */}
          <Box sx={{ mt: 2 }}>
            {chats?.map((chat) => (
              <Message key={chat?.socketid} msgDetails={chat} socket={socket} />
            ))}
            {/* Dummy div to be shown when new message arrives (auto scroll feature) */}
            <div ref={dummyDiv} style={{ height: '2rem' }} />
          </Box>
          {/* Bottom message input */}
          <Box
            sx={{
              position: 'fixed',
              bottom: 0,
              // left: '10%',
              right: 0,
              width: '84%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              backgroundColor: 'background.paper'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '80%'
              }}
            >
              <MessageSquare />
              <TextField
                sx={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  ml: 2
                }}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={(e) =>
                  e.key === 'Enter' && onMessageSend('John Doe', message)
                }
                value={message}
                variant="outlined"
                placeholder="Type your queries here"
              />
            </Box>
            <Box>
              <IconButton
                onClick={() => onMessageSend('John Doe', message)}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.paper',
                  mr: '1rem'
                }}
                color="primary"
              >
                <Send />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.paper'
                }}
                color="primary"
              >
                <Paperclip />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Message.propTypes = {
  msgDetails: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired
};
export default Support;
