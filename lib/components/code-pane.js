"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _useSteps2 = require("../hooks/use-steps");

var _indentNormalizer = _interopRequireDefault(require("../utils/indent-normalizer"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _vsDark = _interopRequireDefault(require("react-syntax-highlighter/dist/cjs/styles/prism/vs-dark"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var checkForNumberValues = function checkForNumberValues(ranges) {
  return ranges.every(function (element) {
    return typeof element === 'number';
  });
};

var checkForInvalidValues = function checkForInvalidValues(ranges) {
  return ranges.every(function (element) {
    return element === null || element === undefined;
  });
};

var getRangeFormat = function getRangeFormat(numberOfSteps, highlightRanges, step) {
  // If the value passed to highlightRanges is:
  // a single array containing only two numbers e.g. [3, 5]
  if (numberOfSteps === 1) {
    return highlightRanges;
  } // a 2D array containing null/undefined values e.g. [1, null, 5, [7, 9]]


  if (highlightRanges[step] === null || highlightRanges[step] === undefined) {
    return [];
  } // a 2D array and some of its elements contain numbers e.g. [[1, 3], 5, 7, 9, [10, 15]]


  if (typeof highlightRanges[step] === 'number') {
    return [highlightRanges[step]];
  } // a 2D array e.g. [[1], [3], [5, 9], [15], [20, 25], [30]]


  return highlightRanges[step];
};

var getStyleForLineNumber = function getStyleForLineNumber(lineNumber, activeRange) {
  var isOneLineNumber = activeRange.length === 1;

  if (isOneLineNumber) {
    var _activeRange = _slicedToArray(activeRange, 1),
        activeLineNumber = _activeRange[0];

    if (activeLineNumber === lineNumber) {
      return {
        opacity: 1
      };
    } else {
      return {
        opacity: 0.5
      };
    }
  }

  var _activeRange2 = _slicedToArray(activeRange, 2),
      from = _activeRange2[0],
      to = _activeRange2[1];

  return {
    opacity: from <= lineNumber && lineNumber <= to ? 1 : 0.5
  };
};

var Container = (0, _styledComponents.default)('div')((0, _styledSystem.compose)(_styledSystem.position, _styledSystem.layout));
var CodePane = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$highlightRanges = _ref.highlightRanges,
      highlightRanges = _ref$highlightRanges === void 0 ? [] : _ref$highlightRanges,
      language = _ref.language,
      _ref$showLineNumbers = _ref.showLineNumbers,
      showLineNumbers = _ref$showLineNumbers === void 0 ? true : _ref$showLineNumbers,
      rawCodeString = _ref.children,
      stepIndex = _ref.stepIndex,
      _ref$theme = _ref.theme,
      syntaxTheme = _ref$theme === void 0 ? _vsDark.default : _ref$theme,
      props = _objectWithoutProperties(_ref, ["highlightRanges", "language", "showLineNumbers", "children", "stepIndex", "theme"]);

  var numberOfSteps = (0, _react.useMemo)(function () {
    if (highlightRanges.length === 0 || // Prevents e.g. [null, null] to be used to count the number of steps
    checkForInvalidValues(highlightRanges)) {
      return 0;
    } // Checks if the value passed to highlightRanges is a single array containing only two numbers e.g. [3, 5]


    var isSingleRange = highlightRanges.length <= 2 && // Prevents e.g. [3, [5]] from being considered a single array range
    checkForNumberValues(highlightRanges);

    if (isSingleRange) {
      return 1;
    }

    return highlightRanges.length;
  }, [highlightRanges]);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);

  var _useSteps = (0, _useSteps2.useSteps)(numberOfSteps, {
    stepIndex: stepIndex
  }),
      stepId = _useSteps.stepId,
      isActive = _useSteps.isActive,
      step = _useSteps.step,
      placeholder = _useSteps.placeholder;

  var children = (0, _react.useMemo)(function () {
    return (0, _indentNormalizer.default)(rawCodeString);
  }, [rawCodeString]);
  var scrollTarget = (0, _react.useRef)(null);
  var getLineNumberProps = (0, _react.useCallback)(function (lineNumber) {
    if (!isActive) return;
    var range = getRangeFormat(numberOfSteps, highlightRanges, step);
    return {
      style: getStyleForLineNumber(lineNumber, range)
    };
  }, [isActive, highlightRanges, numberOfSteps, step]);
  var getLineProps = (0, _react.useCallback)(function (lineNumber) {
    if (!isActive) return {};
    var range = getRangeFormat(numberOfSteps, highlightRanges, step);
    return {
      ref: lineNumber === range[0] ? scrollTarget : null,
      style: getStyleForLineNumber(lineNumber, range)
    };
  }, [isActive, highlightRanges, numberOfSteps, step]);
  (0, _react.useEffect)(function () {
    window.requestAnimationFrame(function () {
      if (!scrollTarget.current) return;
      scrollTarget.current.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    });
  }, [isActive, step]);
  var customStyle = (0, _react.useMemo)(function () {
    /**
     * Provide fallback values if the user intentionally overrides the
     * default theme with no valid values.
     */
    var _theme$size$width = theme.size.width,
        width = _theme$size$width === void 0 ? 1366 : _theme$size$width,
        _theme$space = theme.space,
        space = _theme$space === void 0 ? [0, 0, 0] : _theme$space,
        _theme$fontSizes$mono = theme.fontSizes.monospace,
        monospace = _theme$fontSizes$mono === void 0 ? '20px' : _theme$fontSizes$mono;
    return {
      padding: space[0],
      margin: 0,
      width: width - space[2] * 2 - space[0] * 2,
      fontSize: monospace
    };
  }, [theme]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, placeholder, /*#__PURE__*/React.createElement(Container, _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement(_reactSyntaxHighlighter.Prism, {
    customStyle: customStyle,
    language: language,
    wrapLines: true,
    showLineNumbers: showLineNumbers,
    lineProps: getLineProps,
    lineNumberProps: getLineNumberProps,
    style: syntaxTheme
  }, children)));
});
var _default = CodePane;
exports.default = _default;