import React from 'react';
import {
  Box,
  Container,
  Button,
  TextField,
  IconButton
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ChevronLeft, MessageSquare, Paperclip } from 'react-feather';
import PropTypes from 'prop-types';

const Message = ({ msgDetails }) => {
  const { type: userType, msg } = msgDetails;

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

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: userType === 'admin' ? 'flex-end' : 'flex-start',
        pb: 1
      }}
    >
      <Box sx={userType === 'admin' ? adminMsgStyle : customerMsgStyle}>
        <p>{msg}</p>
      </Box>
    </Box>
  );
};

const Support = () => (
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
          {[
            { id: 1, type: 'user', msg: 'Worst Product ever' },
            { id: 2, type: 'admin', msg: 'Sorry for inconvinience sir' },
            { id: 3, type: 'admin', msg: 'We r working on it' },
            { id: 4, type: 'user', msg: 'Please refund me back' }
          ].map((msg) => (
            <Message key={msg.id} msgDetails={msg} />
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
              variant="outlined"
              placeholder="Type your queries here"
            />
          </Box>
          <IconButton
            sx={{ backgroundColor: 'primary.main', color: 'background.paper' }}
            color="primary"
          >
            <Paperclip />
          </IconButton>
        </Box>
      </Container>
    </Box>
  </>
);

Message.propTypes = {
  msgDetails: PropTypes.string.isRequired
};
export default Support;
