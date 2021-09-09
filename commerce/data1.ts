// import { LinksOfProducts } from '@components/home/Linksofproducts/LinksOfProducts';
import laptop1 from './public/assets/img/laptop1.png'
import laptop2 from './public/assets/img/mobile2.png'
import laptop3 from './public/assets/img/mobile2.png'
import mobile from './public/assets/img/mobile1.png'

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
    img: laptop1,
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
    img: laptop3,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop3,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop3,
    warranty: '12 Months',
    price: '$56.99',
    name: 'Bose SoundSport Earbud Bluetooth',
  },
  {
    flash_sale: 'Flash sale',
    img: laptop3,
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
]

const flips = {
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

export type StartLinks = ObjLinks

export type Main = { phone: string; category: string; slinks: string[] }

export type FirstLink = { link: string; icon: string }[]
export type ObjLinks = {
  links: FirstLink

  main: Main
}

const mproduct = {
  name: 'iPhone 11 64GB -Black',
  support_sims: '(GSM & CDMA)',
  works_with: '',
  price: '$428.99',
  dis: '28%',
  warranty: '12 Months',
  cond: 'conition fair',
  details: 'This is best products',
  img: mobile,
}

export const dataOfProducts = {
  id: 123,
  relatedProducts: productsX,
  linksOfProducts: flips,
  main: mproduct,
  comments: {
    reviews: 'Average of 1,138 reviews from the past 6 months',
    customers: {
      name: " That's according to Sai krishna V.",
      msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
    },
  },
}

export type Big = {
  id: number
  relatedProducts: {
    flash_sale: string
    img: StaticImageData
    warranty: string
    price: string
    name: string
  }[]
  linksOfProducts: StartLinks
  main: MainProduct
  comments: {
    reviews: string
    customers: { name: string; msg: string }
  }
}

interface MainProduct {
  name: string
  support_sims: string
  works_with: string
  price: string
  dis: string
  warranty: string
  cond: string
  details: string
  img: StaticImageData
}
export const itemsOfProducts = [
  {
    id: 123,
    relatedProducts: productsX,
    linksOfProducts: flips,
    main: mproduct,
    comments: {
      reviews: 'Average of 1,138 reviews from the past 6 months',
      customers: {
        name: " That's according to Sai krishna V.",
        msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
      },
    },
  },
  {
    id: 456,
    relatedProducts: productsX,
    linksOfProducts: flips,
    main: mproduct,
    comments: {
      reviews: 'Average of 1,138 reviews from the past 6 months',
      customers: [
        {
          name: " That's according to Sai krishna V.",
          msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
        },
      ],
    },
  },
  {
    id: 111,
    relatedProducts: productsX,
    linksOfProducts: flips,
    main: mproduct,
    comments: {
      reviews: 'Average of 1,138 reviews from the past 6 months',
      customers: [
        {
          name: " That's according to Sai krishna V.",
          msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
        },
      ],
    },
  },
  {
    id: 222,
    relatedProducts: productsX,
    linksOfProducts: flips,
    main: mproduct,
    comments: {
      reviews: 'Average of 1,138 reviews from the past 6 months',
      customers: [
        {
          name: " That's according to Sai krishna V.",
          msg: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exmolestiae enim similique esse temporibus tempora" ',
        },
      ],
    },
  },
]
