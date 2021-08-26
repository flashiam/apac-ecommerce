"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 7079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l8": () => (/* binding */ useUI),
/* harmony export */   "DA": () => (/* binding */ ManagedUIContext)
/* harmony export */ });
/* unused harmony exports UIContext, UIProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2517);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  sidebarView: 'CART_VIEW',
  userAvatar: ''
};
const UIContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
UIContext.displayName = 'UIContext';

function uiReducer(state, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySidebar: true
        });
      }

    case 'CLOSE_SIDEBAR':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySidebar: false
        });
      }

    case 'OPEN_DROPDOWN':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayDropdown: true
        });
      }

    case 'CLOSE_DROPDOWN':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayDropdown: false
        });
      }

    case 'OPEN_MODAL':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayModal: true,
          displaySidebar: false
        });
      }

    case 'CLOSE_MODAL':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayModal: false
        });
      }

    case 'SET_MODAL_VIEW':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          modalView: action.view
        });
      }

    case 'SET_SIDEBAR_VIEW':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          sidebarView: action.view
        });
      }

    case 'SET_USER_AVATAR':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          userAvatar: action.value
        });
      }
  }
}

const UIProvider = props => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(uiReducer, initialState);
  const openSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => dispatch({
    type: 'OPEN_SIDEBAR'
  }), [dispatch]);
  const closeSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => dispatch({
    type: 'CLOSE_SIDEBAR'
  }), [dispatch]);
  const toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => state.displaySidebar ? dispatch({
    type: 'CLOSE_SIDEBAR'
  }) : dispatch({
    type: 'OPEN_SIDEBAR'
  }), [dispatch, state.displaySidebar]);
  const closeSidebarIfPresent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => state.displaySidebar && dispatch({
    type: 'CLOSE_SIDEBAR'
  }), [dispatch, state.displaySidebar]);
  const openDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => dispatch({
    type: 'OPEN_DROPDOWN'
  }), [dispatch]);
  const closeDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => dispatch({
    type: 'CLOSE_DROPDOWN'
  }), [dispatch]);
  const openModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => dispatch({
    type: 'OPEN_MODAL'
  }), [dispatch]);
  const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => dispatch({
    type: 'CLOSE_MODAL'
  }), [dispatch]);
  const setUserAvatar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => dispatch({
    type: 'SET_USER_AVATAR',
    value
  }), [dispatch]);
  const setModalView = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(view => dispatch({
    type: 'SET_MODAL_VIEW',
    view
  }), [dispatch]);
  const setSidebarView = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(view => dispatch({
    type: 'SET_SIDEBAR_VIEW',
    view
  }), [dispatch]);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => _objectSpread(_objectSpread({}, state), {}, {
    openSidebar,
    closeSidebar,
    toggleSidebar,
    closeSidebarIfPresent,
    openDropdown,
    closeDropdown,
    openModal,
    closeModal,
    setModalView,
    setSidebarView,
    setUserAvatar
  }), [state]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIContext.Provider, _objectSpread({
    value: value
  }, props));
};
const useUI = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UIContext);

  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }

  return context;
};
const ManagedUIContext = ({
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIProvider, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    children: children
  })
});

/***/ })

};
;