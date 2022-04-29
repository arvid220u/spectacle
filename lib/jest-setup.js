"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We assign React to global for Jest since webpack automatically
// provides @babel/preset-react when the project is built.
// @ts-ignore
global.React = _react.default;