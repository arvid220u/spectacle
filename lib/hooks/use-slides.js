"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDER_CLASS_NAME = void 0;
exports.useCollectSlides = useCollectSlides;
exports.useSlide = useSlide;

var _react = require("react");

var _ulid = require("ulid");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PLACEHOLDER_CLASS_NAME = 'spectacle-v7-slide'; // After the initial render pass, this hook actually goes and looks for
// <Slide> elements rendered lower in the tree. Slides decide on an ID for
// themselves and communicate via the `data-slide-key` element on their
// placeholder.

exports.PLACEHOLDER_CLASS_NAME = PLACEHOLDER_CLASS_NAME;

function useCollectSlides() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      slideContainer = _useState4[0],
      setSlideContainer = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      slideIds = _useState6[0],
      setSlideIds = _useState6[1];

  (0, _react.useEffect)(function () {
    if (!slideContainer) return;
    var slides = slideContainer.getElementsByClassName(PLACEHOLDER_CLASS_NAME);
    var nextSlideIds = [];

    var _iterator = _createForOfIteratorHelper(slides),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var placeholderNode = _step.value;
        var slideId = placeholderNode.dataset.slideId;
        nextSlideIds.push(slideId);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setSlideIds(nextSlideIds);
    setInitialized(true);
  }, [slideContainer]);
  return [setSlideContainer, slideIds, initialized];
}

function useSlide(userProvidedId) {
  var _useState7 = (0, _react.useState)(userProvidedId || _ulid.ulid),
      _useState8 = _slicedToArray(_useState7, 1),
      slideId = _useState8[0];

  return {
    slideId: slideId,
    placeholder: /*#__PURE__*/React.createElement("div", {
      className: PLACEHOLDER_CLASS_NAME,
      "data-slide-id": slideId
    })
  };
}