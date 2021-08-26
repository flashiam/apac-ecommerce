exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9759);
/* harmony import */ var _ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8921);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5420);
/* harmony import */ var _ProductTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8166);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const placeholderImg = '/product-img-placeholder.svg';

const ProductCard = ({
  product,
  imgProps,
  className,
  noNameTag = false,
  variant = 'default'
}) => {
  var _product$images$, _product$price, _product$images$2, _product$price2, _product$images$3;

  const {
    price
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode
  }); // console.log(product);

  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().root), {
    [(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().slim)]: variant === 'slim',
    [(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().simple)]: variant === 'simple'
  }, className);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/${product.slug}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      className: rootClassName,
      children: [variant === 'slim' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: product.name
          })
        }), (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({
          quality: "85",
          src: ((_product$images$ = product.images[0]) === null || _product$images$ === void 0 ? void 0 : _product$images$.url) || placeholderImg,
          alt: product.name || 'Product Image',
          height: 320,
          width: 320 //layout="fixed"

        }, imgProps))]
      }), variant === 'simple' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
          productId: product.id,
          variant: product.variants[0]
        }), !noNameTag && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              children: product.name
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),
            children: `${price} ${(_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.currencyCode}`
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
          children: (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({
            alt: product.name || 'Product Image',
            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productImage),
            src: ((_product$images$2 = product.images[0]) === null || _product$images$2 === void 0 ? void 0 : _product$images$2.url) || placeholderImg,
            height: 540,
            width: 540,
            quality: "85",
            layout: "responsive"
          }, imgProps))
        })]
      }), variant === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
          productId: product.id,
          variant: product.variants[0]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductTag__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          name: product.name,
          price: `${price} ${(_product$price2 = product.price) === null || _product$price2 === void 0 ? void 0 : _product$price2.currencyCode}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
          children: (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({
            alt: product.name || 'Product Image',
            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productImage),
            src: ((_product$images$3 = product.images[0]) === null || _product$images$3 === void 0 ? void 0 : _product$images$3.url) || placeholderImg,
            height: 540,
            width: 540,
            quality: "85",
            layout: "responsive"
          }, imgProps))
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ 8166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5947);
/* harmony import */ var _ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2__);





const ProductTag = ({
  name,
  price,
  className = '',
  fontSize = 32
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().root), className),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      className: (_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          [(_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontsizing)]: fontSize < 32
        }),
        style: {
          fontSize: `${fontSize}px`,
          lineHeight: `${fontSize}px`
        },
        children: name
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().price),
      children: price
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTag);

/***/ }),

/***/ 8921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WishlistButton_WishlistButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/ui/context.tsx
var context = __webpack_require__(7079);
// EXTERNAL MODULE: ./components/icons/Heart.tsx
var Heart = __webpack_require__(8909);
;// CONCATENATED MODULE: ./framework/local/wishlist/use-add-item.tsx

function emptyHook() {
  const useEmptyHook = async (options = {}) => {
    return (0,external_react_.useCallback)(async function () {
      return Promise.resolve();
    }, []);
  };

  return useEmptyHook;
}
/* harmony default export */ const use_add_item = (emptyHook);
// EXTERNAL MODULE: ./framework/local/customer/use-customer.tsx + 1 modules
var use_customer = __webpack_require__(6708);
// EXTERNAL MODULE: ./framework/local/wishlist/use-wishlist.tsx
var use_wishlist = __webpack_require__(3937);
// EXTERNAL MODULE: ./framework/local/wishlist/use-remove-item.tsx
var use_remove_item = __webpack_require__(52);
// EXTERNAL MODULE: ./components/wishlist/WishlistButton/WishlistButton.module.css
var WishlistButton_module = __webpack_require__(8655);
var WishlistButton_module_default = /*#__PURE__*/__webpack_require__.n(WishlistButton_module);
;// CONCATENATED MODULE: ./components/wishlist/WishlistButton/WishlistButton.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const WishlistButton = (_ref) => {
  var _data$items;

  let {
    productId,
    variant,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["productId", "variant", "className"]);

  const {
    data
  } = (0,use_wishlist/* default */.ZP)();
  const addItem = use_add_item();
  const removeItem = (0,use_remove_item/* default */.Z)();
  const {
    data: customer
  } = (0,use_customer/* default */.Z)();
  const {
    openModal,
    setModalView
  } = (0,context/* useUI */.l8)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false); // @ts-ignore Wishlist is not always enabled

  const itemInWishlist = data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.find( // @ts-ignore Wishlist is not always enabled
  item => item.product_id === Number(productId) && item.variant_id === Number(variant.id));

  const handleWishlistChange = async e => {
    e.preventDefault();
    if (loading) return; // A login is required before adding an item to the wishlist

    if (!customer) {
      setModalView('LOGIN_VIEW');
      return openModal();
    }

    setLoading(true);

    try {
      if (itemInWishlist) {
        await removeItem({
          id: itemInWishlist.id
        });
      } else {
        await addItem({
          productId,
          variantId: variant === null || variant === void 0 ? void 0 : variant.id
        });
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread(_objectSpread({
    "aria-label": "Add to wishlist",
    className: external_classnames_default()((WishlistButton_module_default()).root, className),
    onClick: handleWishlistChange
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Heart/* default */.Z, {
      className: external_classnames_default()((WishlistButton_module_default()).icon, {
        [(WishlistButton_module_default()).loading]: loading,
        [(WishlistButton_module_default()).inWishlist]: itemInWishlist
      })
    })
  }));
};

/* harmony default export */ const WishlistButton_WishlistButton = (WishlistButton);

/***/ }),

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

/***/ 9866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
  const arr = [];

  while (n > arr.length) {
    arr.push(fn(arr.length));
  }

  return arr;
}

/***/ }),

/***/ 9759:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductCard_root__2we6k",
	"productImage": "ProductCard_productImage__2DvT0",
	"header": "ProductCard_header__1RX2E",
	"name": "ProductCard_name__3Mulz",
	"price": "ProductCard_price__1Pa1I",
	"wishlistButton": "ProductCard_wishlistButton__2M9lM",
	"imageContainer": "ProductCard_imageContainer__bPqUi",
	"simple": "ProductCard_simple__thMup",
	"slim": "ProductCard_slim__2eJvH"
};


/***/ }),

/***/ 5947:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductTag_root__BOTxu",
	"name": "ProductTag_name__2G8VD",
	"fontsizing": "ProductTag_fontsizing__zCI1h",
	"price": "ProductTag_price__1V8pj"
};


/***/ }),

/***/ 8655:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "WishlistButton_root__1LnSA",
	"icon": "WishlistButton_icon__30qku",
	"loading": "WishlistButton_loading__3NiRl",
	"inWishlist": "WishlistButton_inWishlist__1qKZc"
};


/***/ })

};
;