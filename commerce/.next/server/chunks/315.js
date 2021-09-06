exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 6921:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CartItem_CartItem; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/cart/CartItem/CartItem.module.css
var CartItem_module = __webpack_require__(1722);
var CartItem_module_default = /*#__PURE__*/__webpack_require__.n(CartItem_module);
// EXTERNAL MODULE: ./components/ui/context.tsx
var context = __webpack_require__(7079);
// EXTERNAL MODULE: ./framework/commerce/product/use-price.tsx
var use_price = __webpack_require__(5420);
// EXTERNAL MODULE: ./framework/local/cart/use-update-item.tsx + 1 modules
var use_update_item = __webpack_require__(4034);
// EXTERNAL MODULE: ./framework/local/cart/use-remove-item.tsx + 1 modules
var use_remove_item = __webpack_require__(7968);
// EXTERNAL MODULE: ./components/ui/Quantity/Quantity.module.css
var Quantity_module = __webpack_require__(5105);
var Quantity_module_default = /*#__PURE__*/__webpack_require__.n(Quantity_module);
// EXTERNAL MODULE: ./components/icons/Cross.tsx
var Cross = __webpack_require__(4246);
;// CONCATENATED MODULE: ./components/icons/Minus.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Minus = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M5 12H19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};

/* harmony default export */ var icons_Minus = (Minus);
;// CONCATENATED MODULE: ./components/icons/Plus.tsx



function Plus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Plus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Plus_ownKeys(Object(source), true).forEach(function (key) { Plus_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Plus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Plus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Plus = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", Plus_objectSpread(Plus_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 5V19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M5 12H19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));
};

/* harmony default export */ var icons_Plus = (Plus);
;// CONCATENATED MODULE: ./components/ui/Quantity/Quantity.tsx







const Quantity = ({
  value,
  increase,
  decrease,
  handleChange,
  handleRemove,
  max = 6
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row h-9",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (Quantity_module_default()).actions,
      onClick: handleRemove,
      children: /*#__PURE__*/jsx_runtime_.jsx(Cross/* default */.Z, {
        width: 20,
        height: 20
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("label", {
      className: "w-full border-accent-2 border ml-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
        className: (Quantity_module_default()).input,
        onChange: e => Number(e.target.value) < max + 1 ? handleChange(e) : () => {},
        value: value,
        type: "number",
        max: max,
        min: "0",
        readOnly: true
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      onClick: decrease,
      className: (Quantity_module_default()).actions,
      style: {
        marginLeft: '-1px'
      },
      disabled: value <= 1,
      children: /*#__PURE__*/jsx_runtime_.jsx(icons_Minus, {
        width: 18,
        height: 18
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      onClick: increase,
      className: external_classnames_default()((Quantity_module_default()).actions),
      style: {
        marginLeft: '-1px'
      },
      disabled: value < 1 || value >= max,
      children: /*#__PURE__*/jsx_runtime_.jsx(icons_Plus, {
        width: 18,
        height: 18
      })
    })]
  });
};

/* harmony default export */ var Quantity_Quantity = (Quantity);
;// CONCATENATED MODULE: ./components/cart/CartItem/CartItem.tsx



function CartItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CartItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CartItem_ownKeys(Object(source), true).forEach(function (key) { CartItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CartItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CartItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const CartItem = (_ref) => {
  let {
    item,
    variant = 'default',
    currencyCode
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["item", "variant", "currencyCode"]);

  const {
    closeSidebarIfPresent
  } = (0,context/* useUI */.l8)();
  const {
    0: removing,
    1: setRemoving
  } = (0,external_react_.useState)(false);
  const {
    0: quantity,
    1: setQuantity
  } = (0,external_react_.useState)(item.quantity);
  const removeItem = (0,use_remove_item/* default */.Z)();
  const updateItem = (0,use_update_item/* default */.Z)({
    item
  });
  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: item.variant.price * item.quantity,
    baseAmount: item.variant.listPrice * item.quantity,
    currencyCode
  });

  const handleChange = async ({
    target: {
      value
    }
  }) => {
    setQuantity(Number(value));
    await updateItem({
      quantity: Number(value)
    });
  };

  const increaseQuantity = async (n = 1) => {
    const val = Number(quantity) + n;
    setQuantity(val);
    await updateItem({
      quantity: val
    });
  };

  const handleRemove = async () => {
    setRemoving(true);

    try {
      await removeItem(item);
    } catch (error) {
      setRemoving(false);
    }
  }; // TODO: Add a type for this


  const options = item.options;
  (0,external_react_.useEffect)(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity);
    } // TODO: currently not including quantity in deps is intended, but we should
    // do this differently as it could break easily
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [item.quantity]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", CartItem_objectSpread(CartItem_objectSpread({
    className: external_classnames_default()((CartItem_module_default()).root, {
      'opacity-50 pointer-events-none': removing
    })
  }, rest), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-row space-x-4 py-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-16 h-16 bg-violet relative overflow-hidden cursor-pointer z-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/product/${item.path}`,
          passHref: false,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            onClick: () => closeSidebarIfPresent(),
            className: (CartItem_module_default()).productImage,
            width: 150,
            height: 150,
            src: item.variant.image.url,
            alt: item.variant.image.altText,
            unoptimized: true
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-1 flex flex-col text-base",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/product/${item.path}`,
          passHref: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (CartItem_module_default()).productName,
            onClick: () => closeSidebarIfPresent(),
            children: item.name
          })
        }), options && options.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex items-center pb-1",
          children: options.map((option, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-sm font-semibold text-accent-7 inline-flex items-center justify-center",
            children: [option.name, option.name === 'Color' ? /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "mx-2 rounded-full bg-transparent border w-5 h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden",
              style: {
                backgroundColor: `${option.value}`
              }
            }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden",
              children: option.value
            }), i === options.length - 1 ? '' : /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "mr-3"
            })]
          }, `${item.id}-${option.name}`))
        }), variant === 'display' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-sm tracking-wider",
          children: [quantity, "x"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col justify-between space-y-2 text-sm",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: price
        })
      })]
    }), variant === 'default' && /*#__PURE__*/jsx_runtime_.jsx(Quantity_Quantity, {
      value: quantity,
      handleRemove: handleRemove,
      handleChange: handleChange,
      increase: () => increaseQuantity(1),
      decrease: () => increaseQuantity(-1)
    })]
  }));
};

/* harmony default export */ var CartItem_CartItem = (CartItem);

/***/ }),

/***/ 4331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./framework/local/fetcher.ts
const fetcher = async () => {
  console.log('FETCHER');
  const res = await fetch('./data.json');

  if (res.ok) {
    const {
      data
    } = await res.json();
    return data;
  }

  throw res;
};
// EXTERNAL MODULE: ./framework/local/cart/use-cart.tsx + 1 modules
var use_cart = __webpack_require__(9620);
// EXTERNAL MODULE: ./framework/local/cart/use-add-item.tsx + 1 modules
var use_add_item = __webpack_require__(3929);
// EXTERNAL MODULE: ./framework/local/cart/use-update-item.tsx + 1 modules
var use_update_item = __webpack_require__(4034);
// EXTERNAL MODULE: ./framework/local/cart/use-remove-item.tsx + 1 modules
var use_remove_item = __webpack_require__(7968);
// EXTERNAL MODULE: ./framework/local/customer/use-customer.tsx + 1 modules
var use_customer = __webpack_require__(6708);
// EXTERNAL MODULE: ./framework/local/product/use-search.tsx + 1 modules
var use_search = __webpack_require__(8122);
// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/auth/use-login.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const use_login_fetcher = default_fetcher/* mutationFetcher */.B5;

const fn = provider => {
  var _provider$auth;

  return (_provider$auth = provider.auth) === null || _provider$auth === void 0 ? void 0 : _provider$auth.useLogin;
};

const useLogin = (...args) => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useMutationHook */.wf)(_objectSpread({
    fetcher: use_login_fetcher
  }, hook))(...args);
};

/* harmony default export */ var use_login = (useLogin);
;// CONCATENATED MODULE: ./framework/local/auth/use-login.tsx

/* harmony default export */ var auth_use_login = (use_login);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher() {
    return null;
  },

  useHook: () => () => {
    return async function () {};
  }
};
;// CONCATENATED MODULE: ./framework/commerce/auth/use-logout.tsx
function use_logout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_logout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_logout_ownKeys(Object(source), true).forEach(function (key) { use_logout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_logout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_logout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const use_logout_fetcher = default_fetcher/* mutationFetcher */.B5;

const use_logout_fn = provider => {
  var _provider$auth;

  return (_provider$auth = provider.auth) === null || _provider$auth === void 0 ? void 0 : _provider$auth.useLogout;
};

const useLogout = (...args) => {
  const hook = (0,use_hook/* useHook */.dV)(use_logout_fn);
  return (0,use_hook/* useMutationHook */.wf)(use_logout_objectSpread({
    fetcher: use_logout_fetcher
  }, hook))(...args);
};

/* harmony default export */ var use_logout = (useLogout);
;// CONCATENATED MODULE: ./framework/local/auth/use-logout.tsx

/* harmony default export */ var auth_use_logout = (use_logout);
const use_logout_handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher() {
    return null;
  },

  useHook: ({
    fetch
  }) => () => async () => {}
};
// EXTERNAL MODULE: ./framework/local/auth/use-signup.tsx + 1 modules
var use_signup = __webpack_require__(4233);
;// CONCATENATED MODULE: ./framework/local/provider.ts










const localProvider = {
  locale: 'en-us',
  cartCookie: 'session',
  fetcher: fetcher,
  cart: {
    useCart: use_cart/* handler */.y,
    useAddItem: use_add_item/* handler */.y,
    useUpdateItem: use_update_item/* handler */.y,
    useRemoveItem: use_remove_item/* handler */.y
  },
  customer: {
    useCustomer: use_customer/* handler */.y
  },
  products: {
    useSearch: use_search/* handler */.y
  },
  auth: {
    useLogin: handler,
    useLogout: use_logout_handler,
    useSignup: use_signup/* handler */.y
  }
};
// EXTERNAL MODULE: ./framework/commerce/index.tsx
var commerce = __webpack_require__(5112);
;// CONCATENATED MODULE: ./framework/local/index.tsx


function local_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function local_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { local_ownKeys(Object(source), true).forEach(function (key) { local_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { local_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function local_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const localConfig = {
  locale: 'en-us',
  cartCookie: 'session'
};
function CommerceProvider(_ref) {
  let {
    children
  } = _ref,
      config = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/jsx_runtime_.jsx(commerce/* CommerceProvider */.S, {
    provider: localProvider,
    config: local_objectSpread(local_objectSpread({}, localConfig), config),
    children: children
  });
}
const useCommerce = () => useCoreCommerce();
// EXTERNAL MODULE: ./components/ui/context.tsx
var context = __webpack_require__(7079);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/common/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__(9641);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: external "lodash.throttle"
var external_lodash_throttle_ = __webpack_require__(1602);
var external_lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(external_lodash_throttle_);
;// CONCATENATED MODULE: ./components/common/Navbar/NavbarRoot.tsx






const NavbarRoot = ({
  children
}) => {
  const {
    0: hasScrolled,
    1: setHasScrolled
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const handleScroll = external_lodash_throttle_default()(() => {
      const offset = 0;
      const {
        scrollTop
      } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()((Navbar_module_default()).root, {
      'shadow-magical': hasScrolled
    }),
    children: children
  });
};

/* harmony default export */ var Navbar_NavbarRoot = (NavbarRoot);
// EXTERNAL MODULE: ./components/ui/Container/Container.tsx
var Container = __webpack_require__(9698);
// EXTERNAL MODULE: ./components/ui/Logo/Logo.tsx
var Logo = __webpack_require__(3668);
// EXTERNAL MODULE: ./components/common/Searchbar/Searchbar.module.css
var Searchbar_module = __webpack_require__(8328);
var Searchbar_module_default = /*#__PURE__*/__webpack_require__.n(Searchbar_module);
;// CONCATENATED MODULE: ./components/common/Searchbar/Searchbar.tsx







const Searchbar = ({
  className,
  id = 'search'
}) => {
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    router.prefetch('/search');
  }, [router]);

  const handleKeyUp = e => {
    e.preventDefault();

    if (e.key === 'Enter') {
      const q = e.currentTarget.value;
      router.push({
        pathname: `/search`,
        query: q ? {
          q
        } : {}
      }, undefined, {
        shallow: true
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()((Searchbar_module_default()).root, className),
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      className: "hidden",
      htmlFor: id,
      children: "Search"
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      id: id,
      className: (Searchbar_module_default()).input,
      placeholder: "Search for products...",
      defaultValue: router.query.q,
      onKeyUp: handleKeyUp
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Searchbar_module_default()).iconContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: (Searchbar_module_default()).icon,
        fill: "currentColor",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        })
      })
    })]
  });
};

/* harmony default export */ var Searchbar_Searchbar = (/*#__PURE__*/(0,external_react_.memo)(Searchbar));
// EXTERNAL MODULE: ./lib/colors.ts
var colors = __webpack_require__(6696);
;// CONCATENATED MODULE: ./lib/hooks/useUserAvatar.ts



const useUserAvatar = (name = 'userAvatar') => {
  const {
    userAvatar,
    setUserAvatar
  } = (0,context/* useUI */.l8)();
  (0,external_react_.useEffect)(() => {
    if (!userAvatar && localStorage.getItem(name)) {
      // Get bg from localStorage and push it to the context.
      setUserAvatar(localStorage.getItem(name));
    }

    if (!localStorage.getItem(name)) {
      // bg not set locally, generating one, setting localStorage and context to persist.
      const bg = (0,colors/* getRandomPairOfColors */.uo)();
      const value = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`;
      localStorage.setItem(name, value);
      setUserAvatar(value);
    }
  }, []);
  return {
    userAvatar,
    setUserAvatar
  };
};
;// CONCATENATED MODULE: ./components/common/Avatar/Avatar.tsx




const Avatar = ({}) => {
  let ref = (0,external_react_.useRef)();
  let {
    userAvatar
  } = useUserAvatar();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: ref,
    style: {
      backgroundImage: userAvatar
    },
    className: "inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"
  });
};

/* harmony default export */ var Avatar_Avatar = (Avatar);
// EXTERNAL MODULE: ./components/icons/Bag.tsx
var Bag = __webpack_require__(3426);
// EXTERNAL MODULE: ./components/icons/Heart.tsx
var Heart = __webpack_require__(8909);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(2517);
// EXTERNAL MODULE: ./components/common/UserNav/DropdownMenu.module.css
var DropdownMenu_module = __webpack_require__(9022);
var DropdownMenu_module_default = /*#__PURE__*/__webpack_require__.n(DropdownMenu_module);
;// CONCATENATED MODULE: ./components/icons/Moon.tsx


function Moon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Moon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Moon_ownKeys(Object(source), true).forEach(function (key) { Moon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Moon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Moon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Moon = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("svg", Moon_objectSpread(Moon_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    })
  }));
};

/* harmony default export */ var icons_Moon = (Moon);
;// CONCATENATED MODULE: ./components/icons/Sun.tsx



function Sun_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Sun_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Sun_ownKeys(Object(source), true).forEach(function (key) { Sun_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Sun_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Sun_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Sun = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", Sun_objectSpread(Sun_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 1v2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 21v2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.22 4.22l1.42 1.42"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M18.36 18.36l1.42 1.42"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M1 12h2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21 12h2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.22 19.78l1.42-1.42"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M18.36 5.64l1.42-1.42"
    })]
  }));
};

/* harmony default export */ var icons_Sun = (Sun);
;// CONCATENATED MODULE: ./lib/click-outside/is-in-dom.js
function isInDom(obj) {
  return Boolean(obj.closest('body'));
}
;// CONCATENATED MODULE: ./lib/click-outside/has-parent.js

function hasParent(element, root) {
  return root && root.contains(element) && isInDom(element);
}
;// CONCATENATED MODULE: ./lib/click-outside/click-outside.tsx



const ClickOutside = ({
  active = true,
  onClick,
  children
}) => {
  const innerRef = (0,external_react_.useRef)();

  const handleClick = event => {
    if (!hasParent(event.target, innerRef === null || innerRef === void 0 ? void 0 : innerRef.current)) {
      if (typeof onClick === 'function') {
        onClick(event);
      }
    }
  };

  (0,external_react_.useEffect)(() => {
    if (active) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
    }

    return () => {
      if (active) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      }
    };
  });
  return /*#__PURE__*/external_react_default().cloneElement(children, {
    ref: innerRef
  });
};

/* harmony default export */ var click_outside = (ClickOutside);
// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(8023);
;// CONCATENATED MODULE: ./components/common/UserNav/DropdownMenu.tsx














const LINKS = [{
  name: 'My Orders',
  href: '/orders'
}, {
  name: 'My Profile',
  href: '/profile'
}, {
  name: 'My Cart',
  href: '/cart'
}];

const DropdownMenu = ({
  open = false
}) => {
  const logout = auth_use_logout();
  const {
    pathname
  } = (0,router_.useRouter)();
  const {
    theme,
    setTheme
  } = (0,external_next_themes_.useTheme)();
  const {
    0: display,
    1: setDisplay
  } = (0,external_react_.useState)(false);
  const {
    closeSidebarIfPresent
  } = (0,context/* useUI */.l8)();
  const ref = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    if (ref.current) {
      if (display) {
        (0,external_body_scroll_lock_.disableBodyScroll)(ref.current);
      } else {
        (0,external_body_scroll_lock_.enableBodyScroll)(ref.current);
      }
    }

    return () => {
      (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
    };
  }, [display]);
  return /*#__PURE__*/jsx_runtime_.jsx(click_outside, {
    active: display,
    onClick: () => setDisplay(false),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (DropdownMenu_module_default()).avatarButton,
        onClick: () => setDisplay(!display),
        "aria-label": "Menu",
        children: /*#__PURE__*/jsx_runtime_.jsx(Avatar_Avatar, {})
      }), display && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (DropdownMenu_module_default()).dropdownMenu,
        ref: ref,
        children: [LINKS.map(({
          name,
          href
        }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: href,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: external_classnames_default()((DropdownMenu_module_default()).link, {
                  [(DropdownMenu_module_default()).active]: pathname === href
                }),
                onClick: () => {
                  setDisplay(false);
                  closeSidebarIfPresent();
                },
                children: name
              })
            })
          })
        }, href)), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: external_classnames_default()((DropdownMenu_module_default()).link, 'justify-between'),
            onClick: () => {
              theme === 'dark' ? setTheme('light') : setTheme('dark');
              setDisplay(false);
            },
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: ["Theme: ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: theme
              }), ' ']
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ml-3",
              children: theme == 'dark' ? /*#__PURE__*/jsx_runtime_.jsx(icons_Moon, {
                width: 20,
                height: 20
              }) : /*#__PURE__*/jsx_runtime_.jsx(icons_Sun, {
                width: "20",
                height: 20
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: external_classnames_default()((DropdownMenu_module_default()).link, 'border-t border-accent-2 mt-4'),
            onClick: () => logout(),
            children: "Logout"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var UserNav_DropdownMenu = (DropdownMenu);
// EXTERNAL MODULE: ./components/common/UserNav/UserNav.module.css
var UserNav_module = __webpack_require__(5715);
var UserNav_module_default = /*#__PURE__*/__webpack_require__.n(UserNav_module);
;// CONCATENATED MODULE: ./components/common/UserNav/UserNav.tsx












const countItem = (count, item) => count + item.quantity;

const UserNav = ({
  className
}) => {
  var _data$lineItems$reduc;

  const {
    data
  } = (0,use_cart/* default */.Z)();
  const {
    data: customer
  } = (0,use_customer/* default */.Z)();
  const {
    toggleSidebar,
    closeSidebarIfPresent,
    openModal
  } = (0,context/* useUI */.l8)();
  const itemsCount = (_data$lineItems$reduc = data === null || data === void 0 ? void 0 : data.lineItems.reduce(countItem, 0)) !== null && _data$lineItems$reduc !== void 0 ? _data$lineItems$reduc : 0;
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: external_classnames_default()((UserNav_module_default()).root, className),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (UserNav_module_default()).list,
      children: [process.env.COMMERCE_CART_ENABLED && /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: (UserNav_module_default()).item,
        onClick: toggleSidebar,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Bag/* default */.Z, {}), itemsCount > 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (UserNav_module_default()).bagCount,
          children: itemsCount
        })]
      }), process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (UserNav_module_default()).item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/wishlist",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: closeSidebarIfPresent,
            "aria-label": "Wishlist",
            children: /*#__PURE__*/jsx_runtime_.jsx(Heart/* default */.Z, {})
          })
        })
      }), process.env.COMMERCE_CUSTOMERAUTH_ENABLED && /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (UserNav_module_default()).item,
        children: customer ? /*#__PURE__*/jsx_runtime_.jsx(UserNav_DropdownMenu, {}) : /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (UserNav_module_default()).avatarButton,
          "aria-label": "Menu",
          onClick: () => openModal(),
          children: /*#__PURE__*/jsx_runtime_.jsx(Avatar_Avatar, {})
        })
      })]
    })
  });
};

/* harmony default export */ var UserNav_UserNav = (UserNav);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1471);
;// CONCATENATED MODULE: ./components/common/Navbar/Navbar.tsx


// import { FC } from 'react'
// import Link from 'next/link'
// import s from './Navbar.module.css'
// import NavbarRoot from './NavbarRoot'
// import { Logo, Container } from '@components/ui'
// import { Searchbar, UserNav } from '@components/common'
// interface Link {
//   href: string
//   label: string
// }
// interface NavbarProps {
//   links?: Link[]
// }
// const Navbar: FC<NavbarProps> = ({ links }) => (
//   <NavbarRoot>
//     <Container>
//       <div className={s.nav}>
//         <div className="flex items-center flex-1">
//           <Link href="/">
//             <a className={s.logo} aria-label="Logo">
//               <Logo />
//             </a>
//           </Link>
//           <nav className={s.navMenu}>
//             <Link href="/search">
//               <a className={s.link}>All</a>
//             </Link>
//             {links?.map((l) => (
//               <Link href={l.href} key={l.href}>
//                 <a className={s.link}>{l.label}</a>
//               </Link>
//             ))}
//           </nav>
//         </div>
//         {process.env.COMMERCE_SEARCH_ENABLED && (
//           <div className="justify-center flex-1 hidden lg:flex">
//             <Searchbar />
//           </div>
//         )}
//         <div className="flex items-center justify-end flex-1 space-x-8">
//           <UserNav />
//         </div>
//       </div>
//       <div className="flex pb-4 lg:px-6 lg:hidden">
//         <Searchbar id="mobile-search" />
//       </div>
//     </Container>
//   </NavbarRoot>
// )
// export default Navbar
// Extra









const Navbar = ({
  links
}) => {
  const {
    0: categories
  } = (0,external_react_.useState)([{
    label: 'Flash Sales!',
    link: '/sales'
  }, {
    label: 'Back to Work',
    link: '/sales'
  }, {
    label: 'Student Discount',
    link: '/sales'
  }, {
    label: 'IPhone XS',
    link: '/sales'
  }, {
    label: 'Macbook',
    link: '/sales'
  }, {
    label: 'IPhone 11',
    link: '/sales'
  }, {
    label: 'IPhone',
    link: '/sales'
  }, {
    label: 'IPad',
    link: '/sales'
  }, {
    label: 'IPhone XR',
    link: '/sales'
  }, {
    label: 'Best Sellers',
    link: '/sales'
  }, {
    label: 'Apple Watch',
    link: '/sales'
  }, {
    label: 'Samsung Galaxy',
    link: '/sales'
  }, {
    label: 'Certified Renewed',
    link: '/sales'
  }, {
    label: 'IPhone X',
    link: '/sales'
  }, {
    label: 'Laptops',
    link: '/sales'
  }, {
    label: 'IPhone 8',
    link: '/sales'
  }, {
    label: 'Unlocked Phones',
    link: '/sales'
  }, {
    label: 'Monitors',
    link: '/sales'
  }, {
    label: 'iMac',
    link: '/sales'
  }, {
    label: 'Video Game Consoles',
    link: '/sales'
  }, {
    label: 'Tablet',
    link: '/sales'
  }, {
    label: 'Audio',
    link: '/sales'
  }, {
    label: 'AirPods',
    link: '/sales'
  }, {
    label: 'Chromebooks',
    link: '/sales'
  }, {
    label: 'Macbook Airs',
    link: '/sales'
  }, {
    label: '5G Phones',
    link: '/sales'
  }]);
  const [sliderRef] = (0,react_.useKeenSlider)({
    slidesPerView: 10,
    mode: 'free',
    spacing: 1
  });
  return /*#__PURE__*/jsx_runtime_.jsx(Navbar_NavbarRoot, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).nav,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center flex-1 w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Navbar_module_default()).logo,
              "aria-label": "Logo",
              children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {})
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden mx-2 w-1/2 md:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(Searchbar_Searchbar, {})
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: (Navbar_module_default()).navMenu,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/search",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (Navbar_module_default()).link,
                children: "All"
              })
            }), links === null || links === void 0 ? void 0 : links.map(l => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: l.href,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (Navbar_module_default()).link,
                children: l.label
              })
            }, l.href))]
          })]
        }), process.env.COMMERCE_SEARCH_ENABLED && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "justify-center flex-1 hidden lg:flex",
          children: /*#__PURE__*/jsx_runtime_.jsx(Searchbar_Searchbar, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex items-center justify-end flex-1 space-x-8",
          children: /*#__PURE__*/jsx_runtime_.jsx(UserNav_UserNav, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex pb-4 lg:px-6 lg:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(Searchbar_Searchbar, {
          id: "mobile-search"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hidden md:block",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          ref: sliderRef,
          className: "keen-slider",
          children: categories.map((cat, i) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: cat.link,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `keen-slider__slide slide`,
              children: cat.label
            })
          }, i))
        })
      })]
    })
  });
};

/* harmony default export */ var Navbar_Navbar = (Navbar);
// EXTERNAL MODULE: ./lib/get-slug.ts
var get_slug = __webpack_require__(7619);
// EXTERNAL MODULE: ./components/common/Footer/Footer.module.css
var Footer_module = __webpack_require__(5732);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/common/Footer/Footer.tsx








const links = [{
  name: 'Home',
  url: '/'
}];
const titleOfLinks = [{
  title: "About",
  links: ["mango", "banana", "apple", "guava", "strawberry"]
}, {
  title: "Help",
  links: ["mango", "banana", "apple", "guava", "strawberry"]
}, {
  title: "Law & order",
  links: ["mango", "banana", "apple", "guava", "strawberry"]
}, {
  title: "Hello!",
  links: ["mango", "banana", "apple", "guava", "strawberry"]
}];

const Footer = ({
  className,
  pages
}) => {
  const {
    sitePages
  } = usePages(pages);
  const rootClassName = external_classnames_default()((Footer_module_default()).root, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: `${rootClassName} bg-black p-4`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-4 text-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Hello! We're Back Market, the leading marketplace for renewed devices. Our mission? To fight e-waste by giving expertly restored devices a second life."
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 md:grid",
        children: titleOfLinks.map((tl, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "my-6 font-bold text-white text-xl",
            children: tl.title
          }), tl.links.map((l, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "!#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "my-2 font-thin text-white",
                children: l
              })
            })
          }, i))]
        }, i))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          background: "#E5E5E5",
          height: "0.5px"
        },
        className: "my-8 w-full"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\xA9 2020 ACME, Inc. All rights reserved."
        })
      })
    })]
  });
};

function usePages(pages) {
  const {
    locale
  } = (0,router_.useRouter)();
  const sitePages = [];

  if (pages) {
    pages.forEach(page => {
      const slug = page.url && (0,get_slug/* default */.Z)(page.url);
      if (!slug) return;
      if (locale && !slug.startsWith(`${locale}/`)) return;
      sitePages.push(page);
    });
  }

  return {
    sitePages: sitePages.sort(bySortOrder)
  };
} // Sort pages by the sort order assigned in the BC dashboard


function bySortOrder(a, b) {
  var _a$sort_order, _b$sort_order;

  return ((_a$sort_order = a.sort_order) !== null && _a$sort_order !== void 0 ? _a$sort_order : 0) - ((_b$sort_order = b.sort_order) !== null && _b$sort_order !== void 0 ? _b$sort_order : 0);
}

/* harmony default export */ var Footer_Footer = (Footer);
// EXTERNAL MODULE: ./components/checkout/ShippingView/ShippingView.module.css
var ShippingView_module = __webpack_require__(870);
var ShippingView_module_default = /*#__PURE__*/__webpack_require__.n(ShippingView_module);
// EXTERNAL MODULE: ./components/ui/Button/Button.tsx
var Button = __webpack_require__(1180);
// EXTERNAL MODULE: ./components/icons/Cross.tsx
var Cross = __webpack_require__(4246);
;// CONCATENATED MODULE: ./components/icons/ChevronLeft.tsx


function ChevronLeft_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ChevronLeft_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ChevronLeft_ownKeys(Object(source), true).forEach(function (key) { ChevronLeft_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ChevronLeft_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ChevronLeft_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ChevronLeft = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("svg", ChevronLeft_objectSpread(ChevronLeft_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M15 18l-6-6 6-6"
    })
  }));
};

/* harmony default export */ var icons_ChevronLeft = (ChevronLeft);
// EXTERNAL MODULE: ./components/common/SidebarLayout/SidebarLayout.module.css
var SidebarLayout_module = __webpack_require__(9520);
var SidebarLayout_module_default = /*#__PURE__*/__webpack_require__.n(SidebarLayout_module);
;// CONCATENATED MODULE: ./components/common/SidebarLayout/SidebarLayout.tsx








const SidebarLayout = ({
  children,
  className,
  handleClose,
  handleBack
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()((SidebarLayout_module_default()).root, className),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: (SidebarLayout_module_default()).header,
      children: [handleClose && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: handleClose,
        "aria-label": "Close",
        className: "hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Cross/* default */.Z, {
          className: "h-6 w-6 hover:text-accent-3"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-2 text-accent-7 text-sm ",
          children: "Close"
        })]
      }), handleBack && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: handleBack,
        "aria-label": "Go back",
        className: "hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none",
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_ChevronLeft, {
          className: "h-6 w-6 hover:text-accent-3"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-2 text-accent-7 text-xs",
          children: "Back"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (SidebarLayout_module_default()).nav,
        children: /*#__PURE__*/jsx_runtime_.jsx(UserNav_UserNav, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (SidebarLayout_module_default()).container,
      children: children
    })]
  });
};

/* harmony default export */ var SidebarLayout_SidebarLayout = (SidebarLayout);
;// CONCATENATED MODULE: ./components/checkout/ShippingView/ShippingView.tsx








const PaymentMethodView = () => {
  const {
    setSidebarView
  } = (0,context/* useUI */.l8)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarLayout_SidebarLayout, {
    handleBack: () => setSidebarView('CHECKOUT_VIEW'),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "px-4 sm:px-6 flex-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "pt-1 pb-8 text-2xl font-semibold tracking-wide cursor-pointer inline-block",
        children: "Shipping"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row my-3 items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (ShippingView_module_default()).radio,
            type: "radio"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-3 text-sm",
            children: "Same as billing address"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row my-3 items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (ShippingView_module_default()).radio,
            type: "radio"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-3 text-sm",
            children: "Use a different shipping address"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "border-accent-2 my-6"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid gap-3 grid-flow-row grid-cols-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((ShippingView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (ShippingView_module_default()).label,
              children: "First Name"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (ShippingView_module_default()).input
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((ShippingView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (ShippingView_module_default()).label,
              children: "Last Name"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (ShippingView_module_default()).input
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (ShippingView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (ShippingView_module_default()).label,
            children: "Company (Optional)"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (ShippingView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (ShippingView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (ShippingView_module_default()).label,
            children: "Street and House Number"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (ShippingView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (ShippingView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (ShippingView_module_default()).label,
            children: "Apartment, Suite, Etc. (Optional)"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (ShippingView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid gap-3 grid-flow-row grid-cols-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((ShippingView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (ShippingView_module_default()).label,
              children: "Postal Code"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (ShippingView_module_default()).input
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((ShippingView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (ShippingView_module_default()).label,
              children: "City"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (ShippingView_module_default()).input
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (ShippingView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (ShippingView_module_default()).label,
            children: "Country/Region"
          }), /*#__PURE__*/jsx_runtime_.jsx("select", {
            className: (ShippingView_module_default()).select,
            children: /*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Hong Kong"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sticky z-20 bottom-0 w-full right-0 left-0 py-12 bg-accent-0 border-t border-accent-2 px-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        Component: "a",
        width: "100%",
        variant: "ghost",
        children: "Continue"
      })
    })]
  });
};

/* harmony default export */ var ShippingView = (PaymentMethodView);
// EXTERNAL MODULE: ./components/cart/CartSidebarView/CartSidebarView.module.css
var CartSidebarView_module = __webpack_require__(7203);
var CartSidebarView_module_default = /*#__PURE__*/__webpack_require__.n(CartSidebarView_module);
// EXTERNAL MODULE: ./components/cart/CartItem/CartItem.tsx + 3 modules
var CartItem = __webpack_require__(6921);
// EXTERNAL MODULE: ./components/ui/Text/Text.tsx
var Text = __webpack_require__(2361);
// EXTERNAL MODULE: ./components/icons/Check.tsx
var Check = __webpack_require__(7207);
// EXTERNAL MODULE: ./framework/commerce/product/use-price.tsx
var use_price = __webpack_require__(5420);
;// CONCATENATED MODULE: ./components/cart/CartSidebarView/CartSidebarView.tsx














const CartSidebarView = () => {
  const {
    closeSidebar,
    setSidebarView
  } = (0,context/* useUI */.l8)();
  const {
    data,
    isLoading,
    isEmpty
  } = (0,use_cart/* default */.Z)();
  const {
    price: subTotal
  } = (0,use_price/* default */.ZP)(data && {
    amount: Number(data.subtotalPrice),
    currencyCode: data.currency.code
  });
  const {
    price: total
  } = (0,use_price/* default */.ZP)(data && {
    amount: Number(data.totalPrice),
    currencyCode: data.currency.code
  });

  const handleClose = () => closeSidebar();

  const goToCheckout = () => setSidebarView('CHECKOUT_VIEW');

  const error = null;
  const success = null;
  return /*#__PURE__*/jsx_runtime_.jsx(SidebarLayout_SidebarLayout, {
    className: external_classnames_default()({
      [(CartSidebarView_module_default()).empty]: error || success || isLoading || isEmpty
    }),
    handleClose: handleClose,
    children: isLoading || isEmpty ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1 px-4 flex flex-col justify-center items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary",
        children: /*#__PURE__*/jsx_runtime_.jsx(Bag/* default */.Z, {
          className: "absolute"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "pt-6 text-2xl font-bold tracking-wide text-center",
        children: "Your cart is empty"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-accent-3 px-10 text-center pt-2",
        children: "Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake."
      })]
    }) : error ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1 px-4 flex flex-col justify-center items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "border border-white rounded-full flex items-center justify-center w-16 h-16",
        children: /*#__PURE__*/jsx_runtime_.jsx(Cross/* default */.Z, {
          width: 24,
          height: 24
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "pt-6 text-xl font-light text-center",
        children: "We couldn\u2019t process the purchase. Please check your card information and try again."
      })]
    }) : success ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1 px-4 flex flex-col justify-center items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "border border-white rounded-full flex items-center justify-center w-16 h-16",
        children: /*#__PURE__*/jsx_runtime_.jsx(Check/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "pt-6 text-xl font-light text-center",
        children: "Thank you for your order."
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-4 sm:px-6 flex-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/cart",
          children: /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
            variant: "sectionHeading",
            onClick: handleClose,
            children: "My Cart"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (CartSidebarView_module_default()).lineItemsList,
          children: data.lineItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(CartItem/* default */.Z, {
            item: item,
            currencyCode: data.currency.code
          }, item.id))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-shrink-0 px-6 py-6 sm:px-6 sticky z-20 bottom-0 w-full right-0 left-0 bg-accent-0 border-t text-sm",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "pb-2",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex justify-between py-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Subtotal"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: subTotal
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex justify-between py-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Taxes"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Calculated at checkout"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex justify-between py-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Shipping"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-bold tracking-wide",
              children: "FREE"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-between border-t border-accent-2 py-3 font-bold mb-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Total"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: total
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: process.env.COMMERCE_CUSTOMCHECKOUT_ENABLED ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            Component: "a",
            width: "100%",
            onClick: goToCheckout,
            children: ["Proceed to Checkout (", total, ")"]
          }) : /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            href: "/checkout",
            Component: "a",
            width: "100%",
            children: "Proceed to Checkout"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var CartSidebarView_CartSidebarView = (CartSidebarView);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./lib/hooks/useAcceptCookies.ts


const COOKIE_NAME = 'accept_cookies';
const useAcceptCookies = () => {
  const {
    0: acceptedCookies,
    1: setAcceptedCookies
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    if (!external_js_cookie_default().get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    external_js_cookie_default().set(COOKIE_NAME, 'accepted', {
      expires: 365
    });
  };

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies
  };
};
// EXTERNAL MODULE: ./components/ui/Modal/Modal.module.css
var Modal_module = __webpack_require__(1209);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
// EXTERNAL MODULE: external "tabbable"
var external_tabbable_ = __webpack_require__(8047);
;// CONCATENATED MODULE: ./lib/focus-trap.tsx


function FocusTrap({
  children,
  focusFirst = false
}) {
  const root = external_react_default().useRef();
  const anchor = external_react_default().useRef(document.activeElement);

  const returnFocus = () => {
    // Returns focus to the last focused element prior to trap.
    if (anchor) {
      anchor.current.focus();
    }
  };

  const trapFocus = () => {
    // Focus the container element
    if (root.current) {
      root.current.focus();

      if (focusFirst) {
        selectFirstFocusableEl();
      }
    }
  };

  const selectFirstFocusableEl = () => {
    // Try to find focusable elements, if match then focus
    // Up to 6 seconds of load time threshold
    let match = false;
    let end = 60; // Try to find match at least n times

    let i = 0;
    const timer = setInterval(() => {
      if (!match !== i > end) {
        match = !!(0,external_tabbable_.tabbable)(root.current).length;

        if (match) {
          // Attempt to focus the first el
          (0,external_tabbable_.tabbable)(root.current)[0].focus();
        }

        i = i + 1;
      } else {
        // Clear interval after n attempts
        clearInterval(timer);
      }
    }, 100);
  };

  (0,external_react_.useEffect)(() => {
    setTimeout(trapFocus, 20);
    return () => {
      returnFocus();
    };
  }, [root, children]);
  return /*#__PURE__*/external_react_default().createElement('div', {
    ref: root,
    className: 'outline-none focus-trap',
    tabIndex: -1
  }, children);
}
;// CONCATENATED MODULE: ./components/ui/Modal/Modal.tsx








const Modal = ({
  children,
  onClose
}) => {
  const ref = (0,external_react_.useRef)();
  const handleKey = (0,external_react_.useCallback)(e => {
    if (e.key === 'Escape') {
      return onClose();
    }
  }, [onClose]);
  (0,external_react_.useEffect)(() => {
    const modal = ref.current;

    if (modal) {
      (0,external_body_scroll_lock_.disableBodyScroll)(modal, {
        reserveScrollBarGap: true
      });
      window.addEventListener('keydown', handleKey);
    }

    return () => {
      if (modal) {
        (0,external_body_scroll_lock_.enableBodyScroll)(modal);
      }

      (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Modal_module_default()).root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Modal_module_default()).modal,
      role: "dialog",
      ref: ref,
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => onClose(),
        "aria-label": "Close panel",
        className: (Modal_module_default()).close,
        children: /*#__PURE__*/jsx_runtime_.jsx(Cross/* default */.Z, {
          className: "h-6 w-6"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FocusTrap, {
        focusFirst: true,
        children: children
      })]
    })
  });
};

/* harmony default export */ var Modal_Modal = (Modal);
// EXTERNAL MODULE: ./components/ui/Sidebar/Sidebar.module.css
var Sidebar_module = __webpack_require__(4967);
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);
;// CONCATENATED MODULE: ./components/ui/Sidebar/Sidebar.tsx







const Sidebar = ({
  children,
  onClose
}) => {
  const ref = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    const sidebar = ref.current;

    if (sidebar) {
      (0,external_body_scroll_lock_.disableBodyScroll)(sidebar, {
        reserveScrollBarGap: true
      });
    }

    return () => {
      if (sidebar) (0,external_body_scroll_lock_.enableBodyScroll)(sidebar);
      (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
    };
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()((Sidebar_module_default()).root),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute inset-0 overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Sidebar_module_default()).backdrop,
        onClick: onClose
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "absolute inset-y-0 right-0 max-w-full flex outline-none pl-10",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "h-full w-full md:w-screen md:max-w-md",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Sidebar_module_default()).sidebar,
            ref: ref,
            children: children
          })
        })
      })]
    })
  });
};

/* harmony default export */ var Sidebar_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./components/ui/LoadingDots/LoadingDots.tsx
var LoadingDots = __webpack_require__(3667);
// EXTERNAL MODULE: ./components/checkout/PaymentMethodView/PaymentMethodView.module.css
var PaymentMethodView_module = __webpack_require__(1919);
var PaymentMethodView_module_default = /*#__PURE__*/__webpack_require__.n(PaymentMethodView_module);
;// CONCATENATED MODULE: ./components/checkout/PaymentMethodView/PaymentMethodView.tsx








const PaymentMethodView_PaymentMethodView = () => {
  const {
    setSidebarView
  } = (0,context/* useUI */.l8)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarLayout_SidebarLayout, {
    handleBack: () => setSidebarView('CHECKOUT_VIEW'),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "px-4 sm:px-6 flex-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
        variant: "sectionHeading",
        children: " Payment Method"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PaymentMethodView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (PaymentMethodView_module_default()).label,
            children: "Cardholder Name"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (PaymentMethodView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid gap-3 grid-flow-row grid-cols-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-7'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "Card Number"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-3'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "Expires"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input,
              placeholder: "MM/YY"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-2'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "CVC"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "border-accent-2 my-6"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid gap-3 grid-flow-row grid-cols-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "First Name"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "Last Name"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PaymentMethodView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (PaymentMethodView_module_default()).label,
            children: "Company (Optional)"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (PaymentMethodView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PaymentMethodView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (PaymentMethodView_module_default()).label,
            children: "Street and House Number"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (PaymentMethodView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PaymentMethodView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (PaymentMethodView_module_default()).label,
            children: "Apartment, Suite, Etc. (Optional)"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (PaymentMethodView_module_default()).input
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid gap-3 grid-flow-row grid-cols-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "Postal Code"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((PaymentMethodView_module_default()).fieldset, 'col-span-6'),
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: (PaymentMethodView_module_default()).label,
              children: "City"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (PaymentMethodView_module_default()).input
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PaymentMethodView_module_default()).fieldset,
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: (PaymentMethodView_module_default()).label,
            children: "Country/Region"
          }), /*#__PURE__*/jsx_runtime_.jsx("select", {
            className: (PaymentMethodView_module_default()).select,
            children: /*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Hong Kong"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sticky z-20 bottom-0 w-full right-0 left-0 py-12 bg-accent-0 border-t border-accent-2 px-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        Component: "a",
        width: "100%",
        variant: "ghost",
        children: "Continue"
      })
    })]
  });
};

/* harmony default export */ var checkout_PaymentMethodView_PaymentMethodView = (PaymentMethodView_PaymentMethodView);
// EXTERNAL MODULE: ./components/checkout/ShippingWidget/ShippingWidget.module.css
var ShippingWidget_module = __webpack_require__(665);
var ShippingWidget_module_default = /*#__PURE__*/__webpack_require__.n(ShippingWidget_module);
// EXTERNAL MODULE: ./components/icons/MapPin.tsx
var MapPin = __webpack_require__(7323);
// EXTERNAL MODULE: ./components/icons/ChevronRight.tsx
var ChevronRight = __webpack_require__(2760);
;// CONCATENATED MODULE: ./components/checkout/ShippingWidget/ShippingWidget.tsx





const ShippingWidget = ({
  onClick
}) => {
  /* Shipping Address 
  Only available with checkout set to true - 
  This means that the provider does offer checkout functionality. */
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: onClick,
    className: (ShippingWidget_module_default()).root,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-1 items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(MapPin/* default */.Z, {
        className: "w-5 flex"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ml-5 text-sm text-center font-medium",
        children: "Add Shipping Address"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(ChevronRight/* default */.Z, {})
    })]
  });
};

/* harmony default export */ var ShippingWidget_ShippingWidget = (ShippingWidget);
// EXTERNAL MODULE: ./components/checkout/PaymentWidget/PaymentWidget.module.css
var PaymentWidget_module = __webpack_require__(2965);
var PaymentWidget_module_default = /*#__PURE__*/__webpack_require__.n(PaymentWidget_module);
// EXTERNAL MODULE: ./components/icons/CreditCard.tsx
var CreditCard = __webpack_require__(4021);
;// CONCATENATED MODULE: ./components/checkout/PaymentWidget/PaymentWidget.tsx





const PaymentWidget = ({
  onClick
}) => {
  /* Shipping Address 
  Only available with checkout set to true - 
  This means that the provider does offer checkout functionality. */
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: onClick,
    className: (PaymentWidget_module_default()).root,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-1 items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(CreditCard/* default */.Z, {
        className: "w-5 flex"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ml-5 text-sm text-center font-medium",
        children: "Add Payment Method"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(ChevronRight/* default */.Z, {})
    })]
  });
};

/* harmony default export */ var PaymentWidget_PaymentWidget = (PaymentWidget);
// EXTERNAL MODULE: ./components/checkout/CheckoutSidebarView/CheckoutSidebarView.module.css
var CheckoutSidebarView_module = __webpack_require__(573);
var CheckoutSidebarView_module_default = /*#__PURE__*/__webpack_require__.n(CheckoutSidebarView_module);
;// CONCATENATED MODULE: ./components/checkout/CheckoutSidebarView/CheckoutSidebarView.tsx













const CheckoutSidebarView = () => {
  const {
    setSidebarView
  } = (0,context/* useUI */.l8)();
  const {
    data
  } = (0,use_cart/* default */.Z)();
  const {
    price: subTotal
  } = (0,use_price/* default */.ZP)(data && {
    amount: Number(data.subtotalPrice),
    currencyCode: data.currency.code
  });
  const {
    price: total
  } = (0,use_price/* default */.ZP)(data && {
    amount: Number(data.totalPrice),
    currencyCode: data.currency.code
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarLayout_SidebarLayout, {
    className: (CheckoutSidebarView_module_default()).root,
    handleBack: () => setSidebarView('CART_VIEW'),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "px-4 sm:px-6 flex-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/cart",
        children: /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
          variant: "sectionHeading",
          children: "Checkout"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(PaymentWidget_PaymentWidget, {
        onClick: () => setSidebarView('PAYMENT_VIEW')
      }), /*#__PURE__*/jsx_runtime_.jsx(ShippingWidget_ShippingWidget, {
        onClick: () => setSidebarView('SHIPPING_VIEW')
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (CheckoutSidebarView_module_default()).lineItemsList,
        children: data.lineItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(CartItem/* default */.Z, {
          item: item,
          currencyCode: data.currency.code,
          variant: "display"
        }, item.id))
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-shrink-0 px-6 py-6 sm:px-6 sticky z-20 bottom-0 w-full right-0 left-0 bg-accent-0 border-t text-sm",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "pb-2",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "flex justify-between py-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Subtotal"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: subTotal
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "flex justify-between py-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Taxes"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Calculated at checkout"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "flex justify-between py-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Shipping"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-bold tracking-wide",
            children: "FREE"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between border-t border-accent-2 py-3 font-bold mb-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Total"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: total
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          Component: "a",
          width: "100%",
          variant: "ghost",
          disabled: true,
          children: "Continue"
        })
      })]
    })]
  });
};

/* harmony default export */ var CheckoutSidebarView_CheckoutSidebarView = (CheckoutSidebarView);
// EXTERNAL MODULE: ./components/ui/Input/Input.tsx
var Input = __webpack_require__(7694);
// EXTERNAL MODULE: external "email-validator"
var external_email_validator_ = __webpack_require__(506);
;// CONCATENATED MODULE: ./components/auth/LoginView.tsx








const LoginView = () => {
  // Form State
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)('');
  const {
    0: dirty,
    1: setDirty
  } = (0,external_react_.useState)(false);
  const {
    0: disabled,
    1: setDisabled
  } = (0,external_react_.useState)(false);
  const {
    setModalView,
    closeModal
  } = (0,context/* useUI */.l8)();
  const login = auth_use_login();

  const handleLogin = async e => {
    e.preventDefault();

    if (!dirty && !disabled) {
      setDirty(true);
      handleValidation();
    }

    try {
      setLoading(true);
      setMessage('');
      await login({
        email,
        password
      });
      setLoading(false);
      closeModal();
    } catch ({
      errors
    }) {
      setMessage(errors[0].message);
      setLoading(false);
      setDisabled(false);
    }
  };

  const handleValidation = (0,external_react_.useCallback)(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password); // Unable to send form unless fields are valid.

    if (dirty) {
      setDisabled(!(0,external_email_validator_.validate)(email) || password.length < 7 || !validPassword);
    }
  }, [email, password, dirty]);
  (0,external_react_.useEffect)(() => {
    handleValidation();
  }, [handleValidation]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: handleLogin,
    className: "w-80 flex flex-col justify-between p-3",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center pb-12 ",
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {
        width: "64px",
        height: "64px"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col space-y-3",
      children: [message && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-red border border-red p-3",
        children: [message, ". Did you ", ` `, /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-accent-9 inline font-bold hover:underline cursor-pointer",
          onClick: () => setModalView('FORGOT_VIEW'),
          children: "forgot your password?"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        type: "email",
        placeholder: "Email",
        onChange: setEmail
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        type: "password",
        placeholder: "Password",
        onChange: setPassword
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        variant: "slim",
        type: "submit",
        loading: loading,
        disabled: disabled,
        children: "Log In"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pt-1 text-center text-sm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-accent-7",
          children: "Don't have an account?"
        }), ` `, /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-accent-9 font-bold hover:underline cursor-pointer",
          onClick: () => setModalView('SIGNUP_VIEW'),
          children: "Sign Up"
        })]
      })]
    })]
  });
};

/* harmony default export */ var auth_LoginView = (LoginView);
// EXTERNAL MODULE: ./components/common/Layout/Layout.module.css
var Layout_module = __webpack_require__(8493);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/common/Layout/Layout.tsx



function Layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const Loading = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "w-80 h-80 flex items-center text-center justify-center p-3",
  children: /*#__PURE__*/jsx_runtime_.jsx(LoadingDots/* default */.Z, {})
});

const dynamicProps = {
  loading: Loading
};
const SignUpView = dynamic_default()(() => __webpack_require__.e(/* import() */ 255).then(__webpack_require__.bind(__webpack_require__, 2255)), dynamicProps);
const ForgotPassword = dynamic_default()(() => __webpack_require__.e(/* import() */ 547).then(__webpack_require__.bind(__webpack_require__, 4547)), dynamicProps);
const FeatureBar = dynamic_default()(() => __webpack_require__.e(/* import() */ 169).then(__webpack_require__.bind(__webpack_require__, 7169)), dynamicProps);

const ModalView = ({
  modalView,
  closeModal
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal_Modal, {
    onClose: closeModal,
    children: [modalView === 'LOGIN_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(auth_LoginView, {}), modalView === 'SIGNUP_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(SignUpView, {}), modalView === 'FORGOT_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(ForgotPassword, {})]
  });
};

const ModalUI = () => {
  const {
    displayModal,
    closeModal,
    modalView
  } = (0,context/* useUI */.l8)();
  return displayModal ? /*#__PURE__*/jsx_runtime_.jsx(ModalView, {
    modalView: modalView,
    closeModal: closeModal
  }) : null;
};

const SidebarView = ({
  sidebarView,
  closeSidebar
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Sidebar_Sidebar, {
    onClose: closeSidebar,
    children: [sidebarView === 'CART_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(CartSidebarView_CartSidebarView, {}), sidebarView === 'CHECKOUT_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(CheckoutSidebarView_CheckoutSidebarView, {}), sidebarView === 'PAYMENT_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(checkout_PaymentMethodView_PaymentMethodView, {}), sidebarView === 'SHIPPING_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(ShippingView, {})]
  });
};

const SidebarUI = () => {
  const {
    displaySidebar,
    closeSidebar,
    sidebarView
  } = (0,context/* useUI */.l8)();
  return displaySidebar ? /*#__PURE__*/jsx_runtime_.jsx(SidebarView, {
    sidebarView: sidebarView,
    closeSidebar: closeSidebar
  }) : null;
};

const Layout = (_ref) => {
  let {
    children,
    pageProps: {
      categories = []
    }
  } = _ref,
      pageProps = Layout_objectWithoutProperties(_ref.pageProps, ["categories"]);

  const {
    acceptedCookies,
    onAcceptCookies
  } = useAcceptCookies();
  const {
    locale = 'en-US'
  } = (0,router_.useRouter)();
  const navBarlinks = categories.slice(0, 2).map(c => ({
    label: c.name,
    href: `/search/${c.slug}`
  }));
  return /*#__PURE__*/jsx_runtime_.jsx(CommerceProvider, {
    locale: locale,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()((Layout_module_default()).root),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar_Navbar, {
        links: navBarlinks
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "fit",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {
        pages: pageProps.pages
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalUI, {}), /*#__PURE__*/jsx_runtime_.jsx(SidebarUI, {}), /*#__PURE__*/jsx_runtime_.jsx(FeatureBar, {
        title: "This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.",
        hide: acceptedCookies,
        action: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          className: "mx-5",
          onClick: () => onAcceptCookies(),
          children: "Accept cookies"
        })
      })]
    })
  });
};

/* harmony default export */ var Layout_Layout = (Layout);

/***/ }),

/***/ 3426:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Bag = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    width: "20",
    height: "22",
    viewBox: "0 0 20 22",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M1 5H19",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Bag);

/***/ }),

/***/ 7207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Check = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M20 6L9 17L4 12",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Check);

/***/ }),

/***/ 2760:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ChevronUp = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M9 18l6-6-6-6"
    })
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (ChevronUp);

/***/ }),

/***/ 4021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CreditCard = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M1 10h22"
    })]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (CreditCard);

/***/ }),

/***/ 4246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Cross = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M18 6L6 18"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M6 6l12 12"
    })]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Cross);

/***/ }),

/***/ 8909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Heart = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M20.84 2.61C20.3292 2.099 19.7228 1.69365 19.0554 1.41708C18.3879 1.14052 17.6725 0.998175 16.95 0.998175C16.2275 0.998175 15.5121 1.14052 14.8446 1.41708C14.1772 1.69365 13.5708 2.099 13.06 2.61L12 3.67L10.94 2.61C9.9083 1.57831 8.50903 0.998709 7.05 0.998709C5.59096 0.998709 4.19169 1.57831 3.16 2.61C2.1283 3.64169 1.54871 5.04097 1.54871 6.5C1.54871 7.95903 2.1283 9.35831 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60536C22.3095 7.9379 22.4518 7.22249 22.4518 6.5C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72719 21.351 3.12076 20.84 2.61V2.61Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Heart);

/***/ }),

/***/ 7323:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const MapPin = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (MapPin);

/***/ }),

/***/ 1180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_merge_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(123);
/* harmony import */ var react_merge_refs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_merge_refs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8447);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3667);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button'
  } = props,
        rest = _objectWithoutProperties(props, ["className", "variant", "children", "active", "width", "loading", "disabled", "style", "Component"]);

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Button_module_css__WEBPACK_IMPORTED_MODULE_4___default().root), {
    [(_Button_module_css__WEBPACK_IMPORTED_MODULE_4___default().ghost)]: variant === 'ghost',
    [(_Button_module_css__WEBPACK_IMPORTED_MODULE_4___default().slim)]: variant === 'slim',
    [(_Button_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading)]: loading,
    [(_Button_module_css__WEBPACK_IMPORTED_MODULE_4___default().disabled)]: disabled
  }, className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, _objectSpread(_objectSpread({
    "aria-pressed": active,
    "data-variant": variant,
    ref: react_merge_refs__WEBPACK_IMPORTED_MODULE_3___default()([ref, buttonRef]),
    className: rootClassName,
    disabled: disabled,
    style: _objectSpread({
      width
    }, style)
  }, rest), {}, {
    children: [children, loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "pl-2 m-0 flex",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})
    })]
  }));
});
/* harmony default export */ __webpack_exports__["Z"] = (Button);

/***/ }),

/***/ 9698:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Container = ({
  children,
  className,
  el = 'div',
  clean
}) => {
  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'mx-auto max-w-8xl px-6': !clean
  });
  let Component = el;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
    className: rootClassName,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Container);

/***/ }),

/***/ 7694:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5080);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Input = props => {
  const {
    className,
    children,
    onChange
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "onChange"]);

  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Input_module_css__WEBPACK_IMPORTED_MODULE_3___default().root), {}, className);

  const handleOnChange = e => {
    if (onChange) {
      onChange(e.target.value);
    }

    return null;
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", _objectSpread({
      className: rootClassName,
      onChange: handleOnChange,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false"
    }, rest))
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Input);

/***/ }),

/***/ 3667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5591);
/* harmony import */ var _LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1__);




const LoadingDots = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: (_LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default().root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: (_LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default().dot)
    }, `dot_1`), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: (_LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default().dot)
    }, `dot_2`), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: (_LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default().dot)
    }, `dot_3`)]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (LoadingDots);

/***/ }),

/***/ 3668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Logo = (_ref) => {
  let {
    className = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
      width: "100%",
      height: "100%",
      rx: "16",
      fill: "var(--secondary)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
      fill: "var(--primary)"
    })]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Logo);

/***/ }),

/***/ 2361:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Text_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5331);
/* harmony import */ var _Text_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Text_module_css__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Text = ({
  style,
  className = '',
  variant = 'body',
  children,
  html,
  onClick
}) => {
  const componentsMap = {
    body: 'div',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2'
  };
  const Component = componentsMap[variant];
  const htmlContentProps = html ? {
    dangerouslySetInnerHTML: {
      __html: html
    }
  } : {};
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Text_module_css__WEBPACK_IMPORTED_MODULE_3___default().root), {
      [(_Text_module_css__WEBPACK_IMPORTED_MODULE_3___default().body)]: variant === 'body',
      [(_Text_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading)]: variant === 'heading',
      [(_Text_module_css__WEBPACK_IMPORTED_MODULE_3___default().pageHeading)]: variant === 'pageHeading',
      [(_Text_module_css__WEBPACK_IMPORTED_MODULE_3___default().sectionHeading)]: variant === 'sectionHeading'
    }, className),
    onClick: onClick,
    style: style
  }, htmlContentProps), {}, {
    children: children
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Text);

/***/ }),

/***/ 5112:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ CommerceProvider; },
/* harmony export */   "a": function() { return /* binding */ useCommerce; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Commerce = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function CommerceProvider({
  provider,
  children,
  config
}) {
  if (!config) {
    throw new Error('CommerceProvider requires a valid config object');
  }

  const providerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(provider); // TODO: Remove the fetcherRef

  const fetcherRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(provider.fetcher); // Because the config is an object, if the parent re-renders this provider
  // will re-render every consumer unless we memoize the config

  const cfg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    providerRef,
    fetcherRef,
    locale: config.locale,
    cartCookie: config.cartCookie
  }), [config.locale, config.cartCookie]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Commerce.Provider, {
    value: cfg,
    children: children
  });
}
function useCommerce() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Commerce);
}

/***/ }),

/***/ 5420:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ usePrice; }
/* harmony export */ });
/* unused harmony exports formatPrice, formatVariantPrice */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5112);


function formatPrice({
  amount,
  currencyCode,
  locale
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  });
  return formatCurrency.format(amount);
}
function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, {
    style: 'percent'
  });
  const discount = hasDiscount ? formatDiscount.format((baseAmount - amount) / baseAmount) : null;
  const price = formatPrice({
    amount,
    currencyCode,
    locale
  });
  const basePrice = hasDiscount ? formatPrice({
    amount: baseAmount,
    currencyCode,
    locale
  }) : null;
  return {
    price,
    basePrice,
    discount
  };
}
function usePrice(data) {
  const {
    amount,
    baseAmount,
    currencyCode
  } = data !== null && data !== void 0 ? data : {};
  const {
    locale
  } = (0,___WEBPACK_IMPORTED_MODULE_1__/* .useCommerce */ .a)();
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof amount !== 'number' || !currencyCode) return '';
    return baseAmount ? formatVariantPrice({
      amount,
      baseAmount,
      currencyCode,
      locale
    }) : formatPrice({
      amount,
      currencyCode,
      locale
    });
  }, [amount, baseAmount, currencyCode]);
  return typeof value === 'string' ? {
    price: value
  } : value;
}

/***/ }),

/***/ 3449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DO": function() { return /* binding */ SWRFetcher; },
/* harmony export */   "B5": function() { return /* binding */ mutationFetcher; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SWRFetcher = ({
  options,
  fetch
}) => fetch(options);
const mutationFetcher = ({
  input,
  options,
  fetch
}) => fetch(_objectSpread(_objectSpread({}, options), {}, {
  body: input
}));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SWRFetcher)));

/***/ }),

/***/ 250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dV": function() { return /* binding */ useHook; },
  "wf": function() { return /* binding */ useMutationHook; },
  "Lz": function() { return /* binding */ useSWRHook; }
});

// UNUSED EXPORTS: useFetcher

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./framework/commerce/index.tsx
var commerce = __webpack_require__(5112);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./framework/commerce/utils/define-property.ts
// Taken from https://fettblog.eu/typescript-assertion-signatures/
function defineProperty(obj, prop, val) {
  Object.defineProperty(obj, prop, val);
}
// EXTERNAL MODULE: ./framework/commerce/utils/errors.ts
var errors = __webpack_require__(6370);
;// CONCATENATED MODULE: ./framework/commerce/utils/use-data.tsx




const useData = (options, input, fetcherFn, swrOptions) => {
  const hookInput = Array.isArray(input) ? input : Object.entries(input);

  const fetcher = async (url, query, method, ...args) => {
    try {
      return await options.fetcher({
        options: {
          url,
          query,
          method
        },
        // Transform the input array into an object
        input: args.reduce((obj, val, i) => {
          obj[hookInput[i][0]] = val;
          return obj;
        }, {}),
        fetch: fetcherFn
      });
    } catch (error) {
      // SWR will not log errors, but any error that's not an instance
      // of CommerceError is not welcomed by this hook
      if (!(error instanceof errors/* CommerceError */.yG)) {
        console.error(error);
      }

      throw error;
    }
  };

  const response = external_swr_default()(() => {
    const opts = options.fetchOptions;
    return opts ? [opts.url, opts.query, opts.method, ...hookInput.map(e => e[1])] : null;
  }, fetcher, swrOptions);

  if (!('isLoading' in response)) {
    defineProperty(response, 'isLoading', {
      get() {
        return response.data === undefined;
      },

      enumerable: true
    });
  }

  return response;
};

/* harmony default export */ var use_data = (useData);
;// CONCATENATED MODULE: ./framework/commerce/utils/use-hook.ts



function useFetcher() {
  var _providerRef$current$;

  const {
    providerRef,
    fetcherRef
  } = (0,commerce/* useCommerce */.a)();
  return (_providerRef$current$ = providerRef.current.fetcher) !== null && _providerRef$current$ !== void 0 ? _providerRef$current$ : fetcherRef.current;
}
function useHook(fn) {
  const {
    providerRef
  } = (0,commerce/* useCommerce */.a)();
  const provider = providerRef.current;
  return fn(provider);
}
function useSWRHook(hook) {
  const fetcher = useFetcher();
  return hook.useHook({
    useData(ctx) {
      var _ctx$input;

      const response = use_data(hook, (_ctx$input = ctx === null || ctx === void 0 ? void 0 : ctx.input) !== null && _ctx$input !== void 0 ? _ctx$input : [], fetcher, ctx === null || ctx === void 0 ? void 0 : ctx.swrOptions);
      return response;
    }

  });
}
function useMutationHook(hook) {
  const fetcher = useFetcher();
  return hook.useHook({
    fetch: (0,external_react_.useCallback)(({
      input
    } = {}) => {
      return hook.fetcher({
        input,
        options: hook.fetchOptions,
        fetch: fetcher
      });
    }, [fetcher, hook.fetchOptions])
  });
}

/***/ }),

/***/ 4233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ auth_use_signup; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/auth/use-signup.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetcher = default_fetcher/* mutationFetcher */.B5;

const fn = provider => {
  var _provider$auth;

  return (_provider$auth = provider.auth) === null || _provider$auth === void 0 ? void 0 : _provider$auth.useSignup;
};

const useSignup = (...args) => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useMutationHook */.wf)(_objectSpread({
    fetcher
  }, hook))(...args);
};

/* harmony default export */ var use_signup = (useSignup);
;// CONCATENATED MODULE: ./framework/local/auth/use-signup.tsx

/* harmony default export */ var auth_use_signup = (use_signup);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher() {
    return null;
  },

  useHook: ({
    fetch
  }) => () => () => {}
};

/***/ }),

/***/ 3929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ cart_use_add_item; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/cart/use-add-item.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetcher = default_fetcher/* mutationFetcher */.B5;

const fn = provider => {
  var _provider$cart;

  return (_provider$cart = provider.cart) === null || _provider$cart === void 0 ? void 0 : _provider$cart.useAddItem;
};

const useAddItem = (...args) => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useMutationHook */.wf)(_objectSpread({
    fetcher
  }, hook))(...args);
};

/* harmony default export */ var use_add_item = (useAddItem);
;// CONCATENATED MODULE: ./framework/local/cart/use-add-item.tsx

/* harmony default export */ var cart_use_add_item = (use_add_item);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher({
    input,
    options,
    fetch
  }) {},

  useHook: ({
    fetch
  }) => () => {
    return async function addItem() {
      return {};
    };
  }
};

/***/ }),

/***/ 9620:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ cart_use_cart; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/index.tsx
var commerce = __webpack_require__(5112);
;// CONCATENATED MODULE: ./framework/commerce/cart/use-cart.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const fetcher = async ({
  options,
  input: {
    cartId
  },
  fetch
}) => {
  return cartId ? await fetch(options) : null;
};

const fn = provider => {
  var _provider$cart;

  return (_provider$cart = provider.cart) === null || _provider$cart === void 0 ? void 0 : _provider$cart.useCart;
};

const useCart = input => {
  var _hook$fetcher;

  const hook = (0,use_hook/* useHook */.dV)(fn);
  const {
    cartCookie
  } = (0,commerce/* useCommerce */.a)();
  const fetcherFn = (_hook$fetcher = hook.fetcher) !== null && _hook$fetcher !== void 0 ? _hook$fetcher : fetcher;

  const wrapper = context => {
    context.input.cartId = external_js_cookie_default().get(cartCookie);
    return fetcherFn(context);
  };

  return (0,use_hook/* useSWRHook */.Lz)(_objectSpread(_objectSpread({}, hook), {}, {
    fetcher: wrapper
  }))(input);
};

/* harmony default export */ var use_cart = (useCart);
;// CONCATENATED MODULE: ./framework/local/cart/use-cart.tsx


/* harmony default export */ var cart_use_cart = (use_cart);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher() {
    return {
      id: '',
      createdAt: '',
      currency: {
        code: ''
      },
      taxesIncluded: '',
      lineItems: [],
      lineItemsSubtotalPrice: '',
      subtotalPrice: 0,
      totalPrice: 0
    };
  },

  useHook: ({
    useData
  }) => input => {
    return (0,external_react_.useMemo)(() => Object.create({}, {
      isEmpty: {
        get() {
          return true;
        },

        enumerable: true
      }
    }), []);
  }
};

/***/ }),

/***/ 7968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ cart_use_remove_item; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/cart/use-remove-item.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetcher = default_fetcher/* mutationFetcher */.B5;

const fn = provider => {
  var _provider$cart;

  return (_provider$cart = provider.cart) === null || _provider$cart === void 0 ? void 0 : _provider$cart.useRemoveItem;
};

const useRemoveItem = input => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useMutationHook */.wf)(_objectSpread({
    fetcher
  }, hook))(input);
};

/* harmony default export */ var use_remove_item = (useRemoveItem);
;// CONCATENATED MODULE: ./framework/local/cart/use-remove-item.tsx

/* harmony default export */ var cart_use_remove_item = (use_remove_item);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher({
    input,
    options,
    fetch
  }) {},

  useHook: ({
    fetch
  }) => () => {
    return async function removeItem(input) {
      return {};
    };
  }
};

/***/ }),

/***/ 4034:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ cart_use_update_item; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/cart/use-update-item.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetcher = default_fetcher/* mutationFetcher */.B5;

const fn = provider => {
  var _provider$cart;

  return (_provider$cart = provider.cart) === null || _provider$cart === void 0 ? void 0 : _provider$cart.useUpdateItem;
};

const useUpdateItem = input => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useMutationHook */.wf)(_objectSpread({
    fetcher
  }, hook))(input);
};

/* harmony default export */ var use_update_item = (useUpdateItem);
;// CONCATENATED MODULE: ./framework/local/cart/use-update-item.tsx

/* harmony default export */ var cart_use_update_item = (use_update_item);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher({
    input,
    options,
    fetch
  }) {},

  useHook: ({
    fetch
  }) => () => {
    return async function addItem() {
      return {};
    };
  }
};

/***/ }),

/***/ 6708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ customer_use_customer; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/customer/use-customer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetcher = default_fetcher/* SWRFetcher */.DO;

const fn = provider => {
  var _provider$customer;

  return (_provider$customer = provider.customer) === null || _provider$customer === void 0 ? void 0 : _provider$customer.useCustomer;
};

const useCustomer = input => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useSWRHook */.Lz)(_objectSpread({
    fetcher
  }, hook))(input);
};

/* harmony default export */ var use_customer = (useCustomer);
;// CONCATENATED MODULE: ./framework/local/customer/use-customer.tsx

/* harmony default export */ var customer_use_customer = (use_customer);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher({
    input,
    options,
    fetch
  }) {},

  useHook: () => () => {
    return async function addItem() {
      return {};
    };
  }
};

/***/ }),

/***/ 8122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ product_use_search; },
  "y": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: ./framework/commerce/utils/use-hook.ts + 2 modules
var use_hook = __webpack_require__(250);
// EXTERNAL MODULE: ./framework/commerce/utils/default-fetcher.ts
var default_fetcher = __webpack_require__(3449);
;// CONCATENATED MODULE: ./framework/commerce/product/use-search.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetcher = default_fetcher/* SWRFetcher */.DO;

const fn = provider => {
  var _provider$products;

  return (_provider$products = provider.products) === null || _provider$products === void 0 ? void 0 : _provider$products.useSearch;
};

const useSearch = input => {
  const hook = (0,use_hook/* useHook */.dV)(fn);
  return (0,use_hook/* useSWRHook */.Lz)(_objectSpread({
    fetcher
  }, hook))(input);
};

/* harmony default export */ var use_search = (useSearch);
;// CONCATENATED MODULE: ./framework/local/product/use-search.tsx

/* harmony default export */ var product_use_search = (use_search);
const handler = {
  fetchOptions: {
    query: ''
  },

  async fetcher({
    input,
    options,
    fetch
  }) {},

  useHook: () => () => {
    return {
      data: {
        products: []
      }
    };
  }
};

/***/ }),

/***/ 6696:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uo": function() { return /* binding */ getRandomPairOfColors; },
/* harmony export */   "_T": function() { return /* binding */ isDark; }
/* harmony export */ });
/* unused harmony export colorMap */
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3739);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_0__);

function getRandomPairOfColors() {
  const colors = ['#37B679', '#DA3C3C', '#3291FF', '#7928CA', '#79FFE1'];

  const getRandomIdx = () => lodash_random__WEBPACK_IMPORTED_MODULE_0___default()(0, colors.length - 1);

  let idx = getRandomIdx();
  let idx2 = getRandomIdx(); // Has to be a different color

  while (idx2 === idx) {
    idx2 = getRandomIdx();
  } // Returns a pair of colors


  return [colors[idx], colors[idx2]];
}

function hexToRgb(hex = '') {
  // @ts-ignore
  const match = hex.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return [0, 0, 0];
  }

  let colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map(char => {
      return char + char;
    }).join('');
  }

  const integer = parseInt(colorString, 16);
  const r = integer >> 16 & 0xff;
  const g = integer >> 8 & 0xff;
  const b = integer & 0xff;
  return [r, g, b];
}

const colorMap = {
  aliceblue: '#F0F8FF',
  antiquewhite: '#FAEBD7',
  aqua: '#00FFFF',
  aquamarine: '#7FFFD4',
  azure: '#F0FFFF',
  beige: '#F5F5DC',
  bisque: '#FFE4C4',
  black: '#000000',
  blanchedalmond: '#FFEBCD',
  blue: '#0000FF',
  blueviolet: '#8A2BE2',
  brown: '#A52A2A',
  burlywood: '#DEB887',
  burgandy: '#800020',
  burgundy: '#800020',
  cadetblue: '#5F9EA0',
  chartreuse: '#7FFF00',
  chocolate: '#D2691E',
  coral: '#FF7F50',
  cornflowerblue: '#6495ED',
  cornsilk: '#FFF8DC',
  crimson: '#DC143C',
  cyan: '#00FFFF',
  darkblue: '#00008B',
  darkcyan: '#008B8B',
  darkgoldenrod: '#B8860B',
  darkgray: '#A9A9A9',
  darkgreen: '#006400',
  darkgrey: '#A9A9A9',
  darkkhaki: '#BDB76B',
  darkmagenta: '#8B008B',
  darkolivegreen: '#556B2F',
  darkorange: '#FF8C00',
  darkorchid: '#9932CC',
  darkred: '#8B0000',
  darksalmon: '#E9967A',
  darkseagreen: '#8FBC8F',
  darkslateblue: '#483D8B',
  darkslategray: '#2F4F4F',
  darkslategrey: '#2F4F4F',
  darkturquoise: '#00CED1',
  darkviolet: '#9400D3',
  deeppink: '#FF1493',
  deepskyblue: '#00BFFF',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1E90FF',
  firebrick: '#B22222',
  floralwhite: '#FFFAF0',
  forestgreen: '#228B22',
  fuchsia: '#FF00FF',
  gainsboro: '#DCDCDC',
  ghostwhite: '#F8F8FF',
  gold: '#FFD700',
  goldenrod: '#DAA520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#ADFF2F',
  grey: '#808080',
  honeydew: '#F0FFF0',
  hotpink: '#FF69B4',
  indianred: '#CD5C5C',
  indigo: '#4B0082',
  ivory: '#FFFFF0',
  khaki: '#F0E68C',
  lavender: '#E6E6FA',
  lavenderblush: '#FFF0F5',
  lawngreen: '#7CFC00',
  lemonchiffon: '#FFFACD',
  lightblue: '#ADD8E6',
  lightcoral: '#F08080',
  lightcyan: '#E0FFFF',
  lightgoldenrodyellow: '#FAFAD2',
  lightgray: '#D3D3D3',
  lightgreen: '#90EE90',
  lightgrey: '#D3D3D3',
  lightpink: '#FFB6C1',
  lightsalmon: '#FFA07A',
  lightseagreen: '#20B2AA',
  lightskyblue: '#87CEFA',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#B0C4DE',
  lightyellow: '#FFFFE0',
  lime: '#00FF00',
  limegreen: '#32CD32',
  linen: '#FAF0E6',
  magenta: '#FF00FF',
  maroon: '#800000',
  mediumaquamarine: '#66CDAA',
  mediumblue: '#0000CD',
  mediumorchid: '#BA55D3',
  mediumpurple: '#9370DB',
  mediumseagreen: '#3CB371',
  mediumslateblue: '#7B68EE',
  mediumspringgreen: '#00FA9A',
  mediumturquoise: '#48D1CC',
  mediumvioletred: '#C71585',
  midnightblue: '#191970',
  mintcream: '#F5FFFA',
  mistyrose: '#FFE4E1',
  moccasin: '#FFE4B5',
  navajowhite: '#FFDEAD',
  navy: '#000080',
  oldlace: '#FDF5E6',
  olive: '#808000',
  olivedrab: '#6B8E23',
  orange: '#FFA500',
  orangered: '#FF4500',
  orchid: '#DA70D6',
  palegoldenrod: '#EEE8AA',
  palegreen: '#98FB98',
  paleturquoise: '#AFEEEE',
  palevioletred: '#DB7093',
  papayawhip: '#FFEFD5',
  peachpuff: '#FFDAB9',
  peru: '#CD853F',
  pink: '#FFC0CB',
  plum: '#DDA0DD',
  powderblue: '#B0E0E6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#FF0000',
  rosybrown: '#BC8F8F',
  royalblue: '#4169E1',
  saddlebrown: '#8B4513',
  salmon: '#FA8072',
  sandybrown: '#F4A460',
  seagreen: '#2E8B57',
  seashell: '#FFF5EE',
  sienna: '#A0522D',
  silver: '#C0C0C0',
  skyblue: '#87CEEB',
  slateblue: '#6A5ACD',
  slategray: '#708090',
  slategrey: '#708090',
  spacegrey: '#65737e',
  spacegray: '#65737e',
  snow: '#FFFAFA',
  springgreen: '#00FF7F',
  steelblue: '#4682B4',
  tan: '#D2B48C',
  teal: '#008080',
  thistle: '#D8BFD8',
  tomato: '#FF6347',
  turquoise: '#40E0D0',
  violet: '#EE82EE',
  wheat: '#F5DEB3',
  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
  yellow: '#FFFF00',
  yellowgreen: '#9ACD32'
};
function isDark(color = '') {
  color = color.toLowerCase(); // Equation from http://24ways.org/2010/calculating-color-contrast

  let rgb = colorMap[color] ? hexToRgb(colorMap[color]) : hexToRgb(color);
  const res = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return res < 128;
}

/***/ }),

/***/ 7619:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// Remove trailing and leading slash, usually included in nodes
// returned by the BigCommerce API
const getSlug = path => path.replace(/^\/|\/$/g, '');

/* harmony default export */ __webpack_exports__["Z"] = (getSlug);

/***/ }),

/***/ 1722:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CartItem_root__c20Bc",
	"quantity": "CartItem_quantity__3Fqwn",
	"productImage": "CartItem_productImage__DGtit",
	"productName": "CartItem_productName__x9t-a"
};


/***/ }),

/***/ 7203:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CartSidebarView_root__1FB8C",
	"empty": "CartSidebarView_empty__3CEEB",
	"lineItemsList": "CartSidebarView_lineItemsList__CqSTF"
};


/***/ }),

/***/ 573:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CheckoutSidebarView_root__mWfoJ",
	"lineItemsList": "CheckoutSidebarView_lineItemsList__3hTBY"
};


/***/ }),

/***/ 1919:
/***/ (function(module) {

// Exports
module.exports = {
	"fieldset": "PaymentMethodView_fieldset__1XYFj",
	"label": "PaymentMethodView_label__2DzVJ",
	"input": "PaymentMethodView_input__170YE",
	"select": "PaymentMethodView_select__1l_OK"
};


/***/ }),

/***/ 2965:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "PaymentWidget_root__2nSxp"
};


/***/ }),

/***/ 870:
/***/ (function(module) {

// Exports
module.exports = {
	"fieldset": "ShippingView_fieldset__3FxRw",
	"label": "ShippingView_label__1UsU5",
	"input": "ShippingView_input__1DcNk",
	"select": "ShippingView_select__3_CAg",
	"radio": "ShippingView_radio__26pc1"
};


/***/ }),

/***/ 665:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "ShippingWidget_root__1W1oD"
};


/***/ }),

/***/ 5732:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Footer_root__3bxSy",
	"link": "Footer_link__fkLYy"
};


/***/ }),

/***/ 8493:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Layout_root__3wCB1"
};


/***/ }),

/***/ 9641:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Navbar_root__2kbI9",
	"nav": "Navbar_nav__2tz61",
	"navMenu": "Navbar_navMenu__2ZaDY",
	"link": "Navbar_link__3Blki",
	"logo": "Navbar_logo__26S5Y"
};


/***/ }),

/***/ 8328:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Searchbar_root__iwmvb",
	"input": "Searchbar_input__2JN1M",
	"iconContainer": "Searchbar_iconContainer__266wB",
	"icon": "Searchbar_icon__2Ux5V"
};


/***/ }),

/***/ 9520:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "SidebarLayout_root__1-vsK",
	"header": "SidebarLayout_header__3u5pF",
	"container": "SidebarLayout_container__2gaoF"
};


/***/ }),

/***/ 9022:
/***/ (function(module) {

// Exports
module.exports = {
	"dropdownMenu": "DropdownMenu_dropdownMenu__3ngC9",
	"link": "DropdownMenu_link__ii4yk",
	"active": "DropdownMenu_active__1WomL",
	"off": "DropdownMenu_off__3lefF"
};


/***/ }),

/***/ 5715:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "UserNav_root__343id",
	"list": "UserNav_list__izHGy",
	"item": "UserNav_item__2sdMO",
	"bagCount": "UserNav_bagCount__160W0",
	"avatarButton": "UserNav_avatarButton__1O6kn"
};


/***/ }),

/***/ 8447:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Button_root__24MxS",
	"loading": "Button_loading__3wWH3",
	"slim": "Button_slim__2caxo",
	"ghost": "Button_ghost__32qxu",
	"disabled": "Button_disabled__1a8b5",
	"progress": "Button_progress__49J77"
};


/***/ }),

/***/ 5080:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Input_root__2vmVG"
};


/***/ }),

/***/ 5591:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "LoadingDots_root__jXGQk",
	"dot": "LoadingDots_dot__2IH0E",
	"blink": "LoadingDots_blink__2xsJ2"
};


/***/ }),

/***/ 1209:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Modal_root__PFjop",
	"modal": "Modal_modal__3I0HK",
	"close": "Modal_close__KdiQG"
};


/***/ }),

/***/ 5105:
/***/ (function(module) {

// Exports
module.exports = {
	"actions": "Quantity_actions__wWpcD",
	"input": "Quantity_input__3q7WP"
};


/***/ }),

/***/ 4967:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Sidebar_root__gdPr3",
	"sidebar": "Sidebar_sidebar__2rkFM",
	"backdrop": "Sidebar_backdrop__1RVI2"
};


/***/ }),

/***/ 5331:
/***/ (function(module) {

// Exports
module.exports = {
	"body": "Text_body__V9VBQ",
	"heading": "Text_heading__1L02_",
	"pageHeading": "Text_pageHeading__3pj3m",
	"sectionHeading": "Text_sectionHeading__2H2XC"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;