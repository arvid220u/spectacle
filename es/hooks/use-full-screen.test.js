import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { useToggleFullScreen } from './use-full-screen';
import { jsx as _jsx } from "react/jsx-runtime";
Enzyme.configure({
  adapter: new Adapter()
});
describe('useToggleFullScreen', function () {
  it('calls document.documentElement.requestFullscreen when not fullscreen', function () {
    document.documentElement.requestFullscreen = jest.fn(); // @ts-ignore

    document.fullscreenElement = false;

    var TestComponent = function TestComponent() {
      var toggleFullScreen = useToggleFullScreen();
      return /*#__PURE__*/_jsx("button", {
        "data-testid": "toggle fullscreen button",
        onClick: function onClick() {
          return toggleFullScreen();
        }
      });
    };

    var component = shallow( /*#__PURE__*/_jsx(TestComponent, {}));
    component.find('[data-testid="toggle fullscreen button"]').simulate('click');
    expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
  });
  it('calls document.exitFullscreen when in fullscreen', function () {
    document.exitFullscreen = jest.fn(); // @ts-ignore

    document.fullscreenElement = true;

    var TestComponent = function TestComponent() {
      var toggleFullScreen = useToggleFullScreen();
      return /*#__PURE__*/_jsx("button", {
        "data-testid": "toggle fullscreen button",
        onClick: function onClick() {
          return toggleFullScreen();
        }
      });
    };

    var component = shallow( /*#__PURE__*/_jsx(TestComponent, {}));
    component.find('[data-testid="toggle fullscreen button"]').simulate('click');
    expect(document.exitFullscreen).toHaveBeenCalled();
  });
});