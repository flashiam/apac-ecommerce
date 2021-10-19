
const items = [
  {
    id: 1,
    name: 'Mix veg',
    price: 499,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Mix veg',
    price: 78,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Mix veg',
    price: 900,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Mix veg',
    price: 340,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Mix veg',
    price: 10000,
    quantity: 10,
  },
]

let quantity
  // Function to increase the quantity
  const increaseQuantity = () => {
    const itemQty = items[0].quantity + 1;
    let updatedPrice = 0;
    let curPrice = foodPrice;

    updatedPrice = curPrice * itemQty;

  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    let itemQty = quantity;
    let curPrice = foodPrice;

    if (itemQty === 1) {
      itemQty = 1;
    } else {
      itemQty = quantity - 1;
    }

    setQuantity(itemQty);

    if (weight > defaultWeight) {
      curPrice = calcPrice();
    } else {
      curPrice = foodPrice;
    }

    if (quantity === 1) {
      setPrice(curPrice);
      ctrlWeight(weight.toString());
    } else {
      setPrice(parseInt((price - curPrice).toFixed(2)));
    }
  };