"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("../");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mdxComponentMap = {
  p: _.Text,
  h1: function h1(props) {
    return /*#__PURE__*/React.createElement(_.Heading, _extends({}, props, {
      fontSize: "h1"
    }));
  },
  h2: function h2(props) {
    return /*#__PURE__*/React.createElement(_.Heading, _extends({}, props, {
      fontSize: "h2"
    }));
  },
  h3: function h3(props) {
    return /*#__PURE__*/React.createElement(_.Heading, _extends({}, props, {
      fontSize: "h3"
    }));
  },
  h4: function h4(props) {
    return /*#__PURE__*/React.createElement(_.Heading, _extends({}, props, {
      fontSize: "h4"
    }));
  },
  blockquote: _.Quote,
  ul: _.UnorderedList,
  ol: _.OrderedList,
  li: _.ListItem,
  img: _.Image,
  a: _.Link,
  table: _.Table,
  tr: _.TableRow,
  td: _.TableCell
};
var _default = mdxComponentMap;
exports.default = _default;