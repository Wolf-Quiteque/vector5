"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MainLayout.js":
/*!**********************************!*\
  !*** ./components/MainLayout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/session */ \"./lib/session.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/workspaces/vector5/components/MainLayout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar MainLayout = function MainLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var CheckSessionFornecedor = /*#__PURE__*/function () {\n    var _ref2 = (0,_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response;\n      return _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_lib_session__WEBPACK_IMPORTED_MODULE_4__.getDecryptedCookie)(\"authsesh\");\n\n            case 2:\n              _context.t0 = _context.sent;\n\n              if (_context.t0) {\n                _context.next = 5;\n                break;\n              }\n\n              _context.t0 = false;\n\n            case 5:\n              response = _context.t0;\n\n              if (router.pathname == \"/fornecedor\" && !response) {\n                router.push(\"/fornecedor/login\");\n              }\n\n              if (router.pathname == \"/fornecedor/login\" && response || router.pathname == \"/fornecedor/registrar\" && response) {\n                router.push(\"/fornecedor\");\n              }\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function CheckSessionFornecedor() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    CheckSessionFornecedor();\n  }, [router.asPath]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [router.pathname != \"/praca\" && router.pathname != \"/fornecedor\" && router.pathname != \"/login\" && router.pathname != \"/registrar\" && router.pathname != \"/fornecedor/login\" && router.pathname != \"/fornecedor/registrar\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n      children: [\"  \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"topbar\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"nav\", {\n          className: \"navbar navbar-expand-lg\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n              className: \"navbar-brand\",\n              href: \"#\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                alt: \"Ecom\",\n                src: \"images/logobranco.png\",\n                style: {\n                  height: \"50px\"\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 7\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              className: \"navbar-toggler\",\n              type: \"button\",\n              \"data-bs-toggle\": \"collapse\",\n              \"data-bs-target\": \"#navbarNav\",\n              \"aria-controls\": \"navbarNav\",\n              \"aria-expanded\": \"false\",\n              \"aria-label\": \"Toggle navigation\",\n              style: {\n                backgroundColor: \"white\"\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                className: \"navbar-toggler-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 7\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"collapse navbar-collapse\",\n              id: \"navbarNav\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n                className: \"navbar-nav me-auto mb-2 mb-lg-0\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                  className: \"nav-item\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    href: \"#\",\n                    children: \"In\\xEDcio\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 9\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                  className: \"nav-item\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    href: \"#\",\n                    children: \"Motor\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 46,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 9\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                  className: \"nav-item\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    href: \"#\",\n                    children: \"Acess\\xF3rios\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 9\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                  className: \"nav-item\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    href: \"#\",\n                    children: \"Sistema El\\xE9trico\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 9\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                  className: \"nav-item\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    href: \"#\",\n                    children: \"Todas Marcas\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 55,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 9\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 7\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n                className: \"navbar-nav\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                  className: \"nav-item\",\n                  style: {\n                    backgroundColor: '#6c3494'\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    style: {\n                      color: \"white\"\n                    },\n                    href: \"#\",\n                    children: \"Entrar/Registrar\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 60,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 9\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 7\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 5\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 3\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 227\n      }, _this)]\n    }, void 0, true), children, router.pathname != \"/praca\" && router.pathname != \"/fornecedor\" && router.pathname !== \"/login\" && router.pathname !== \"/registrar\" && router.pathname != \"/fornecedor/login\" && router.pathname != \"/fornecedor/registrar\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, false)]\n  }, void 0, true);\n};\n\n_s(MainLayout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"MainLayout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO2tCQUFBO29CQUFBO29CQUFBO29CQUFBO2tCQUFBO2dCQURGO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2NBREY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQWxCRjtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FQRjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFETTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BRDBOO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBSjtJQUFBLGdCQUR4TixFQXVDR1QsUUF2Q0gsRUF5Q0NDLE1BQU0sQ0FBQ0csUUFBUCxJQUFrQixRQUFsQixJQUE4QkgsTUFBTSxDQUFDRyxRQUFQLElBQWtCLGFBQWhELElBQWlFSCxNQUFNLENBQUNHLFFBQVAsS0FBbUIsUUFBcEYsSUFBZ0dILE1BQU0sQ0FBQ0csUUFBUCxLQUFtQixZQUFuSCxJQUFtSUgsTUFBTSxDQUFDRyxRQUFQLElBQWtCLG1CQUFySixJQUE0S0gsTUFBTSxDQUFDRyxRQUFQLElBQWtCLHVCQUE5TCxpQkFBeU4sNklBekMxTjtFQUFBLGdCQURKO0FBc0RELENBMUVEOztHQUFNTDtVQUNXTjs7O0tBRFhNO0FBNEVOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbkxheW91dC5qcz9lYzYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGdldERlY3J5cHRlZENvb2tpZSxcbiAgc2V0RW5jcnlwdGVkQ29va2llLFxuICBkZWxldGVDb29raWUsXG59IGZyb20gXCIuLi9saWIvc2Vzc2lvblwiO1xuY29uc3QgTWFpbkxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuY29uc3QgQ2hlY2tTZXNzaW9uRm9ybmVjZWRvciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXREZWNyeXB0ZWRDb29raWUoXCJhdXRoc2VzaFwiKSB8fCBmYWxzZTtcbiAgaWYocm91dGVyLnBhdGhuYW1lID09IFwiL2Zvcm5lY2Vkb3JcIiAmJiAhcmVzcG9uc2Upe1xuICAgIHJvdXRlci5wdXNoKFwiL2Zvcm5lY2Vkb3IvbG9naW5cIilcbiAgfVxuXG4gIGlmKHJvdXRlci5wYXRobmFtZSA9PSBcIi9mb3JuZWNlZG9yL2xvZ2luXCIgJiYgcmVzcG9uc2UgfHwgcm91dGVyLnBhdGhuYW1lICA9PSBcIi9mb3JuZWNlZG9yL3JlZ2lzdHJhclwiICYmIHJlc3BvbnNlICApe1xuICAgIHJvdXRlci5wdXNoKFwiL2Zvcm5lY2Vkb3JcIilcblxuICB9XG59XG5cbiAgdXNlRWZmZWN0ICgoKT0+e1xuICAgIENoZWNrU2Vzc2lvbkZvcm5lY2Vkb3IoKVxuICB9LFtyb3V0ZXIuYXNQYXRoXSlcblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHtyb3V0ZXIucGF0aG5hbWUgIT1cIi9wcmFjYVwiICYmIHJvdXRlci5wYXRobmFtZSAhPVwiL2Zvcm5lY2Vkb3JcIiAmJiByb3V0ZXIucGF0aG5hbWUgIT1cIi9sb2dpblwiICYmIHJvdXRlci5wYXRobmFtZSAhPVwiL3JlZ2lzdHJhclwiICYmIHJvdXRlci5wYXRobmFtZSAhPVwiL2Zvcm5lY2Vkb3IvbG9naW5cIiAmJiByb3V0ZXIucGF0aG5hbWUgIT1cIi9mb3JuZWNlZG9yL3JlZ2lzdHJhclwiICYmKDw+ICA8ZGl2IGNsYXNzTmFtZT1cInRvcGJhclwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgIDxpbWcgYWx0PVwiRWNvbVwiIHNyYz1cImltYWdlcy9sb2dvYnJhbmNvLnBuZ1wiIHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIn19IC8+XG4gICAgPC9hPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIndoaXRlXCJ9fT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWUtYXV0byBtYi0yIG1iLWxnLTBcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkluw61jaW88L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Nb3RvcjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkFjZXNzw7NyaW9zPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+U2lzdGVtYSBFbMOpdHJpY288L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Ub2RhcyBNYXJjYXM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyM2YzM0OTQnfX0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGhyZWY9XCIjXCI+RW50cmFyL1JlZ2lzdHJhcjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uYXY+XG5cbjwvZGl2PjwvPikgIH1cbiAgXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAge3JvdXRlci5wYXRobmFtZSAhPVwiL3ByYWNhXCIgJiYgcm91dGVyLnBhdGhuYW1lICE9XCIvZm9ybmVjZWRvclwiICYmIHJvdXRlci5wYXRobmFtZSAhPT1cIi9sb2dpblwiICYmIHJvdXRlci5wYXRobmFtZSAhPT1cIi9yZWdpc3RyYXJcIiAmJiByb3V0ZXIucGF0aG5hbWUgIT1cIi9mb3JuZWNlZG9yL2xvZ2luXCIgJiYgcm91dGVyLnBhdGhuYW1lICE9XCIvZm9ybmVjZWRvci9yZWdpc3RyYXJcIiAmJig8PlxuICAgICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9XCJiZy1saWdodCB0ZXh0LWNlbnRlciB0ZXh0LWxnLXN0YXJ0IG10LTVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiZjb3B5OyAyMDI0IHZldG9yNS4gVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+Ki99PC8+KSAgfSBcblxuXG4gICAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREZWNyeXB0ZWRDb29raWUiLCJzZXRFbmNyeXB0ZWRDb29raWUiLCJkZWxldGVDb29raWUiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJDaGVja1Nlc3Npb25Gb3JuZWNlZG9yIiwicmVzcG9uc2UiLCJwYXRobmFtZSIsInB1c2giLCJhc1BhdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainLayout.js\n"));

/***/ })

});