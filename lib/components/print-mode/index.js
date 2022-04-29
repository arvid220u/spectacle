"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrintMode;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _deck = require("../deck/deck");

var _slide = require("../slide/slide");

var _defaultTheme = _interopRequireDefault(require("../../theme/default-theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @media print {\n    body, html {\n      margin: 0;\n    }\n    @page {\n      size: ", ";\n    }\n    ", " {\n      @page {\n        margin: 0;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Backdrop = _styledComponents.default.div(_templateObject());

var PrintStyle = (0, _styledComponents.createGlobalStyle)(_templateObject2(), function (_ref) {
  var pageSize = _ref.pageSize,
      pageOrientation = _ref.pageOrientation;
  return "".concat(pageSize, " ").concat(pageOrientation).trim();
}, _slide.AnimatedDiv);

function PrintMode(_ref2) {
  var _theme$size, _theme$size2;

  var children = _ref2.children,
      theme = _ref2.theme,
      exportMode = _ref2.exportMode,
      pageSize = _ref2.pageSize,
      _ref2$pageOrientation = _ref2.pageOrientation,
      pageOrientation = _ref2$pageOrientation === void 0 ? '' : _ref2$pageOrientation,
      backgroundImage = _ref2.backgroundImage;
  var width = (theme === null || theme === void 0 ? void 0 : (_theme$size = theme.size) === null || _theme$size === void 0 ? void 0 : _theme$size.width) || _defaultTheme.default.size.width;
  var height = (theme === null || theme === void 0 ? void 0 : (_theme$size2 = theme.size) === null || _theme$size2 === void 0 ? void 0 : _theme$size2.height) || _defaultTheme.default.size.height;
  var computedPageSize = pageSize || "".concat(width / 100, "in ").concat(height / 100, "in");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PrintStyle, {
    pageSize: computedPageSize,
    pageOrientation: pageOrientation
  }), /*#__PURE__*/React.createElement(_deck.DeckInternal, {
    printMode: true,
    exportMode: exportMode,
    disableInteractivity: true,
    theme: _objectSpread(_objectSpread({}, theme), {}, {
      Backdrop: Backdrop,
      backdropStyle: {}
    }),
    backgroundImage: backgroundImage
  }, children));
}