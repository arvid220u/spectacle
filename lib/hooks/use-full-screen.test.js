"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

var _useFullScreen = require("./use-full-screen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('useToggleFullScreen', function () {
  it('calls document.documentElement.requestFullscreen when not fullscreen', function () {
    document.documentElement.requestFullscreen = jest.fn(); // @ts-ignore

    document.fullscreenElement = false;

    var TestComponent = function TestComponent() {
      var toggleFullScreen = (0, _useFullScreen.useToggleFullScreen)();
      return /*#__PURE__*/React.createElement("button", {
        "data-testid": "toggle fullscreen button",
        onClick: function onClick() {
          return toggleFullScreen();
        }
      });
    };

    var component = (0, _enzyme.shallow)( /*#__PURE__*/React.createElement(TestComponent, null));
    component.find('[data-testid="toggle fullscreen button"]').simulate('click');
    expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
  });
  it('calls document.exitFullscreen when in fullscreen', function () {
    document.exitFullscreen = jest.fn(); // @ts-ignore

    document.fullscreenElement = true;

    var TestComponent = function TestComponent() {
      var toggleFullScreen = (0, _useFullScreen.useToggleFullScreen)();
      return /*#__PURE__*/React.createElement("button", {
        "data-testid": "toggle fullscreen button",
        onClick: function onClick() {
          return toggleFullScreen();
        }
      });
    };

    var component = (0, _enzyme.shallow)( /*#__PURE__*/React.createElement(TestComponent, null));
    component.find('[data-testid="toggle fullscreen button"]').simulate('click');
    expect(document.exitFullscreen).toHaveBeenCalled();
  });
});