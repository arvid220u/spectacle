import Enzyme, { mount } from 'enzyme';
import { Markdown, MarkdownSlide, MarkdownSlideSet } from './markdown';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Deck from '../deck/deck';
import { Heading, ListItem } from '../typography';
import { Appear } from '../appear';
import Slide from '../slide/slide';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
Enzyme.configure({
  adapter: new Adapter()
});

var mountInsideDeck = function mountInsideDeck(tree) {
  return mount( /*#__PURE__*/_jsx(Deck, {
    children: tree
  }));
};

describe('<MarkdownSlide />', function () {
  it('should generate standard unordered lists by default', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlide, {
      children: "\n        - One\n        - Two\n        - Three\n      "
    }));
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(ListItem)).toHaveLength(3);
    expect(wrapper.find(Appear)).toHaveLength(0);
  });
  it('should generate animated list items with animateListItems', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlide, {
      animateListItems: true,
      children: "\n        - One\n        - Two\n        - Three\n      "
    }));
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(Appear)).toHaveLength(3);
  });
  it('should work with raw HTML', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlide, {
      children: "\n        - One <div>one-div</div>\n        - Two <i>two-i-1</i><i>two-i-2</i>\n        - Three\n      "
    })); // Assert raw HTML elements are actually present.

    expect(wrapper.find('li').at(0).children().find('div')).toHaveLength(1);
    expect(wrapper.find('li').at(1).children().find('i')).toHaveLength(2);
    expect(wrapper.find('li').at(2).children()).toHaveLength(1);
  });
});
describe('<MarkdownSlideSet />', function () {
  it('should generate standard unordered lists by default', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlideSet, {
      children: "\n        - One\n        - Two\n        - Three\n\n        ---\n\n        - Four\n        - Five\n        - Size\n      "
    }));
    expect(wrapper.find('ul')).toHaveLength(2);
    expect(wrapper.find(ListItem)).toHaveLength(6);
    expect(wrapper.find(Appear)).toHaveLength(0);
  });
  it('should generate animated list items with animateListItems', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlideSet, {
      animateListItems: true,
      children: "\n        - One\n        - Two\n        - Three\n\n        ---\n\n        - Four\n        - Five\n        - Size\n      "
    }));
    expect(wrapper.find('ul')).toHaveLength(2);
    expect(wrapper.find(Appear)).toHaveLength(6);
  });
  it('Markdown should pass componentProps down to constituent components', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsxs(Slide, {
      children: [/*#__PURE__*/_jsx(Heading, {
        children: "Im not styled..."
      }), /*#__PURE__*/_jsx(Markdown, {
        componentProps: {
          color: 'purple'
        },
        children: "\n        # What's up world, I'm styled.\n\n        - List item\n        - And another one\n      "
      })]
    }));
    expect(wrapper.find(Heading).at(0).prop('color')).not.toBe('purple');
    expect(wrapper.find(Heading).at(1).prop('color')).toBe('purple');
    expect(wrapper.find(ListItem).at(0).prop('color')).toBe('purple');
  });
  it('MarkdownSlide should pass componentProps down to constituent components', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlide, {
      componentProps: {
        color: 'purple'
      },
      children: "\n        # What's up world, I'm styled.\n      "
    }));
    expect(wrapper.find(Heading).at(0).prop('color')).toBe('purple');
  });
  it('MarkdownSlideSet should pass componentProps down to constituent components', function () {
    var wrapper = mountInsideDeck( /*#__PURE__*/_jsx(MarkdownSlideSet, {
      componentProps: {
        color: 'purple'
      },
      children: "\n        # What's up world, I'm styled.\n\n        ---\n\n        # Another slide\n      "
    }));
    expect(wrapper.find(Heading).at(0).prop('color')).toBe('purple');
    expect(wrapper.find(Heading).at(1).prop('color')).toBe('purple');
  });
});