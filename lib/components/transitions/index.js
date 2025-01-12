"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideTransition = exports.fadeTransition = exports.defaultTransition = void 0;
var STAGE_RIGHT = 'translateX(-100%)';
var CENTER_STAGE = 'translateX(0%)';
var STAGE_LEFT = 'translateX(100%)';
var fadeTransition = {
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  }
};
exports.fadeTransition = fadeTransition;
var slideTransition = {
  from: {
    transform: STAGE_LEFT
  },
  enter: {
    transform: CENTER_STAGE
  },
  leave: {
    transform: STAGE_RIGHT
  }
};
exports.slideTransition = slideTransition;
var defaultTransition = slideTransition;
exports.defaultTransition = defaultTransition;