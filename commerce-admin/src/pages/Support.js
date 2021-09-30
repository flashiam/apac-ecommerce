import React, { useEffect, useState } from 'react';
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

const url = 'http://localhost:3030';
const socket = socketClient(url);

const Message = ({ msgDetails }) => {
  // const [admin, setAdmin] = useState(false);
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

  useEffect(() => {
    console.log(id?.slice(id.length - 1, id.length));
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: id === socket.id ? 'flex-end' : 'flex-start',
        pb: 1
      }}
    >
      <Box sx={id === socket.id ? adminMsgStyle : customerMsgStyle}>
        <p>{msg}</p>
      </Box>
      <Typography sx={{ fontSize: '0.6rem', color: '#333' }}>12:23</Typography>
    </Box>
  );
};

const Support = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  // let supportChats = [];

  // Function to send message to customer
  const onMessageSend = (name, msg) => {
    if (msg === '') {
      alert('Type something first!!');
    } else if (message) {
      const adminMsg = {
        id: socket.id,
        name,
        msg
      };
      console.log(socket);
      socket.emit('admin-msg', adminMsg);
      setMessage('');
    } else {
      console.log(socket);
    }
  };

  // Function to set chats
  const fetchChats = (chatMsg) => {
    setChats([...chats, chatMsg]);
  };

  useEffect(() => {
    socket.on('server-msg', (res) => fetchChats(res));
  }, [socket]);

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
          py: 3,
          mx: 3
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
              <Message key={chat.id} msgDetails={chat} />
            ))}
          </Box>
          {/* Bottom message input */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 2
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '80%' }}>
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
                  color: 'background.paper'
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
  msgDetails: PropTypes.object.isRequired
};
export default Support;
