function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ThemeProvider } from 'styled-components';
import { DeckContext } from './deck/deck';
import defaultTheme from '../theme/default-theme';
import Progress, { Circle } from './progress';
import { jsx as _jsx } from "react/jsx-runtime";
Enzyme.configure({
  adapter: new Adapter()
});

var mountWithContext = function mountWithContext(tree, context) {
  var WrappingThemeProvider = function WrappingThemeProvider(props) {
    return /*#__PURE__*/_jsx(DeckContext.Provider, {
      value: _objectSpread(_objectSpread({}, context), {}, {
        skipTo: jest.fn()
      }),
      children: /*#__PURE__*/_jsx(ThemeProvider, {
        theme: defaultTheme,
        children: props.children
      })
    });
  };

  return mount(tree, {
    wrappingComponent: WrappingThemeProvider
  });
};

describe('<Progress />', function () {
  it('should render the right amount of circles', function () {
    var wrapper = mountWithContext( /*#__PURE__*/_jsx(Progress, {}), {
      slideCount: 5,
      activeView: {
        slideIndex: 0
      }
    });
    expect(wrapper.find(Circle).length).toBe(5);
  });
  it('should render the right amount of circles with the current circle in the active state', function () {
    var wrapper = mountWithContext( /*#__PURE__*/_jsx(Progress, {}), {
      slideCount: 5,
      activeView: {
        slideIndex: 4
      }
    });
    expect(wrapper.find(Circle).at(4).prop('active')).toBe(true);
  });
});