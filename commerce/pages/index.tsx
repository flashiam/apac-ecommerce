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
    <div className="container mx-auto px-5">
      <Carousel carousels={carousels} />
      {/* Product showcase */}
      <div>
        <div className="my-6">
          <h2 className="font-semibold text-black">The heavy weights</h2>
          <p className="text-sm text-black-400">
            -Googled more often than Muhammad Ali.
          </p>
          {/* FOr Desktop */}
          <div className="grid-cols-6 gap-2 hidden md:grid">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <Link href={`/product/new-short-sleeve-t-shirt`}>
                <div
                  key={num}
                  className={`${i <= 1 ? 'col-span-3' : 'col-span-2'}`}
                >
                  <AppCard>
                    <div className="h-20 w-20 mx-auto">
                      <Image src={laptop} alt="product" />
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
              </Link>
            ))}
          </div>
        </div>

        {/* Welcome to back MArket  */}
        <div className="my-3">
          <h2 className="text-black font-semibold my-3 uppercase">
            Information About back Market
          </h2>
          <div className="p-8 bg-white border-2 border-gray-200 rounded-md gap-4">
            <ProductMInfo />
          </div>
          <button className="text-black font-semibold uppercase my-3">
            Learn more about backmarket
          </button>
        </div>

        {/* For Mobo */}

        {/* Especially for U */}
        <div className="my-8 hidden md:block">
          <h2 className="text-black font-semibold my-3">Especially for you</h2>
          <div className="grid-cols-4 gap-8 md:grid">
            {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
              <div key={i} className={`${i == 4 && 'col-span-2'}`}>
                <EspeciallyForU>
                  <h3 className="text-black font-medium">Flash Sale</h3>
                  <div className="w-20 h-40 mx-auto">
                    <Image src={laptop} alt="product" />
                  </div>
                  <div>
                    <h2>Iphone</h2>
                    <p className="text-gray-400 text-sm">Condition Excellent</p>
                    <h2 className="text-gray-400">Ends in</h2>
                    <h3>$339.99</h3>
                  </div>
                </EspeciallyForU>
              </div>
            ))}
          </div>
          <button className="text-black font-semibold my-3">
            SEE OUR BEST DEALS
          </button>
        </div>

        {/* Other Categories */}
        <div className="my-8 mb-12">
          <span className="text-black font-semibold inline-block my-3">
            Other Categories{' '}
            <span className="text-gray-400 text-sm">
              {' '}
              -Nothing lost, everything gained, and all refurbished.
            </span>
          </span>

          <div className="grid-cols-6 gap-2 hidden md:grid">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <div
                key={num}
                className={`${i <= 1 ? 'col-span-3' : 'col-span-2'}`}
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

          <div className="flex justify-end">
            <Link href="!#">
              <a className="text-black text-lg font-semibold my-3">
                SEE ALL THE BUZZ
              </a>
            </Link>
          </div>
        </div>

        {/* Site templates */}
        <div>
          <div className="my-6 text-center">
            <blockquote className="font-serif my-6 text-3xl font-bold">
              "Forever young, I wanna be forever youuuuuuuuung, etc."
            </blockquote>
            <Link href="!#">
              <a className="underline text-black-700 my-8 inline-block ">
                Alphaville
              </a>
            </Link>
            <p className="text-gray-700">
              Back Market is a marketplace that fights against planned
              obsolescence.
            </p>
            <Link href="!#">
              <a className="underline text-black-700">Learn more</a>
            </Link>
          </div>
          <div>
            <span className="text-black my-6 inline-block font-semibold">
              What else? &nbsp;{' '}
              <span className="text-gray-500 text-sm font-normal">
                - Four questions people always ask:
              </span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num, i) => (
              <div key={i}>
                <h3 className="font-semibold">
                  “What's the difference between a used iPhone and a refurbished
                  iPhone?“
                </h3>
                <p className="text-sm text-gray-500">
                  {' '}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, labore, perferendis dignissimos velit magnam at
                  repudiandae obcaecati ipsa quo in, autem quaerat deleniti
                  earum! Ipsum hic distinctio nemo omnis, et commodi molestias
                  perspiciatis tempore nulla?
                </p>
              </div>
            ))}

            <Link href="!#">
              <a className="text-black text-lg font-semibold my-3">SEE FAQs</a>
            </Link>
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
            {/* Grid System */}
            <div className="grid grid-cols-6 gap-6 my-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (num, i) => (
                  <div key={i}>
                    <Link href="!#">
                      <a className="font-semibold">Laptops & Computers</a>
                    </Link>
                    {pLinks.map((l, i) => (
                      <h3 key={i}>
                        {' '}
                        <Link href="!#">
                          <a className="text-sm text-gray-500">{l.link}</a>
                        </Link>
                      </h3>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />
      <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>

      <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />
      <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="simple" />
        ))}
      </Marquee> */}

      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </div>
  )
}

Home.Layout = Layout
