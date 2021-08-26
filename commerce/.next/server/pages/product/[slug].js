(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 8884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Slug),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./lib/api/commerce.ts + 12 modules
var commerce = __webpack_require__(393);
// EXTERNAL MODULE: ./components/common/Layout/Layout.tsx + 33 modules
var Layout = __webpack_require__(4331);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: ./components/product/ProductView/ProductView.module.css
var ProductView_module = __webpack_require__(6734);
var ProductView_module_default = /*#__PURE__*/__webpack_require__.n(ProductView_module);
// EXTERNAL MODULE: ./framework/commerce/product/use-price.tsx
var use_price = __webpack_require__(5420);
// EXTERNAL MODULE: ./components/wishlist/WishlistButton/WishlistButton.tsx + 1 modules
var WishlistButton = __webpack_require__(8921);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1471);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@react-spring/web"
const web_namespaceObject = require("@react-spring/web");
// EXTERNAL MODULE: ./components/product/ProductSlider/ProductSlider.module.css
var ProductSlider_module = __webpack_require__(6041);
var ProductSlider_module_default = /*#__PURE__*/__webpack_require__.n(ProductSlider_module);
// EXTERNAL MODULE: ./components/product/ProductSliderControl/ProductSliderControl.module.css
var ProductSliderControl_module = __webpack_require__(9197);
var ProductSliderControl_module_default = /*#__PURE__*/__webpack_require__.n(ProductSliderControl_module);
;// CONCATENATED MODULE: ./components/icons/ArrowLeft.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ArrowLeft = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19 12H5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 19L5 12L12 5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));
};

/* harmony default export */ const icons_ArrowLeft = (ArrowLeft);
;// CONCATENATED MODULE: ./components/icons/ArrowRight.tsx



function ArrowRight_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArrowRight_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArrowRight_ownKeys(Object(source), true).forEach(function (key) { ArrowRight_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArrowRight_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArrowRight_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ArrowRight = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", ArrowRight_objectSpread(ArrowRight_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M5 12H19",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 5L19 12L12 19",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));
};

/* harmony default export */ const icons_ArrowRight = (ArrowRight);
;// CONCATENATED MODULE: ./components/product/ProductSliderControl/ProductSliderControl.tsx







const ProductSliderControl = ({
  onPrev,
  onNext
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: (ProductSliderControl_module_default()).control,
  children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
    className: external_classnames_default()((ProductSliderControl_module_default()).leftControl),
    onClick: onPrev,
    "aria-label": "Previous Product Image",
    children: /*#__PURE__*/jsx_runtime_.jsx(icons_ArrowLeft, {})
  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: external_classnames_default()((ProductSliderControl_module_default()).rightControl),
    onClick: onNext,
    "aria-label": "Next Product Image",
    children: /*#__PURE__*/jsx_runtime_.jsx(icons_ArrowRight, {})
  })]
});

/* harmony default export */ const ProductSliderControl_ProductSliderControl = (/*#__PURE__*/(0,external_react_.memo)(ProductSliderControl));
;// CONCATENATED MODULE: ./components/product/ProductSlider/ProductSlider.tsx



function ProductSlider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProductSlider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductSlider_ownKeys(Object(source), true).forEach(function (key) { ProductSlider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductSlider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductSlider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductSlider = ({
  children,
  className = ''
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  const {
    0: isMounted,
    1: setIsMounted
  } = (0,external_react_.useState)(false);
  const sliderContainerRef = (0,external_react_.useRef)(null);
  const thumbsContainerRef = (0,external_react_.useRef)(null);
  const [ref, slider] = (0,react_.useKeenSlider)({
    loop: true,
    slidesPerView: 1,
    mounted: () => setIsMounted(true),

    slideChanged(s) {
      const slideNumber = s.details().relativeSlide;
      setCurrentSlide(slideNumber);

      if (thumbsContainerRef.current) {
        const $el = document.getElementById(`thumb-${s.details().relativeSlide}`);

        if (slideNumber >= 3) {
          thumbsContainerRef.current.scrollLeft = $el.offsetLeft;
        } else {
          thumbsContainerRef.current.scrollLeft = 0;
        }
      }
    }

  }); // Stop the history navigation gesture on touch devices

  (0,external_react_.useEffect)(() => {
    const preventNavigation = event => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX; // Size of the touch area

      const touchXRadius = event.touches[0].radiusX || 0; // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.

      if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > window.innerWidth - 10) event.preventDefault();
    };

    const slider = sliderContainerRef.current;
    slider.addEventListener('touchstart', preventNavigation);
    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', preventNavigation);
      }
    };
  }, []);
  const onPrev = external_react_default().useCallback(() => slider.prev(), [slider]);
  const onNext = external_react_default().useCallback(() => slider.next(), [slider]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()((ProductSlider_module_default()).root, className),
    ref: sliderContainerRef,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      ref: ref,
      className: external_classnames_default()((ProductSlider_module_default()).slider, {
        [(ProductSlider_module_default()).show]: isMounted
      }, 'keen-slider'),
      children: [slider && /*#__PURE__*/jsx_runtime_.jsx(ProductSliderControl_ProductSliderControl, {
        onPrev: onPrev,
        onNext: onNext
      }), external_react_.Children.map(children, child => {
        // Add the keen-slider__slide className to children
        if ( /*#__PURE__*/(0,external_react_.isValidElement)(child)) {
          return ProductSlider_objectSpread(ProductSlider_objectSpread({}, child), {}, {
            props: ProductSlider_objectSpread(ProductSlider_objectSpread({}, child.props), {}, {
              className: `${child.props.className ? `${child.props.className} ` : ''}keen-slider__slide`
            })
          });
        }

        return child;
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(web_namespaceObject.a.div, {
      className: (ProductSlider_module_default()).album,
      ref: thumbsContainerRef,
      children: slider && external_react_.Children.map(children, (child, idx) => {
        if ( /*#__PURE__*/(0,external_react_.isValidElement)(child)) {
          return ProductSlider_objectSpread(ProductSlider_objectSpread({}, child), {}, {
            props: ProductSlider_objectSpread(ProductSlider_objectSpread({}, child.props), {}, {
              className: external_classnames_default()(child.props.className, (ProductSlider_module_default()).thumb, {
                [(ProductSlider_module_default()).selected]: currentSlide === idx
              }),
              id: `thumb-${idx}`,
              onClick: () => {
                slider.moveToSlideRelative(idx);
              }
            })
          });
        }

        return child;
      })
    })]
  });
};

/* harmony default export */ const ProductSlider_ProductSlider = (ProductSlider);
// EXTERNAL MODULE: ./components/product/ProductCard/ProductCard.tsx
var ProductCard = __webpack_require__(135);
// EXTERNAL MODULE: ./components/ui/Container/Container.tsx
var Container = __webpack_require__(9698);
// EXTERNAL MODULE: ./components/ui/Text/Text.tsx
var Text = __webpack_require__(2361);
// EXTERNAL MODULE: ./components/product/ProductSidebar/ProductSidebar.module.css
var ProductSidebar_module = __webpack_require__(284);
var ProductSidebar_module_default = /*#__PURE__*/__webpack_require__.n(ProductSidebar_module);
// EXTERNAL MODULE: ./framework/local/cart/use-add-item.tsx + 1 modules
var use_add_item = __webpack_require__(3929);
// EXTERNAL MODULE: ./components/product/Swatch/Swatch.module.css
var Swatch_module = __webpack_require__(2890);
var Swatch_module_default = /*#__PURE__*/__webpack_require__.n(Swatch_module);
// EXTERNAL MODULE: ./components/icons/Check.tsx
var Check = __webpack_require__(7207);
// EXTERNAL MODULE: ./components/ui/Button/Button.tsx
var Button = __webpack_require__(1180);
// EXTERNAL MODULE: ./lib/colors.ts
var colors = __webpack_require__(6696);
;// CONCATENATED MODULE: ./components/product/Swatch/Swatch.tsx



function Swatch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Swatch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Swatch_ownKeys(Object(source), true).forEach(function (key) { Swatch_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Swatch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Swatch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Swatch = /*#__PURE__*/external_react_default().memo((_ref) => {
  var _variant;

  let {
    active,
    className,
    color = '',
    label = null,
    variant = 'size'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["active", "className", "color", "label", "variant"]);

  variant = (_variant = variant) === null || _variant === void 0 ? void 0 : _variant.toLowerCase();

  if (label) {
    var _label;

    label = (_label = label) === null || _label === void 0 ? void 0 : _label.toLowerCase();
  }

  const swatchClassName = external_classnames_default()((Swatch_module_default()).swatch, {
    [(Swatch_module_default()).color]: color,
    [(Swatch_module_default()).active]: active,
    [(Swatch_module_default()).size]: variant === 'size',
    [(Swatch_module_default()).dark]: color ? (0,colors/* isDark */._T)(color) : false,
    [(Swatch_module_default()).textLabel]: !color && label && label.length > 3
  }, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, Swatch_objectSpread(Swatch_objectSpread(Swatch_objectSpread({
    "aria-label": "Variant Swatch",
    className: swatchClassName
  }, label && color && {
    title: label
  }), {}, {
    style: color ? {
      backgroundColor: color
    } : {}
  }, props), {}, {
    children: [color && active && /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Check/* default */.Z, {})
    }), !color ? label : null]
  }));
});
/* harmony default export */ const Swatch_Swatch = (Swatch);
;// CONCATENATED MODULE: ./components/product/ProductOptions/ProductOptions.tsx



function ProductOptions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProductOptions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductOptions_ownKeys(Object(source), true).forEach(function (key) { ProductOptions_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductOptions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductOptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ProductOptions = ({
  options,
  selectedOptions,
  setSelectedOptions
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: options.map(opt => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "pb-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "uppercase font-medium text-sm tracking-wide",
        children: opt.displayName
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-row py-4",
        children: opt.values.map((v, i) => {
          const active = selectedOptions[opt.displayName.toLowerCase()];
          return /*#__PURE__*/jsx_runtime_.jsx(Swatch_Swatch, {
            active: v.label.toLowerCase() === active,
            variant: opt.displayName,
            color: v.hexColors ? v.hexColors[0] : '',
            label: v.label,
            onClick: () => {
              setSelectedOptions(selectedOptions => {
                return ProductOptions_objectSpread(ProductOptions_objectSpread({}, selectedOptions), {}, {
                  [opt.displayName.toLowerCase()]: v.label.toLowerCase()
                });
              });
            }
          }, `${opt.id}-${i}`);
        })
      })]
    }, opt.displayName))
  });
};

/* harmony default export */ const ProductOptions_ProductOptions = (/*#__PURE__*/(0,external_react_.memo)(ProductOptions));
// EXTERNAL MODULE: ./components/ui/context.tsx
var context = __webpack_require__(7079);
// EXTERNAL MODULE: ./lib/range-map.ts
var range_map = __webpack_require__(9866);
;// CONCATENATED MODULE: ./components/icons/Star.tsx


function Star_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Star_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Star_ownKeys(Object(source), true).forEach(function (key) { Star_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Star_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Star_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Star = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("svg", Star_objectSpread(Star_objectSpread({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
    })
  }));
};

/* harmony default export */ const icons_Star = (Star);
;// CONCATENATED MODULE: ./components/ui/Rating/Rating.tsx






const Quantity = ({
  value = 5
}) => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "flex flex-row py-6 text-accent-9",
  children: (0,range_map/* default */.Z)(5, i => /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: external_classnames_default()('inline-block ml-1 ', {
      'text-accent-5': i >= Math.floor(value)
    }),
    children: /*#__PURE__*/jsx_runtime_.jsx(icons_Star, {})
  }, `star_${i}`))
});

/* harmony default export */ const Rating = (/*#__PURE__*/(0,external_react_.memo)(Quantity));
// EXTERNAL MODULE: ./components/ui/Collapse/Collapse.module.css
var Collapse_module = __webpack_require__(8752);
var Collapse_module_default = /*#__PURE__*/__webpack_require__.n(Collapse_module);
// EXTERNAL MODULE: ./components/icons/ChevronRight.tsx
var ChevronRight = __webpack_require__(2760);
;// CONCATENATED MODULE: external "react-use-measure"
const external_react_use_measure_namespaceObject = require("react-use-measure");
var external_react_use_measure_default = /*#__PURE__*/__webpack_require__.n(external_react_use_measure_namespaceObject);
;// CONCATENATED MODULE: ./components/ui/Collapse/Collapse.tsx



function Collapse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Collapse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Collapse_ownKeys(Object(source), true).forEach(function (key) { Collapse_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Collapse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Collapse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Collapse = /*#__PURE__*/external_react_default().memo(({
  title,
  children
}) => {
  const {
    0: isActive,
    1: setActive
  } = (0,external_react_.useState)(false);
  const [ref, {
    height: viewHeight
  }] = external_react_use_measure_default()();
  const animProps = (0,web_namespaceObject.useSpring)({
    height: isActive ? viewHeight : 0,
    config: {
      tension: 250,
      friction: 32,
      clamp: true,
      duration: 150
    },
    opacity: isActive ? 1 : 0
  });

  const toggle = () => setActive(x => !x);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Collapse_module_default()).root,
    role: "button",
    tabIndex: 0,
    "aria-expanded": isActive,
    onClick: toggle,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Collapse_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ChevronRight/* default */.Z, {
        className: external_classnames_default()((Collapse_module_default()).icon, {
          [(Collapse_module_default()).open]: isActive
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Collapse_module_default()).label,
        children: title
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(web_namespaceObject.a.div, {
      style: Collapse_objectSpread({
        overflow: 'hidden'
      }, animProps),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: ref,
        className: (Collapse_module_default()).content,
        children: children
      })
    })]
  });
});
/* harmony default export */ const Collapse_Collapse = (Collapse);
;// CONCATENATED MODULE: ./components/product/helpers.ts
function helpers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function helpers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { helpers_ownKeys(Object(source), true).forEach(function (key) { helpers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { helpers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function helpers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getProductVariant(product, opts) {
  const variant = product.variants.find(variant => {
    return Object.entries(opts).every(([key, value]) => variant.options.find(option => {
      if (option.__typename === 'MultipleChoiceOption' && option.displayName.toLowerCase() === key.toLowerCase()) {
        return option.values.find(v => v.label.toLowerCase() === value);
      }
    }));
  });
  return variant;
}
function selectDefaultOptionFromProduct(product, updater) {
  var _product$variants$0$o;

  // Selects the default option
  (_product$variants$0$o = product.variants[0].options) === null || _product$variants$0$o === void 0 ? void 0 : _product$variants$0$o.forEach(v => {
    updater(choices => helpers_objectSpread(helpers_objectSpread({}, choices), {}, {
      [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase()
    }));
  });
}
;// CONCATENATED MODULE: ./components/product/ProductSidebar/ProductSidebar.tsx









const ProductSidebar = ({
  product,
  className
}) => {
  const addItem = (0,use_add_item/* default */.Z)();
  const {
    openSidebar
  } = (0,context/* useUI */.l8)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: selectedOptions,
    1: setSelectedOptions
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions);
  }, [product]);
  const variant = getProductVariant(product, selectedOptions);

  const addToCart = async () => {
    setLoading(true);

    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id)
      });
      openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ProductOptions_ProductOptions, {
      options: product.options,
      selectedOptions: selectedOptions,
      setSelectedOptions: setSelectedOptions
    }), /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
      className: "pb-4 break-words w-full max-w-xl",
      html: product.descriptionHtml || product.description
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-row justify-between items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Rating, {
        value: 4
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-accent-6 pr-1 font-medium text-sm",
        children: "36 reviews"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: process.env.COMMERCE_CART_ENABLED && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        "aria-label": "Add to Cart",
        type: "button",
        className: (ProductSidebar_module_default()).button,
        onClick: addToCart,
        loading: loading,
        disabled: (variant === null || variant === void 0 ? void 0 : variant.availableForSale) === false,
        children: (variant === null || variant === void 0 ? void 0 : variant.availableForSale) === false ? 'Not Available' : 'Add To Cart'
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-6",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Collapse_Collapse, {
        title: "Care",
        children: "This is a limited edition production run. Printing starts when the drop ends."
      }), /*#__PURE__*/jsx_runtime_.jsx(Collapse_Collapse, {
        title: "Details",
        children: "This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19."
      })]
    })]
  });
};

/* harmony default export */ const ProductSidebar_ProductSidebar = (ProductSidebar);
// EXTERNAL MODULE: ./components/product/ProductTag/ProductTag.tsx
var ProductTag = __webpack_require__(8166);
;// CONCATENATED MODULE: ./components/product/ProductView/ProductView.tsx














const ProductView = ({
  product,
  relatedProducts
}) => {
  var _product$price, _product$images$;

  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      className: "max-w-none w-full",
      clean: true,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((ProductView_module_default()).root, 'fit'),
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: external_classnames_default()((ProductView_module_default()).main, 'fit'),
          children: [/*#__PURE__*/jsx_runtime_.jsx(ProductTag/* default */.Z, {
            name: product.name,
            price: `${price} ${(_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.currencyCode}`,
            fontSize: 32
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (ProductView_module_default()).sliderContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductSlider_ProductSlider, {
              children: product.images.map((image, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (ProductView_module_default()).imageContainer,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  className: (ProductView_module_default()).img,
                  src: image.url,
                  alt: image.alt || 'Product Image',
                  width: 600,
                  height: 600,
                  priority: i === 0,
                  quality: "85"
                })
              }, image.url))
            }, product.id)
          }), process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/jsx_runtime_.jsx(WishlistButton/* default */.Z, {
            className: (ProductView_module_default()).wishlistButton,
            productId: product.id,
            variant: product.variants[0]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductSidebar_ProductSidebar, {
          product: product,
          className: (ProductView_module_default()).sidebar
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "mt-7 border-accent-2"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "py-12 px-6 mb-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
          variant: "sectionHeading",
          children: "Related Products"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ProductView_module_default()).relatedProductsGrid,
          children: relatedProducts.map(p => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "animated fadeIn bg-accent-0 border border-accent-2",
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* default */.Z, {
              noNameTag: true,
              product: p,
              variant: "simple",
              className: "animated fadeIn",
              imgProps: {
                width: 300,
                height: 300
              }
            }, p.path)
          }, p.path))
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.NextSeo, {
      title: product.name,
      description: product.description,
      openGraph: {
        type: 'website',
        title: product.name,
        description: product.description,
        images: [{
          url: (_product$images$ = product.images[0]) === null || _product$images$ === void 0 ? void 0 : _product$images$.url,
          width: 800,
          height: 600,
          alt: product.name
        }]
      }
    })]
  });
};

/* harmony default export */ const ProductView_ProductView = (ProductView);
;// CONCATENATED MODULE: ./pages/product/[slug].tsx





async function getStaticProps({
  params,
  locale,
  locales,
  preview
}) {
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
  const productPromise = commerce/* default.getProduct */.Z.getProduct({
    variables: {
      slug: params.slug
    },
    config,
    preview
  });
  const allProductsPromise = commerce/* default.getAllProducts */.Z.getAllProducts({
    variables: {
      first: 4
    },
    config,
    preview
  });
  const {
    pages
  } = await pagesPromise;
  const {
    categories
  } = await siteInfoPromise;
  const {
    product
  } = await productPromise;
  const {
    products: relatedProducts
  } = await allProductsPromise;

  if (!product) {
    throw new Error(`Product with slug '${params.slug}' not found`);
  }

  return {
    props: {
      pages,
      product,
      relatedProducts,
      categories
    },
    revalidate: 200
  };
}
async function getStaticPaths({
  locales
}) {
  const {
    products
  } = await commerce/* default.getAllProductPaths */.Z.getAllProductPaths();
  return {
    paths: locales ? locales.reduce((arr, locale) => {
      // Add a product path for every locale
      products.forEach(product => {
        arr.push(`/${locale}/product${product.path}`);
      });
      return arr;
    }, []) : products.map(product => `/product${product.path}`),
    fallback: 'blocking'
  };
}
function Slug({
  product,
  relatedProducts
}) {
  const router = (0,router_.useRouter)();
  return router.isFallback ? /*#__PURE__*/jsx_runtime_.jsx("h1", {
    children: "Loading..."
  }) : /*#__PURE__*/jsx_runtime_.jsx(ProductView_ProductView, {
    product: product,
    relatedProducts: relatedProducts
  });
}
Slug.Layout = Layout/* default */.Z;

/***/ }),

/***/ 284:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductSidebar_root__qga5M",
	"main": "ProductSidebar_main__3Oyy6",
	"header": "ProductSidebar_header__HcNs9",
	"name": "ProductSidebar_name__yE98f",
	"price": "ProductSidebar_price__2Q6Tt",
	"sidebar": "ProductSidebar_sidebar__3rUk1",
	"sliderContainer": "ProductSidebar_sliderContainer__1W70l",
	"imageContainer": "ProductSidebar_imageContainer__27yCh",
	"img": "ProductSidebar_img__g0H1P",
	"button": "ProductSidebar_button__1qC_d",
	"wishlistButton": "ProductSidebar_wishlistButton__AbXX1",
	"relatedProductsGrid": "ProductSidebar_relatedProductsGrid__3LJ2R"
};


/***/ }),

/***/ 9197:
/***/ ((module) => {

// Exports
module.exports = {
	"control": "ProductSliderControl_control__tbCmw",
	"leftControl": "ProductSliderControl_leftControl__3sv86",
	"rightControl": "ProductSliderControl_rightControl__3T281"
};


/***/ }),

/***/ 6041:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductSlider_root__2cu05",
	"slider": "ProductSlider_slider__1hxLB",
	"show": "ProductSlider_show__2QLSC",
	"thumb": "ProductSlider_thumb__2ZyNn",
	"selected": "ProductSlider_selected__29OBB",
	"album": "ProductSlider_album__1MjxO"
};


/***/ }),

/***/ 6734:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductView_root__3DwjX",
	"main": "ProductView_main__37Daz",
	"sidebar": "ProductView_sidebar__17Whl",
	"sliderContainer": "ProductView_sliderContainer__3uuKd",
	"imageContainer": "ProductView_imageContainer__2j3w1",
	"img": "ProductView_img__2zrit",
	"button": "ProductView_button__37IG8",
	"wishlistButton": "ProductView_wishlistButton__3m9wF",
	"relatedProductsGrid": "ProductView_relatedProductsGrid__2nvyp"
};


/***/ }),

/***/ 2890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(8583);
// Exports
module.exports = {
	"swatch": "Swatch_swatch__1aJ-S " + ___CSS_LOADER_ICSS_IMPORT_0___["root"] + "",
	"color": "Swatch_color__11JL4",
	"dark": "Swatch_dark__38MqR",
	"active": "Swatch_active__1tGtw",
	"textLabel": "Swatch_textLabel__3g_3F"
};


/***/ }),

/***/ 8752:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Collapse_root__2DPn4",
	"header": "Collapse_header__3V6Am",
	"label": "Collapse_label__1zjtC",
	"content": "Collapse_content__4eNVf",
	"icon": "Collapse_icon__1PlZL",
	"open": "Collapse_open__mXeI0"
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

/***/ 2364:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,393,79,679,350], () => (__webpack_exec__(8884)));
module.exports = __webpack_exports__;

})();