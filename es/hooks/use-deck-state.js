function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useReducer, useMemo, useEffect } from 'react';
import { merge } from 'merge-anything';
export var GOTO_FINAL_STEP = null;
var initialDeckState = {
  initialized: false,
  pendingView: {
    slideIndex: 0,
    stepIndex: 0
  },
  activeView: {
    slideIndex: 0,
    stepIndex: 0
  }
};

function deckReducer(state, _ref) {
  var _payload$stepIndex;

  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? {} : _ref$payload;

  switch (type) {
    case 'INITIALIZE_TO':
      return {
        activeView: merge(state.activeView, payload),
        pendingView: merge(state.pendingView, payload),
        initialized: true
      };

    case 'SKIP_TO':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: merge(state.pendingView, payload)
      });

    case 'STEP_FORWARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: merge(state.pendingView, {
          stepIndex: state.pendingView.stepIndex + 1
        })
      });

    case 'STEP_BACKWARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: merge(state.pendingView, {
          stepIndex: state.pendingView.stepIndex - 1
        })
      });

    case 'ADVANCE_SLIDE':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: merge(state.pendingView, {
          stepIndex: 0,
          slideIndex: state.pendingView.slideIndex + 1
        })
      });

    case 'REGRESS_SLIDE':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: merge(state.pendingView, {
          stepIndex: (_payload$stepIndex = payload === null || payload === void 0 ? void 0 : payload.stepIndex) !== null && _payload$stepIndex !== void 0 ? _payload$stepIndex : GOTO_FINAL_STEP,
          slideIndex: state.pendingView.slideIndex - 1
        })
      });

    case 'COMMIT_TRANSITION':
      var pendingView = merge(state.pendingView, payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: pendingView,
        activeView: merge(state.activeView, pendingView)
      });

    case 'CANCEL_TRANSITION':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingView: merge(state.pendingView, state.activeView)
      });

    default:
      return state;
  }
}

export default function useDeckState(userProvidedInitialState) {
  var _useReducer = useReducer(deckReducer, initialDeckState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      initialized = _useReducer2$.initialized,
      pendingView = _useReducer2$.pendingView,
      activeView = _useReducer2$.activeView,
      dispatch = _useReducer2[1];

  var actions = useMemo(function () {
    return {
      initializeTo: function initializeTo(payload) {
        return dispatch({
          type: 'INITIALIZE_TO',
          payload: payload
        });
      },
      skipTo: function skipTo(payload) {
        return dispatch({
          type: 'SKIP_TO',
          payload: payload
        });
      },
      stepForward: function stepForward() {
        return dispatch({
          type: 'STEP_FORWARD'
        });
      },
      stepBackward: function stepBackward() {
        return dispatch({
          type: 'STEP_BACKWARD'
        });
      },
      advanceSlide: function advanceSlide() {
        return dispatch({
          type: 'ADVANCE_SLIDE'
        });
      },
      regressSlide: function regressSlide(payload) {
        return dispatch({
          type: 'REGRESS_SLIDE',
          payload: payload
        });
      },
      commitTransition: function commitTransition(payload) {
        return dispatch({
          type: 'COMMIT_TRANSITION',
          payload: payload
        });
      },
      cancelTransition: function cancelTransition() {
        return dispatch({
          type: 'CANCEL_TRANSITION'
        });
      }
    };
  }, [dispatch]);
  useEffect(function () {
    if (initialized) return;
    if (userProvidedInitialState === undefined) return;
    actions.initializeTo(userProvidedInitialState);
  }, [initialized, actions, userProvidedInitialState]);
  return _objectSpread({
    initialized: initialized,
    pendingView: pendingView,
    activeView: activeView
  }, actions);
}