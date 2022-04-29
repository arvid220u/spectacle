"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _queryString = require("query-string");

var _defaultDeck = _interopRequireDefault(require("./default-deck"));

var _presenterMode = _interopRequireDefault(require("../presenter-mode"));

var _printMode = _interopRequireDefault(require("../print-mode"));

var _useMousetrap2 = _interopRequireDefault(require("../../hooks/use-mousetrap"));

var _constants = require("../../utils/constants");

var _modes = require("./modes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SpectacleDeck = function SpectacleDeck(props) {
  var _useMousetrap;

  var mode = (0, _react.useRef)((0, _modes.modeKeyForSearchParam)((0, _queryString.parse)(location.search, {
    parseBooleans: true
  })));
  var toggleMode = (0, _react.useCallback)(function (e, newMode, senderSlideIndex) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    var stepIndex = 0;
    var slideIndex = senderSlideIndex || '';
    var searchParams = (0, _queryString.parse)(location.search, {
      parseBooleans: true
    });

    if (!slideIndex) {
      slideIndex = searchParams.slideIndex;
      stepIndex = searchParams.stepIndex;
    }

    if (mode.current === newMode) {
      location.search = (0, _queryString.stringify)({
        slideIndex: slideIndex,
        stepIndex: stepIndex
      });
      return;
    }

    mode.current = newMode;
    location.search = (0, _queryString.stringify)(_objectSpread({
      slideIndex: slideIndex,
      stepIndex: stepIndex
    }, (0, _modes.modeSearchParamForKey)(newMode)));
  }, [mode]);
  (0, _useMousetrap2.default)((_useMousetrap = {}, _defineProperty(_useMousetrap, _constants.KEYBOARD_SHORTCUTS.PRESENTER_MODE, function (e) {
    return toggleMode(e, _constants.SPECTACLE_MODES.PRESENTER_MODE);
  }), _defineProperty(_useMousetrap, _constants.KEYBOARD_SHORTCUTS.PRINT_MODE, function (e) {
    return toggleMode(e, _constants.SPECTACLE_MODES.PRINT_MODE);
  }), _defineProperty(_useMousetrap, _constants.KEYBOARD_SHORTCUTS.EXPORT_MODE, function (e) {
    return toggleMode(e, _constants.SPECTACLE_MODES.EXPORT_MODE);
  }), _defineProperty(_useMousetrap, _constants.KEYBOARD_SHORTCUTS.OVERVIEW_MODE, function (e) {
    return toggleMode(e, _constants.SPECTACLE_MODES.OVERVIEW_MODE);
  }), _useMousetrap), []);

  switch (mode.current) {
    case _constants.SPECTACLE_MODES.DEFAULT_MODE:
      return /*#__PURE__*/React.createElement(_defaultDeck.default, _extends({}, props, {
        toggleMode: toggleMode
      }));

    case _constants.SPECTACLE_MODES.PRESENTER_MODE:
      return /*#__PURE__*/React.createElement(_presenterMode.default, props);

    /**
     * Print mode and export mode are identical except for the theme
     * that is used. Print mode uses the print theme which is usually
     * monotone and export mode uses the default theme.
     */

    case _constants.SPECTACLE_MODES.PRINT_MODE:
      return /*#__PURE__*/React.createElement(_printMode.default, props);

    case _constants.SPECTACLE_MODES.EXPORT_MODE:
      return /*#__PURE__*/React.createElement(_printMode.default, _extends({}, props, {
        exportMode: true
      }));

    case _constants.SPECTACLE_MODES.OVERVIEW_MODE:
      return /*#__PURE__*/React.createElement(_defaultDeck.default, _extends({
        overviewMode: true,
        toggleMode: toggleMode
      }, props));

    default:
      return /*#__PURE__*/React.createElement(_react.Fragment, null);
  }
};

var _default = SpectacleDeck;
exports.default = _default;