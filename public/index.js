/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-margin {\n  margin: 0px; }\n\n.no-padding {\n  padding: 0px; }\n\n.banner-header {\n  padding: 55px 0px;\n  background-color: #3f3f3f; }\n  .banner-header .title {\n    color: #ffffff;\n    font-size: 30px; }\n\n.show {\n  position: fixed;\n  top: 5%;\n  right: 1%; }\n\n.hidden {\n  display: none !important; }\n\n.section-url {\n  padding-top: 60px; }\n\n.section-question {\n  padding-top: 60px; }\n\n.questions {\n  padding-top: 60px; }\n  .questions button {\n    margin-bottom: 30px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/js/components/App.js":
/*!**********************************!*\
  !*** ./src/js/components/App.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _BannerHeader = __webpack_require__(/*! ./BannerHeader */ "./src/js/components/BannerHeader.js");

var _BannerHeader2 = _interopRequireDefault(_BannerHeader);

var _GetQuiz = __webpack_require__(/*! ./GetQuiz */ "./src/js/components/GetQuiz.js");

var _GetQuiz2 = _interopRequireDefault(_GetQuiz);

var _ShowQuiz = __webpack_require__(/*! ./ShowQuiz */ "./src/js/components/ShowQuiz.js");

var _ShowQuiz2 = _interopRequireDefault(_ShowQuiz);

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            url: '',
            titleBanner: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'urlAPI',
        value: function urlAPI(url) {
            this.setState({ url: url });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_BannerHeader2.default, { titleBanner: this.state.titleBanner }),
                this.state.url ? _react2.default.createElement(_ShowQuiz2.default, { data: this.state.url }) : _react2.default.createElement(_GetQuiz2.default, { onSelect: this.urlAPI.bind(this) })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "./src/js/components/BannerHeader.js":
/*!*******************************************!*\
  !*** ./src/js/components/BannerHeader.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BannerHeader = function (_React$Component) {
	_inherits(BannerHeader, _React$Component);

	function BannerHeader() {
		_classCallCheck(this, BannerHeader);

		return _possibleConstructorReturn(this, (BannerHeader.__proto__ || Object.getPrototypeOf(BannerHeader)).call(this));
	}

	_createClass(BannerHeader, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-12 banner-header' },
					this.props.titleBanner ? _react2.default.createElement(
						'h1',
						{ className: 'text-center title no-margin' },
						this.props.titleBanner
					) : _react2.default.createElement(
						'h1',
						{ className: 'text-center title no-margin' },
						'QUIZ 4Geeks'
					)
				)
			);
		}
	}]);

	return BannerHeader;
}(_react2.default.Component);

exports.default = BannerHeader;

/***/ }),

/***/ "./src/js/components/GetQuiz.js":
/*!**************************************!*\
  !*** ./src/js/components/GetQuiz.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetQuiz = function (_React$Component) {
    _inherits(GetQuiz, _React$Component);

    function GetQuiz() {
        _classCallCheck(this, GetQuiz);

        var _this = _possibleConstructorReturn(this, (GetQuiz.__proto__ || Object.getPrototypeOf(GetQuiz)).call(this));

        _this.state = {
            value: 'https://assets.breatheco.de/apis/quiz/html'
        };
        return _this;
    }

    _createClass(GetQuiz, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            this.props.onSelect(this.state.value);
            this.setState({
                value: ''
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({
                value: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row justify-content-center section-url' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'text-center' },
                            'Get API'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-6' },
                        _react2.default.createElement(
                            'form',
                            { onSubmit: this.handleSubmit.bind(this) },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'URL JSON'
                                ),
                                _react2.default.createElement('input', {
                                    className: 'form-control',
                                    type: 'text',
                                    value: this.state.value,
                                    onChange: this.handleChange.bind(this)
                                })
                            ),
                            _react2.default.createElement(
                                'button',
                                { type: 'submit', className: 'btn btn-primary' },
                                'Submit'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return GetQuiz;
}(_react2.default.Component);

exports.default = GetQuiz;

/***/ }),

/***/ "./src/js/components/Info.js":
/*!***********************************!*\
  !*** ./src/js/components/Info.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
    _inherits(Info, _React$Component);

    function Info(props) {
        _classCallCheck(this, Info);

        var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

        _this.state = {
            nameInfo: '',
            mainInfo: '',
            resultInfo: ''
        };
        return _this;
    }

    _createClass(Info, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                nameInfo: props.data.name,
                mainInfo: props.data.main,
                resultInfo: props.data.results
            });
        }
    }, {
        key: 'handleChangeName',
        value: function handleChangeName(event) {
            this.setState({
                nameInfo: event.target.value
            });

            this.props.onJson({
                name: event.target.value,
                main: this.state.mainInfo,
                result: this.state.resultInfo
            }, { typeRequest: 'info' });
        }
    }, {
        key: 'handleChangeMain',
        value: function handleChangeMain(event) {
            this.setState({
                mainInfo: event.target.value
            });

            this.props.onJson({
                name: this.state.nameInfo,
                main: event.target.value,
                result: this.state.resultInfo
            }, { typeRequest: 'info' });
        }
    }, {
        key: 'handleChangeResult',
        value: function handleChangeResult(event) {
            this.setState({
                resultInfo: event.target.value
            });

            this.props.onJson({
                name: this.state.nameInfo,
                main: this.state.mainInfo,
                result: event.target.value
            }, { typeRequest: 'info' });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'section-question' },
                _react2.default.createElement(
                    'h2',
                    { className: 'text-center title-info' },
                    'Principal Info'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Name Quiz'
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        className: 'form-control',
                        value: this.state.nameInfo,
                        onChange: this.handleChangeName.bind(this)
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Main Quiz'
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        className: 'form-control',
                        value: this.state.mainInfo,
                        onChange: this.handleChangeMain.bind(this)
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Result Quiz'
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        className: 'form-control',
                        value: this.state.resultInfo,
                        onChange: this.handleChangeResult.bind(this)
                    })
                )
            );
        }
    }]);

    return Info;
}(_react2.default.Component);

exports.default = Info;

/***/ }),

/***/ "./src/js/components/NewQuestion.js":
/*!******************************************!*\
  !*** ./src/js/components/NewQuestion.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewQuestion = function (_React$Component) {
  _inherits(NewQuestion, _React$Component);

  function NewQuestion(props) {
    _classCallCheck(this, NewQuestion);

    var _this = _possibleConstructorReturn(this, (NewQuestion.__proto__ || Object.getPrototypeOf(NewQuestion)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(NewQuestion, [{
    key: "newQuestion",
    value: function newQuestion() {
      this.props.onClick();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "" },
        _react2.default.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-primary",
            onClick: this.newQuestion.bind(this)
          },
          "Nueva Pregunta"
        )
      );
    }
  }]);

  return NewQuestion;
}(_react2.default.Component);

exports.default = NewQuestion;

/***/ }),

/***/ "./src/js/components/Questions.js":
/*!****************************************!*\
  !*** ./src/js/components/Questions.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Questions = function (_React$Component) {
	_inherits(Questions, _React$Component);

	function Questions(props) {
		_classCallCheck(this, Questions);

		var _this = _possibleConstructorReturn(this, (Questions.__proto__ || Object.getPrototypeOf(Questions)).call(this, props));

		_this.state = {
			valueQuestion: [],
			valueOption: [],
			isChecked: false,
			showMessage: false,
			editing: false
		};

		_this.handleChangeOptions = _this.handleChangeOptions.bind(_this);
		return _this;
	}

	_createClass(Questions, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				valueQuestion: nextProps.data.q,
				valueOption: nextProps.answer
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setState({
				valueQuestion: this.props.data.q,
				valueOption: this.props.answer
			});
		}
	}, {
		key: 'handleChangeQuestion',
		value: function handleChangeQuestion(event, key) {
			this.setState({
				valueQuestion: event.target.value
			});
			this.props.onJson(event.target.value, { typeRequest: 'question' });
		}
	}, {
		key: 'handleChangeOptions',
		value: function handleChangeOptions(event, key) {
			var newOptions = this.state.valueOption.map(function (opt, i) {
				if (key == i) {
					return { option: event.target.value, correct: opt.correct };
				} else {
					return opt;
				}
			});
			this.setState({
				valueOption: newOptions
			});
			this.props.onJson(newOptions, { typeRequest: 'option' });
		}
	}, {
		key: 'handleChangeOptionsTrueFalse',
		value: function handleChangeOptionsTrueFalse(event, key) {
			this.setState({
				isChecked: !this.state.isChecked
			});
			if (this.state.isChecked) {
				var newOptions = this.state.valueOption.map(function (opt, i) {
					if (key == i) {
						return { option: opt.option, correct: true };
					} else {
						return opt;
					}
				});
				this.setState({
					valueOption: newOptions
				});
				this.props.onJson(newOptions);
			} else {
				var _newOptions = this.state.valueOption.map(function (opt, i) {
					if (key == i) {
						return { option: opt.option, correct: false };
					} else {
						return opt;
					}
				});
				this.setState({
					valueOption: _newOptions
				});
				this.props.onJson(_newOptions);
			}
		}
	}, {
		key: 'handleDeleteQuestion',
		value: function handleDeleteQuestion() {
			var _this2 = this;

			this.setState({
				showMessage: true
			});
			setTimeout(function () {
				_this2.setState({
					showMessage: false
				});
			}, 2000);
			this.props.onSelect();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var options = null;
			options = this.state.valueOption.map(function (value, key) {
				return _react2.default.createElement(
					'div',
					{ className: 'row', key: key },
					_react2.default.createElement(
						'div',
						{ className: 'col-8' },
						_react2.default.createElement('input', {
							className: 'form-control',
							type: 'text',
							value: value.option,
							onChange: function onChange(event) {
								return _this3.handleChangeOptions(event, key);
							}
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-2' },
						_react2.default.createElement(
							'label',
							{ className: 'float-right' },
							'Correct?'
						),
						_react2.default.createElement('input', {
							type: 'checkbox',
							checked: value.correct,
							value: value.correct,
							onChange: function onChange(event) {
								return _this3.handleChangeOptionsTrueFalse(event, key);
							}
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-2' },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-danger' },
							_react2.default.createElement('i', { 'class': 'fas fa-trash-alt' })
						)
					)
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'questions' },
				_react2.default.createElement(
					'div',
					{ className: "message-delete " + (this.state.showMessage ? "show " : "hidden") },
					_react2.default.createElement(
						'div',
						{ className: 'alert alert-danger', role: 'alert' },
						'Question Deleted'
					)
				),
				_react2.default.createElement(
					'button',
					{
						type: 'button',
						className: 'btn btn-danger',
						onClick: this.handleDeleteQuestion.bind(this) },
					'Eliminar pregunta'
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-group' },
					_react2.default.createElement(
						'label',
						null,
						'Question:'
					),
					_react2.default.createElement('input', {
						className: 'form-control',
						type: 'text',
						value: this.state.valueQuestion,
						onChange: function onChange(event) {
							return _this3.handleChangeQuestion(event);
						}
					})
				),
				options
			);
		}
	}]);

	return Questions;
}(_react2.default.Component);

exports.default = Questions;

/***/ }),

/***/ "./src/js/components/ShowQuiz.js":
/*!***************************************!*\
  !*** ./src/js/components/ShowQuiz.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Info = __webpack_require__(/*! ./Info */ "./src/js/components/Info.js");

var _Info2 = _interopRequireDefault(_Info);

var _Questions = __webpack_require__(/*! ./Questions */ "./src/js/components/Questions.js");

var _Questions2 = _interopRequireDefault(_Questions);

var _NewQuestion = __webpack_require__(/*! ./NewQuestion */ "./src/js/components/NewQuestion.js");

var _NewQuestion2 = _interopRequireDefault(_NewQuestion);

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowQuiz = function (_React$Component) {
	_inherits(ShowQuiz, _React$Component);

	function ShowQuiz(props) {
		_classCallCheck(this, ShowQuiz);

		var _this = _possibleConstructorReturn(this, (ShowQuiz.__proto__ || Object.getPrototypeOf(ShowQuiz)).call(this, props));

		_this.state = {
			apiBadges: [],
			apiInfo: [],
			apiQuestions: [],
			json: []
		};
		return _this;
	}

	_createClass(ShowQuiz, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log('Se monto');
			this.getApi();
		}
	}, {
		key: 'getApi',
		value: function getApi() {
			var _this2 = this;

			fetch(this.props.data).then(function (response) {
				return response.json();
			}).then(function (data) {
				_this2.setState({
					apiInfo: data.info,
					apiQuestions: data.questions,
					apiBadges: data.info.badges
				});
				console.log(_this2.state.apiBadges);
			}).catch(function (error) {
				console.log('error', error);
			});
		}
	}, {
		key: 'handleNewQuestion',
		value: function handleNewQuestion() {
			var newQuestion = {
				q: '',
				a: [{
					option: '',
					correct: false
				}, {
					option: '',
					correct: false
				}, {
					option: '',
					correct: false
				}]
			};
			this.setState({
				apiQuestions: [].concat(_toConsumableArray(this.state.apiQuestions), [newQuestion])
			});
		}
	}, {
		key: 'handleDeleteQuestion',
		value: function handleDeleteQuestion(data, i) {
			console.log('entro');
			var filteredQuestions = this.state.apiQuestions.filter(function (el) {
				return el != data;
			});
			this.setState({
				apiQuestions: filteredQuestions
			});
		}

		//recibo los datos que cambio en Info.js

	}, {
		key: 'getValueFromInfo',
		value: function getValueFromInfo(data, type, key) {
			var api = this.state.apiQuestions;
			var dataFromComponent = data;
			console.log(data);
			console.log(type);

			if (type.typeRequest == 'question') {
				//recorremos el api
				var result = this.state.apiQuestions.map(function (value, i) {
					if (key == i) {
						return { q: dataFromComponent, a: value.a };
					} else {
						return { q: value.q, a: value.a };
					}
				});
				this.setState({
					apiQuestions: result
				});
				console.log(result);
			} else if (type.typeRequest == 'info') {}
		}
	}, {
		key: 'download',
		value: function download(filename, text) {
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var results = this.state.apiQuestions.map(function (value, key) {
				return _react2.default.createElement(_Questions2.default, {
					key: key,
					data: value,
					answer: value.a,
					onJson: function onJson(data, type) {
						return _this3.getValueFromInfo(data, type, key);
					},
					onSelect: function onSelect() {
						return _this3.handleDeleteQuestion(value, key);
					} });
			});
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this3.download("quiz.json", JSON.stringify(_this3.state.apiQuestions));
						} },
					'download'
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-10 mx-auto' },
						_react2.default.createElement(_Info2.default, {
							data: this.state.apiInfo,
							onJson: function onJson(data, type) {
								return _this3.getValueFromInfo(data, type);
							} }),
						_react2.default.createElement(
							'div',
							{ className: 'section-question' },
							_react2.default.createElement(
								'h2',
								{ className: 'text-center' },
								'Questions'
							),
							results
						),
						_react2.default.createElement(_NewQuestion2.default, { onClick: this.handleNewQuestion.bind(this) })
					)
				)
			);
		}
	}]);

	return ShowQuiz;
}(_react2.default.Component);

exports.default = ShowQuiz;

/***/ }),

/***/ "./src/js/icons.js":
/*!*************************!*\
  !*** ./src/js/icons.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fontawesome = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _faCheck = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faCheck */ "./node_modules/@fortawesome/fontawesome-free-solid/faCheck.js");

var _faCheck2 = _interopRequireDefault(_faCheck);

var _faTrashAlt = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faTrashAlt */ "./node_modules/@fortawesome/fontawesome-free-solid/faTrashAlt.js");

var _faTrashAlt2 = _interopRequireDefault(_faTrashAlt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesome2.default.config = {
  autoReplaceSvg: 'nest'
}; /* global FontAwesomeConfig */

_fontawesome2.default.library.add(_faCheck2.default, _faTrashAlt2.default);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./components/App */ "./src/js/components/App.js");

var _App2 = _interopRequireDefault(_App);

__webpack_require__(/*! ../style/index.scss */ "./src/style/index.scss");

__webpack_require__(/*! ./icons.js */ "./src/js/icons.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map