"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SlideContext = exports.AnimatedDiv = void 0;

var _react = require("react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _deck = require("../deck/deck");

var _reactSpring = require("react-spring");

var _useSlides = require("../../hooks/use-slides");

var _useSteps = require("../../hooks/use-steps");

var _useDeckState = require("../../hooks/use-deck-state");

var _reactSwipeable = require("react-swipeable");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      outline: 2px solid white;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: transparent;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  display: flex;\n  z-index: 0;\n\n  &:before {\n    ", ";\n    content: ' ';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    opacity: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var noop = function noop() {};

var SlideContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.SlideContext = SlideContext;

var SlideContainer = _styledComponents.default.div(_templateObject(), _styledSystem.color, _styledSystem.background, function (_ref) {
  var backgroundOpacity = _ref.backgroundOpacity;
  return backgroundOpacity;
});

var SlideWrapper = _styledComponents.default.div(_styledSystem.color, _styledSystem.space, (0, _styledComponents.css)(_templateObject2()));

var TemplateWrapper = _styledComponents.default.div(_templateObject3());

var AnimatedDiv = (0, _styledComponents.default)(_reactSpring.animated.div)(_templateObject4(), function (_ref2) {
  var tabIndex = _ref2.tabIndex;
  return tabIndex === 0 && (0, _styledComponents.css)(_templateObject5());
});
exports.AnimatedDiv = AnimatedDiv;

var Slide = function Slide(props) {
  var userProvidedId = props.id,
      children = props.children,
      _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? 'tertiary' : _props$backgroundColo,
      backgroundImage = props.backgroundImage,
      _props$backgroundOpac = props.backgroundOpacity,
      backgroundOpacity = _props$backgroundOpac === void 0 ? 1 : _props$backgroundOpac,
      _props$backgroundPosi = props.backgroundPosition,
      backgroundPosition = _props$backgroundPosi === void 0 ? 'center' : _props$backgroundPosi,
      _props$backgroundRepe = props.backgroundRepeat,
      backgroundRepeat = _props$backgroundRepe === void 0 ? 'no-repeat' : _props$backgroundRepe,
      _props$backgroundSize = props.backgroundSize,
      backgroundSize = _props$backgroundSize === void 0 ? 'cover' : _props$backgroundSize,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? 2 : _props$padding,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'primary' : _props$textColor,
      template = props.template,
      _props$transition = props.transition,
      slideTransition = _props$transition === void 0 ? {} : _props$transition,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;

  if ((0, _react.useContext)(SlideContext)) {
    throw new Error("Slide components may not be nested within each other.");
  }

  var _useSlide = (0, _useSlides.useSlide)(userProvidedId),
      slideId = _useSlide.slideId,
      placeholder = _useSlide.placeholder;

  var _useCollectSteps = (0, _useSteps.useCollectSteps)(),
      setStepContainer = _useCollectSteps.setStepContainer,
      activationThresholds = _useCollectSteps.activationThresholds,
      finalStepIndex = _useCollectSteps.finalStepIndex;

  var _useContext = (0, _react.useContext)(_deck.DeckContext),
      _useContext$onSlideCl = _useContext.onSlideClick,
      onSlideClick = _useContext$onSlideCl === void 0 ? noop : _useContext$onSlideCl,
      onMobileSlide = _useContext.onMobileSlide,
      useAnimations = _useContext.useAnimations,
      slidePortalNode = _useContext.slidePortalNode,
      _useContext$frameOver = _useContext.frameOverrideStyle,
      frameOverrideStyle = _useContext$frameOver === void 0 ? {} : _useContext$frameOver,
      _useContext$wrapperOv = _useContext.wrapperOverrideStyle,
      wrapperOverrideStyle = _useContext$wrapperOv === void 0 ? {} : _useContext$wrapperOv,
      passedSlideIds = _useContext.passedSlideIds,
      upcomingSlideIds = _useContext.upcomingSlideIds,
      activeView = _useContext.activeView,
      pendingView = _useContext.pendingView,
      advanceSlide = _useContext.advanceSlide,
      regressSlide = _useContext.regressSlide,
      commitTransition = _useContext.commitTransition,
      cancelTransition = _useContext.cancelTransition,
      transition = _useContext.transition,
      deckTemplate = _useContext.template,
      slideCount = _useContext.slideCount,
      deckBackgroundImage = _useContext.backgroundImage;

  var handleClick = (0, _react.useCallback)(function (e) {
    onSlideClick(e, slideId);
  }, [onSlideClick, slideId]);
  var mergedTransition = (0, _react.useMemo)(function () {
    var result = _objectSpread({}, transition);

    'from' in slideTransition && (result.from = slideTransition.from);
    'enter' in slideTransition && (result.enter = slideTransition.enter);
    'leave' in slideTransition && (result.leave = slideTransition.leave);
    return result;
  }, [slideTransition, transition]);
  var inOverviewMode = Object.entries(frameOverrideStyle).length > 0;
  var isActive = activeView.slideId === slideId;
  var isPending = pendingView.slideId === slideId;
  var isPassed = passedSlideIds.has(slideId);
  var isUpcoming = upcomingSlideIds.has(slideId);
  var willEnter = !isActive && isPending;
  var willExit = isActive && !isPending;
  var slideWillChange = activeView.slideIndex !== pendingView.slideIndex;
  var stepWillChange = activeView.stepIndex !== pendingView.stepIndex;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      animate = _useState2[0],
      setAnimate = _useState2[1]; // If we've already been to this slide, all its elements should be visible; if
  // we haven't gotten to it yet, none of them should be visible. (This helps us
  // handle slides which are exiting but which are still visible while
  // animated.)


  var infinityDirection = isPassed ? Infinity : -Infinity;
  var internalStepIndex = isActive ? activeView.stepIndex : infinityDirection;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var onHoverChange = (0, _react.useCallback)(function () {
    setHover(!hover);
  }, [hover]);
  (0, _react.useEffect)(function () {
    if (!isActive) return;
    if (!stepWillChange) return;
    if (slideWillChange) return;

    if (pendingView.stepIndex < 0) {
      setAnimate(false);
      regressSlide();
    } else if (pendingView.stepIndex > finalStepIndex) {
      setAnimate(true);
      advanceSlide();
    } else if (pendingView.stepIndex === _useDeckState.GOTO_FINAL_STEP) {
      setAnimate(false);
      commitTransition({
        stepIndex: finalStepIndex
      });
    } else {
      var isSingleForwardStep = activeView.stepIndex === pendingView.stepIndex - 1; // the step is happening within this slide

      setAnimate(isSingleForwardStep);
      commitTransition();
    }
  }, [isActive, stepWillChange, slideWillChange, activeView, pendingView, finalStepIndex, regressSlide, advanceSlide, commitTransition]); // Bounds checking for slides in the presentation.

  (0, _react.useEffect)(function () {
    if (!willExit) return;

    if (pendingView.slideId === undefined) {
      setAnimate(false);
      cancelTransition();
    } else {
      var isTransitionToNextSlide = activeView.slideIndex === pendingView.slideIndex - 1;
      setAnimate(isTransitionToNextSlide);
    }
  }, [willExit, pendingView, cancelTransition, activeView.slideIndex]);
  (0, _react.useEffect)(function () {
    if (!willEnter) return;
    if (finalStepIndex === undefined) return;

    if (pendingView.stepIndex < 0) {
      setAnimate(false);
      commitTransition({
        stepIndex: 0
      });
    } else if (pendingView.stepIndex === _useDeckState.GOTO_FINAL_STEP) {
      // Because <Slide> elements enumerate their own steps, nobody else
      // actually knows how many steps are in a slide. So other slides put a
      // value of GOTO_FINAL_STEP in the step index to indicate that the slide
      // should fill in the correct finalStepIndex before we commit the change.
      setAnimate(false);
      commitTransition({
        stepIndex: finalStepIndex
      });
    } else if (pendingView.stepIndex > finalStepIndex) {
      setAnimate(false);
      commitTransition({
        stepIndex: finalStepIndex
      });
    } else {
      var isTransitionFromPreviousSlide = activeView.slideIndex === pendingView.slideIndex - 1;
      setAnimate(isTransitionFromPreviousSlide);
      commitTransition();
    }
  }, [willEnter, activeView, pendingView, finalStepIndex, commitTransition]);
  var target = (0, _react.useMemo)(function () {
    if (isPassed) {
      return [mergedTransition.leave, {
        display: 'none'
      }];
    }

    if (isActive) {
      return _objectSpread(_objectSpread({}, mergedTransition.enter), {}, {
        display: 'unset'
      });
    }

    if (isUpcoming) {
      return _objectSpread(_objectSpread({}, mergedTransition.from), {}, {
        display: 'none'
      });
    }

    return {
      display: 'none'
    };
  }, [isPassed, isActive, isUpcoming, mergedTransition.leave, mergedTransition.enter, mergedTransition.from]);
  var immediate = !animate || !useAnimations;
  var springFrameStyle = (0, _reactSpring.useSpring)({
    to: target,
    immediate: immediate
  });
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var scaledWrapperOverrideStyle = (0, _react.useMemo)(function () {
    var _theme$space;

    if (!wrapperOverrideStyle || Object.entries(wrapperOverrideStyle).length === 0) {
      return {};
    }

    var themeSlidePadding = (theme === null || theme === void 0 ? void 0 : (_theme$space = theme.space) === null || _theme$space === void 0 ? void 0 : _theme$space[padding]) || 0;
    return _objectSpread(_objectSpread({}, wrapperOverrideStyle), {}, {
      width: "calc(".concat(wrapperOverrideStyle.width, " - ").concat(themeSlidePadding * 2, "px)"),
      height: "calc(".concat(wrapperOverrideStyle.height, " - ").concat(themeSlidePadding * 2, "px)")
    });
  }, [wrapperOverrideStyle, theme, padding]);
  var templateFn = typeof template === 'function' ? template : typeof deckTemplate === 'function' ? deckTemplate : null;
  var templateElement = (templateFn === null || templateFn === void 0 ? void 0 : templateFn({
    slideNumber: activeView.slideIndex + 1,
    numberOfSlides: slideCount
  })) || template || deckTemplate;
  var swipeHandler = (0, _reactSwipeable.useSwipeable)({
    onSwiped: function onSwiped(eventData) {
      return onMobileSlide(eventData);
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, placeholder, /*#__PURE__*/React.createElement(SlideContext.Provider, {
    value: {
      immediate: immediate,
      slideId: slideId,
      isSlideActive: isActive,
      activationThresholds: activationThresholds,
      activeStepIndex: internalStepIndex
    }
  }, slidePortalNode && /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/React.createElement(AnimatedDiv, {
    ref: setStepContainer,
    onClick: handleClick,
    tabIndex: inOverviewMode && isActive ? 0 : undefined,
    style: _objectSpread(_objectSpread(_objectSpread({}, inOverviewMode ? {} : springFrameStyle), frameOverrideStyle), inOverviewMode && hover && {
      outline: '2px solid white'
    }),
    onMouseEnter: onHoverChange,
    onMouseLeave: onHoverChange
  }, /*#__PURE__*/React.createElement(SlideContainer, _extends({
    className: className,
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage || deckBackgroundImage,
    backgroundOpacity: backgroundOpacity,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    color: textColor
  }, swipeHandler), /*#__PURE__*/React.createElement(TemplateWrapper, {
    style: wrapperOverrideStyle
  }, templateElement), /*#__PURE__*/React.createElement(SlideWrapper, {
    style: scaledWrapperOverrideStyle,
    padding: padding
  }, children))), slidePortalNode)));
};

var _default = Slide;
exports.default = _default;