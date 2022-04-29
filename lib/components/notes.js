"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _deck = require("./deck/deck");

var _slide = require("./slide/slide");

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notes = function Notes(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_deck.DeckContext),
      notePortalNode = _useContext.notePortalNode;

  var _useContext2 = (0, _react.useContext)(_slide.SlideContext),
      isSlideActive = _useContext2.isSlideActive;

  if (!isSlideActive) return null;
  if (!notePortalNode) return null;
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/React.createElement("div", null, children), notePortalNode);
};

var _default = Notes;
exports.default = _default;