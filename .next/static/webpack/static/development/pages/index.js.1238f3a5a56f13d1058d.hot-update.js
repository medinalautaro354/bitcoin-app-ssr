webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Master_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Master/Master */ "./components/Master/Master.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _components_BitcoinPrice_BitcoinPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BitcoinPrice/BitcoinPrice */ "./components/BitcoinPrice/BitcoinPrice.js");
/* harmony import */ var _components_Articles_Articles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Articles/Articles */ "./components/Articles/Articles.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\X1\\Documents\\Curso React Js\\bitcoin-app\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Index = function Index(props) {
  return __jsx(_components_Master_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Precio del bitcoin"), __jsx(_components_BitcoinPrice_BitcoinPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    price: props.priceBitcoinInArs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Noticias sobre bitcoin"), __jsx(_components_Articles_Articles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    articles: props.news,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }))));
};

Index.getInitialProps = function _callee() {
  var url, newsUrl, response, newsResponse, data, newsData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_5__["bitcoinUrlBase"], "v1/cryptocurrency/listings/latest?start=1&limit=1&convert=ARS");
          newsUrl = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_5__["newsUrlBase"], "v2/everything?q=bitcoin&from=").concat(Date.now, "&sortBy=publishedAt&apiKey=").concat(_config_config__WEBPACK_IMPORTED_MODULE_5__["newsApiKey"], "&language=es");
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url, {
            headers: {
              "X-CMC_PRO_API_KEY": _config_config__WEBPACK_IMPORTED_MODULE_5__["bitcoinApiKey"]
            }
          }));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(newsUrl));

        case 7:
          newsResponse = _context.sent;
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 10:
          data = _context.sent;
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(newsResponse.json());

        case 13:
          newsData = _context.sent;
          return _context.abrupt("return", {
            priceBitcoinInArs: data.data[0].quote.ARS,
            news: newsData.articles
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1238f3a5a56f13d1058d.hot-update.js.map