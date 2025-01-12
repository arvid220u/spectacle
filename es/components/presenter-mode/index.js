function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useRef, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DeckInternal } from '../deck/deck';
import { Text, SpectacleLogo } from '../../index';
import { PresenterDeckContainer, NotesColumn, PreviewColumn, deckBackdropStyles, NotesContainer } from './components';
import useLocationSync from '../../hooks/use-location-sync';
import * as queryStringMapFns from '../../location-map-fns/query-string';
import { GOTO_FINAL_STEP } from '../../hooks/use-deck-state';
import { SYSTEM_FONT } from '../../utils/constants';
import { FlexBox, Box } from '../layout';
import { Timer } from './timer';
import useBroadcastChannel from '../../hooks/use-broadcast-channel';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var endOfNextSlide = function endOfNextSlide(_ref) {
  var slideIndex = _ref.slideIndex;
  return {
    slideIndex: slideIndex + 1,
    stepIndex: GOTO_FINAL_STEP
  };
};

var PreviewSlideWrapper = styled.div(function (_ref2) {
  var visible = _ref2.visible;
  return {
    visibility: visible ? 'visible' : 'hidden'
  };
});

var PresenterMode = function PresenterMode(props) {
  var children = props.children,
      theme = props.theme,
      backgroundImage = props.backgroundImage;
  var deck = useRef(null);
  var previewDeck = useRef(null);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      notePortalNode = _useState2[0],
      setNotePortalNode = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showFinalSlide = _useState4[0],
      setShowFinalSlide = _useState4[1];

  var _useBroadcastChannel = useBroadcastChannel('spectacle_presenter_bus', function (message) {
    if (message.type === 'SYNC_REQUEST') {
      postMessage('SYNC', deck.current.activeView);
    }
  }),
      _useBroadcastChannel2 = _slicedToArray(_useBroadcastChannel, 1),
      postMessage = _useBroadcastChannel2[0];

  var _useLocationSync = useLocationSync(_objectSpread({
    setState: function setState(state) {
      return deck.current.skipTo(state);
    }
  }, queryStringMapFns)),
      _useLocationSync2 = _slicedToArray(_useLocationSync, 2),
      syncLocation = _useLocationSync2[0],
      setLocation = _useLocationSync2[1];

  var onActiveStateChange = useCallback(function (activeView) {
    var _deck$current, _deck$current2;

    setLocation(activeView);
    postMessage('SYNC', activeView);
    setShowFinalSlide((((_deck$current = deck.current) === null || _deck$current === void 0 ? void 0 : _deck$current.numberOfSlides) || 0) - 1 !== (deck === null || deck === void 0 ? void 0 : (_deck$current2 = deck.current) === null || _deck$current2 === void 0 ? void 0 : _deck$current2.activeView.slideIndex));
    previewDeck.current.skipTo(endOfNextSlide(activeView));
  }, [postMessage, setLocation]);
  useEffect(function () {
    var initialView = syncLocation({
      slideIndex: 0,
      stepIndex: 0
    });
    deck.current.initializeTo(initialView);
    postMessage('SYNC', initialView);
    previewDeck.current.initializeTo(endOfNextSlide(initialView));
  }, [postMessage, syncLocation]);
  return /*#__PURE__*/_jsxs(PresenterDeckContainer, {
    children: [/*#__PURE__*/_jsxs(NotesColumn, {
      children: [/*#__PURE__*/_jsxs(FlexBox, {
        justifyContent: "space-between",
        paddingTop: 15,
        paddingX: 15,
        children: [/*#__PURE__*/_jsx(SpectacleLogo, {
          size: 60
        }), /*#__PURE__*/_jsx(FlexBox, {
          width: 0.75,
          flexDirection: "column",
          alignItems: "flex-end",
          children: /*#__PURE__*/_jsxs(Text, {
            "data-testid": "use-browser-tab-text",
            fontSize: 15,
            fontFamily: SYSTEM_FONT,
            textAlign: "right",
            padding: "0px",
            margin: "0px 0px 10px",
            children: ["Open a second browser tab at ", window.location.host, " to use as the audience deck."]
          })
        })]
      }), /*#__PURE__*/_jsx(Box, {
        paddingX: 15,
        paddingY: 10,
        children: /*#__PURE__*/_jsx(Timer, {})
      }), /*#__PURE__*/_jsx(NotesContainer, {
        children: /*#__PURE__*/_jsx(Text, {
          ref: setNotePortalNode,
          fontFamily: SYSTEM_FONT,
          lineHeight: "1.5em",
          fontSize: "1.5vw",
          padding: 15
        })
      })]
    }), /*#__PURE__*/_jsxs(PreviewColumn, {
      children: [/*#__PURE__*/_jsx(DeckInternal, {
        notePortalNode: notePortalNode,
        backdropStyle: deckBackdropStyles.currentSlide,
        onActiveStateChange: onActiveStateChange,
        ref: deck,
        theme: theme,
        backgroundImage: backgroundImage,
        children: children
      }), /*#__PURE__*/_jsx(PreviewSlideWrapper, {
        visible: showFinalSlide,
        children: /*#__PURE__*/_jsx(DeckInternal, {
          disableInteractivity: true,
          useAnimations: false,
          backdropStyle: deckBackdropStyles.nextSlide,
          ref: previewDeck,
          theme: theme,
          backgroundImage: backgroundImage,
          children: children
        })
      })]
    })]
  });
};

export default PresenterMode;