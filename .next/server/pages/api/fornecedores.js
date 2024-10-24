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
exports.id = "pages/api/fornecedores";
exports.ids = ["pages/api/fornecedores"];
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

/***/ "(api)/./pages/api/fornecedores/index.js":
/*!*****************************************!*\
  !*** ./pages/api/fornecedores/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n  const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const db = client.db('vector5'); // Use your actual database name\n\n  if (req.method === 'GET') {\n    const fornecedores = await db.collection('fornecedores').find({}).toArray();\n    res.status(200).json(fornecedores);\n  } else if (req.method === 'PUT') {\n    const fornecedores = await db.collection('fornecedores').find(req.body).toArray();\n    res.status(200).json(fornecedores);\n  } else if (req.method === 'POST') {\n    console.log(req.body);\n\n    try {\n      const result = await db.collection('fornecedores').insertOne(req.body);\n      res.status(201).json({\n        message: 'criado com successo'\n      });\n    } catch (error) {\n      console.log(error);\n      res.status(500).json({\n        error: 'Failed to create peça'\n      });\n    }\n  } else {\n    res.setHeader('Allow', ['GET', 'POST']);\n    res.status(405).end(`Method ${req.method} Not Allowed`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybmVjZWRvcmVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7RUFDOUMsTUFBTUMsTUFBTSxHQUFHLE1BQU1KLG9EQUFyQjtFQUNBLE1BQU1LLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFQLENBQVUsU0FBVixDQUFYLENBRjhDLENBRWI7O0VBRWpDLElBQUlILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3hCLE1BQU1DLFlBQVksR0FBRyxNQUFNRixFQUFFLENBQUNHLFVBQUgsQ0FBYyxjQUFkLEVBQThCQyxJQUE5QixDQUFtQyxFQUFuQyxFQUF1Q0MsT0FBdkMsRUFBM0I7SUFDQVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLFlBQXJCO0VBQ0QsQ0FIRCxNQUdPLElBQUlMLEdBQUcsQ0FBQ0ksTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQy9CLE1BQU1DLFlBQVksR0FBRyxNQUFNRixFQUFFLENBQUNHLFVBQUgsQ0FBYyxjQUFkLEVBQThCQyxJQUE5QixDQUFtQ1AsR0FBRyxDQUFDVyxJQUF2QyxFQUE2Q0gsT0FBN0MsRUFBM0I7SUFDQVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLFlBQXJCO0VBQ0QsQ0FITSxNQUdBLElBQUlMLEdBQUcsQ0FBQ0ksTUFBSixLQUFlLE1BQW5CLEVBQTJCO0lBQ2pDUSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsR0FBRyxDQUFDVyxJQUFoQjs7SUFFQyxJQUFJO01BQ0YsTUFBTUcsTUFBTSxHQUFHLE1BQU1YLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLGNBQWQsRUFBOEJTLFNBQTlCLENBQXdDZixHQUFHLENBQUNXLElBQTVDLENBQXJCO01BRUFWLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1FBQUVNLE9BQU8sRUFBRTtNQUFYLENBQXJCO0lBQ0QsQ0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztNQUNkTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUksS0FBWjtNQUNBaEIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFBRU8sS0FBSyxFQUFFO01BQVQsQ0FBckI7SUFDRDtFQUNGLENBWE0sTUFXQztJQUNOaEIsR0FBRyxDQUFDaUIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUF2QjtJQUNBakIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQlUsR0FBaEIsQ0FBcUIsVUFBU25CLEdBQUcsQ0FBQ0ksTUFBTyxjQUF6QztFQUNEO0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZm9ybmVjZWRvcmVzL2luZGV4LmpzPzQyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCd2ZWN0b3I1Jyk7IC8vIFVzZSB5b3VyIGFjdHVhbCBkYXRhYmFzZSBuYW1lXG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgZm9ybmVjZWRvcmVzID0gYXdhaXQgZGIuY29sbGVjdGlvbignZm9ybmVjZWRvcmVzJykuZmluZCh7fSkudG9BcnJheSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvcm5lY2Vkb3Jlcyk7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICBjb25zdCBmb3JuZWNlZG9yZXMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdmb3JuZWNlZG9yZXMnKS5maW5kKHJlcS5ib2R5KS50b0FycmF5KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZm9ybmVjZWRvcmVzKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Zvcm5lY2Vkb3JlcycpLmluc2VydE9uZShyZXEuYm9keSk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ2NyaWFkbyBjb20gc3VjY2Vzc28nIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHBlw6dhJyB9KTtcbiAgICB9XG4gIH0gIGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImRiIiwibWV0aG9kIiwiZm9ybmVjZWRvcmVzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwic3RhdHVzIiwianNvbiIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwibWVzc2FnZSIsImVycm9yIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/fornecedores/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fornecedores/index.js"));
module.exports = __webpack_exports__;

})();