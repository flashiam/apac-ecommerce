(function() {
var exports = {};
exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 1328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Pages; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./lib/api/commerce.ts + 12 modules
var commerce = __webpack_require__(6473);
// EXTERNAL MODULE: ./components/ui/Text/Text.tsx
var Text = __webpack_require__(2361);
// EXTERNAL MODULE: ./components/common/Layout/Layout.tsx + 33 modules
var Layout = __webpack_require__(4331);
// EXTERNAL MODULE: ./lib/get-slug.ts
var get_slug = __webpack_require__(7619);
;// CONCATENATED MODULE: ./lib/usage-warns.ts
/**
 * The utils here are used to help developers use the example
 */
function missingLocaleInPages() {
  const invalidPaths = [];

  const log = () => {
    if (invalidPaths.length) {
      const single = invalidPaths.length === 1;
      const pages = single ? 'page' : 'pages';
      console.log(`The ${pages} "${invalidPaths.join(', ')}" ${single ? 'does' : 'do'} not include a locale, or the locale is not supported. When using i18n, web pages from
BigCommerce are expected to have a locale or they will be ignored.\n
Please update the ${pages} to include the default locale or make the ${pages} invisible by
unchecking the "Navigation Menu" option in the settings of ${single ? 'the' : 'each'} web page\n`);
    }
  };

  return [invalidPaths, log];
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./pages/[...pages].tsx







async function getStaticProps({
  preview,
  params,
  locale,
  locales
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
  const {
    pages
  } = await pagesPromise;
  const {
    categories
  } = await siteInfoPromise;
  const path = params === null || params === void 0 ? void 0 : params.pages.join('/');
  const slug = locale ? `${locale}/${path}` : path;
  const pageItem = pages.find(p => p.url ? (0,get_slug/* default */.Z)(p.url) === slug : false);
  const data = pageItem && (await commerce/* default.getPage */.Z.getPage({
    variables: {
      id: pageItem.id
    },
    config,
    preview
  }));
  const page = data === null || data === void 0 ? void 0 : data.page;

  if (!page) {
    // We throw to make sure this fails at build time as this is never expected to happen
    throw new Error(`Page with slug '${slug}' not found`);
  }

  return {
    props: {
      pages,
      page,
      categories
    },
    revalidate: 60 * 60 // Every hour

  };
}
async function getStaticPaths({
  locales
}) {
  const config = {
    locales
  };
  const {
    pages
  } = await commerce/* default.getAllPages */.Z.getAllPages({
    config
  });
  const [invalidPaths, log] = missingLocaleInPages();
  const paths = pages.map(page => page.url).filter(url => {
    if (!url || !locales) return url; // If there are locales, only include the pages that include one of the available locales

    if (locales.includes((0,get_slug/* default */.Z)(url).split('/')[0])) return url;
    invalidPaths.push(url);
  });
  log();
  return {
    paths,
    fallback: 'blocking'
  };
}
function Pages({
  page
}) {
  const router = (0,router_.useRouter)();
  return router.isFallback ? /*#__PURE__*/jsx_runtime_.jsx("h1", {
    children: "Loading..."
  }) // TODO (BC) Add Skeleton Views
  :
  /*#__PURE__*/
  jsx_runtime_.jsx("div", {
    className: "max-w-2xl mx-8 sm:mx-auto py-20",
    children: (page === null || page === void 0 ? void 0 : page.body) && /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, {
      html: page.body
    })
  });
}
Pages.Layout = Layout/* default */.Z;

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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,473,79,315], function() { return __webpack_exec__(1328); });
module.exports = __webpack_exports__;

})();