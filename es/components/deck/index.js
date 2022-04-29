function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Fragment, useCallback, useRef } from 'react';
import { parse as parseQS, stringify as stringifyQS } from 'query-string';
import DefaultDeck from './default-deck';
import PresenterMode from '../presenter-mode';
import PrintMode from '../print-mode';
import useMousetrap from '../../hooks/use-mousetrap';
import { KEYBOARD_SHORTCUTS, SPECTACLE_MODES } from '../../utils/constants';
import { modeKeyForSearchParam, modeSearchParamForKey } from './modes';
import { jsx as _jsx } from "react/jsx-runtime";

var SpectacleDeck = function SpectacleDeck(props) {
  var _useMousetrap;

  var mode = useRef(modeKeyForSearchParam(parseQS(location.search, {
    parseBooleans: true
  })));
  var toggleMode = useCallback(function (e, newMode, senderSlideIndex) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    var stepIndex = 0;
    var slideIndex = senderSlideIndex || '';
    var searchParams = parseQS(location.search, {
      parseBooleans: true
    });

    if (!slideIndex) {
      slideIndex = searchParams.slideIndex;
      stepIndex = searchParams.stepIndex;
    }

    if (mode.current === newMode) {
      location.search = stringifyQS({
        slideIndex: slideIndex,
        stepIndex: stepIndex
      });
      return;
    }

    mode.current = newMode;
    location.search = stringifyQS(_objectSpread({
      slideIndex: slideIndex,
      stepIndex: stepIndex
    }, modeSearchParamForKey(newMode)));
  }, [mode]);
  useMousetrap((_useMousetrap = {}, _defineProperty(_useMousetrap, KEYBOARD_SHORTCUTS.PRESENTER_MODE, function (e) {
    return toggleMode(e, SPECTACLE_MODES.PRESENTER_MODE);
  }), _defineProperty(_useMousetrap, KEYBOARD_SHORTCUTS.PRINT_MODE, function (e) {
    return toggleMode(e, SPECTACLE_MODES.PRINT_MODE);
  }), _defineProperty(_useMousetrap, KEYBOARD_SHORTCUTS.EXPORT_MODE, function (e) {
    return toggleMode(e, SPECTACLE_MODES.EXPORT_MODE);
  }), _defineProperty(_useMousetrap, KEYBOARD_SHORTCUTS.OVERVIEW_MODE, function (e) {
    return toggleMode(e, SPECTACLE_MODES.OVERVIEW_MODE);
  }), _useMousetrap), []);

  switch (mode.current) {
    case SPECTACLE_MODES.DEFAULT_MODE:
      return /*#__PURE__*/_jsx(DefaultDeck, _objectSpread(_objectSpread({}, props), {}, {
        toggleMode: toggleMode
      }));

    case SPECTACLE_MODES.PRESENTER_MODE:
      return /*#__PURE__*/_jsx(PresenterMode, _objectSpread({}, props));

    /**
     * Print mode and export mode are identical except for the theme
     * that is used. Print mode uses the print theme which is usually
     * monotone and export mode uses the default theme.
     */

    case SPECTACLE_MODES.PRINT_MODE:
      return /*#__PURE__*/_jsx(PrintMode, _objectSpread({}, props));

    case SPECTACLE_MODES.EXPORT_MODE:
      return /*#__PURE__*/_jsx(PrintMode, _objectSpread(_objectSpread({}, props), {}, {
        exportMode: true
      }));

    case SPECTACLE_MODES.OVERVIEW_MODE:
      return /*#__PURE__*/_jsx(DefaultDeck, _objectSpread({
        overviewMode: true,
        toggleMode: toggleMode
      }, props));

    default:
      return /*#__PURE__*/_jsx(Fragment, {});
  }
};

export default SpectacleDeck;