"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DeckInternal = exports.DeckContext = exports.Deck = void 0;

var _react = require("react");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ulid = require("ulid");

var _useSlides = require("../../hooks/use-slides");

var _useAspectRatioFitting = _interopRequireDefault(require("../../hooks/use-aspect-ratio-fitting"));

var _useDeckState2 = _interopRequireDefault(require("../../hooks/use-deck-state"));

var _useMousetrap = _interopRequireDefault(require("../../hooks/use-mousetrap"));

var _useLocationSync3 = _interopRequireDefault(require("../../hooks/use-location-sync"));

var _theme = require("../../theme");

var queryStringMapFns = _interopRequireWildcard(require("../../location-map-fns/query-string"));

var _deckStyles = require("./deck-styles");

var _useAutoPlay = require("../../utils/use-auto-play");

var _defaultTheme = _interopRequireDefault(require("../../theme/default-theme"));

var _transitions = require("../transitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x2) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

var DeckContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.DeckContext = DeckContext;

var noop = function noop() {};
/**
 * The PDF DPI is 96. We want to scale the slide down because it's a 1:1 px to 1/100th of an inch.
 * However there are some unchangeable margins that make 0.96 too big, so we use 0.959 to prevent overflow.
 */


var DEFAULT_PRINT_SCALE = 0.959;
var DEFAULT_OVERVIEW_SCALE = 0.25;

var Portal = _styledComponents.default.div(function (_ref) {
  var fitAspectRatioStyle = _ref.fitAspectRatioStyle,
      overviewMode = _ref.overviewMode,
      printMode = _ref.printMode;
  return [!printMode && {
    overflow: 'hidden'
  }, !printMode && fitAspectRatioStyle, overviewMode && {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    transform: 'scale(1)',
    overflowY: 'scroll',
    width: '100%',
    height: '100%'
  }, printMode && {
    display: 'block'
  }];
});

var DeckInternal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var userProvidedId = _ref2.id,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      userProvidedBackdropStyle = _ref2.backdropStyle,
      _ref2$overviewMode = _ref2.overviewMode,
      overviewMode = _ref2$overviewMode === void 0 ? false : _ref2$overviewMode,
      _ref2$printMode = _ref2.printMode,
      printMode = _ref2$printMode === void 0 ? false : _ref2$printMode,
      _ref2$exportMode = _ref2.exportMode,
      exportMode = _ref2$exportMode === void 0 ? false : _ref2$exportMode,
      _ref2$overviewScale = _ref2.overviewScale,
      overviewScale = _ref2$overviewScale === void 0 ? DEFAULT_OVERVIEW_SCALE : _ref2$overviewScale,
      _ref2$printScale = _ref2.printScale,
      printScale = _ref2$printScale === void 0 ? DEFAULT_PRINT_SCALE : _ref2$printScale,
      template = _ref2.template,
      _ref2$theme = _ref2.theme;
  _ref2$theme = _ref2$theme === void 0 ? {} : _ref2$theme;

  var UserProvidedBackdropComponent = _ref2$theme.Backdrop,
      _ref2$theme$backdropS = _ref2$theme.backdropStyle,
      themeProvidedBackdropStyle = _ref2$theme$backdropS === void 0 ? {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  } : _ref2$theme$backdropS,
      themeSuppressBackdropFallback = _ref2$theme.suppressBackdropFallback,
      restTheme = _objectWithoutProperties(_ref2$theme, ["Backdrop", "backdropStyle", "suppressBackdropFallback"]),
      _ref2$onSlideClick = _ref2.onSlideClick,
      onSlideClick = _ref2$onSlideClick === void 0 ? noop : _ref2$onSlideClick,
      _ref2$onMobileSlide = _ref2.onMobileSlide,
      onMobileSlide = _ref2$onMobileSlide === void 0 ? noop : _ref2$onMobileSlide,
      _ref2$disableInteract = _ref2.disableInteractivity,
      disableInteractivity = _ref2$disableInteract === void 0 ? false : _ref2$disableInteract,
      notePortalNode = _ref2.notePortalNode,
      _ref2$useAnimations = _ref2.useAnimations,
      useAnimations = _ref2$useAnimations === void 0 ? true : _ref2$useAnimations,
      children = _ref2.children,
      _ref2$onActiveStateCh = _ref2.onActiveStateChange,
      onActiveStateChangeExternal = _ref2$onActiveStateCh === void 0 ? noop : _ref2$onActiveStateCh,
      _ref2$initialState = _ref2.initialState,
      initialDeckState = _ref2$initialState === void 0 ? {
    slideIndex: 0,
    stepIndex: 0
  } : _ref2$initialState,
      _ref2$suppressBackdro = _ref2.suppressBackdropFallback,
      suppressBackdropFallback = _ref2$suppressBackdro === void 0 ? false : _ref2$suppressBackdro,
      _ref2$autoPlay = _ref2.autoPlay,
      autoPlay = _ref2$autoPlay === void 0 ? false : _ref2$autoPlay,
      _ref2$autoPlayLoop = _ref2.autoPlayLoop,
      autoPlayLoop = _ref2$autoPlayLoop === void 0 ? false : _ref2$autoPlayLoop,
      _ref2$autoPlayInterva = _ref2.autoPlayInterval,
      autoPlayInterval = _ref2$autoPlayInterva === void 0 ? 1000 : _ref2$autoPlayInterva,
      _ref2$transition = _ref2.transition,
      transition = _ref2$transition === void 0 ? _transitions.defaultTransition : _ref2$transition,
      backgroundImage = _ref2.backgroundImage;

  var _useState = (0, _react.useState)(userProvidedId || _ulid.ulid),
      _useState2 = _slicedToArray(_useState, 1),
      deckId = _useState2[0];

  var _ref3 = restTheme.size || {},
      _ref3$width = _ref3.width,
      nativeSlideWidth = _ref3$width === void 0 ? _defaultTheme.default.size.width : _ref3$width,
      _ref3$height = _ref3.height,
      nativeSlideHeight = _ref3$height === void 0 ? _defaultTheme.default.size.height : _ref3$height;

  var _useDeckState = (0, _useDeckState2.default)(initialDeckState),
      initialized = _useDeckState.initialized,
      pendingView = _useDeckState.pendingView,
      activeView = _useDeckState.activeView,
      initializeTo = _useDeckState.initializeTo,
      skipTo = _useDeckState.skipTo,
      stepForward = _useDeckState.stepForward,
      stepBackward = _useDeckState.stepBackward,
      advanceSlide = _useDeckState.advanceSlide,
      regressSlide = _useDeckState.regressSlide,
      commitTransition = _useDeckState.commitTransition,
      cancelTransition = _useDeckState.cancelTransition;

  var _useCollectSlides = (0, _useSlides.useCollectSlides)(),
      _useCollectSlides2 = _slicedToArray(_useCollectSlides, 3),
      setPlaceholderContainer = _useCollectSlides2[0],
      slideIds = _useCollectSlides2[1],
      slideIdsInitialized = _useCollectSlides2[2]; // It really is much easier to just expose methods to the outside world that
  // drive the presentation through its state rather than trying to implement a
  // declarative API.


  (0, _react.useImperativeHandle)(ref, function () {
    return {
      initialized: initialized,
      activeView: activeView,
      initializeTo: initializeTo,
      skipTo: skipTo,
      stepForward: stepForward,
      stepBackward: stepBackward,
      advanceSlide: advanceSlide,
      regressSlide: regressSlide,
      numberOfSlides: slideIds.length
    };
  }, [initialized, activeView, initializeTo, skipTo, stepForward, stepBackward, advanceSlide, regressSlide, slideIds]);
  (0, _useMousetrap.default)(disableInteractivity ? {} : {
    left: function left() {
      return stepBackward();
    },
    right: function right() {
      return stepForward();
    }
  }, []);

  var _useLocationSync = (0, _useLocationSync3.default)(_objectSpread({
    disableInteractivity: disableInteractivity,
    setState: skipTo
  }, queryStringMapFns)),
      _useLocationSync2 = _slicedToArray(_useLocationSync, 2),
      syncLocation = _useLocationSync2[0],
      onActiveStateChange = _useLocationSync2[1];

  (0, _react.useEffect)(function () {
    if (!initialized) return;
    onActiveStateChange(activeView);
    onActiveStateChangeExternal(activeView);
  }, [initialized, activeView, onActiveStateChange, onActiveStateChangeExternal]);
  (0, _react.useEffect)(function () {
    var initialView = syncLocation({
      slideIndex: 0,
      stepIndex: 0
    });
    initializeTo(initialView);
  }, [initializeTo, syncLocation]);
  (0, _useAutoPlay.useAutoPlay)({
    enabled: autoPlay,
    loop: autoPlayLoop,
    interval: autoPlayInterval,
    navigation: {
      skipTo: skipTo,
      stepForward: stepForward,
      isFinalSlide: activeView.slideIndex === slideIds.length - 1
    }
  });
  var handleSlideClick = (0, _react.useCallback)(function (e, slideId) {
    var slideIndex = slideIds.indexOf(slideId);
    onSlideClick(e, slideIndex);
  }, [onSlideClick, slideIds]);
  var activeSlideId = slideIds[activeView.slideIndex];
  var pendingSlideId = slideIds[pendingView.slideIndex];

  var _useMemo = (0, _react.useMemo)(function () {
    var p = new Set();
    var u = new Set();
    var foundActive = false;

    var _iterator = _createForOfIteratorHelper(slideIds),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _slideId = _step.value;

        if (foundActive) {
          u.add(_slideId);
        } else if (_slideId === activeSlideId) {
          foundActive = true;
        } else {
          p.add(_slideId);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return [p, u];
  }, [slideIds, activeSlideId]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      passed = _useMemo2[0],
      upcoming = _useMemo2[1];

  var fullyInitialized = initialized && slideIdsInitialized; // Slides don't actually render their content to their position in the DOM-
  // they render to this `portalNode` element. The only thing they actually
  // render to their "natural" DOM location is a placeholder node which we use
  // below to enumerate them.
  //
  // The main reason for this is so that we can be absolutely sure that no
  // intermediate areas of the tree end up breaking styling, while still
  // allowing users to organize their slides via component nesting:
  //
  //     const ContentSlides = () => (
  //       <>
  //         <Slide>First Slide</Slide>
  //         <p>This text will never appear, because it's not part of a Slide.<p>
  //         <Slide>Second Slide</Slide>
  //       </>
  //     );
  //
  //     const Presentation = () => (
  //       <Deck>
  //         <Slide>Title Slide</Slide>
  //         <ContentSlides />
  //         <Slide>Conclusion Slide</Slide>
  //       </Deck>
  //     );

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      slidePortalNode = _useState4[0],
      setSlidePortalNode = _useState4[1];

  var _useAspectRatioFittin = (0, _useAspectRatioFitting.default)({
    targetWidth: nativeSlideWidth,
    targetHeight: nativeSlideHeight
  }),
      _useAspectRatioFittin2 = _slicedToArray(_useAspectRatioFittin, 2),
      backdropRef = _useAspectRatioFittin2[0],
      fitAspectRatioStyle = _useAspectRatioFittin2[1];

  var frameStyle = (0, _react.useMemo)(function () {
    var options = {
      printScale: printScale,
      overviewScale: overviewScale,
      nativeSlideWidth: nativeSlideWidth,
      nativeSlideHeight: nativeSlideHeight
    };

    if (overviewMode) {
      return (0, _deckStyles.overviewFrameStyle)(options);
    } else if (printMode) {
      return (0, _deckStyles.printFrameStyle)(options);
    }

    return {};
  }, [nativeSlideHeight, nativeSlideWidth, overviewMode, overviewScale, printMode, printScale]);
  var wrapperStyle = (0, _react.useMemo)(function () {
    if (overviewMode) {
      return (0, _deckStyles.overviewWrapperStyle)({
        overviewScale: overviewScale
      });
    } else if (printMode) {
      return (0, _deckStyles.printWrapperStyle)({
        printScale: printScale
      });
    }

    return {};
  }, [overviewMode, overviewScale, printMode, printScale]); // Try to be intelligent about the backdrop background color: we have to use
  // inline styles, which will take precedence over all other styles. So, we do
  // as much as we can here to detect if a backdrop color has been provided, or
  // if the user has provided a custom backdrop component (in which case they're
  // responsible for styling it properly.) If we don't detect an appropriate
  // case, then we apply the inline style.
  //
  // Yes, this is slightly awkward, but IMO adding an additional `<div>` element
  // would be even more awkward.

  var useFallbackBackdropStyle = true;
  var backdropStyle = themeProvidedBackdropStyle;
  var BackdropComponent = 'div';

  if (userProvidedBackdropStyle) {
    Object.assign(backdropStyle, userProvidedBackdropStyle);

    if (backdropStyle['background'] || backdropStyle['backgroundColor']) {
      useFallbackBackdropStyle = false;
    }
  }

  if (UserProvidedBackdropComponent) {
    BackdropComponent = UserProvidedBackdropComponent;
    useFallbackBackdropStyle = false;
  }

  if (useFallbackBackdropStyle && !suppressBackdropFallback && !themeSuppressBackdropFallback) {
    backdropStyle['backgroundColor'] = 'black';
  }

  return /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
    theme: (0, _theme.mergeTheme)({
      theme: restTheme,
      printMode: printMode && !exportMode
    })
  }, /*#__PURE__*/React.createElement(BackdropComponent, {
    ref: backdropRef,
    className: className,
    style: _objectSpread(_objectSpread({}, backdropStyle), {}, {
      overflow: 'hidden'
    })
  }, /*#__PURE__*/React.createElement(Portal, {
    ref: setSlidePortalNode,
    overviewMode: overviewMode,
    printMode: printMode,
    fitAspectRatioStyle: fitAspectRatioStyle
  }), /*#__PURE__*/React.createElement(DeckContext.Provider, {
    value: {
      deckId: deckId,
      slideCount: slideIds.length,
      useAnimations: useAnimations,
      slidePortalNode: slidePortalNode,
      onSlideClick: handleSlideClick,
      onMobileSlide: onMobileSlide,
      theme: restTheme,
      frameOverrideStyle: frameStyle,
      wrapperOverrideStyle: wrapperStyle,
      backdropNode: backdropRef.current,
      notePortalNode: notePortalNode,
      initialized: fullyInitialized,
      passedSlideIds: passed,
      upcomingSlideIds: upcoming,
      activeView: _objectSpread(_objectSpread({}, activeView), {}, {
        slideId: activeSlideId
      }),
      pendingView: _objectSpread(_objectSpread({}, pendingView), {}, {
        slideId: pendingSlideId
      }),
      skipTo: skipTo,
      stepForward: stepForward,
      advanceSlide: advanceSlide,
      regressSlide: regressSlide,
      commitTransition: commitTransition,
      cancelTransition: cancelTransition,
      transition: transition,
      template: template,
      backgroundImage: backgroundImage
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: setPlaceholderContainer,
    style: {
      display: 'none'
    }
  }, children))));
});
exports.DeckInternal = DeckInternal;
var Deck = DeckInternal;
exports.Deck = Deck;
Deck.displayName = 'Deck';
var _default = Deck;
exports.default = _default;