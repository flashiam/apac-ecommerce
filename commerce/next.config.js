// const commerce = require('./commerce.config.json')
// const {
//   withCommerceConfig,
//   getProviderName,
// } = require('./framework/commerce/config')

// const provider = commerce.provider || getProviderName()
// const isBC = provider === 'bigcommerce'
// const isShopify = provider === 'shopify'
// const isSaleor = provider === 'saleor'
// const isSwell = provider === 'swell'
// const isVendure = provider === 'vendure'

// module.exports = withCommerceConfig({
//   commerce,
//   i18n: {
//     locales: ['en-US', 'es'],
//     defaultLocale: 'en-US',
//   },
//   rewrites() {
//     return [
//       (isBC || isShopify || isSwell || isVendure) && {
//         source: '/checkout',
//         destination: '/api/checkout',
//       },
//       // The logout is also an action so this route is not required, but it's also another way
//       // you can allow a logout!
//       isBC && {
//         source: '/logout',
//         destination: '/api/logout?redirect_to=/',
//       },
//       // For Vendure, rewrite the local api url to the remote (external) api url. This is required
//       // to make the session cookies work.
//       isVendure &&
//         process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL && {
//           source: `${process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL}/:path*`,
//           destination: `${process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL}/:path*`,
//         },
//     ].filter(Boolean)
//   },
// })

// // Don't delete this console log, useful to see the commerce config in Vercel deployments
// console.log('next.config.js', JSON.stringify(module.exports, null, 2))

const commerce = require('./commerce.config.json')
const {
  withCommerceConfig,
  getProviderName,
} = require('./framework/commerce/config')

const provider = commerce.provider || getProviderName()
const isBC = provider === 'bigcommerce'
const isShopify = provider === 'shopify'
const isSaleor = provider === 'saleor'
const isSwell = provider === 'swell'
const isVendure = provider === 'vendure'

module.exports = withCommerceConfig({
  commerce,

  images: {
    domains: [
      'lh3.googleusercontent.com',
      'amplify-apac-dev-40047-deployment.s3.amazonaws.com',
    ],
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
  },
  rewrites() {
    return [
      (isBC || isShopify || isSwell || isVendure) && {
        source: '/checkout',
        destination: '/api/checkout',
      },
      // The logout is also an action so this route is not required, but it's also another way
      // you can allow a logout!
      isBC && {
        source: '/logout',
        destination: '/api/logout?redirect_to=/',
      },
      // For Vendure, rewrite the local api url to the remote (external) api url. This is required
      // to make the session cookies work.
      isVendure &&
        process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL && {
          source: `${process.env.NEXT_PUBLIC_VENDURE_LOCAL_URL}/:path*`,
          destination: `${process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL}/:path*`,
        },
    ].filter(Boolean)
  },
})

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2))
