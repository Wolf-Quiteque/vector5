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
exports.id = "pages/api/auth/novo";
exports.ids = ["pages/api/auth/novo"];
exports.modules = {

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

/***/ "(api)/./pages/api/auth/novo.js":
/*!********************************!*\
  !*** ./pages/api/auth/novo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n// pages/api/pedidos/index.js\n\nasync function handler(req, res) {\n  try {\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db('vector5'); // Replace with your actual database name\n\n    if (req.method === 'POST') {\n      var novousuario = req.body;\n      const existingUser = await collection.findOne({\n        email: novousuario.email\n      });\n\n      if (existingUser) {\n        return res.status(400).json({\n          success: false,\n          message: 'usuario ja existe'\n        });\n      }\n\n      const salt = await bcrypt.genSalt(10);\n      const hashedPassword = await bcrypt.hash(novousuario.password, salt);\n      novousuario.password = hashedPassword;\n      const result = await collection.insertOne(novousuario);\n      res.status(201).json({\n        success: true,\n        message: 'usuario criado com sucesso'\n      });\n    } else {\n      res.setHeader('Allow', ['GET', 'POST']);\n      res.status(405).end(`Method ${req.method} Não Permitido`);\n    }\n  } catch (error) {\n    res.status(500).json({\n      error: 'Internal Server Error'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9ub3ZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztFQUM5QyxJQUFJO0lBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1KLG9EQUFyQjtJQUNBLE1BQU1LLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFQLENBQVUsU0FBVixDQUFYLENBRkUsQ0FFK0I7O0lBQ3JDLElBQUlILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLE1BQW5CLEVBQTJCO01BRXZCLElBQUlDLFdBQVcsR0FBR0wsR0FBRyxDQUFDTSxJQUF0QjtNQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNQyxVQUFVLENBQUNDLE9BQVgsQ0FBbUI7UUFBRUMsS0FBSyxFQUFFTCxXQUFXLENBQUNLO01BQXJCLENBQW5CLENBQTNCOztNQUNBLElBQUlILFlBQUosRUFBa0I7UUFDaEIsT0FBT04sR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7VUFBRUMsT0FBTyxFQUFFLEtBQVg7VUFBa0JDLE9BQU8sRUFBRTtRQUEzQixDQUFyQixDQUFQO01BQ0Q7O01BRUQsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLEVBQWYsQ0FBbkI7TUFDQSxNQUFNQyxjQUFjLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxJQUFQLENBQVlkLFdBQVcsQ0FBQ2UsUUFBeEIsRUFBa0NMLElBQWxDLENBQTdCO01BQ0FWLFdBQVcsQ0FBQ2UsUUFBWixHQUF1QkYsY0FBdkI7TUFFQSxNQUFNRyxNQUFNLEdBQUcsTUFBTWIsVUFBVSxDQUFDYyxTQUFYLENBQXFCakIsV0FBckIsQ0FBckI7TUFDQUosR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFBRUMsT0FBTyxFQUFFLElBQVg7UUFBaUJDLE9BQU8sRUFBRTtNQUExQixDQUFyQjtJQUNDLENBZEwsTUFjVztNQUNMYixHQUFHLENBQUNzQixTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsRUFBUSxNQUFSLENBQXZCO01BQ0F0QixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCYSxHQUFoQixDQUFxQixVQUFTeEIsR0FBRyxDQUFDSSxNQUFPLGdCQUF6QztJQUNEO0VBQ0YsQ0FyQkQsQ0FxQkUsT0FBT3FCLEtBQVAsRUFBYztJQUNkeEIsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRWEsS0FBSyxFQUFFO0lBQVQsQ0FBckI7RUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvbm92by5qcz8xODhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9wZWRpZG9zL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigndmVjdG9yNScpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgZGF0YWJhc2UgbmFtZVxyXG5pZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgXHJcbiAgICB2YXIgbm92b3VzdWFyaW8gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZSh7IGVtYWlsOiBub3ZvdXN1YXJpby5lbWFpbCB9KTtcclxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICd1c3VhcmlvIGphIGV4aXN0ZScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobm92b3VzdWFyaW8ucGFzc3dvcmQsIHNhbHQpO1xyXG4gICAgbm92b3VzdWFyaW8ucGFzc3dvcmQgPSBoYXNoZWRQYXNzd29yZDtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZShub3ZvdXN1YXJpbyk7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICd1c3VhcmlvIGNyaWFkbyBjb20gc3VjZXNzbyd9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKTtcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTsOjbyBQZXJtaXRpZG9gKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImRiIiwibWV0aG9kIiwibm92b3VzdWFyaW8iLCJib2R5IiwiZXhpc3RpbmdVc2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInNhbHQiLCJiY3J5cHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwicGFzc3dvcmQiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJzZXRIZWFkZXIiLCJlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/novo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/novo.js"));
module.exports = __webpack_exports__;

})();