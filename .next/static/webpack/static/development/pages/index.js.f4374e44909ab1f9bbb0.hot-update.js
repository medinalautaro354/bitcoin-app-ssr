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
  } else {
    image = __jsx("p", {
      className: "text-center my-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Imagen no disponible");
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, image), __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, description), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, source.name), __jsx("a", {
    href: url,
    target: "_blank",
    className: "btn btn-primary d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Lerr noticia"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=index.js.f4374e44909ab1f9bbb0.hot-update.js.map