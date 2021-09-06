exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 6370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yG": function() { return /* binding */ CommerceError; },
/* harmony export */   "T4": function() { return /* binding */ FetcherError; }
/* harmony export */ });
/* unused harmony export ValidationError */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CommerceError extends Error {
  constructor({
    message,
    code,
    errors
  }) {
    const error = message ? _objectSpread({
      message
    }, code ? {
      code
    } : {}) : errors[0];
    super(error.message);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "errors", void 0);

    this.errors = message ? [error] : errors;
    if (error.code) this.code = error.code;
  }

} // Used for errors that come from a bad implementation of the hooks

class ValidationError extends (/* unused pure expression or super */ null && (CommerceError)) {
  constructor(options) {
    super(options);
    this.code = 'validation_error';
  }

}
class FetcherError extends CommerceError {
  constructor(options) {
    super(options);

    _defineProperty(this, "status", void 0);

    this.status = options.status;
  }

}

/***/ }),

/***/ 6473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ commerce; }
});

;// CONCATENATED MODULE: ./framework/commerce/api/operations.ts
const noop = () => {
  throw new Error('Not implemented');
};

const OPERATIONS = ['login', 'getAllPages', 'getPage', 'getSiteInfo', 'getCustomerWishlist', 'getAllProductPaths', 'getAllProducts', 'getProduct'];
const defaultOperations = OPERATIONS.reduce((ops, k) => {
  ops[k] = noop;
  return ops;
}, {});
;// CONCATENATED MODULE: ./framework/commerce/api/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class CommerceAPICore {
  constructor(provider) {
    this.provider = provider;
  }

  getConfig(userConfig = {}) {
    return Object.entries(userConfig).reduce((cfg, [key, value]) => Object.assign(cfg, {
      [key]: value
    }), _objectSpread({}, this.provider.config));
  }

  setConfig(newConfig) {
    Object.assign(this.provider.config, newConfig);
  }

}
function getCommerceApi(customProvider) {
  const commerce = Object.assign(new CommerceAPICore(customProvider), defaultOperations);
  const ops = customProvider.operations;
  OPERATIONS.forEach(k => {
    const op = ops[k];

    if (op) {
      commerce[k] = op({
        commerce
      });
    }
  });
  return commerce;
}
function getEndpoint(commerce, context) {
  const cfg = commerce.getConfig(context.config);
  return function apiHandler(req, res) {
    var _context$options;

    return context.handler({
      req,
      res,
      commerce,
      config: cfg,
      handlers: context.handlers,
      options: (_context$options = context.options) !== null && _context$options !== void 0 ? _context$options : {}
    });
  };
}
const createEndpoint = endpoint => (commerce, context) => {
  return getEndpoint(commerce, _objectSpread(_objectSpread({}, endpoint), context));
};
// EXTERNAL MODULE: ./framework/commerce/utils/errors.ts
var errors = __webpack_require__(6370);
;// CONCATENATED MODULE: ./framework/local/api/utils/fetch-local.ts
function fetch_local_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function fetch_local_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetch_local_ownKeys(Object(source), true).forEach(function (key) { fetch_local_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetch_local_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetch_local_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// import fetch from './fetch'
const fetchGraphqlApi = getConfig => async (query, {
  variables,
  preview
} = {}, fetchOptions) => {
  const config = getConfig();
  const res = await fetch(config.commerceUrl, fetch_local_objectSpread(fetch_local_objectSpread({}, fetchOptions), {}, {
    method: 'POST',
    headers: fetch_local_objectSpread(fetch_local_objectSpread({}, fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.headers), {}, {
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      query,
      variables
    })
  }));
  const json = await res.json();

  if (json.errors) {
    var _json$errors;

    throw new errors/* FetcherError */.T4({
      errors: (_json$errors = json.errors) !== null && _json$errors !== void 0 ? _json$errors : [{
        message: 'Failed to fetch for API'
      }],
      status: res.status
    });
  }

  return {
    data: json.data,
    res
  };
};

/* harmony default export */ var fetch_local = (fetchGraphqlApi);
;// CONCATENATED MODULE: ./framework/local/api/operations/get-all-pages.ts
function getAllPagesOperation() {
  function getAllPages({
    config,
    preview
  }) {
    return Promise.resolve({
      pages: []
    });
  }

  return getAllPages;
}
;// CONCATENATED MODULE: ./framework/local/api/operations/get-page.ts
function getPageOperation() {
  function getPage() {
    return Promise.resolve({});
  }

  return getPage;
}
;// CONCATENATED MODULE: ./framework/local/api/operations/get-site-info.ts
function getSiteInfoOperation({}) {
  function getSiteInfo({
    query,
    variables,
    config: cfg
  } = {}) {
    return Promise.resolve({
      categories: [{
        id: 'new-arrivals',
        name: 'New Arrivals',
        slug: 'new-arrivals',
        path: '/new-arrivals'
      }, {
        id: 'featured',
        name: 'Featured',
        slug: 'featured',
        path: '/featured'
      }],
      brands: []
    });
  }

  return getSiteInfo;
}
;// CONCATENATED MODULE: ./framework/local/api/operations/get-customer-wishlist.ts
function getCustomerWishlistOperation() {
  function getCustomerWishlist() {
    return {
      wishlist: {}
    };
  }

  return getCustomerWishlist;
}
;// CONCATENATED MODULE: ./framework/local/data.json
var data_namespaceObject = JSON.parse('{"R":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjA=","name":"Samsung Galaxy","vendor":"Next.js","path":"/new-short-sleeve-t-shirt","slug":"new-short-sleeve-t-shirt","price":{"value":25,"currencyCode":"USD"},"descriptionHtml":"<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>","images":[{"url":"/assets/img/mobile2.png","altText":"Shirt","width":1000,"height":800},{"url":"/assets/img/mobile2.png","altText":"Shirt","width":1000,"height":1000},{"url":"/assets/img/mobile1.png","altText":"Shirt","width":1000,"height":1000}],"variants":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjAss=","options":[{"__typename":"MultipleChoiceOption","id":"asd","displayName":"Size","values":[{"label":"XL"}]}]}],"options":[{"id":"option-color","displayName":"Color","values":[{"label":"color","hexColors":["#222"]}]},{"id":"option-size","displayName":"Size","values":[{"label":"S"},{"label":"M"},{"label":"L"}]}]},{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9ksdWN0LzU0NDczMjUwMjQ0MjA=","name":"ASUS Laptop","vendor":"Next.js","path":"/lightweight-jacket","slug":"lightweight-jacket","price":{"value":249.99,"currencyCode":"USD"},"descriptionHtml":"<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>","images":[{"url":"/assets/img/laptop3.png","altText":"Lightweight Jacket","width":800,"height":800},{"url":"/assets/img/laptop1.png","altText":"Lightweight Jacket","width":1000,"height":1000},{"url":"/assets/img/laptop2.png","altText":"Lightweight Jacket","width":1000,"height":1000}],"variants":[{"id":"Z2lkOid8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjAss=","options":[{"__typename":"MultipleChoiceOption","id":"asd","displayName":"Size","values":[{"label":"XL"}]}]}],"options":[{"id":"option-color","displayName":"Color","values":[{"label":"color","hexColors":["#222"]}]},{"id":"option-size","displayName":"Size","values":[{"label":"S"},{"label":"M"},{"label":"L"}]}]},{"id":"Z2lkOis8vc2hvcGlmsddeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjA=","name":"Laptops","vendor":"Next.js","path":"/shirt","slug":"shirt","price":{"value":25,"currencyCode":"USD"},"descriptionHtml":"<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>","images":[{"url":"/assets/img/laptop1.png","altText":"Shirt","width":600,"height":600},{"url":"/assets/img/laptop3.png","altText":"Shirt","width":600,"height":600},{"url":"/assets/img/laptop1.png","altText":"Shirt","width":1000,"height":1000},{"url":"/assets/img/mobile1.png","altText":"Shirt","width":1000,"height":1000},{"url":"/assets/img/mobile2.png","altText":"Shirt","width":1000,"height":1000}],"variants":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcms9kdWN0LzU0NDczMjUwMjQ0MjAss=","options":[{"__typename":"MultipleChoiceOption","id":"asd","displayName":"Size","values":[{"label":"XL"}]}]}],"options":[{"id":"option-color","displayName":"Color","values":[{"label":"color","hexColors":["#222"]}]},{"id":"option-size","displayName":"Size","values":[{"label":"S"},{"label":"M"},{"label":"L"}]}]}]}');
;// CONCATENATED MODULE: ./framework/local/api/operations/get-all-product-paths.ts

function getAllProductPathsOperation() {
  function getAllProductPaths() {
    return Promise.resolve({
      products: data_namespaceObject.R.map(({
        path
      }) => ({
        path
      }))
    });
  }

  return getAllProductPaths;
}
;// CONCATENATED MODULE: ./framework/local/api/operations/get-all-products.ts

function getAllProductsOperation({
  commerce
}) {
  async function getAllProducts({
    query = '',
    variables,
    config
  } = {}) {
    return {
      products: data_namespaceObject.R
    };
  }

  return getAllProducts;
}
;// CONCATENATED MODULE: ./framework/local/api/operations/get-product.ts

function getProductOperation({
  commerce
}) {
  async function getProduct({
    query = '',
    variables,
    config
  } = {}) {
    return {
      product: data_namespaceObject.R.find(({
        slug
      }) => slug === variables.slug)
    };
  }

  return getProduct;
}
;// CONCATENATED MODULE: ./framework/local/api/index.ts









const config = {
  commerceUrl: '',
  apiToken: '',
  cartCookie: '',
  customerCookie: '',
  cartCookieMaxAge: 2592000,
  fetch: fetch_local(() => api_getCommerceApi().getConfig())
};
const operations = {
  getAllPages: getAllPagesOperation,
  getPage: getPageOperation,
  getSiteInfo: getSiteInfoOperation,
  getCustomerWishlist: getCustomerWishlistOperation,
  getAllProductPaths: getAllProductPathsOperation,
  getAllProducts: getAllProductsOperation,
  getProduct: getProductOperation
};
const provider = {
  config,
  operations
};
function api_getCommerceApi(customProvider = provider) {
  return getCommerceApi(customProvider);
}
;// CONCATENATED MODULE: ./lib/api/commerce.ts

/* harmony default export */ var commerce = (api_getCommerceApi());

/***/ })

};
;