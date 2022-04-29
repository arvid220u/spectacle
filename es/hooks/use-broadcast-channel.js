function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useEffect, useCallback, useRef } from 'react';
import { ulid } from 'ulid';
import { BroadcastChannel as BroadcastChannelPolyfill } from 'broadcast-channel';

var noop = function noop() {};

var BroadcastChannel = window.BroadcastChannel || BroadcastChannelPolyfill;
export default function useBroadcastChannel(channelName) {
  var onMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _useState = useState(function () {
    return ulid();
  }),
      _useState2 = _slicedToArray(_useState, 1),
      broadcasterId = _useState2[0];

  var _useState3 = useState(function () {
    return new BroadcastChannel(channelName);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      channel = _useState4[0],
      setChannel = _useState4[1];

  useEffect(function () {
    if (channel.name !== channelName) {
      setChannel(function () {
        return new BroadcastChannel(channelName);
      });
    }

    return function () {
      channel.close();
    };
  }, [channel, channelName]);
  var postMessage = useCallback(function (type) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var message = {
      type: type,
      payload: payload,
      meta: {
        sender: broadcasterId
      }
    };
    var rawMessage = JSON.stringify(message);
    channel.postMessage(rawMessage);
  }, [channel, broadcasterId]); // Avoid constantly modifying the 'message' listener in the effect below

  var userMessageHandlerRef = useRef(onMessage);
  useEffect(function () {
    userMessageHandlerRef.current = onMessage; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [].concat(_toConsumableArray(deps), [postMessage]));
  useEffect(function () {
    if (!channel) return;

    var messageHandler = function messageHandler(event) {
      var rawMessage = event.data;
      var message = JSON.parse(rawMessage);
      userMessageHandlerRef.current(message);
    };

    channel.addEventListener('message', messageHandler);
    return function () {
      channel.removeEventListener('message', messageHandler);
    };
  }, [channel, postMessage]);
  return [postMessage, broadcasterId];
}