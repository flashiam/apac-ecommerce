(() => {
var exports = {};
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export emptyHook */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function emptyHook(options) {
  const useEmptyHook = async ({
    id
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async function () {
      return Promise.resolve();
    }, []);
  };

  return useEmptyHook;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyHook);

/***/ }),

/***/ 3937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetcher, extendHook */
const defaultOpts = {};
const fetcher = () => {
  return null;
};
function extendHook(customFetcher, // swrOptions?: SwrOptions<Wishlist | null, UseWishlistInput>
swrOptions) {
  const useWishlist = ({
    includeProducts
  } = {}) => {
    return {
      data: null
    };
  };

  useWishlist.extend = extendHook;
  return useWishlist;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendHook(fetcher));

/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wishlist),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./lib/api/commerce.ts + 12 modules
var commerce = __webpack_require__(393);
// EXTERNAL MODULE: ./components/icons/Heart.tsx
var Heart = __webpack_require__(8909);
// EXTERNAL MODULE: ./components/common/Layout/Layout.tsx + 33 modules
var Layout = __webpack_require__(4331);
// EXTERNAL MODULE: ./components/ui/Container/Container.tsx
var Container = __webpack_require__(9698);
// EXTERNAL MODULE: ./components/ui/Text/Text.tsx
var Text = __webpack_require__(2361);
// EXTERNAL MODULE: ./framework/local/customer/use-customer.tsx + 1 modules
var use_customer = __webpack_require__(6708);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/wishlist/WishlistCard/WishlistCard.module.css
var WishlistCard_module = __webpack_require__(3910);
var WishlistCard_module_default = /*#__PURE__*/__webpack_require__.n(WishlistCard_module);
;// CONCATENATED MODULE: ./components/icons/Trash.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Trash = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3 6H21",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M10 11V17",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M14 11V17",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));
};

/* harmony default export */ const icons_Trash = (Trash);
// EXTERNAL MODULE: ./components/ui/Button/Button.tsx
var Button = __webpack_require__(1180);
// EXTERNAL MODULE: ./components/ui/context.tsx
var context = __webpack_require__(7079);
// EXTERNAL MODULE: ./framework/commerce/product/use-price.tsx
var use_price = __webpack_require__(5420);
// EXTERNAL MODULE: ./framework/local/cart/use-add-item.tsx + 1 modules
var use_add_item = __webpack_require__(3929);
// EXTERNAL MODULE: ./framework/local/wishlist/use-remove-item.tsx
var use_remove_item = __webpack_require__(52);
;// CONCATENATED MODULE: ./components/wishlist/WishlistCard/WishlistCard.tsx













const placeholderImg = '/product-img-placeholder.svg';

const WishlistCard = ({
  product
}) => {
  var _product$price, _product$price2, _product$price3, _product$images$, _product$images$2;

  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: (_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.value,
    baseAmount: (_product$price2 = product.price) === null || _product$price2 === void 0 ? void 0 : _product$price2.retailPrice,
    currencyCode: (_product$price3 = product.price) === null || _product$price3 === void 0 ? void 0 : _product$price3.currencyCode
  }); // @ts-ignore Wishlist is not always enabled

  const removeItem = (0,use_remove_item/* default */.Z)({
    wishlist: {
      includeProducts: true
    }
  });
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: removing,
    1: setRemoving
  } = (0,external_react_.useState)(false); // TODO: fix this missing argument issue

  /* @ts-ignore */

  const addItem = (0,use_add_item/* default */.Z)();
  const {
    openSidebar
  } = (0,context/* useUI */.l8)();

  const handleRemove = async () => {
    setRemoving(true);

    try {
      // If this action succeeds then there's no need to do `setRemoving(true)`
      // because the component will be removed from the view
      await removeItem({
        id: product.id
      });
    } catch (error) {
      setRemoving(false);
    }
  };

  const addToCart = async () => {
    setLoading(true);

    try {
      await addItem({
        productId: String(product.id),
        variantId: String(product.variants[0].id)
      });
      openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()((WishlistCard_module_default()).root, {
      'opacity-75 pointer-events-none': removing
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `col-span-3 ${(WishlistCard_module_default()).productBg}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: ((_product$images$ = product.images[0]) === null || _product$images$ === void 0 ? void 0 : _product$images$.url) || placeholderImg,
        width: 400,
        height: 400,
        alt: ((_product$images$2 = product.images[0]) === null || _product$images$2 === void 0 ? void 0 : _product$images$2.alt) || 'Product Image'
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-span-7",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-2xl mb-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/product${product.path}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: product.name
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-4",
        children: /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
          html: product.description
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        "aria-label": "Add to Cart",
        type: "button",
        className: 'py-1 px-3 border border-secondary rounded-md shadow-sm hover:bg-primary-hover',
        onClick: addToCart,
        loading: loading,
        children: "Add to Cart"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-span-2 flex flex-col justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-end font-bold",
        children: price
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-end",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: handleRemove,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_Trash, {})
        })
      })]
    })]
  });
};

/* harmony default export */ const WishlistCard_WishlistCard = (WishlistCard);
// EXTERNAL MODULE: ./framework/local/wishlist/use-wishlist.tsx
var use_wishlist = __webpack_require__(3937);
;// CONCATENATED MODULE: ./pages/wishlist.tsx









async function getStaticProps({
  preview,
  locale,
  locales
}) {
  // Disabling page if Feature is not available
  if (!process.env.COMMERCE_WISHLIST_ENABLED) {
    return {
      notFound: true
    };
  }

  const config = {
    locale,
    locales
  };
  const pagesPromise = commerce/* default.getAllPages */.Z.getAllPages({
    config,
    preview
  });
  const siteInfoPromise = commerce/* default.getSiteInfo */.Z.getSiteInfo({
    config,
    preview
  });
  const {
    pages
  } = await pagesPromise;
  const {
    categories
  } = await siteInfoPromise;
  return {
    props: {
      pages,
      categories
    }
  };
}
function Wishlist() {
  var _data$items;

  const {
    data: customer
  } = (0,use_customer/* default */.Z)(); // @ts-ignore Shopify - Fix this types

  const {
    data,
    isLoading,
    isEmpty
  } = (0,use_wishlist/* default */.ZP)({
    includeProducts: true
  });
  return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-3 mb-20",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
        variant: "pageHeading",
        children: "My Wishlist"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "group flex flex-col",
        children: isLoading || isEmpty ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 px-12 py-24 flex flex-col justify-center items-center ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary",
            children: /*#__PURE__*/jsx_runtime_.jsx(Heart/* default */.Z, {
              className: "absolute"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "pt-6 text-2xl font-bold tracking-wide text-center",
            children: "Your wishlist is empty"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-accent-6 px-10 text-center pt-2",
            children: "Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake."
          })]
        }) : data && ( // @ts-ignore Shopify - Fix this types
        (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map(item => /*#__PURE__*/jsx_runtime_.jsx(WishlistCard_WishlistCard, {
          product: item.product
        }, item.id)))
      })]
    })
  });
}
Wishlist.Layout = Layout/* default */.Z;

/***/ }),

/***/ 3910:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "WishlistCard_root__2xKoL",
	"productBg": "WishlistCard_productBg__3sxob"
};


/***/ }),

/***/ 8023:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 506:
/***/ ((module) => {

"use strict";
module.exports = require("email-validator");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 1471:
/***/ ((module) => {

"use strict";
module.exports = require("keen-slider/react");

/***/ }),

/***/ 3739:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.random");

/***/ }),

/***/ 1602:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.throttle");

/***/ }),

/***/ 2517:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 123:
/***/ ((module) => {

"use strict";
module.exports = require("react-merge-refs");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7749:
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ }),

/***/ 8047:
/***/ ((module) => {

"use strict";
module.exports = require("tabbable");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,393,79,679], () => (__webpack_exec__(2756)));
module.exports = __webpack_exports__;

})();