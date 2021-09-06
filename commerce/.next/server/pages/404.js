(function() {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 7348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ NotFound; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6473);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4331);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2361);





async function getStaticProps({
  preview,
  locale,
  locales
}) {
  const config = {
    locale,
    locales
  };
  const {
    pages
  } = await _lib_api_commerce__WEBPACK_IMPORTED_MODULE_1__/* .default.getAllPages */ .Z.getAllPages({
    config,
    preview
  });
  const {
    categories,
    brands
  } = await _lib_api_commerce__WEBPACK_IMPORTED_MODULE_1__/* .default.getSiteInfo */ .Z.getSiteInfo({
    config,
    preview
  });
  return {
    props: {
      pages,
      categories,
      brands
    },
    revalidate: 200
  };
}
function NotFound() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      variant: "heading",
      children: "Not Found"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      className: "",
      children: "The requested page doesn't exist or you don't have access to it."
    })]
  });
}
NotFound.Layout = _components_common__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z;

/***/ }),

/***/ 8023:
/***/ (function(module) {

"use strict";
module.exports = require("body-scroll-lock");;

/***/ }),

/***/ 4058:
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ 506:
/***/ (function(module) {

"use strict";
module.exports = require("email-validator");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 1471:
/***/ (function(module) {

"use strict";
module.exports = require("keen-slider/react");;

/***/ }),

/***/ 3739:
/***/ (function(module) {

"use strict";
module.exports = require("lodash.random");;

/***/ }),

/***/ 1602:
/***/ (function(module) {

"use strict";
module.exports = require("lodash.throttle");;

/***/ }),

/***/ 2517:
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 123:
/***/ (function(module) {

"use strict";
module.exports = require("react-merge-refs");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ 8047:
/***/ (function(module) {

"use strict";
module.exports = require("tabbable");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,473,79,315], function() { return __webpack_exec__(7348); });
module.exports = __webpack_exports__;

})();