function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/display-name */
import Slide from '../slide/slide';
import { DeckContext } from '../deck/deck';
import presenterNotesPlugin from '../../utils/remark-rehype-presenter-notes';
import CodePane from '../code-pane';
import unified from 'unified';
import styled from 'styled-components';
import { compose, layout, position } from 'styled-system';
import remark from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkRaw from 'rehype-raw';
import rehype2react from 'rehype-react';
import { isValidElementType } from 'react-is';
import { root as mdRoot } from 'mdast-builder';
import mdxComponentMap from '../../utils/mdx-component-mapper';
import indentNormalizer from '../../utils/indent-normalizer';
import Notes from '../notes';
import { ListItem } from '../../index';
import { Appear } from '../appear';
import { forwardRef, useContext, useMemo, createElement, Children } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var Container = styled('div')(compose(position, layout));
export var Markdown = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$componentMap = _ref.componentMap,
      userProvidedComponentMap = _ref$componentMap === void 0 ? mdxComponentMap : _ref$componentMap,
      _ref$template = _ref.template;
  _ref$template = _ref$template === void 0 ? {
    default: 'div'
  } : _ref$template;

  var TemplateComponent = _ref$template.default,
      getPropsForAST = _ref$template.getPropsForAST,
      rawMarkdownText = _ref.children,
      _ref$animateListItems = _ref.animateListItems,
      animateListItems = _ref$animateListItems === void 0 ? false : _ref$animateListItems,
      componentProps = _ref.componentProps,
      props = _objectWithoutProperties(_ref, ["componentMap", "template", "children", "animateListItems", "componentProps"]);

  var _useContext = useContext(DeckContext),
      _useContext$theme = _useContext.theme;

  _useContext$theme = _useContext$theme === void 0 ? {} : _useContext$theme;
  var _useContext$theme$mar = _useContext$theme.markdownComponentMap,
      themeComponentMap = _useContext$theme$mar === void 0 ? null : _useContext$theme$mar;

  var _useMemo = useMemo(function () {
    // Dedent and parse markdown into MDAST
    var markdownText = indentNormalizer(rawMarkdownText);
    var ast = unified().use(remark).parse(markdownText); // Extract presenter notes from the MDAST (since we want to use a different
    // component map for them.)

    // Extract presenter notes from the MDAST (since we want to use a different
    // component map for them.)
    var extractedNotes = mdRoot();
    var transformedAst = unified().use(presenterNotesPlugin, function () {
      var _extractedNotes$child;

      (_extractedNotes$child = extractedNotes.children).push.apply(_extractedNotes$child, arguments);
    }).runSync(ast); // Pass the AST into the provided template function, which returns an object
    // whose keys are prop names and whose values are chunks of the parsed AST.

    // Pass the AST into the provided template function, which returns an object
    // whose keys are prop names and whose values are chunks of the parsed AST.
    var templatePropMDASTs;

    if (typeof getPropsForAST === 'function') {
      templatePropMDASTs = getPropsForAST(transformedAst);
    }

    if (!templatePropMDASTs) {
      templatePropMDASTs = {
        children: transformedAst
      };
    } // Construct the component map based on the current theme and any custom
    // mappings provided directly to <Markdown />


    // Construct the component map based on the current theme and any custom
    // mappings provided directly to <Markdown />
    var componentMap = _objectSpread(_objectSpread({
      __codeBlock: MarkdownCodePane
    }, themeComponentMap || {}), userProvidedComponentMap); // If user wants to animate list items,
    // wrap ListItem in Appear


    // If user wants to animate list items,
    // wrap ListItem in Appear
    if (animateListItems) {
      componentMap['li'] = AppearingListItem;
    } // Create an HOC based on the component map which will specially handle
    // fenced code blocks. (See MarkdownPreHelper for more details.)


    // Create an HOC based on the component map which will specially handle
    // fenced code blocks. (See MarkdownPreHelper for more details.)
    var PreComponent = componentMap['pre'];
    var CodeBlockComponent = componentMap['__codeBlock'];
    var CodeInlineComponent = componentMap['code'];
    componentMap['pre'] = MarkdownPreHelper(PreComponent, CodeInlineComponent, CodeBlockComponent);
    var componentMapWithPassedThroughProps = Object.entries(componentMap).reduce(function (newMap, _ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          Component = _ref3[1];

      newMap[key] = function (props) {
        return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, props), componentProps || {}));
      };

      return newMap;
    }, {}); // Create the compiler for the _user-visible_ markdown (not presenter notes)

    // Create the compiler for the _user-visible_ markdown (not presenter notes)
    var compiler = unified().use(remark2rehype, {
      allowDangerousHtml: true
    }).use(remarkRaw).use(rehype2react, {
      createElement: createElement,
      components: componentMapWithPassedThroughProps
    }); // Compile each of the values we got back from the template function

    // Compile each of the values we got back from the template function
    var templateProps = Object.entries(templatePropMDASTs).reduce(function (acc, _ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          mdast = _ref5[1];

      // Transform the MDAST into HAST
      var hast = compiler.runSync(mdast); // Compile the HAST into React elements

      // Compile the HAST into React elements
      acc[key] = compiler.stringify(hast);
      return acc;
    }, {}); // Create the compiler for presenter notes, which wraps the entire compiled
    // chunk in a <Note> component. (Rather than React.Fragment, which is the
    // default behavior.)

    // Create the compiler for presenter notes, which wraps the entire compiled
    // chunk in a <Note> component. (Rather than React.Fragment, which is the
    // default behavior.)
    var notesCompiler = unified().use(remark2rehype, {
      allowDangerousHtml: true
    }).use(remarkRaw).use(rehype2react, {
      createElement: createElement,
      Fragment: Notes
    }); // Transform and compile the notes AST.

    // Transform and compile the notes AST.
    var transformedNotesAst = notesCompiler.runSync(extractedNotes);
    var noteElements = notesCompiler.stringify(transformedNotesAst);
    return [templateProps, noteElements];
  }, [rawMarkdownText, getPropsForAST, themeComponentMap, userProvidedComponentMap, animateListItems, componentProps]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      templateProps = _useMemo2[0],
      noteElements = _useMemo2[1];

  var children = templateProps.children,
      restProps = _objectWithoutProperties(templateProps, ["children"]);

  return /*#__PURE__*/_jsx(Container, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/_jsxs(TemplateComponent, _objectSpread(_objectSpread({}, restProps), {}, {
      children: [children, noteElements]
    }))
  }));
});

var AppearingListItem = function AppearingListItem(props) {
  return /*#__PURE__*/_jsx(Appear, {
    children: /*#__PURE__*/_jsx(ListItem, _objectSpread({}, props))
  });
};

export var MarkdownSlide = function MarkdownSlide(_ref6) {
  var children = _ref6.children,
      componentMap = _ref6.componentMap,
      template = _ref6.template,
      _ref6$animateListItem = _ref6.animateListItems,
      animateListItems = _ref6$animateListItem === void 0 ? false : _ref6$animateListItem,
      _ref6$componentProps = _ref6.componentProps,
      componentProps = _ref6$componentProps === void 0 ? {} : _ref6$componentProps,
      rest = _objectWithoutProperties(_ref6, ["children", "componentMap", "template", "animateListItems", "componentProps"]);

  return /*#__PURE__*/_jsx(Slide, _objectSpread(_objectSpread({}, rest), {}, {
    children: /*#__PURE__*/_jsx(Markdown, {
      componentMap: componentMap,
      template: template,
      animateListItems: animateListItems,
      componentProps: componentProps,
      children: children
    })
  }));
};
export var MarkdownSlideSet = function MarkdownSlideSet(_ref7) {
  var rawMarkdownText = _ref7.children,
      _ref7$slideProps = _ref7.slideProps,
      slideProps = _ref7$slideProps === void 0 ? [] : _ref7$slideProps,
      allSlideProps = _objectWithoutProperties(_ref7, ["children", "slideProps"]);

  var dedentedMarkdownText = indentNormalizer(rawMarkdownText);
  var mdSlides = dedentedMarkdownText.split(/\n\s*---\n/);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: mdSlides.map(function (md, ix) {
      var props = {};
      Object.assign(props, allSlideProps);

      if (slideProps[ix]) {
        Object.assign(props, slideProps[ix]);
      }

      return /*#__PURE__*/_jsx(MarkdownSlide, _objectSpread(_objectSpread({}, props), {}, {
        children: md
      }), ix);
    })
  });
}; // This HOC is necessary due to the fact that `remark-rehype` transforms _inline
// code_ into <code>...</code>, but _fenced code blocks_ into
// <pre><code>...</code></pre>. (It's also possible that <pre>...</pre> might
// get in there somewhere.) In order to allow the user to theme these
// differently, we detect the latter case and render CodeBlockComponent if
// needed.

export var MarkdownPreHelper = function MarkdownPreHelper() {
  var PreComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pre';
  var CodeInlineComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'code';
  var CodeBlockComponent = arguments.length > 2 ? arguments[2] : undefined;
  return function (_ref8) {
    var children = _ref8.children,
        restProps = _objectWithoutProperties(_ref8, ["children"]);

    var pre = /*#__PURE__*/_jsx(PreComponent, _objectSpread(_objectSpread({}, restProps), {}, {
      children: children
    }));

    if (Children.count(children) !== 1) return pre;
    var child = children[0];
    if (child.type !== CodeInlineComponent) return pre;
    if (!isValidElementType(CodeBlockComponent)) return pre; // Edge behavior: when `rehype-react` does its transformations, children are
    // always provided as an array, even if there's only one. We extract it here
    // so there are less surprises for implementers of a code block component.

    var _child$props = child.props,
        _child$props$children = _slicedToArray(_child$props.children, 1),
        rawCode = _child$props$children[0],
        restChildProps = _objectWithoutProperties(_child$props, ["children"]);

    return /*#__PURE__*/_jsx(CodeBlockComponent, _objectSpread(_objectSpread(_objectSpread({}, restProps), restChildProps), {}, {
      children: rawCode
    }));
  };
};

var MarkdownCodePane = function MarkdownCodePane(_ref9) {
  var className = _ref9.className,
      children = _ref9.children,
      rest = _objectWithoutProperties(_ref9, ["className", "children"]);

  var language = useMemo(function () {
    var match = /^language-(.*)$/.exec(className || '');
    return match ? match[1] : undefined;
  }, [className]);
  return /*#__PURE__*/_jsx(CodePane, _objectSpread(_objectSpread({}, rest), {}, {
    language: language,
    children: children
  }));
};