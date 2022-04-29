"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

var _styledComponents = require("styled-components");

var _deck = require("./deck/deck");

var _defaultTheme = _interopRequireDefault(require("../theme/default-theme"));

var _progress = _interopRequireWildcard(require("./progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

var mountWithContext = function mountWithContext(tree, context) {
  var WrappingThemeProvider = function WrappingThemeProvider(props) {
    return /*#__PURE__*/React.createElement(_deck.DeckContext.Provider, {
      value: _objectSpread(_objectSpread({}, context), {}, {
        skipTo: jest.fn()
      })
    }, /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
      theme: _defaultTheme.default
    }, props.children));
  };

  return (0, _enzyme.mount)(tree, {
    wrappingComponent: WrappingThemeProvider
  });
};

describe('<Progress />', function () {
  it('should render the right amount of circles', function () {
    var wrapper = mountWithContext( /*#__PURE__*/React.createElement(_progress.default, null), {
      slideCount: 5,
      activeView: {
        slideIndex: 0
      }
    });
    expect(wrapper.find(_progress.Circle).length).toBe(5);
  });
  it('should render the right amount of circles with the current circle in the active state', function () {
    var wrapper = mountWithContext( /*#__PURE__*/React.createElement(_progress.default, null), {
      slideCount: 5,
      activeView: {
        slideIndex: 4
      }
    });
    expect(wrapper.find(_progress.Circle).at(4).prop('active')).toBe(true);
  });
});