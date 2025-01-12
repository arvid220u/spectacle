function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useRef, useCallback, useEffect } from 'react';
import { DeckInternal } from './deck';
import useBroadcastChannel from '../../hooks/use-broadcast-channel';
import useMousetrap from '../../hooks/use-mousetrap';
import { KEYBOARD_SHORTCUTS, SPECTACLE_MODES } from '../../utils/constants';
/**
 * Spectacle DefaultDeck is a wrapper around the Deck component that adds Broadcast channel support
 * for audience and presenter modes. This is intentionally not built into the base Deck component
 * to allow for extensibility outside of core Spectacle functionality.
 */

import { jsx as _jsx } from "react/jsx-runtime";

var DefaultDeck = function DefaultDeck(props) {
  var _ref;

  var _props$overviewMode = props.overviewMode,
      overviewMode = _props$overviewMode === void 0 ? false : _props$overviewMode,
      _props$printMode = props.printMode,
      printMode = _props$printMode === void 0 ? false : _props$printMode,
      _props$exportMode = props.exportMode,
      exportMode = _props$exportMode === void 0 ? false : _props$exportMode,
      toggleMode = props.toggleMode,
      children = props.children,
      rest = _objectWithoutProperties(props, ["overviewMode", "printMode", "exportMode", "toggleMode", "children"]);

  var deck = useRef(null);

  var _useBroadcastChannel = useBroadcastChannel('spectacle_presenter_bus', function (message) {
    if (message.type !== 'SYNC') return;
    var nextView = message.payload;

    if (deck.current.initialized) {
      deck.current.skipTo(nextView);
    } else {
      deck.current.initializeTo(nextView);
    }
  }),
      _useBroadcastChannel2 = _slicedToArray(_useBroadcastChannel, 1),
      postMessage = _useBroadcastChannel2[0];

  useEffect(function () {
    postMessage('SYNC_REQUEST');
  }, [postMessage]);
  useMousetrap(overviewMode ? (_ref = {}, _defineProperty(_ref, KEYBOARD_SHORTCUTS.TAB_FORWARD_OVERVIEW_MODE, function () {
    return deck.current.advanceSlide();
  }), _defineProperty(_ref, KEYBOARD_SHORTCUTS.TAB_BACKWARD_OVERVIEW_MODE, function () {
    return deck.current.regressSlide({
      stepIndex: 0
    });
  }), _defineProperty(_ref, KEYBOARD_SHORTCUTS.SELECT_SLIDE_OVERVIEW_MODE, function (e) {
    return toggleMode(e, SPECTACLE_MODES.DEFAULT_MODE);
  }), _ref) : {}, []);
  var onSlideClick = useCallback(function (e, slideIndex) {
    if (overviewMode) {
      toggleMode(e, SPECTACLE_MODES.DEFAULT_MODE, slideIndex);
    }
  }, [overviewMode, toggleMode]);

  var onMobileSlide = function onMobileSlide(e) {
    if (navigator.maxTouchPoints < 1) return;

    switch (e.dir) {
      case 'Left':
        deck.current.stepForward();
        break;

      case 'Right':
        deck.current.regressSlide();
        break;
    }
  };

  return /*#__PURE__*/_jsx(DeckInternal, _objectSpread(_objectSpread({
    overviewMode: overviewMode,
    onSlideClick: onSlideClick,
    onMobileSlide: onMobileSlide,
    printMode: printMode,
    exportMode: exportMode,
    ref: deck
  }, rest), {}, {
    children: children
  }));
};

export default DefaultDeck;