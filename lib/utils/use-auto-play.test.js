"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useAutoPlay = require("./use-auto-play");

describe('useAutoPlay()', function () {
  var stepForward = jest.fn();
  var skipTo = jest.fn();
  beforeEach(function () {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  test('should call the step forward function twice for 2 seconds.', function () {
    (0, _reactHooks.renderHook)(function () {
      return (0, _useAutoPlay.useAutoPlay)({
        enabled: true,
        interval: 1000,
        navigation: {
          stepForward: stepForward,
          skipTo: skipTo,
          isFinalSlide: false
        }
      });
    });
    jest.advanceTimersByTime(2000);
    expect(stepForward).toBeCalledTimes(2);
  });
  test('should call the skip to function on the final slide and when loop is enabled.', function () {
    (0, _reactHooks.renderHook)(function () {
      return (0, _useAutoPlay.useAutoPlay)({
        enabled: true,
        interval: 1000,
        loop: true,
        navigation: {
          stepForward: stepForward,
          skipTo: skipTo,
          isFinalSlide: true
        }
      });
    });
    jest.advanceTimersByTime(1000);
    expect(skipTo).toBeCalledTimes(1);
  });
});