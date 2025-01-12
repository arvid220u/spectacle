"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _useFullScreen = require("../hooks/use-full-screen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents.default)('div')(_templateObject(), _styledSystem.position);
var FullScreen = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var size = _ref.size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["size", "color"]);

  var toggleFullScreen = (0, _useFullScreen.useToggleFullScreen)();
  return /*#__PURE__*/React.createElement(Container, _extends({
    ref: ref,
    className: "spectacle-fullscreen-button",
    onClick: toggleFullScreen,
    style: {
      pointerEvents: 'all'
    }
  }, props), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: !!document.fullscreenElement || document.webkitIsFullScreen ? 'M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z' : 'M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z'
  })));
});
FullScreen.displayName = 'Fullscreen';
FullScreen.defaultProps = {
  color: '#fff',
  size: 24
};
var _default = FullScreen;
exports.default = _default;