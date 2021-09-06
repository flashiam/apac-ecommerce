exports.id = 169;
exports.ids = [169];
exports.modules = {

/***/ 7169:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ FeatureBar_FeatureBar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/common/FeatureBar/FeatureBar.module.css
var FeatureBar_module = __webpack_require__(552);
var FeatureBar_module_default = /*#__PURE__*/__webpack_require__.n(FeatureBar_module);
;// CONCATENATED MODULE: ./components/common/FeatureBar/FeatureBar.tsx





const FeatureBar = ({
  title,
  description,
  className,
  action,
  hide
}) => {
  const rootClassName = external_classnames_default()((FeatureBar_module_default()).root, {
    transform: true,
    'translate-y-0 opacity-100': !hide,
    'translate-y-full opacity-0': hide
  }, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: rootClassName,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "block md:inline",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "block mb-6 md:inline md:mb-0 md:ml-2",
      children: description
    }), action && action]
  });
};

/* harmony default export */ var FeatureBar_FeatureBar = (FeatureBar);
;// CONCATENATED MODULE: ./components/common/FeatureBar/index.ts


/***/ }),

/***/ 552:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "FeatureBar_root__21Jd5"
};


/***/ })

};
;