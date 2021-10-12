// import { LinksOfProducts } from '@components/home/Linksofproducts/LinksOfProducts';
import laptop1 from './public/assets/img/laptop1.png'
import laptop2 from './public/assets/img/laptop2.png'
import mobile2 from './public/assets/img/mobile2.png'
import mobile1 from './public/assets/img/mobile1.png'
// import mobile from './public/assets/img/mobile1.png'
import iphone from './public/assets/img/iphone.png'
import p1 from './public/assets/profile/p1.jpg'
import p2 from './public/assets/profile/p2.jpg'
import p3 from './public/assets/profile/p3.jpg'

export const flips = {
  links: [
    { link: 'Installment', icon: 'payments' },
    { link: '30-day money-back guarantee', icon: 'date_range' },
    { link: '1-year-warranty', icon: 'add_business' },
    { link: 'Free standard shipping', icon: 'local_shipping' },
  ],
  main: {
    category: 'Phone',
    phone: 'Xiaomi Redmi',

    slinks: ['Redmi Y2', 'Redmi Y3', 'Redmi UX', 'Redmi Ultra', 'Redmi MaxPro'],
  },
}

// Main Product
const mproduct1: MProduct = {
  id: '345',
  name: 'iPhone 11 64GB -Black',
  // support_sims: '(GSM & CDMA)',
  totalReview: '5k',
  qna: '22k',
  priceoff: '$19.99',
  rating: '2',
  inStock: true,
  works_with: '',
  price: 899,
  // price: '$428.99',
  quantity: 5,
  ram: 4,
  storage: 64,
  color: 'blazing red',
  dis: '28%',
  modelno: 'C-458',
  warranty: '12 Months',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  cond: 'conition fair',
  details: 'This is best products',
  img: iphone,
  relatedProducts: [
    {
      id: '78',
    },
    {
      id: '778',
    },
  ],
  linksOfProducts: flips,
  comments: {
    reviews: 'Average of 1,138 reviews from the past 6 months',
    customers: {
      id: '89021',
      name: " That's according to Sai krishna V.",
      msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora"',
    },
  },
  tags: ['iphone', 'apple', 'phone'],
}
const mproduct2: MProduct = {
  id: '899',
  totalReview: '25k',
  qna: '1.2k',
  name: 'ASUS Laptop',
  // support_sims: '(GSM & CDMA)',
  priceoff: '$0.99',
  rating: '3.6',
  works_with: '',
  price: 1899,
  dis: '15%',
  warranty: '12 Months',
  inStock: true,
  color: 'black',
  quantity: 5,
  ram: 8,
  storage: 640,
  modelno: 'C-458',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  cond: 'conition fair',
  details: 'This is best products',
  img: laptop2,
  relatedProducts: [
    {
      id: '78',
    },
    {
      id: '778',
    },
  ],
  linksOfProducts: flips,
  comments: {
    reviews: 'Average of 1,138 reviews from the past 6 months',
    customers: {
      id: '89021',
      name: " That's according to Sai krishna V.",
      msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora"',
    },
  },
  tags: ['asus', 'asus laptops', 'laptop'],
}
const mproduct3: MProduct = {
  id: '1200',
  name: 'Iphone',
  support_sims: '(GSM & CDMA)',
  works_with: '',
  rating: '4.9',
  totalReview: '5.8k',
  qna: '18k',
  price: 899,
  inStock: true,
  priceoff: '$2.99',
  dis: '15%',
  quantity: 5,
  color: 'blazing red',
  warranty: '12 Months',
  ram: 4,
  storage: 64,
  modelno: 'C-458',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  cond: 'conition fair',
  details: 'This is best products',
  img: mobile1,
  relatedProducts: [
    {
      id: '78',
    },
    {
      id: '778',
    },
  ],
  linksOfProducts: flips,
  comments: {
    reviews: 'Average of 1,138 reviews from the past 6 months',
    customers: {
      id: '89021',
      name: " That's according to Sai krishna V.",
      msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora"',
    },
  },
  tags: ['iphone', 'apple', 'phone'],
}

const mproduct4: MProduct = {
  id: '750',
  priceoff: '$9.99',
  rating: '2.3',
  totalReview: '7.9k',
  qna: '0.32k',
  name: 'Samsung',
  quantity: 5,
  support_sims: '(GSM & CDMA)',
  works_with: '',
  inStock: true,
  color: 'blazing red',
  price: 560,
  storage: 64,
  ram: 4,
  dis: '15%',
  warranty: '12 Months',
  modelno: 'C-458',
  cond: 'conition fair',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  details: 'This is best products',
  img: mobile2,
  relatedProducts: [
    {
      id: '78',
    },
    {
      id: '778',
    },
  ],
  linksOfProducts: flips,
  comments: {
    reviews: 'Average of 1,138 reviews from the past 6 months',
    customers: {
      id: '89021',
      name: " That's according to Sai krishna V.",
      msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora"',
    },
  },
  tags: ['samsung', 'phone'],
}

const productsX = [
  {
    flash_sale: 'Flash sale',
    img: laptop1,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: iphone,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop1,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: iphone,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: iphone,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop2,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: iphone,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
]

export type Main = { phone: string; category: string; slinks: string[] }

export type FirstLink = { link: string; icon: string }
export type LinksAndMain = {
  links: FirstLink[]

  main: Main
}

// export const dataOfProducts: Big = {
//   id: 112,
//   relatedProducts: productsX,
//   linksOfProducts: flips,
//   main: mproduct1,
//   comments: {
//     reviews: 'Average of 1,138 reviews from the past 6 months',
//     customers: {
//       name: " That's according to Sai krishna V.",
//       msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
//     },
//   },
// }

export interface Customer {
  id: string
  name: string
}

export interface CustomerMsg extends Customer {
  msg: string
}

export interface RelatedProduct {
  id: string
}

export interface UserComments {
  reviews: string
  customers: CustomerMsg
}

export type Big = {
  id: number
  relatedProducts: RelatedProduct[]
  linksOfProducts: LinksAndMain
  main: MProduct
  comments: UserComments
}
// export type Big = {
//   id: number
//   relatedProducts: RelatedProduct[]
//   linksOfProducts: LinksAndMain
//   main: MProduct
//   comments: {
//     reviews: string
//     customers: { name: string; msg: string }
//   }
// }

export interface MProduct {
  id: string
  totalReview?: string
  qna?: string
  rating: string
  name: string
  inStock: boolean
  quantity: number
  color: string
  ram: number
  storage: number
  modelno: string
  // path: string
  support_sims?: string
  works_with: string
  price: number
  dis: string
  warranty: string
  cond: string
  details: string
  priceoff: string
  img: StaticImageData
  description?: string
  relatedProducts: RelatedProduct[]
  linksOfProducts: LinksAndMain
  comments?: UserComments
  tags: string[]
  flashSale?: string

  // cartItem: CartProduct
}
// export interface MProduct {
//   totalReview?: string
//   qna?: string
//   rating: string
//   name: string
//   support_sims?: string
//   works_with: string
//   price: string
//   dis: string
//   warranty: string
//   cond: string
//   details: string
//   priceoff: string
//   img: StaticImageData
//   description?: string

//   cartItem: CartProduct
// }

// Custom cart item data
export interface CartProduct {
  id: string
  img: StaticImageData
  name: string
  inStock: boolean
  price: number
  quantity: number
  color: string
  ram: number
  storage: number
  modelno: string
}

export interface ProductState {
  cartItems: CartProduct[]
  loading: boolean
  totalCartPrice: number
}

export interface GlobalState {
  product: ProductState
  customers: Customer
}

// export const itemsOfProducts: Big[] = [
//   {
//     id: 111,
//     relatedProducts: productsX,
//     linksOfProducts: flips,
//     main: mproduct1,
//     comments: {
//       reviews: 'Average of 1,138 reviews from the past 6 months',
//       customers: {
//         name: " That's according to Sai krishna V.",
//         msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
//       },
//     },
//   },
//   {
//     id: 112,
//     relatedProducts: productsX,
//     linksOfProducts: flips,
//     main: mproduct2,
//     comments: {
//       reviews: 'Average of 1,138 reviews from the past 6 months',
//       customers: {
//         name: " That's according to Sai krishna V.",
//         msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
//       },
//     },
//   },
//   {
//     id: 113,
//     relatedProducts: productsX,
//     linksOfProducts: flips,
//     main: mproduct3,
//     comments: {
//       reviews: 'Average of 1,138 reviews from the past 6 months',
//       customers: {
//         name: " That's according to Sai krishna V.",
//         msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
//       },
//     },
//   },
//   {
//     id: 114,
//     relatedProducts: productsX,
//     linksOfProducts: flips,
//     main: mproduct4,
//     comments: {
//       reviews: 'Average of 1,138 reviews from the past 6 months',
//       customers: {
//         name: " That's according to Sai krishna V.",
//         msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
//       },
//     },
//   },
// ]

export const testimonials = [
  {
    id: 1,
    profilePic: p1,
    name: 'John Doe',
    review:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  },
  {
    id: 2,
    profilePic: p2,
    name: 'Jane Doe',
    review:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  },
  {
    id: 3,
    profilePic: p3,
    name: 'Brad Doe',
    review:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
  },
]

// Reviews

export const photos = [laptop1, mobile1, laptop2, iphone, mobile2]

export const reviews = [
  {
    img: p1,
    name: 'Manas',
    title: 'That is worst product!!',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae assumenda, perspiciatis quis explicabo itaque quod laboriosam, consequatur consequuntur cupiditate ipsam facere quidem earum ratione.',
    photos: photos,
  },
  {
    img: p1,
    name: 'Abhishek',
    title: 'That is worst product!!',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae assumenda, perspiciatis quis explicabo itaque quod laboriosam, consequatur consequuntur cupiditate ipsam facere quidem earum ratione.',
    photos: photos,
  },
  {
    img: p1,
    name: 'Sagar',
    title: 'That is worst product!!',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae assumenda, perspiciatis quis explicabo itaque quod laboriosam, consequatur consequuntur cupiditate ipsam facere quidem earum ratione.',
    photos: photos,
  },
  {
    img: p3,
    name: 'Dubey',
    title: 'That is worst product!!',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae assumenda, perspiciatis quis explicabo itaque quod laboriosam, consequatur consequuntur cupiditate ipsam facere quidem earum ratione.',
    photos: photos,
  },
  {
    img: p2,
    name: 'Himanshu',
    title: 'That is worst product!!',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae assumenda, perspiciatis quis explicabo itaque quod laboriosam, consequatur consequuntur cupiditate ipsam facere quidem earum ratione.',
    photos: photos,
  },
]
