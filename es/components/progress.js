function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import { DeckContext } from './deck/deck';
import { position } from 'styled-system';
import { jsx as _jsx } from "react/jsx-runtime";
export var Circle = styled.div(_templateObject(), function (_ref) {
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
var Container = styled.div(_templateObject2(), position);
var Progress = /*#__PURE__*/forwardRef(function (_ref6, ref) {
  var _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? '#fff' : _ref6$color,
      _ref6$size = _ref6.size,
      size = _ref6$size === void 0 ? 10 : _ref6$size,
      props = _objectWithoutProperties(_ref6, ["color", "size"]);

  var _useContext = useContext(DeckContext),
      slideCount = _useContext.slideCount,
      skipTo = _useContext.skipTo,
      activeView = _useContext.activeView;

  return /*#__PURE__*/_jsx(Container, _objectSpread(_objectSpread({
    ref: ref,
    className: "spectacle-progress-indicator"
  }, props), {}, {
    children: Array(slideCount).fill(0).map(function (_, idx) {
      return /*#__PURE__*/_jsx(Circle, {
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
      }, "progress-circle-".concat(idx));
    })
  }));
});
Progress.displayName = 'Progress';
export default Progress;