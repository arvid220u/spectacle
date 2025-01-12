"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAspectRatioFitting;

var _react = require("react");

var _useResizeObserver = _interopRequireDefault(require("use-resize-observer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Returns an offset and scaling factor which, when applied to `element`, will
// make it properly fit into `container` at the given aspect ratio.
function useAspectRatioFitting(_ref) {
  var _ref$targetWidth = _ref.targetWidth,
      targetWidth = _ref$targetWidth === void 0 ? 1366 : _ref$targetWidth,
      _ref$targetHeight = _ref.targetHeight,
      targetHeight = _ref$targetHeight === void 0 ? 768 : _ref$targetHeight;
  var containerRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      scaleFactor = _useState2[0],
      setScaleFactor = _useState2[1];

  var _useState3 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      transformOrigin = _useState4[0],
      setTransformOrigin = _useState4[1];

  var recalculate = (0, _react.useCallback)(function (_ref2) {
    var containerWidth = _ref2.width,
        containerHeight = _ref2.height;
    var containerRatio = containerWidth / containerHeight;
    var targetRatio = targetWidth / targetHeight;
    var useVertical = containerRatio > targetRatio;
    var scaleFactor = useVertical ? containerHeight / targetHeight : containerWidth / targetWidth;
    var scaledWidth = targetWidth * scaleFactor;
    var scaledHeight = targetHeight * scaleFactor;
    var x0 = 0;

    if (useVertical) {
      x0 = 0.5 * (containerWidth - scaledWidth);
      x0 /= 1 - scaleFactor;
    }

    var y0 = 0;

    if (!useVertical) {
      y0 = 0.5 * (containerHeight - scaledHeight);
      y0 /= 1 - scaleFactor;
    }

    setScaleFactor(scaleFactor);
    setTransformOrigin({
      x: x0,
      y: y0
    });
  }, [targetWidth, targetHeight]); // recalculate sizes on the initial pass, and each time the target size
  // changes. (our measurements aren't as accurate as `useResizeObserver`, but
  // we only need to get them close because it'll do them again anyways.)

  (0, _react.useEffect)(function () {
    if (!containerRef || !containerRef.current) return;
    var rects = containerRef.current.getClientRects();
    recalculate(rects[0]);
  }, [targetWidth, targetHeight, recalculate]);
  (0, _useResizeObserver.default)({
    ref: containerRef,
    onResize: recalculate
  });
  var styles = {
    position: 'relative',
    width: targetWidth,
    height: targetHeight,
    scaleFactor: scaleFactor,
    transform: "scale(".concat(scaleFactor, ")"),
    transformOrigin: "".concat(transformOrigin.x, "px ").concat(transformOrigin.y, "px")
  };
  return [containerRef, styles];
}