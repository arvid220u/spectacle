function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/display-name */
import { Heading, Image, Link, ListItem, OrderedList, Quote, Table, TableCell, TableRow, Text, UnorderedList } from '../';
import { jsx as _jsx } from "react/jsx-runtime";
var mdxComponentMap = {
  p: Text,
  h1: function h1(props) {
    return /*#__PURE__*/_jsx(Heading, _objectSpread(_objectSpread({}, props), {}, {
      fontSize: "h1"
    }));
  },
  h2: function h2(props) {
    return /*#__PURE__*/_jsx(Heading, _objectSpread(_objectSpread({}, props), {}, {
      fontSize: "h2"
    }));
  },
  h3: function h3(props) {
    return /*#__PURE__*/_jsx(Heading, _objectSpread(_objectSpread({}, props), {}, {
      fontSize: "h3"
    }));
  },
  h4: function h4(props) {
    return /*#__PURE__*/_jsx(Heading, _objectSpread(_objectSpread({}, props), {}, {
      fontSize: "h4"
    }));
  },
  blockquote: Quote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  img: Image,
  a: Link,
  table: Table,
  tr: TableRow,
  td: TableCell
};
export default mdxComponentMap;