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

import styled, { createGlobalStyle } from 'styled-components';
import { DeckInternal } from '../deck/deck';
import { AnimatedDiv } from '../slide/slide';
import defaultTheme from '../../theme/default-theme';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Backdrop = styled.div(_templateObject());
var PrintStyle = createGlobalStyle(_templateObject2(), function (_ref) {
  var pageSize = _ref.pageSize,
      pageOrientation = _ref.pageOrientation;
  return "".concat(pageSize, " ").concat(pageOrientation).trim();
}, AnimatedDiv);
export default function PrintMode(_ref2) {
  var _theme$size, _theme$size2;

  var children = _ref2.children,
      theme = _ref2.theme,
      exportMode = _ref2.exportMode,
      pageSize = _ref2.pageSize,
      _ref2$pageOrientation = _ref2.pageOrientation,
      pageOrientation = _ref2$pageOrientation === void 0 ? '' : _ref2$pageOrientation,
      backgroundImage = _ref2.backgroundImage;
  var width = (theme === null || theme === void 0 ? void 0 : (_theme$size = theme.size) === null || _theme$size === void 0 ? void 0 : _theme$size.width) || defaultTheme.size.width;
  var height = (theme === null || theme === void 0 ? void 0 : (_theme$size2 = theme.size) === null || _theme$size2 === void 0 ? void 0 : _theme$size2.height) || defaultTheme.size.height;
  var computedPageSize = pageSize || "".concat(width / 100, "in ").concat(height / 100, "in");
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(PrintStyle, {
      pageSize: computedPageSize,
      pageOrientation: pageOrientation
    }), /*#__PURE__*/_jsx(DeckInternal, {
      printMode: true,
      exportMode: exportMode,
      disableInteractivity: true,
      theme: _objectSpread(_objectSpread({}, theme), {}, {
        Backdrop: Backdrop,
        backdropStyle: {}
      }),
      backgroundImage: backgroundImage,
      children: children
    })]
  });
}