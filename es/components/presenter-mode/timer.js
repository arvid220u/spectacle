function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useCallback } from 'react';
import { Text } from '../typography';
import { FlexBox, Box } from '../layout';
import InternalButton from '../internal-button';
import { useTimer } from '../../utils/use-timer';
import { SYSTEM_FONT } from '../../utils/constants';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var Timer = function Timer() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      timerStarted = _useState4[0],
      setTimerStarted = _useState4[1];

  var addToTimer = useCallback(function (v) {
    return setTimer(function (s) {
      return s + v;
    });
  }, []);
  useTimer(addToTimer, 1000, timerStarted);
  var minutes = Math.floor(Math.round(timer) / 60);
  return /*#__PURE__*/_jsxs(FlexBox, {
    children: [/*#__PURE__*/_jsx(FlexBox, {
      justifyContent: "flex-start",
      flex: 1,
      children: /*#__PURE__*/_jsx(Text, {
        fontFamily: SYSTEM_FONT,
        fontWeight: "bold",
        fontSize: "2vw",
        textAlign: "left",
        children: "".concat(String(minutes).padStart(2, '0'), ":").concat(String(Math.round(timer) - minutes * 60).padStart(2, '0'))
      })
    }), /*#__PURE__*/_jsx(InternalButton, {
      onClick: function onClick() {
        return setTimerStarted(function (s) {
          return !s;
        });
      },
      children: timerStarted ? 'Stop Timer' : 'Start Timer'
    }), /*#__PURE__*/_jsx(Box, {
      width: 8
    }), /*#__PURE__*/_jsx(InternalButton, {
      onClick: function onClick() {
        return setTimer(0);
      },
      children: "Reset"
    })]
  });
};