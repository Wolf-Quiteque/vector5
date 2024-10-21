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
exports.id = "pages/api/Pedidos";
exports.ids = ["pages/api/Pedidos"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://menezessuraia:zUQ1FpP3cr9AXAmk@webhostscluster.goos6wl.mongodb.net/?retryWrites=true&w=majority&appName=WebhostsCluster\";\nconst options = {\n  serverApi: {\n    version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n    strict: true,\n    deprecationErrors: true\n  }\n};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1FLEdBQUcsR0FBR0MsdUlBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUc7RUFBQ0MsU0FBUyxFQUFFO0lBQzFCQyxPQUFPLEVBQUVQLHdEQURpQjtJQUUxQlMsTUFBTSxFQUFFLElBRmtCO0lBRzFCQyxpQkFBaUIsRUFBRTtFQUhPO0FBQVosQ0FBaEI7QUFLQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztFQUMxQyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7SUFDL0JKLE1BQU0sR0FBRyxJQUFJWixnREFBSixDQUFnQkUsR0FBaEIsRUFBcUJJLE9BQXJCLENBQVQ7SUFDQVMsTUFBTSxDQUFDQyxtQkFBUCxHQUE2QkosTUFBTSxDQUFDSyxPQUFQLEVBQTdCO0VBQ0Q7O0VBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBdkI7QUFDRCxDQU5ELE1BTU8sRUFHTjs7QUFFRCxpRUFBZUgsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7c2VydmVyQXBpOiB7XG4gIHZlcnNpb246IFNlcnZlckFwaVZlcnNpb24udjEsXG4gIHN0cmljdDogdHJ1ZSxcbiAgZGVwcmVjYXRpb25FcnJvcnM6IHRydWUsfX07XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiU2VydmVyQXBpVmVyc2lvbiIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJzZXJ2ZXJBcGkiLCJ2ZXJzaW9uIiwidjEiLCJzdHJpY3QiLCJkZXByZWNhdGlvbkVycm9ycyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/Pedidos/index.js":
/*!************************************!*\
  !*** ./pages/api/Pedidos/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n// /api/pedidos/index.js\n\nasync function handler(req, res) {\n  try {\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db('vector5'); // Replace with your actual database name\n\n    if (req.method === 'GET') {\n      const pedidos = await db.collection('pedidos').find({}).toArray();\n      res.status(200).json(pedidos);\n    } else if (req.method === 'POST') {\n      const result = await db.collection('pedidos').insertOne(req.body);\n      res.status(201).json({\n        message: 'Pedido feito com sucesso',\n        id: result.insertedId\n      });\n    } else {\n      res.setHeader('Allow', ['GET', 'POST']);\n      res.status(405).end(`Method ${req.method} Não Permitido`);\n    }\n  } catch (error) {\n    res.status(500).json({\n      error: 'Internal Server Error'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvUGVkaWRvcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7RUFDOUMsSUFBSTtJQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNSixvREFBckI7SUFDQSxNQUFNSyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLFNBQVYsQ0FBWCxDQUZFLENBRStCOztJQUVqQyxJQUFJSCxHQUFHLENBQUNJLE1BQUosS0FBZSxLQUFuQixFQUEwQjtNQUN4QixNQUFNQyxPQUFPLEdBQUcsTUFBTUYsRUFBRSxDQUFDRyxVQUFILENBQWMsU0FBZCxFQUF5QkMsSUFBekIsQ0FBOEIsRUFBOUIsRUFBa0NDLE9BQWxDLEVBQXRCO01BQ0FQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTCxPQUFyQjtJQUNELENBSEQsTUFHTyxJQUFJTCxHQUFHLENBQUNJLE1BQUosS0FBZSxNQUFuQixFQUEyQjtNQUloQyxNQUFNTyxNQUFNLEdBQUcsTUFBTVIsRUFBRSxDQUFDRyxVQUFILENBQWMsU0FBZCxFQUF5Qk0sU0FBekIsQ0FBbUNaLEdBQUcsQ0FBQ2EsSUFBdkMsQ0FBckI7TUFDQVosR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFBRUksT0FBTyxFQUFFLDBCQUFYO1FBQXVDQyxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0s7TUFBbEQsQ0FBckI7SUFDRCxDQU5NLE1BTUE7TUFDTGYsR0FBRyxDQUFDZ0IsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUF2QjtNQUNBaEIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQlMsR0FBaEIsQ0FBcUIsVUFBU2xCLEdBQUcsQ0FBQ0ksTUFBTyxnQkFBekM7SUFDRDtFQUNGLENBakJELENBaUJFLE9BQU9lLEtBQVAsRUFBYztJQUNkbEIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRVMsS0FBSyxFQUFFO0lBQVQsQ0FBckI7RUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL1BlZGlkb3MvaW5kZXguanM/NGY2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL3BlZGlkb3MvaW5kZXguanNcblxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigndmVjdG9yNScpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgZGF0YWJhc2UgbmFtZVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCBwZWRpZG9zID0gYXdhaXQgZGIuY29sbGVjdGlvbigncGVkaWRvcycpLmZpbmQoe30pLnRvQXJyYXkoKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBlZGlkb3MpO1xuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gIFxuXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3BlZGlkb3MnKS5pbnNlcnRPbmUocmVxLmJvZHkpO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnUGVkaWRvIGZlaXRvIGNvbSBzdWNlc3NvJywgaWQ6IHJlc3VsdC5pbnNlcnRlZElkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BPU1QnXSk7XG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOw6NvIFBlcm1pdGlkb2ApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJtZXRob2QiLCJwZWRpZG9zIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImJvZHkiLCJtZXNzYWdlIiwiaWQiLCJpbnNlcnRlZElkIiwic2V0SGVhZGVyIiwiZW5kIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Pedidos/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/Pedidos/index.js"));
module.exports = __webpack_exports__;

})();