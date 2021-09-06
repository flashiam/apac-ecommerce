import ecommerceImg from '../public/assets/ecommerce_carousel_3.jpg'
import ecommerceImg2 from '../public/assets/ecommerce_carousel_2.jpg'
import ecommerceImg3 from '../public/assets/ecommerce_carousel.jpg'
import ecommerceImg4 from '../public/assets/ecommerce_carousel_4.jpg'
import commerce from '@lib/api/commerce'
import Link from 'next/link'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
import Carousel from '../components/ui/Carousel/Carousel'
import EspeciallyForU from '@components/ui/ProductCat/Especially/EspeciallyForU'
import AppCard from '../components/ui/AppCard/AppCard'
import Image from 'next/image'
import laptop from '../public/assets/img/laptop1.png'
import laptop2 from '../public/assets/img/laptop2.png'
import laptop3 from '../public/assets/img/laptop3.png'
import mobile1 from '../public/assets/img/mobile1.png'
import mobile2 from '../public/assets/img/mobile2.png'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import ProductCarousel from '../components/ui/Carousel/ProductCarousel'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import ProductMInfo from '@components/ui/ProductMarketInfo/ProductMInfo'
import ArrDotCarousel from '@components/ui/Carousel/ArrDotCarousel'
import LinksOfProducts from '@components/home/Linksofproducts/LinksOfProducts'
import HomeTemplate from '@components/home/Templates/HomeTemplate'
import QforProducts from '@components/home/Qforproducts/QforProducts'
import RdirectionLink from '@components/links_directions/Rdirection_link/RdirectionLink'
import { isNullOrUndefined } from 'util'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(products);

  const carousels = [
    {
      img: ecommerceImg,
      link: '/flash_sale',
    },
    {
      img: ecommerceImg2,
      link: '/flash_sale',
    },
    {
      img: ecommerceImg3,
      link: '/flash_sale',
    },
    {
      img: ecommerceImg4,
      link: '/flash_sale',
    },
  ]
  interface TypeDef {
    numi:number
  }
  const pLinks = [
    { link: 'mobile' },
    { link: 'screen saver' },
    { link: 'earphones' },
    { link: 'headphones' },
    { link: 'usb-cable' },
    { link: 'charger' },
    { link: 'covers' },
  ]
  return (
    <div className="container mx-auto">
      <Carousel carousels={carousels} />
      {/* Product showcase */}
      <div className="bg-gray-200 md:p-10 sm:p-8 p-6">
        <div className="my-6">
          <h2 className="font-semibold text-black">The heavy weights</h2>
          <p className="text-sm text-black-400">
            -Googled more often than Muhammad Ali.
          </p>
          {/* FOr Desktop */}
          <div className="md:grid-cols-6 gap-2 md:grid hidden">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <div
                key={num}
                className={`${i <= 1 ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <AppCard>
                  <div className="h-20 w-20 mx-auto">
                    <Image src={laptop} />
                  </div>
                  <div>
                    <h3 className="text-black text-sm font-semibold">
                      MacBook
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, vel. Voluptate, quisquam.
                    </p>
                  </div>
                </AppCard>
              </div>
            ))}
          </div>
        </div>

        {/* For Mobo */}
        <div className="block md:hidden">
          <ProductCarousel>
            {[1, 2, 3, 4].map((num, i) => (
              <div key={num} className="keen-slider__slide slide">
                <AppCard>
                  <div className="h-20 w-20">
                    <Image src={laptop} />
                  </div>
                  <h3 className="text-black text-md">MacBook</h3>
                </AppCard>
              </div>
            ))}
          </ProductCarousel>
        </div>
        {/* Welcome to back MArket  */}
        <div className="my-3">
          <h2 className="text-black font-semibold my-3 uppercase">
            Information About back Market
          </h2>
          <div className="p-8 bg-white border-2 border-gray-200 rounded-md gap-4">
            <ProductMInfo />
          </div>
        
          <RdirectionLink linkText="LEARN MORE ABOUT BACK MARKET"/>

        </div>

        {/* Especially for U */}
        <div className="my-8 hidden md:block">
          <h2 className="text-black font-semibold my-3">Especially for you</h2>
          <div className="md:grid-cols-4 gap-8 grid-cols-2 grid md:grid">
            {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
              <EspeciallyForU key={index}>
	      Hello World
              </EspeciallyForU>
            ))}
          </div>
          <RdirectionLink linkText="SEE OUR BEST DEALS"/>
        </div>

        {/* Other Categories */}
        <div className="my-8">
          <span className="text-black font-semibold inline-block my-3">
            Other Categories{' '}
            <span className="text-gray-400 text-sm">
              {' '}
              -Nothing lost, everything gained, and all refurbished.
            </span>
          </span>

          <div className="md:grid-cols-6 grid grid-cols-6 md:grid gap-2"> 
            {[1, 2, 3, 4, 5].map((num, i) => (
              <div
                key={num}
                className={`${i <= 1 ? 'md:col-span-3  col-span-3 ' : 'md:col-span-2 hidden'}`}
              >
                <AppCard>
                  <div className="w-20 h-30 mx-auto">
                    <Image src={mobile2} alt="product" />
                  </div>
                  <div>

                    <h3 className="text-black text-sm font-semibold">
                      MacBook
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, vel. Voluptate, quisquam.
                    </p>
                  </div>
                </AppCard>
              </div>
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <ProductCarousel>
            {[1, 2, 3, 4].map((num, i) => (
              <div key={num} className="keen-slider__slide slide">
                <AppCard>
                  <div className="h-20 w-20">
                    <Image src={laptop} alt="product" />
                  </div>
                  <h3 className="text-black text-md">MacBook</h3>
                </AppCard>
              </div>
            ))}
          </ProductCarousel>
        </div>

        {/* They love us they really love us */}
        <div className="my-6">
          <span className="text-black font-semibold inline-block my-3">
            They love us
            <span className="text-gray-400 text-sm">
              {' '}
              -– they really love us!
            </span>
          </span>

          <ArrDotCarousel carousels={carousels} />
          <RdirectionLink linkText="SEE ALL THE BUZZ"/>

        </div>

        {/* Site templates */}
        <div>
         <HomeTemplate/>
          {/* Four Questions people always ask */}
          <div>
            <span className="text-black my-6 inline-block font-semibold">
              What else? &nbsp;{' '}
              <span className="text-gray-500 text-sm font-normal">
                - Four questions people always ask:
              </span>
            </span>
            <div className="md:grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num, i) => (
              <QforProducts key={i}/>
            ))}
          </div>
          <RdirectionLink linkText="SEE FAQS"/>
            
          </div>
       

  
       

          {/* Product info And links */}
          <div className="my-6">
            {/* Title */}
            <span className="text-black my-4 inline-block font-semibold">
              Discover all of our high-tech devices &nbsp;{' '}
              <span className="text-gray-500 text-sm font-normal">
                – lovingly restored and squeaky cleanask:
              </span>
            </span>
            {/* Discover all of our high-tech devices   – lovingly restored and squeaky cleanask: */}
           <div className="md:grid sm:grid md:grid-cols-6 gap-6 sm:grid-cols-2 my-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (num, i) => (
                  <LinksOfProducts key={i} pl={pLinks}/>
                )
              )}
            </div>
          </div>
        </div>
      </div>

    
    </div>
  )
}

Home.Layout = Layout
