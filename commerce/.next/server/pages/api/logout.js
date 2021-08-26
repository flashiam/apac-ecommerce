"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 8558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ logout)
});

;// CONCATENATED MODULE: ./framework/local/api/endpoints/logout/index.ts
function noopApi(...args) {}
// EXTERNAL MODULE: ./lib/api/commerce.ts + 12 modules
var commerce = __webpack_require__(393);
;// CONCATENATED MODULE: ./pages/api/logout.ts


/* harmony default export */ const logout = (noopApi(commerce/* default */.Z));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [393], () => (__webpack_exec__(8558)));
module.exports = __webpack_exports__;

})();