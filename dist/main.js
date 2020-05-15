/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/cloudy.png":
/*!*******************************!*\
  !*** ./src/images/cloudy.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/cloudy.png\";\n\n//# sourceURL=webpack:///./src/images/cloudy.png?");

/***/ }),

/***/ "./src/images/rainy.png":
/*!******************************!*\
  !*** ./src/images/rainy.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/rainy.png\";\n\n//# sourceURL=webpack:///./src/images/rainy.png?");

/***/ }),

/***/ "./src/images/stormy.png":
/*!*******************************!*\
  !*** ./src/images/stormy.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/stormy.png\";\n\n//# sourceURL=webpack:///./src/images/stormy.png?");

/***/ }),

/***/ "./src/images/sunny.png":
/*!******************************!*\
  !*** ./src/images/sunny.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/sunny.png\";\n\n//# sourceURL=webpack:///./src/images/sunny.png?");

/***/ }),

/***/ "./src/images/windy.png":
/*!******************************!*\
  !*** ./src/images/windy.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/windy.png\";\n\n//# sourceURL=webpack:///./src/images/windy.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.css */ \"./src/scss/main.css\");\n/* harmony import */ var _scss_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_multi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/multi */ \"./src/modules/multi.js\");\n/* harmony import */ var _modules_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/unit */ \"./src/modules/unit.js\");\n/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/date */ \"./src/modules/date.js\");\n\n\n\n\n\nObject(_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"initializeSearch\"])();\nObject(_modules_multi__WEBPACK_IMPORTED_MODULE_2__[\"multiEvent\"])();\nObject(_modules_unit__WEBPACK_IMPORTED_MODULE_3__[\"unitEvent\"])();\nObject(_modules_date__WEBPACK_IMPORTED_MODULE_4__[\"setDateEvents\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/current.js":
/*!********************************!*\
  !*** ./src/modules/current.js ***!
  \********************************/
/*! exports provided: setCurrentWeather, setCurrentUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentWeather\", function() { return setCurrentWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentUnit\", function() { return setCurrentUnit; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\nlet currentWeather;\nlet unit = 'si'; //cache DOM\n\nconst $currentIcon = document.querySelector('.current__icon');\nconst $currentSummary = document.querySelector('.current__summary');\nconst $tempNum = document.querySelector('.current__temp-num');\nconst $windSpeed = document.querySelector('.current__wind span');\nconst $humidity = document.querySelector('.current__humidity span');\nconst $precipitation = document.querySelector('.current__precipitation span');\nconst setCurrentWeather = newWeather => {\n  currentWeather = newWeather;\n  renderCurrent();\n};\nconst setCurrentUnit = newUnit => {\n  unit = newUnit;\n  renderCurrent();\n};\n\nconst whichTemp = weather => {\n  if (weather.temperature) {\n    return weather.temperature;\n  } else {\n    return Math.round((weather.temperatureHigh + weather.temperatureLow) / 2);\n  }\n};\n\nconst renderCurrent = _ => {\n  $currentIcon.innerHTML = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"getAnimatedIcon\"])(currentWeather.icon);\n  $currentSummary.textContent = currentWeather.summary;\n  $tempNum.innerHTML = `${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"toCelFah\"])(whichTemp(currentWeather), unit)}&#176`;\n  $windSpeed.textContent = `${Math.round(currentWeather.windSpeed)}mph`;\n  $humidity.textContent = `${Math.round(currentWeather.humidity * 100)}%`;\n  $precipitation.textContent = `${Math.round(currentWeather.precipProbability * 100)}%`;\n};\n\n//# sourceURL=webpack:///./src/modules/current.js?");

/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/*! exports provided: setDateEvents, changeDateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDateEvents\", function() { return setDateEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDateEvents\", function() { return changeDateEvents; });\n//cache the DOM\nlet time = new Date();\nlet date;\nconst $date = document.querySelector('.date');\nconst setDateEvents = newDate => {\n  $date.innerHTML = `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()}`;\n};\nconst changeDateEvents = newDayIndex => {\n  date = newDayIndex;\n  $date.innerHTML = `${new Date(newDayIndex.time * 1000).getFullYear()} / ${new Date(newDayIndex.time * 1000).getMonth() + 1} / ${new Date(newDayIndex.time * 1000).getDate()}`;\n};\n\n//# sourceURL=webpack:///./src/modules/date.js?");

/***/ }),

/***/ "./src/modules/multi.js":
/*!******************************!*\
  !*** ./src/modules/multi.js ***!
  \******************************/
/*! exports provided: multiEvent, setMultiWeather, setMultiUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiEvent\", function() { return multiEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMultiWeather\", function() { return setMultiWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMultiUnit\", function() { return setMultiUnit; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current */ \"./src/modules/current.js\");\n\n\nlet weatherList = [];\nlet unit = 'si';\nlet selectedIndex = 0; //cache DOM\n\nconst $wlist = document.querySelector('.wlist');\nconst multiEvent = _ => {\n  $wlist.addEventListener('click', event => {\n    let elem = event.target;\n\n    if (elem && !elem.matches('.wlist__item')) {\n      elem = event.target.parentElement;\n    }\n\n    let listElemIndex = [...elem.parentElement.children].indexOf(elem);\n    selectedIndex = listElemIndex;\n    renderMulti();\n    Object(_current__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentWeather\"])(weatherList[listElemIndex]);\n  });\n};\nconst setMultiWeather = newList => {\n  weatherList = newList;\n  renderMulti();\n};\nconst setMultiUnit = newUnit => {\n  unit = newUnit;\n  renderMulti();\n};\n\nconst getDayIndex = dayIndex => {\n  const days = [\"Sun\", \"Mon\", \"Tue\", \"Wen\", \"Thu\", \"Fri\", \"Sat\"];\n  return days[dayIndex];\n};\n\nconst renderMulti = _ => {\n  let markup = '';\n\n  for (let i = 0; i < 5; i++) {\n    const highTemp = weatherList[i].temperatureHigh;\n    const lowTemp = weatherList[i].temperatureLow;\n    const dayIndex = new Date(weatherList[i].time * 1000).getDay();\n    markup += `\n    <div class=\"wlist__item ${i === selectedIndex ? 'wlist__item--selected' : ''}\">\n       <img src=\"${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"getIcon\"])(weatherList[i].icon)}\" class=\"wlist__icon\">\n       <div class=\"wlist__range\">\n       ${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"toCelFah\"])(lowTemp, unit)}/${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"toCelFah\"])(highTemp, unit)}\n       </div>\n       <div class=\"wlist__day\">\n       ${getDayIndex(dayIndex)}\n       </div>\n    </div>\n    `;\n    $wlist.innerHTML = markup;\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/multi.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/*! exports provided: initializeSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeSearch\", function() { return initializeSearch; });\n/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current */ \"./src/modules/current.js\");\n/* harmony import */ var _multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi */ \"./src/modules/multi.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\n\n\nlet address = 'Taipei'; //cache DOM\n\nconst $searchCity = document.querySelector('.search__city');\nconst $searchForm = document.querySelector('.search__form');\nconst $searchInput = document.querySelector('.search__input');\nconst $spinnerWrapper = document.querySelector('.spinner-wrapper');\nconst GEOCODE_KEY = 'AIzaSyBFuo4VL9eHTzMNYhERbKS62yhOzmsxmnc';\nconst DARK_SKY_KEY = '7850635849bec4754779d82cef036fed';\nconst CORS = 'https://cors-anywhere.herokuapp.com';\nconst initializeSearch = _ => {\n  searchEvent();\n  updateWeatherData(address);\n};\n\nconst searchEvent = event => {\n  $searchForm.addEventListener('submit', event => {\n    event.preventDefault();\n    $searchInput.classList.toggle('search__input--open');\n    $searchInput.focus();\n    if ($searchInput.value === '') return;\n    address = $searchInput.value;\n    $searchInput.value = '';\n    renderSearch();\n    updateWeatherData(address);\n  });\n};\n\nconst updateWeatherData = async query => {\n  if ($spinnerWrapper) $spinnerWrapper.classList.toggle(\"spinner-wrapper--active\");\n  const {\n    lat,\n    lng\n  } = await getLatLng(query);\n  const weatherData = await getWeatherData(lat, lng);\n  if ($spinnerWrapper) $spinnerWrapper.classList.toggle(\"spinner-wrapper--active\");\n  const weatherCurrent = weatherData.currently;\n  weatherCurrent.temperature = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"fahToKel\"])(weatherCurrent.temperature);\n  Object(_current__WEBPACK_IMPORTED_MODULE_0__[\"setCurrentWeather\"])(weatherCurrent);\n  const weatherMulti = weatherData.daily.data.map(elem => {\n    elem.temperatureHigh = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"fahToKel\"])(elem.temperatureHigh);\n    elem.temperatureLow = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"fahToKel\"])(elem.temperatureLow);\n    return elem;\n  });\n  weatherMulti[0].temperature = weatherCurrent.temperature;\n  weatherMulti[0].summary = weatherCurrent.summary;\n  Object(_multi__WEBPACK_IMPORTED_MODULE_1__[\"setMultiWeather\"])(weatherMulti);\n};\n\nconst getWeatherData = async (lat, lng) => {\n  let reqLink = `${CORS}/https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${lng}`;\n  let fetchData = await fetch(reqLink);\n  let parsed = await fetchData.json();\n  return parsed;\n};\n\nconst getLatLng = async query => {\n  let reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_KEY}`;\n  let fetchData = await fetch(reqLink);\n  let parsed = await fetchData.json();\n  let parsedData = parsed.results[0];\n  let latLng = {\n    lat: parsedData.geometry.location.lat,\n    lng: parsedData.geometry.location.lng\n  };\n  return latLng;\n};\n\nconst renderSearch = _ => {\n  $searchCity.innerHTML = address;\n};\n\n//# sourceURL=webpack:///./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/unit.js":
/*!*****************************!*\
  !*** ./src/modules/unit.js ***!
  \*****************************/
/*! exports provided: unitEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unitEvent\", function() { return unitEvent; });\n/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current */ \"./src/modules/current.js\");\n/* harmony import */ var _multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi */ \"./src/modules/multi.js\");\n\n //cache DOM\n\nconst $celcius = document.querySelector('.units__celcius');\nconst $fahrenheit = document.querySelector('.units__fahrenheit');\nconst unitEvent = _ => {\n  $fahrenheit.addEventListener('click', _ => {\n    Object(_current__WEBPACK_IMPORTED_MODULE_0__[\"setCurrentUnit\"])('us');\n    Object(_multi__WEBPACK_IMPORTED_MODULE_1__[\"setMultiUnit\"])('us');\n    $fahrenheit.classList.add('units--active');\n    $celcius.classList.remove('units--active');\n  });\n  $celcius.addEventListener('click', _ => {\n    Object(_current__WEBPACK_IMPORTED_MODULE_0__[\"setCurrentUnit\"])('si');\n    Object(_multi__WEBPACK_IMPORTED_MODULE_1__[\"setMultiUnit\"])('si');\n    $celcius.classList.add('units--active');\n    $fahrenheit.classList.remove('units--active');\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/unit.js?");

/***/ }),

/***/ "./src/scss/main.css":
/*!***************************!*\
  !*** ./src/scss/main.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/main.css?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: fahToKel, kelToCelcius, celToKel, fahToCelcius, kelToFah, toCelFah, getIcon, getAnimatedIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fahToKel\", function() { return fahToKel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kelToCelcius\", function() { return kelToCelcius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"celToKel\", function() { return celToKel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fahToCelcius\", function() { return fahToCelcius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kelToFah\", function() { return kelToFah; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toCelFah\", function() { return toCelFah; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIcon\", function() { return getIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAnimatedIcon\", function() { return getAnimatedIcon; });\n/* harmony import */ var _images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../images/cloudy.png */ \"./src/images/cloudy.png\");\n/* harmony import */ var _images_cloudy_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_stormy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/stormy.png */ \"./src/images/stormy.png\");\n/* harmony import */ var _images_stormy_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_stormy_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_rainy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/rainy.png */ \"./src/images/rainy.png\");\n/* harmony import */ var _images_rainy_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_rainy_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_sunny_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/sunny.png */ \"./src/images/sunny.png\");\n/* harmony import */ var _images_sunny_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sunny_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_windy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../images/windy.png */ \"./src/images/windy.png\");\n/* harmony import */ var _images_windy_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_windy_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst fahToKel = temp => {\n  return (temp + 459.67) * (5 / 9);\n};\nconst kelToCelcius = temp => {\n  return temp - 273.15;\n};\nconst celToKel = temp => {\n  return temp + 273.15;\n};\nconst fahToCelcius = temp => {\n  return (temp - 32) * 5 / 9;\n};\nconst kelToFah = temp => {\n  return temp * (9 / 5) - 456.67;\n};\nconst toCelFah = (temp, unit) => {\n  if (unit === 'us') {\n    return Math.round(kelToFah(temp));\n  }\n\n  return Math.round(kelToCelcius(temp));\n};\nconst getIcon = description => {\n  switch (description) {\n    case 'clear-day':\n    case 'clear-night':\n      return _images_sunny_png__WEBPACK_IMPORTED_MODULE_3___default.a;\n\n    case 'rain':\n    case 'snow':\n      return _images_rainy_png__WEBPACK_IMPORTED_MODULE_2___default.a;\n\n    case 'wind':\n      return _images_windy_png__WEBPACK_IMPORTED_MODULE_4___default.a;\n\n    case 'cloud':\n    case 'partly-cloudy-day':\n    case 'partly-cloudy-night':\n      return _images_cloudy_png__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n    case 'thunderstorm':\n    case 'hail':\n    case 'tornado':\n      return stromy;\n\n    default:\n      return _images_sunny_png__WEBPACK_IMPORTED_MODULE_3___default.a;\n  }\n};\nconst getAnimatedIcon = description => {\n  switch (description) {\n    case 'clear-day':\n    case 'clear-night':\n      return `\n            <div class=\"icon sunny\">\n             <div class=\"sun\">\n              <div class=\"rays\"></div>\n             </div>\n            </div>\n            `;\n\n    case 'rain':\n      return `\n            <div class=\"icon rainy\">\n             <div class=\"cloud\"></div>\n             <div class=\"rain\"></div>\n            </div>\n            `;\n\n    case 'snow':\n      return `\n            <div class=\"icon flurries\">\n             <div class=\"cloud\"></div>\n             <div class=\"snow\">\n              <div class=\"flake\"></div>\n              <div class=\"flake\"></div>\n             </div>\n            </div>\n            `;\n\n    case 'wind':\n    case 'cloud':\n    case 'partly-cloudy-day':\n    case 'partly-cloudy-night':\n      return `\n            <div class=\"icon cloudy\">\n             <div class=\"cloud\"></div>\n             <div class=\"cloud\"></div>\n            </div>\n            `;\n\n    case 'thunderstorm':\n    case 'hail':\n    case 'tornado':\n      return `\n            <div class=\"icon thunder-storm\">\n             <div class=\"lightning\">\n              <div class=\"bolt\"></div>\n              <div class=\"bolt\"></div>\n             </div>\n            </div>\n            `;\n\n    default:\n      return `\n            <div class=\"icon sunny\">\n            <div class=\"sun\">\n             <div class=\"rays\"></div>\n            </div>\n            </div>\n            `;\n      ;\n  }\n\n  ;\n};\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });