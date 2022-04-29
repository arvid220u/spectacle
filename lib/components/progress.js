"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Circle = void 0;

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _deck = require("./deck/deck");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  border: 1px solid ", ";\n  background: ", ";\n  margin: ", "px;\n  border-radius: 50%;\n  pointer-events: all;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var color = _ref4.color,
      active = _ref4.active;
  return active ? color : 'transparent';
}, function (_ref5) {
  var size = _ref5.size;
  return size / 3;
});

exports.Circle = Circle;

var Container = _styledComponents.default.div(_templateObject2(), _styledSystem.position);

var Progress = /*#__PURE__*/(0, _react.forwardRef)(function (_ref6, ref) {
  var _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? '#fff' : _ref6$color,
      _ref6$size = _ref6.size,
      size = _ref6$size === void 0 ? 10 : _ref6$size,
      props = _objectWithoutProperties(_ref6, ["color", "size"]);

  var _useContext = (0, _react.useContext)(_deck.DeckContext),
      slideCount = _useContext.slideCount,
      skipTo = _useContext.skipTo,
      activeView = _useContext.activeView;

  return /*#__PURE__*/React.createElement(Container, _extends({
    ref: ref,
    className: "spectacle-progress-indicator"
  }, props), Array(slideCount).fill(0).map(function (_, idx) {
    return /*#__PURE__*/React.createElement(Circle, {
      key: "progress-circle-".concat(idx),
      color: color,
      active: activeView.slideIndex === idx,
      size: size,
      onClick: function onClick() {
        return skipTo({
          slideIndex: idx,
          stepIndex: 0
        });
      },
      "data-testid": "Progress Circle"
    });
  }));
});
Progress.displayName = 'Progress';
var _default = Progress;
exports.default = _default;