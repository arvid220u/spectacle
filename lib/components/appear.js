"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = exports.Appear = void 0;

var _react = require("react");

var _reactSpring = require("react-spring");

var _useSteps2 = require("../hooks/use-steps");

var _slide = require("./slide/slide");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SteppedComponent = function SteppedComponent(props) {
  var id = props.id,
      className = props.className,
      childrenOrRenderFunction = props.children,
      _props$tagName = props.tagName,
      tagName = _props$tagName === void 0 ? 'div' : _props$tagName,
      priority = props.priority,
      stepIndex = props.stepIndex,
      _props$numSteps = props.numSteps,
      numSteps = _props$numSteps === void 0 ? 1 : _props$numSteps,
      _props$alwaysAppearAc = props.alwaysAppearActive,
      alwaysAppearActive = _props$alwaysAppearAc === void 0 ? false : _props$alwaysAppearAc,
      _props$activeStyle = props.activeStyle,
      activeStyle = _props$activeStyle === void 0 ? {
    opacity: '1'
  } : _props$activeStyle,
      _props$inactiveStyle = props.inactiveStyle,
      inactiveStyle = _props$inactiveStyle === void 0 ? {
    opacity: '0'
  } : _props$inactiveStyle;

  var _useContext = (0, _react.useContext)(_slide.SlideContext),
      immediate = _useContext.immediate;

  var _useSteps = (0, _useSteps2.useSteps)(numSteps, {
    id: id,
    priority: priority,
    stepIndex: stepIndex
  }),
      isActive = _useSteps.isActive,
      step = _useSteps.step,
      placeholder = _useSteps.placeholder;

  var AnimatedEl = _reactSpring.animated[tagName];
  var children;

  if (typeof childrenOrRenderFunction === 'function') {
    children = childrenOrRenderFunction(step, isActive);
  } else {
    children = childrenOrRenderFunction;
  }

  var springStyle = (0, _reactSpring.useSpring)({
    to: isActive ? activeStyle : inactiveStyle,
    immediate: immediate
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, placeholder, /*#__PURE__*/React.createElement(AnimatedEl, {
    style: alwaysAppearActive ? activeStyle : springStyle,
    className: className
  }, children));
};

var Appear = function Appear(props) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React.createElement(SteppedComponent, _extends({}, restProps, {
    numSteps: 1
  }), children);
};

exports.Appear = Appear;

var Stepper = function Stepper(props) {
  var values = props.values,
      renderFn = props.render,
      renderChildrenFn = props.children,
      _props$alwaysVisible = props.alwaysVisible,
      alwaysVisible = _props$alwaysVisible === void 0 ? false : _props$alwaysVisible,
      activeStyle = props.activeStyle,
      inactiveStyle = props.inactiveStyle,
      restProps = _objectWithoutProperties(props, ["values", "render", "children", "alwaysVisible", "activeStyle", "inactiveStyle"]);

  if (renderFn !== undefined && renderChildrenFn !== undefined) {
    throw new Error('<Stepper> component specified both `render` prop and a render function as its `children`.');
  }

  return /*#__PURE__*/React.createElement(SteppedComponent, _extends({}, restProps, {
    numSteps: values.length,
    alwaysAppearActive: alwaysVisible
  }), function (step, isActive) {
    return (renderFn || renderChildrenFn)(values[step], step, isActive);
  });
};

exports.Stepper = Stepper;