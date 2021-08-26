"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./public/assets/ecommerce_carousel_3.jpg
/* harmony default export */ const ecommerce_carousel_3 = ({"src":"/_next/static/image/public/assets/ecommerce_carousel_3.108dbaf2ed55cdbfa5aff1ceb37a654c.jpg","height":360,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAAEP/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAEDEAAAADf/xAAeEAABBAEFAAAAAAAAAAAAAAABAgMEEQAFEiFBUv/aAAgBAQABPwCLEZXpSSRy5tN+bHWf/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAEiIy/9oACAECAQE/AAzWfR6n/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAxIiMv/aAAgBAwEBPwDBCteo5n//2Q=="});
;// CONCATENATED MODULE: ./public/assets/ecommerce_carousel_2.jpg
/* harmony default export */ const ecommerce_carousel_2 = ({"src":"/_next/static/image/public/assets/ecommerce_carousel_2.e7ab2cde3b51027a0465fc64883af8fa.jpg","height":420,"width":936,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAE//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAE//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAB//xAAbEAABBQEBAAAAAAAAAAAAAAABAgMTIXEAEf/aAAgBAQABPwCMyNIDiwCbwCk57ff/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAx/9oACAEDAQE/ANG//9k="});
;// CONCATENATED MODULE: ./public/assets/ecommerce_carousel.jpg
/* harmony default export */ const ecommerce_carousel = ({"src":"/_next/static/image/public/assets/ecommerce_carousel.121af1645e1837a288e27eedd8c36090.jpg","height":250,"width":750,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAFv/xAAUAQEAAAAAAAAAAAAAAAAAAAAG/9oACAECEAAAABf/xAAUAQEAAAAAAAAAAAAAAAAAAAAG/9oACAEDEAAAAEn/xAAZEAACAwEAAAAAAAAAAAAAAAABAwARIUH/2gAIAQEAAT8ASTTd5P/EABkRAAIDAQAAAAAAAAAAAAAAAAEDABEhQv/aAAgBAgEBPwBxNL3mf//EABcRAAMBAAAAAAAAAAAAAAAAAAADQnH/2gAIAQMBAT8AXen/2Q=="});
;// CONCATENATED MODULE: ./public/assets/ecommerce_carousel_4.jpg
/* harmony default export */ const ecommerce_carousel_4 = ({"src":"/_next/static/image/public/assets/ecommerce_carousel_4.8c3f79611920b1b3860aeda89a14fe83.jpg","height":255,"width":700,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAGH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAD//xAAYEAEBAAMAAAAAAAAAAAAAAAABAgADEv/aAAgBAQABPwDu7rYVSgwmf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAzL/2gAIAQIBAT8AlhH/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIy/9oACAEDAQE/AL0z/9k="});
// EXTERNAL MODULE: ./lib/api/commerce.ts + 12 modules
var commerce = __webpack_require__(393);
// EXTERNAL MODULE: ./components/common/Layout/Layout.tsx + 33 modules
var Layout = __webpack_require__(4331);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1471);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/ui/Carousel/Carousel.tsx






const Carousel = ({
  carousels
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  const {
    0: pause,
    1: setPause
  } = (0,external_react_.useState)(false);
  let timer;
  const [sliderRef, slider] = (0,react_.useKeenSlider)({
    loop: true,
    duration: 1000,
    initial: 0,
    slideChanged: s => setCurrentSlide(s.details().relativeSlide),
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    }
  });
  (0,external_react_.useEffect)(() => {
    var _sliderRef$current, _sliderRef$current2;

    sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.addEventListener('mouseover', () => setPause(true));
    sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.addEventListener('mouseout', () => setPause(false));
  }, [sliderRef]);
  (0,external_react_.useEffect)(() => {
    timer = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [pause, slider]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: sliderRef,
    className: "keen-slider",
    children: carousels.map((carousel, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "keen-slider__slide offer-slide",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: carousel.link,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: carousel.img
        })
      })
    }, i))
  });
};

/* harmony default export */ const Carousel_Carousel = (Carousel);
;// CONCATENATED MODULE: ./components/ui/ProductCat/Especially/EspeciallyForU.tsx



const EspeciallyForU = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "border-2 border-grey-200 bg-white p-4 rounded-md",
    children: children
  });
};

/* harmony default export */ const Especially_EspeciallyForU = (EspeciallyForU);
;// CONCATENATED MODULE: ./components/ui/AppCard/AppCard.tsx



const AppCard = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "p-8 bg-white rounded-md border-2 border-gray-200",
    children: children
  });
};

/* harmony default export */ const AppCard_AppCard = (AppCard);
;// CONCATENATED MODULE: ./public/assets/img/laptop1.png
/* harmony default export */ const laptop1 = ({"src":"/_next/static/image/public/assets/img/laptop1.1df26692d83c9378bed0ffa8b0f9c6b0.png","height":1616,"width":1612,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42mNwC6n+rmOR8jY6ruOes0/HOXf/2iMRCc0ze5rVmBhAICh+5n9Nm/r/4TGt/zWcO/4z6BX+94tsfl2YYcgKVhCfuuVPQOSOf4lJy/8um7Tmd21J3//wuMp7akpW7GAFmRmH/xfkXv7XVnnj/+GlN/9eO37p//Ezu+8xwEBBcffbypop/1vbZv3r7p33b9LU+f/mLl75f/m63Q5gBZV1zQUNHZP/z1q4+veyNdv+LVm17de6rYf+b9t78iJYwZGjF7laumY9aOqc8X/uovX/9x48/f/o6cv/1+888n/V1kPTwIrmLd5YP3X26v8r1u+5fer89VOXbtzftHX/iVlrth2qBQBH0IvWK3K7AgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/img/mobile2.png
/* harmony default export */ const mobile2 = ({"src":"/_next/static/image/public/assets/img/mobile2.d3b56af2d1d4f08f92bc87451ff2e7bf.png","height":859,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAo0lEQVR42mP4//8/AwhPmzqTef+MxUwg9qp165gY+vr7mEEcbWNdcwYxvr0MGYWMID5DTUkLK4hhpxE8IUw24r+3inQNWAJExESmC1hG270q8/P9HyNtEQOXsFT3TVRwq/rPEBL3SoGBgR8uoSRldEWdO/8/l37VYhC/oX0JC1hCRkaujkeU6b+IDIMfiF9aWgiWAGMVBU13ezt/IRD74IGDjACF3V2dHHQBaQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/ui/Carousel/ProductCarousel.tsx




const ProductCarousel = ({
  children
}) => {
  const [sliderRef] = (0,react_.useKeenSlider)({
    slidesPerView: 3,
    spacing: 5
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: sliderRef,
    className: "keen-slider",
    children: children
  });
};

/* harmony default export */ const Carousel_ProductCarousel = (ProductCarousel);
;// CONCATENATED MODULE: ./components/ui/Link/Link.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Link = (_ref) => {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: href,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }))
  });
};

/* harmony default export */ const Link_Link = (Link);
;// CONCATENATED MODULE: ./components/ui/ProductMarketInfo/ProductMInfo.tsx






const ProductMInfo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "md:col-span-3 sm:col-span-7 col-span-7 text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-black text-4xl text font-bold",
        children: "Welcome to Back Market, the refurbished (super) market."
      }), /*#__PURE__*/jsx_runtime_.jsx(Link_Link, {
        href: "!#",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "inline-block mb-5",
          children: "SEE REVIEWS FROM 41241 CUSTOMERS"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "text-white rounded-md mx-auto block bg-black px-4 py-2 ",
        children: "Learn about our quality standards"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:col-span-4 sm:col-span-7 col-span-7",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid md:grid-cols-2 grid-cols-1 gap-4",
        children: [1, 2, 3, 4].map((num, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "border-2 border-gray-200 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-black font-semibold",
            children: "Best offer available"
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-gray-400",
            children: "Selected by our price-quality algorithm."
          })]
        }, i))
      })
    })]
  });
};

/* harmony default export */ const ProductMarketInfo_ProductMInfo = (ProductMInfo);
;// CONCATENATED MODULE: ./components/ui/Carousel/ArrDotCarousel.tsx









const ArrDotCarousel = ({
  carousels
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  const {
    0: pause,
    1: setPause
  } = (0,external_react_.useState)(false); // const timer = useRef<number>(0)

  let timer;
  const [sliderRef, slider] = (0,react_.useKeenSlider)({
    initial: 0,
    loop: true,

    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    }

  });
  (0,external_react_.useEffect)(() => {
    var _sliderRef$current, _sliderRef$current2;

    sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.addEventListener('mouseover', () => setPause(true));
    sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.addEventListener('mouseout', () => setPause(false));
  }, [sliderRef]);
  (0,external_react_.useEffect)(() => {
    timer = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [pause, slider, timer]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navigation-wrapper relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: sliderRef,
        className: "keen-slider",
        children: carousels.map((carousel, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "keen-slider__slide offer-slide",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: carousel.link,
            passHref: false,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: carousel.img,
              alt: "product"
            })
          })
        }, i))
      }), slider && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ArrowLeft, {
          onClick: e => e.stopPropagation() || slider.prev(),
          disabled: currentSlide === 0
        }), /*#__PURE__*/jsx_runtime_.jsx(ArrowRight, {
          onClick: e => e.stopPropagation() || slider.next(),
          disabled: currentSlide === slider.details().size - 1
        })]
      })]
    }), slider && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dots",
      children: [...Array(slider.details().size).keys()].map(idx => {
        return /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            slider.moveToSlideRelative(idx);
          },
          className: 'dot' + (currentSlide === idx ? ' active' : '')
        }, idx);
      })
    })]
  });
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    style: {
      width: 20,
      height: 20,
      fill: '#ccc'
    },
    onClick: props.onClick,
    className: `arrow arrow--left ${disabeld} absolute left-2 top-1/2 cursor-pointer`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
    })
  });
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    style: {
      width: 20,
      height: 20,
      fill: '#ccc'
    },
    onClick: props.onClick,
    className: `arrow arrow--right ${disabeld} absolute right-2 top-1/2 text-primary cursor-pointer`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
    })
  });
}

/* harmony default export */ const Carousel_ArrDotCarousel = (ArrDotCarousel);
;// CONCATENATED MODULE: ./components/home/Linksofproducts/LinksOfProducts.tsx






const LinksOfProducts = ({
  pl
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-6 text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "!#",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "font-semibold",
          children: "Laptops & Computers"
        })
      }), pl.map((l, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "!#",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-sm text-gray-500",
            children: l.link
          })
        })]
      }, i))]
    })
  });
};

/* harmony default export */ const Linksofproducts_LinksOfProducts = (LinksOfProducts);
;// CONCATENATED MODULE: ./components/home/Templates/HomeTemplate.tsx






const HomeTemplate = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-6 text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("blockquote", {
        className: "font-serif my-6 text-3xl font-bold",
        children: "\"Forever young, I wanna be forever youuuuuuuuung, etc.\""
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "!#",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "underline text-black-700 my-8 inline-block ",
          children: "Alphaville"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-gray-700",
        children: "Back Market is a marketplace that fights against planned obsolescence."
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "!#",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "underline text-black-700",
          children: "Learn more"
        })
      })]
    })
  });
};

/* harmony default export */ const Templates_HomeTemplate = (HomeTemplate);
;// CONCATENATED MODULE: ./components/home/Qforproducts/QforProducts.tsx




const QforProducts = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-semibold",
        children: "What's the difference between a used iPhone and a refurbished iPhone?"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm text-gray-500",
        children: [' ', "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, labore, perferendis dignissimos velit magnam at repudiandae obcaecati ipsa quo in, autem quaerat deleniti earum! Ipsum hic distinctio nemo omnis, et commodi molestias perspiciatis tempore nulla?"]
      })]
    })
  });
};

/* harmony default export */ const Qforproducts_QforProducts = (QforProducts);
;// CONCATENATED MODULE: ./components/links_directions/Rdirection_link/RdirectionLink.tsx




const RdirectionLink = ({
  linkText
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex justify-end",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "!#",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "text-black text-lg font-semibold my-3",
        children: linkText
      })
    })
  });
};

/* harmony default export */ const Rdirection_link_RdirectionLink = (RdirectionLink);
;// CONCATENATED MODULE: ./pages/index.tsx



function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'








async function getStaticProps({
  preview,
  locale,
  locales
}) {
  const config = {
    locale,
    locales
  };
  const productsPromise = commerce/* default.getAllProducts */.Z.getAllProducts(pages_objectSpread({
    variables: {
      first: 6
    },
    config,
    preview
  }, {
    featured: true
  }));
  const pagesPromise = commerce/* default.getAllPages */.Z.getAllPages({
    config,
    preview
  });
  const siteInfoPromise = commerce/* default.getSiteInfo */.Z.getSiteInfo({
    config,
    preview
  });
  const {
    products
  } = await productsPromise;
  const {
    pages
  } = await pagesPromise;
  const {
    categories,
    brands
  } = await siteInfoPromise;
  return {
    props: {
      products,
      categories,
      brands,
      pages
    },
    revalidate: 60
  };
}
function Home({
  products
}) {
  // console.log(products);
  const carousels = [{
    img: ecommerce_carousel_3,
    link: '/flash_sale'
  }, {
    img: ecommerce_carousel_2,
    link: '/flash_sale'
  }, {
    img: ecommerce_carousel,
    link: '/flash_sale'
  }, {
    img: ecommerce_carousel_4,
    link: '/flash_sale'
  }];
  const pLinks = [{
    link: 'mobile'
  }, {
    link: 'screen saver'
  }, {
    link: 'earphones'
  }, {
    link: 'headphones'
  }, {
    link: 'usb-cable'
  }, {
    link: 'charger'
  }, {
    link: 'covers'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Carousel_Carousel, {
      carousels: carousels
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bg-gray-200 md:p-10 sm:p-8 p-6",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "my-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-semibold text-black",
          children: "The heavy weights"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm text-black-400",
          children: "-Googled more often than Muhammad Ali."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:grid-cols-6 gap-2 md:grid hidden",
          children: [1, 2, 3, 4, 5].map((num, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${i <= 1 ? 'md:col-span-3' : 'md:col-span-2'}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppCard_AppCard, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "h-20 w-20 mx-auto",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: laptop1
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "text-black text-sm font-semibold",
                  children: "MacBook"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel. Voluptate, quisquam."
                })]
              })]
            })
          }, num))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block md:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(Carousel_ProductCarousel, {
          children: [1, 2, 3, 4].map((num, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "keen-slider__slide slide",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppCard_AppCard, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "h-20 w-20",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: laptop1
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "text-black text-md",
                children: "MacBook"
              })]
            })
          }, num))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "my-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-black font-semibold my-3 uppercase",
          children: "Information About back Market"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "p-8 bg-white border-2 border-gray-200 rounded-md gap-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(ProductMarketInfo_ProductMInfo, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(Rdirection_link_RdirectionLink, {
          linkText: "LEARN MORE ABOUT BACK MARKET"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "my-8 hidden md:block",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-black font-semibold my-3",
          children: "Especially for you"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:grid-cols-4 gap-8 grid-cols-2 grid md:grid",
          children: [1, 2, 3, 4, 5, 6, 7].map((num, index) => /*#__PURE__*/jsx_runtime_.jsx(Especially_EspeciallyForU, {
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Hello"
            })
          }, index))
        }), /*#__PURE__*/jsx_runtime_.jsx(Rdirection_link_RdirectionLink, {
          linkText: "SEE OUR BEST DEALS"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "my-8",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-black font-semibold inline-block my-3",
          children: ["Other Categories", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-gray-400 text-sm",
            children: [' ', "-Nothing lost, everything gained, and all refurbished."]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:grid-cols-6 grid grid-cols-6 md:grid gap-2",
          children: [1, 2, 3, 4, 5].map((num, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${i <= 1 ? 'md:col-span-3  col-span-3 ' : 'md:col-span-2 hidden'}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppCard_AppCard, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-20 h-30 mx-auto",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: mobile2,
                  alt: "product"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "text-black text-sm font-semibold",
                  children: "MacBook"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel. Voluptate, quisquam."
                })]
              })]
            })
          }, num))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block md:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(Carousel_ProductCarousel, {
          children: [1, 2, 3, 4].map((num, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "keen-slider__slide slide",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppCard_AppCard, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "h-20 w-20",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: laptop1,
                  alt: "product"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "text-black text-md",
                children: "MacBook"
              })]
            })
          }, num))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "my-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-black font-semibold inline-block my-3",
          children: ["They love us", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-gray-400 text-sm",
            children: [' ', "-\u2013 they really love us!"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Carousel_ArrDotCarousel, {
          carousels: carousels
        }), /*#__PURE__*/jsx_runtime_.jsx(Rdirection_link_RdirectionLink, {
          linkText: "SEE ALL THE BUZZ"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Templates_HomeTemplate, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-black my-6 inline-block font-semibold",
            children: ["What else? \xA0", ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-gray-500 text-sm font-normal",
              children: "- Four questions people always ask:"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:grid grid-cols-2 gap-4",
            children: [1, 2, 3, 4].map((num, i) => /*#__PURE__*/jsx_runtime_.jsx(Qforproducts_QforProducts, {}, i))
          }), /*#__PURE__*/jsx_runtime_.jsx(Rdirection_link_RdirectionLink, {
            linkText: "SEE FAQS"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "my-6",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-black my-4 inline-block font-semibold",
            children: ["Discover all of our high-tech devices \xA0", ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-gray-500 text-sm font-normal",
              children: "\u2013 lovingly restored and squeaky cleanask:"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:grid sm:grid md:grid-cols-6 gap-6 sm:grid-cols-2 my-6",
            children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num, i) => /*#__PURE__*/jsx_runtime_.jsx(Linksofproducts_LinksOfProducts, {
              pl: pLinks
            }, i))
          })]
        })]
      })]
    })]
  });
}
Home.Layout = Layout/* default */.Z;

/***/ }),

/***/ 8023:
/***/ ((module) => {

module.exports = require("body-scroll-lock");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 506:
/***/ ((module) => {

module.exports = require("email-validator");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 1471:
/***/ ((module) => {

module.exports = require("keen-slider/react");

/***/ }),

/***/ 3739:
/***/ ((module) => {

module.exports = require("lodash.random");

/***/ }),

/***/ 1602:
/***/ ((module) => {

module.exports = require("lodash.throttle");

/***/ }),

/***/ 2517:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 123:
/***/ ((module) => {

module.exports = require("react-merge-refs");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 8047:
/***/ ((module) => {

module.exports = require("tabbable");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,393,79,679], () => (__webpack_exec__(3049)));
module.exports = __webpack_exports__;

})();