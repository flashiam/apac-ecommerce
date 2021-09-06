// const phones = [
//   {
//     id: 1,
//     name: "phone_1",
//     ram: "4gb",
//     storage: "256gb",
//   },
//   {
//     id: 2,
//     name: "phone_2",
//     ram: "6gb",
//     storage: "512gb",
//   },
//   {
//     id: 3,
//     name: "phone_3",
//     ram: "4gb",
//     storage: "512gb",
//   },
//   {
//     id: 4,
//     name: "phone_4",
//     ram: "6gb",
//     storage: "1tb",
//   },
//   {
//     id: 5,
//     name: "phone_5",
//     ram: "8gb",
//     storage: "1tb",
//   },
// ];

// const filterProducts = condition => {
//   const filtered = phones.filter(
//     phone => phone[condition.feature] === condition.value
//   );
//   return filtered;
// };

// console.log(filterProducts({ feature: "ram", value: "6gb" }));


// Ram
//  4gb 6gb 8gb
// Storage
//  256gb 512gb 900gb

const phones = [
  {
    id: 1,
    name: "Redmi Y2",
    ram: "4gb",
    storage: "256gb",
  },
  {
    id: 11,
    name: "Redmi Y2",
    ram: "32gb",
    storage: "256gb",
  },
  {
    id: 2,
    name: "Samsung galaxy",
    ram: "6gb",
    storage: "256gb",
  },
  {
    id: 3,
    name: "Redmi 5xd",
    ram: "8gb",
    storage: "512gb",
  },
  {
    id: 4,
    name: "Realme c3",
    ram: "6gb",
    storage: "900gb",
  },
  {
    id: 5,
    name: "Oneplus 6T",
    ram: "4gb",
    storage: "256gb",
  },
];

const condition = [
  {
    category: "ram",
    values: "4gb",
  },
  {
    category: "ram",
    values: "6gb",
  },
  {
    category: "ram",
    values: "32gb",
  },
  {
    category: "ram",
    values: "8gb",
  },
];
// console.time("T");
// const rar = ["4gb", "6gb", "4gb", "8gb", "12gb", "12gb", "32gb"].filter(ram =>
//   condition.some(con => con.values === ram)
// );
// console.log(rar);
// console.log(performance.now());

// console.log(check);
// false

const filterProducts = condition => {
  const filteredProducts = [];
  const altPhones = phones.filter(phone =>
    condition.some(con => con.values === phone[con.category])
  );
  console.log(altPhones.filter(phone => phone.storage === '512gb'));
};

filterProducts(condition)