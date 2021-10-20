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
import { Socket } from 'socket.io-client'

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
  email: string
  accessToken: string
  profilePic: StaticImageData | string
  provider: string
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
  delivered?: boolean
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

// Order item
export interface MyOrderedItem {
  id: string
  name: string
  price: string
  quantity: string
  delivered: boolean
  img: StaticImageData
  link?: string
}

export interface Address {
  id: string | number
  city: string
  state: string
  pincode: number
  houseno: string
  street: string
  landmark: string
}

export interface ProductState {
  cartItems: CartProduct[]
  loading: boolean
  totalCartPrice: number
}

export interface ChatState {
  socket: Socket
}

export interface CustomerState {
  customer: Customer | null
  loggedIn: boolean
  savedAddresses: Address[]
}

export interface GlobalState {
  product: ProductState
  customers: CustomerState
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
