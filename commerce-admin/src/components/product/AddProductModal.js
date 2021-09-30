import React from 'react';
import {
  Modal,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core';

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

  const currencies = [
    {
      id: 1,
      name: 'dollar',
      sign: '$'
    },
    {
      id: 2,
      name: 'rupee',
      sign: '₹'
    },
    {
      id: 3,
      name: 'euro',
      sign: '€'
    },
    {
      id: 4,
      name: 'yen',
      sign: '¥'
    }
  ];
  return (
    <Modal open sx={{ m: 10 }}>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          p: 5,
          borderRadius: 5,
          width: '100%'
        }}
      >
        <Typography variant="h2">Add a product</Typography>
        <Box
          sx={{
            display: 'grid',
            gridGap: '1.6rem',
            alignItems: 'center',
            mt: '1rem',
            gridTemplateColumns: 'repeat(2,1fr)'
          }}
        >
          <TextField label="Product Name" variant="standard" />
          <Select select label="Product Category" variant="standard">
            {productCat?.map((cat) => (
              <MenuItem key={cat.id} value={cat.title}>
                {cat.title}
              </MenuItem>
            ))}
          </Select>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Select select label="Product Category" variant="standard">
              {currencies?.map((cur) => (
                <MenuItem key={cur.id} value={cur.name}>
                  {cur.sign}
                </MenuItem>
              ))}
            </Select>
            <TextField label="Product Price" variant="standard" type="number" />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
