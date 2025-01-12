function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { useSteps } from '../hooks/use-steps';
import { SlideContext } from './slide/slide';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

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

  var _useContext = useContext(SlideContext),
      immediate = _useContext.immediate;

  var _useSteps = useSteps(numSteps, {
    id: id,
    priority: priority,
    stepIndex: stepIndex
  }),
      isActive = _useSteps.isActive,
      step = _useSteps.step,
      placeholder = _useSteps.placeholder;

  var AnimatedEl = animated[tagName];
  var children;

  if (typeof childrenOrRenderFunction === 'function') {
    children = childrenOrRenderFunction(step, isActive);
  } else {
    children = childrenOrRenderFunction;
  }

  var springStyle = useSpring({
    to: isActive ? activeStyle : inactiveStyle,
    immediate: immediate
  });
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [placeholder, /*#__PURE__*/_jsx(AnimatedEl, {
      style: alwaysAppearActive ? activeStyle : springStyle,
      className: className,
      children: children
    })]
  });
};

export var Appear = function Appear(props) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/_jsx(SteppedComponent, _objectSpread(_objectSpread({}, restProps), {}, {
    numSteps: 1,
    children: children
  }));
};
export var Stepper = function Stepper(props) {
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

  return /*#__PURE__*/_jsx(SteppedComponent, _objectSpread(_objectSpread({}, restProps), {}, {
    numSteps: values.length,
    alwaysAppearActive: alwaysVisible,
    children: function children(step, isActive) {
      return (renderFn || renderChildrenFn)(values[step], step, isActive);
    }
  }));
};