import commerce from '@lib/api/commerce'
import { dataOfProducts, testimonials } from '../data1'
import { Layout } from '@components/common'
import EspecialProducts from '@components/home/Catofproducts/Especial/EspecialProducts'
import OtherCat from '@components/home/Catofproducts/Other/OtherCat'
import Carousel from '../components/ui/Carousel/Carousel'
import AppCard from '../components/ui/AppCard/AppCard'
import Image from 'next/image'
import laptop from '../public/assets/img/laptop1.png'
import ProductCarousel from '../components/ui/Carousel/ProductCarousel'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import ProductMInfo from '@components/ui/ProductMarketInfo/ProductMInfo'
import ArrDotCarousel from '@components/ui/Carousel/ArrDotCarousel'
import LinksOfProducts from '@components/home/Linksofproducts/LinksOfProducts'
import HomeTemplate from '@components/home/Templates/HomeTemplate'
import QforProducts from '@components/home/Qforproducts/QforProducts'
import RdirectionLink from '@components/links_directions/Rdirection_link/RdirectionLink'
import Testimonials from '@components/testimonials/Testimonials'

import {
  pdtslinks,
  productsH,
  especially,
  details,
  otherCat,
  carousels,
  pCarousel,
} from '../data2'
import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import FirstProducts from '@components/home/Catofproducts/First/FirstProducts'
// import Head from "@components/Head"
import Head from '@components/common/Head/Head'

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

  interface TypeDef {
    numi: number
  }

  return (
    <div>
      <Head title="Home|Quack-Quack" />
      <Carousel carousels={carousels} />
      {/* Product showcase */}
      <div className="bg-gray-200 md:p-10 sm:p-8 p-6">
        {/* First Products */}
        <div className="my-1">
          <h2 className="font-semibold text-black">The heavy weights</h2>
          <p className="text-sm text-black-400">
            -Googled more often than Muhammad Ali.
          </p>
          {/* FOr Desktop */}
          <div className="md:grid-cols-6 gap-2 md:grid hidden">
            {productsH.map((p, i) => (
              <FirstProducts key={i} numIndex={i} products={p} />
            ))}
          </div>
        </div>

        {/* For Mobo */}
        <div className="block md:hidden">
          <ProductCarousel>
            {pCarousel.map((p, i) => (
              <div key={i} className="keen-slider__slide slide">
                <AppCard>
                  <div className="h-20 w-20">
                    <Image src={p.img} />
                  </div>
                  <h3 className="text-black text-md">{p.name}</h3>
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
            <ProductMInfo details={details} />
          </div>

          <RdirectionLink linkText="LEARN MORE ABOUT BACK MARKET" />
        </div>

        {/* Especially for U */}
        <div className="my-8 md:block">
          <h2 className="text-black font-semibold my-3">Especially for you</h2>
          <div className="md:grid-cols-4 gap-2 grid-cols-2 grid md:grid">
            {especially.map((esp, index) => (
              <EspecialProducts key={index} esp={esp} value={index} />
            ))}
          </div>
          <RdirectionLink linkText="SEE OUR BEST DEALS" />
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
            {otherCat.map((other, i) => (
              <OtherCat key={i} numIndex={i} otherCat={other} />
            ))}
          </div>
        </div>

        {/* Product Carousel */}

        {/* For Mobo */}
        <div className="block md:hidden">
          <ProductCarousel>
            {pCarousel.map((p, i) => (
              <div key={i} className="keen-slider__slide slide">
                <AppCard>
                  <div className="h-20 w-20">
                    <Image src={p.img} />
                  </div>
                  <h3 className="text-black text-md">{p.name}</h3>
                </AppCard>
              </div>
            ))}
          </ProductCarousel>
        </div>

        {/* Loooper  */}

        {/* CARD SIMPLE REPEAT 4 //custom layout/common layout// */}

        <h2 className="text-black block font-semibold my-3 uppercase">
          Your Products
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 my-4 gap-2">
          {dataOfProducts.relatedProducts.map((product, i) => (
            <SimpleCard key={i} product={product} />
          ))}
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
          <RdirectionLink linkText="SEE ALL THE BUZZ" />
        </div>

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} color="bg-gray-900" />

        {/* Site templates */}
        <div>
          <HomeTemplate />
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
                <QforProducts key={i} />
              ))}
            </div>
            <RdirectionLink linkText="SEE FAQS" />
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
              {pdtslinks.map((pl, i) => (
                <LinksOfProducts key={i} pl={pl} />
              ))}
            </div>
          </div>
        </div>

        {/*gggggggg*/}
      </div>
    </div>
  )
}

Home.Layout = Layout
