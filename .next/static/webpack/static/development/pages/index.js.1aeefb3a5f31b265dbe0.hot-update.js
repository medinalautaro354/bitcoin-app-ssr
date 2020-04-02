webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Article/Article.js":
/*!***************************************!*\
  !*** ./components/Article/Article.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\X1\\Documents\\Curso React Js\\bitcoin-app\\components\\Article\\Article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Article = function Article(props) {
  var _props$article = props.article,
      author = _props$article.author,
      content = _props$article.content,
      description = _props$article.description,
      title = _props$article.title,
      urlToImage = _props$article.urlToImage,
      url = _props$article.url,
      source = _props$article.source;
  var image;

  if (urlToImage !== '') {
    image = __jsx("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    });
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, image)));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=index.js.1aeefb3a5f31b265dbe0.hot-update.js.map