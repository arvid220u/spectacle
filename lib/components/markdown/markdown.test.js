"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _markdown = require("./markdown");

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

var _deck = _interopRequireDefault(require("../deck/deck"));

var _typography = require("../typography");

var _appear = require("../appear");

var _slide = _interopRequireDefault(require("../slide/slide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

var mountInsideDeck = function mountInsideDeck(tree) {
  return (0, _enzyme.mount)( /*#__PURE__*/React.createElement(_deck.default, null, tree));
};

describe('<MarkdownSlide />', function () {
  it('should generate standard unordered lists by default', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlide, null, "\n        - One\n        - Two\n        - Three\n      "));
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(_typography.ListItem)).toHaveLength(3);
    expect(wrapper.find(_appear.Appear)).toHaveLength(0);
  });
  it('should generate animated list items with animateListItems', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlide, {
      animateListItems: true
    }, "\n        - One\n        - Two\n        - Three\n      "));
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(_appear.Appear)).toHaveLength(3);
  });
  it('should work with raw HTML', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlide, null, "\n        - One <div>one-div</div>\n        - Two <i>two-i-1</i><i>two-i-2</i>\n        - Three\n      ")); // Assert raw HTML elements are actually present.

    expect(wrapper.find('li').at(0).children().find('div')).toHaveLength(1);
    expect(wrapper.find('li').at(1).children().find('i')).toHaveLength(2);
    expect(wrapper.find('li').at(2).children()).toHaveLength(1);
  });
});
describe('<MarkdownSlideSet />', function () {
  it('should generate standard unordered lists by default', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlideSet, null, "\n        - One\n        - Two\n        - Three\n\n        ---\n\n        - Four\n        - Five\n        - Size\n      "));
    expect(wrapper.find('ul')).toHaveLength(2);
    expect(wrapper.find(_typography.ListItem)).toHaveLength(6);
    expect(wrapper.find(_appear.Appear)).toHaveLength(0);
  });
  it('should generate animated list items with animateListItems', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlideSet, {
      animateListItems: true
    }, "\n        - One\n        - Two\n        - Three\n\n        ---\n\n        - Four\n        - Five\n        - Size\n      "));
    expect(wrapper.find('ul')).toHaveLength(2);
    expect(wrapper.find(_appear.Appear)).toHaveLength(6);
  });
  it('Markdown should pass componentProps down to constituent components', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_slide.default, null, /*#__PURE__*/React.createElement(_typography.Heading, null, "Im not styled..."), /*#__PURE__*/React.createElement(_markdown.Markdown, {
      componentProps: {
        color: 'purple'
      }
    }, "\n        # What's up world, I'm styled.\n\n        - List item\n        - And another one\n      ")));
    expect(wrapper.find(_typography.Heading).at(0).prop('color')).not.toBe('purple');
    expect(wrapper.find(_typography.Heading).at(1).prop('color')).toBe('purple');
    expect(wrapper.find(_typography.ListItem).at(0).prop('color')).toBe('purple');
  });
  it('MarkdownSlide should pass componentProps down to constituent components', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlide, {
      componentProps: {
        color: 'purple'
      }
    }, "\n        # What's up world, I'm styled.\n      "));
    expect(wrapper.find(_typography.Heading).at(0).prop('color')).toBe('purple');
  });
  it('MarkdownSlideSet should pass componentProps down to constituent components', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/React.createElement(_markdown.MarkdownSlideSet, {
      componentProps: {
        color: 'purple'
      }
    }, "\n        # What's up world, I'm styled.\n\n        ---\n\n        # Another slide\n      "));
    expect(wrapper.find(_typography.Heading).at(0).prop('color')).toBe('purple');
    expect(wrapper.find(_typography.Heading).at(1).prop('color')).toBe('purple');
  });
});