"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://menezessuraia:zUQ1FpP3cr9AXAmk@webhostscluster.goos6wl.mongodb.net/?retryWrites=true&w=majority&appName=WebhostsCluster\";\nconst options = {\n  serverApi: {\n    version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n    strict: true,\n    deprecationErrors: true\n  }\n};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1FLEdBQUcsR0FBR0MsdUlBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUc7RUFBQ0MsU0FBUyxFQUFFO0lBQzFCQyxPQUFPLEVBQUVQLHdEQURpQjtJQUUxQlMsTUFBTSxFQUFFLElBRmtCO0lBRzFCQyxpQkFBaUIsRUFBRTtFQUhPO0FBQVosQ0FBaEI7QUFLQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztFQUMxQyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7SUFDL0JKLE1BQU0sR0FBRyxJQUFJWixnREFBSixDQUFnQkUsR0FBaEIsRUFBcUJJLE9BQXJCLENBQVQ7SUFDQVMsTUFBTSxDQUFDQyxtQkFBUCxHQUE2QkosTUFBTSxDQUFDSyxPQUFQLEVBQTdCO0VBQ0Q7O0VBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBdkI7QUFDRCxDQU5ELE1BTU8sRUFHTjs7QUFFRCxpRUFBZUgsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7c2VydmVyQXBpOiB7XHJcbiAgdmVyc2lvbjogU2VydmVyQXBpVmVyc2lvbi52MSxcclxuICBzdHJpY3Q6IHRydWUsXHJcbiAgZGVwcmVjYXRpb25FcnJvcnM6IHRydWUsfX07XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIlNlcnZlckFwaVZlcnNpb24iLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\nconst _excluded = [\"password\"];\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n      const db = client.db('vector5');\n      const {\n        email,\n        password\n      } = req.body;\n      const user = await db.collection('usuario').findOne({\n        email\n      });\n\n      if (user && (await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password))) {\n        const {\n          password\n        } = user,\n              userWithoutPassword = _objectWithoutProperties(user, _excluded);\n\n        res.status(200).json({\n          success: true,\n          user: user\n        });\n      } else {\n        res.status(401).json({\n          success: false,\n          message: 'Invalid credentials'\n        });\n      }\n    } catch (error) {\n      res.status(500).json({\n        success: false,\n        message: 'Server error'\n      });\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).end(`Method ${req.method} Not Allowed`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVlLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztFQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtJQUN6QixJQUFJO01BQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1OLG9EQUFyQjtNQUNBLE1BQU1PLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFQLENBQVUsU0FBVixDQUFYO01BQ0EsTUFBTTtRQUFFQyxLQUFGO1FBQVNDO01BQVQsSUFBc0JOLEdBQUcsQ0FBQ08sSUFBaEM7TUFFQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUosRUFBRSxDQUFDSyxVQUFILENBQWMsU0FBZCxFQUF5QkMsT0FBekIsQ0FBaUM7UUFBRUw7TUFBRixDQUFqQyxDQUFuQjs7TUFFQSxJQUFJRyxJQUFJLEtBQUksTUFBTVYsdURBQUEsQ0FBZVEsUUFBZixFQUF5QkUsSUFBSSxDQUFDRixRQUE5QixDQUFWLENBQVIsRUFBMkQ7UUFDekQsTUFBTTtVQUFFQTtRQUFGLElBQXVDRSxJQUE3QztRQUFBLE1BQXFCSSxtQkFBckIsNEJBQTZDSixJQUE3Qzs7UUFDQVAsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7VUFBRUMsT0FBTyxFQUFFLElBQVg7VUFBaUJQLElBQUksRUFBRUE7UUFBdkIsQ0FBckI7TUFDRCxDQUhELE1BR087UUFDTFAsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7VUFBRUMsT0FBTyxFQUFFLEtBQVg7VUFBa0JDLE9BQU8sRUFBRTtRQUEzQixDQUFyQjtNQUNEO0lBQ0YsQ0FiRCxDQWFFLE9BQU9DLEtBQVAsRUFBYztNQUNkaEIsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFBRUMsT0FBTyxFQUFFLEtBQVg7UUFBa0JDLE9BQU8sRUFBRTtNQUEzQixDQUFyQjtJQUNEO0VBQ0YsQ0FqQkQsTUFpQk87SUFDTGYsR0FBRyxDQUFDaUIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0lBQ0FqQixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCTSxHQUFoQixDQUFxQixVQUFTbkIsR0FBRyxDQUFDRSxNQUFPLGNBQXpDO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJy4uLy4uLy4uL2xpYi9tb25nb2RiJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ3ZlY3RvcjUnKTtcclxuICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzdWFyaW8nKS5maW5kT25lKHsgZW1haWwgfSk7XHJcblxyXG4gICAgICBpZiAodXNlciAmJiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcclxuICAgICAgICBjb25zdCB7IHBhc3N3b3JkLCAuLi51c2VyV2l0aG91dFBhc3N3b3JkIH0gPSB1c2VyO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlcjogdXNlciB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdTZXJ2ZXIgZXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJiY3J5cHQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY2xpZW50IiwiZGIiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNvbXBhcmUiLCJ1c2VyV2l0aG91dFBhc3N3b3JkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();