import React from 'react';
import { Modal, Typography, Box, TextField, MenuItem } from '@material-ui/core';

const AddProductModal = () => {
  const productCat = [
    {
      id: 1,
      title: 'Smartphones'
    },
    {
      id: 2,
      title: 'Home appliances'
    },
    {
      id: 3,
      title: 'Laptops'
    }
  ];
  return (
    <Modal sx={{ m: 10 }}>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          p: 5,
          borderRadius: 5,
          width: '100%'
        }}
      >
        <Typography variant="h2">Add a product</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField label="Product Name" variant="standard" />
          <TextField select label="Product Category" variant="standard">
            {productCat?.map((cat) => (
              <MenuItem key={cat.id}>{cat.title}</MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
