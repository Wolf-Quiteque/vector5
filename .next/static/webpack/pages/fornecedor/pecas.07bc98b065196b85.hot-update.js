"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fornecedor/pecas",{

/***/ "./pages/fornecedor/pecas.js":
/*!***********************************!*\
  !*** ./pages/fornecedor/pecas.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/session */ \"./lib/session.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/workspaces/vector5/pages/fornecedor/pecas.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar FornecedorHome = function FornecedorHome() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      user = _useState[0],\n      setuser = _useState[1];\n\n  var GetUser = /*#__PURE__*/function () {\n    var _ref = (0,_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response;\n      return _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_lib_session__WEBPACK_IMPORTED_MODULE_4__.getDecryptedCookie)(\"authsesh\");\n\n            case 2:\n              _context.t0 = _context.sent;\n\n              if (_context.t0) {\n                _context.next = 5;\n                break;\n              }\n\n              _context.t0 = false;\n\n            case 5:\n              response = _context.t0;\n\n              if (response) {\n                setuser(response);\n              }\n\n              consol.log(response);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function GetUser() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    GetUser();\n  }, []);\n\n  var handleSignout = /*#__PURE__*/function () {\n    var _ref2 = (0,_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      return _workspaces_vector5_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_lib_session__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)(\"authsesh\");\n\n            case 2:\n              router.push('/fornecedor/login');\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSignout() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"min-h-screen bg-gray-900 text-gray-100\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"flex h-screen\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onSignout: handleSignout\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"flex-1 overflow-auto p-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FornecedorHome, \"dZMLwp7/nRrjJvG0fjGNhsXhGXc=\");\n\n_c = FornecedorHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FornecedorHome);\n\nvar _c;\n\n$RefreshReg$(_c, \"FornecedorHome\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JuZWNlZG9yL3BlY2FzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBR0E7QUFHQTs7O0FBRUEsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0VBQUE7O0VBQ3pCLGdCQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0VBQUEsSUFBT08sSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBRUEsSUFBTUMsT0FBTztJQUFBLDBTQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDV0wsZ0VBQWtCLENBQUMsVUFBRCxDQUQ3Qjs7WUFBQTtjQUFBOztjQUFBO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsY0FDNkMsS0FEN0M7O1lBQUE7Y0FDTk0sUUFETTs7Y0FFWixJQUFHQSxRQUFILEVBQVk7Z0JBQ1ZGLE9BQU8sQ0FBQ0UsUUFBRCxDQUFQO2NBQ0Q7O2NBQ0RDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXRixRQUFYOztZQUxZO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQVBELE9BQU87TUFBQTtJQUFBO0VBQUEsR0FBYjs7RUFRRVIsZ0RBQVMsQ0FBQyxZQUFJO0lBQ1pRLE9BQU87RUFDUixDQUZRLEVBRVAsRUFGTyxDQUFUOztFQUlBLElBQU1JLGFBQWE7SUFBQSwyU0FBRztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUNkViwwREFBWSxDQUFDLFVBQUQsQ0FERTs7WUFBQTtjQUVwQlcsTUFBTSxDQUFDQyxJQUFQLENBQVksbUJBQVo7O1lBRm9CO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQWJGLGFBQWE7TUFBQTtJQUFBO0VBQUEsR0FBbkI7O0VBTUosb0JBQ0U7SUFBSyxTQUFTLEVBQUMsd0NBQWY7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyxlQUFmO01BQUEsd0JBQ0UsOERBQUMsMkRBQUQ7UUFBUyxTQUFTLEVBQUVBO01BQXBCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQUdFO1FBQUssU0FBUyxFQUFDO01BQWY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQVdELENBaENEOztHQUFNUDs7S0FBQUE7QUFrQ04sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybmVjZWRvci9wZWNhcy5qcz9lYWZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuaW1wb3J0IHtcbiAgZGVsZXRlQ29va2llLCBnZXREZWNyeXB0ZWRDb29raWUsXG59IGZyb20gXCIuLi8uLi9saWIvc2Vzc2lvblwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyJztcblxuY29uc3QgRm9ybmVjZWRvckhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXIsIHNldHVzZXJdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgR2V0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXREZWNyeXB0ZWRDb29raWUoXCJhdXRoc2VzaFwiKSB8fCBmYWxzZTtcbiAgICAgICAgaWYocmVzcG9uc2Upe1xuICAgICAgICAgIHNldHVzZXIocmVzcG9uc2UpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sLmxvZyhyZXNwb25zZSlcbiAgICAgIH07XG4gICAgXG4gICAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgR2V0VXNlcigpICAgICBcbiAgICAgIH0sW10pXG5cbiAgICAgIGNvbnN0IGhhbmRsZVNpZ25vdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUNvb2tpZShcImF1dGhzZXNoXCIpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL2Zvcm5lY2Vkb3IvbG9naW4nKVxuICAgICAgfTtcbiAgICBcbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTkwMCB0ZXh0LWdyYXktMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIj5cbiAgICAgICAgPFNpZGViYXIgb25TaWdub3V0PXtoYW5kbGVTaWdub3V0fSAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3ctYXV0byBwLThcIj5cbiAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm5lY2Vkb3JIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImRlbGV0ZUNvb2tpZSIsImdldERlY3J5cHRlZENvb2tpZSIsIlNpZGViYXIiLCJGb3JuZWNlZG9ySG9tZSIsInVzZXIiLCJzZXR1c2VyIiwiR2V0VXNlciIsInJlc3BvbnNlIiwiY29uc29sIiwibG9nIiwiaGFuZGxlU2lnbm91dCIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/fornecedor/pecas.js\n"));

/***/ })

});