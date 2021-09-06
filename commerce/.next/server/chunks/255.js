exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 2255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auth_SignUpView; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "email-validator"
var external_email_validator_ = __webpack_require__(506);
;// CONCATENATED MODULE: ./components/icons/Info.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Info = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
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
      r: "10",
      fill: "transparent"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 8v4",
      stroke: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 16h.01",
      stroke: "currentColor"
    })]
  }));
};

/* harmony default export */ var icons_Info = (Info);
// EXTERNAL MODULE: ./components/ui/context.tsx
var context = __webpack_require__(7079);
// EXTERNAL MODULE: ./components/ui/Logo/Logo.tsx
var Logo = __webpack_require__(3668);
// EXTERNAL MODULE: ./components/ui/Input/Input.tsx
var Input = __webpack_require__(7694);
// EXTERNAL MODULE: ./components/ui/Button/Button.tsx
var Button = __webpack_require__(1180);
// EXTERNAL MODULE: ./framework/local/auth/use-signup.tsx + 1 modules
var use_signup = __webpack_require__(4233);
;// CONCATENATED MODULE: ./components/auth/SignUpView.tsx









const SignUpView = () => {
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
    0: firstName,
    1: setFirstName
  } = (0,external_react_.useState)('');
  const {
    0: lastName,
    1: setLastName
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
  const signup = (0,use_signup/* default */.Z)();
  const {
    setModalView,
    closeModal
  } = (0,context/* useUI */.l8)();

  const handleSignup = async e => {
    e.preventDefault();

    if (!dirty && !disabled) {
      setDirty(true);
      handleValidation();
    }

    try {
      setLoading(true);
      setMessage('');
      await signup({
        email,
        firstName,
        lastName,
        password
      });
      setLoading(false);
      closeModal();
    } catch ({
      errors
    }) {
      setMessage(errors[0].message);
      setLoading(false);
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
    onSubmit: handleSignup,
    className: "w-80 flex flex-col justify-between p-3",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center pb-12 ",
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {
        width: "64px",
        height: "64px"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col space-y-4",
      children: [message && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-red border border-red p-3",
        children: message
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        placeholder: "First Name",
        onChange: setFirstName
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        placeholder: "Last Name",
        onChange: setLastName
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        type: "email",
        placeholder: "Email",
        onChange: setEmail
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        type: "password",
        placeholder: "Password",
        onChange: setPassword
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-accent-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "inline-block align-middle ",
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_Info, {
            width: "15",
            height: "15"
          })
        }), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "leading-6 text-sm",
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "Info"
          }), ": Passwords must be longer than 7 chars and include numbers.", ' ']
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pt-2 w-full flex flex-col",
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          variant: "slim",
          type: "submit",
          loading: loading,
          disabled: disabled,
          children: "Sign Up"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "pt-1 text-center text-sm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-accent-7",
          children: "Do you have an account?"
        }), ` `, /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-accent-9 font-bold hover:underline cursor-pointer",
          onClick: () => setModalView('LOGIN_VIEW'),
          children: "Log In"
        })]
      })]
    })]
  });
};

/* harmony default export */ var auth_SignUpView = (SignUpView);

/***/ })

};
;