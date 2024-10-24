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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n// /api/pedidos/index.js\n\nasync function handler(req, res) {\n  try {\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db('vector5'); // Replace with your actual database name\n\n    if (req.method === 'GET') {\n      const pedidos = await db.collection('pedidos').find({}).toArray();\n      res.status(200).json(pedidos);\n    } else if (req.method === 'PUT') {\n      const {\n        email\n      } = req.body;\n      const pedidos = await db.collection('pedidos').find({\n        'carrinha': {\n          $elemMatch: {\n            'email': email\n          }\n        }\n      }).toArray();\n      console.log(1);\n      res.status(200).json(pedidos);\n    } else if (req.method === 'POST') {\n      const result = await db.collection('pedidos').insertOne(req.body);\n      res.status(201).json({\n        message: 'Pedido feito com sucesso',\n        id: result.insertedId\n      });\n    } else {\n      res.setHeader('Allow', ['GET', 'POST']);\n      res.status(405).end(`Method ${req.method} Não Permitido`);\n    }\n  } catch (error) {\n    res.status(500).json({\n      error: 'Internal Server Error'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvUGVkaWRvcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7RUFDOUMsSUFBSTtJQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNSixvREFBckI7SUFDQSxNQUFNSyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLFNBQVYsQ0FBWCxDQUZFLENBRStCOztJQUVqQyxJQUFJSCxHQUFHLENBQUNJLE1BQUosS0FBZSxLQUFuQixFQUEwQjtNQUN4QixNQUFNQyxPQUFPLEdBQUcsTUFBTUYsRUFBRSxDQUFDRyxVQUFILENBQWMsU0FBZCxFQUF5QkMsSUFBekIsQ0FBOEIsRUFBOUIsRUFBa0NDLE9BQWxDLEVBQXRCO01BQ0FQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTCxPQUFyQjtJQUNELENBSEQsTUFJTyxJQUFJTCxHQUFHLENBQUNJLE1BQUosS0FBZSxLQUFuQixFQUEwQjtNQUM3QixNQUFNO1FBQUVPO01BQUYsSUFBWVgsR0FBRyxDQUFDWSxJQUF0QjtNQUNBLE1BQU1QLE9BQU8sR0FBRyxNQUFNRixFQUFFLENBQUNHLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxJQUF6QixDQUE4QjtRQUNsRCxZQUFZO1VBQ1ZNLFVBQVUsRUFBRTtZQUNWLFNBQVNGO1VBREM7UUFERjtNQURzQyxDQUE5QixFQU9yQkgsT0FQcUIsRUFBdEI7TUFRQU0sT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWjtNQUVBZCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsT0FBckI7SUFDRCxDQWJJLE1BZ0JGLElBQUlMLEdBQUcsQ0FBQ0ksTUFBSixLQUFlLE1BQW5CLEVBQTJCO01BSTlCLE1BQU1ZLE1BQU0sR0FBRyxNQUFNYixFQUFFLENBQUNHLFVBQUgsQ0FBYyxTQUFkLEVBQXlCVyxTQUF6QixDQUFtQ2pCLEdBQUcsQ0FBQ1ksSUFBdkMsQ0FBckI7TUFDQVgsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFBRVEsT0FBTyxFQUFFLDBCQUFYO1FBQXVDQyxFQUFFLEVBQUVILE1BQU0sQ0FBQ0k7TUFBbEQsQ0FBckI7SUFDRCxDQU5JLE1BTUU7TUFDTG5CLEdBQUcsQ0FBQ29CLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBdkI7TUFDQXBCLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JhLEdBQWhCLENBQXFCLFVBQVN0QixHQUFHLENBQUNJLE1BQU8sZ0JBQXpDO0lBQ0Q7RUFDRixDQWxDRCxDQWtDRSxPQUFPbUIsS0FBUCxFQUFjO0lBQ2R0QixHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFYSxLQUFLLEVBQUU7SUFBVCxDQUFyQjtFQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvUGVkaWRvcy9pbmRleC5qcz80ZjZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9hcGkvcGVkaWRvcy9pbmRleC5qc1xuXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCd2ZWN0b3I1Jyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBkYXRhYmFzZSBuYW1lXG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIGNvbnN0IHBlZGlkb3MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwZWRpZG9zJykuZmluZCh7fSkudG9BcnJheSgpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocGVkaWRvcyk7XG4gICAgfVxuICAgICAgZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7IFxuICAgICAgICBjb25zdCBwZWRpZG9zID0gYXdhaXQgZGIuY29sbGVjdGlvbigncGVkaWRvcycpLmZpbmQoe1xuICAgICAgICAgICdjYXJyaW5oYSc6IHtcbiAgICAgICAgICAgICRlbGVtTWF0Y2g6IHtcbiAgICAgICAgICAgICAgJ2VtYWlsJzogZW1haWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwZWRpZG9zKTtcbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgXG5cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncGVkaWRvcycpLmluc2VydE9uZShyZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdQZWRpZG8gZmVpdG8gY29tIHN1Y2Vzc28nLCBpZDogcmVzdWx0Lmluc2VydGVkSWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE7Do28gUGVybWl0aWRvYCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJkYiIsIm1ldGhvZCIsInBlZGlkb3MiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwiZW1haWwiLCJib2R5IiwiJGVsZW1NYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJtZXNzYWdlIiwiaWQiLCJpbnNlcnRlZElkIiwic2V0SGVhZGVyIiwiZW5kIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Pedidos/index.js\n");

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