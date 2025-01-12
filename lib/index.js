"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Appear", {
  enumerable: true,
  get: function get() {
    return _appear.Appear;
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function get() {
    return _layout.Box;
  }
});
Object.defineProperty(exports, "CodePane", {
  enumerable: true,
  get: function get() {
    return _codePane.default;
  }
});
Object.defineProperty(exports, "CodeSpan", {
  enumerable: true,
  get: function get() {
    return _typography.CodeSpan;
  }
});
Object.defineProperty(exports, "Deck", {
  enumerable: true,
  get: function get() {
    return _deck.default;
  }
});
Object.defineProperty(exports, "DeckContext", {
  enumerable: true,
  get: function get() {
    return _deck2.DeckContext;
  }
});
Object.defineProperty(exports, "FlexBox", {
  enumerable: true,
  get: function get() {
    return _layout.FlexBox;
  }
});
Object.defineProperty(exports, "FullScreen", {
  enumerable: true,
  get: function get() {
    return _fullscreen.default;
  }
});
Object.defineProperty(exports, "FullSizeImage", {
  enumerable: true,
  get: function get() {
    return _image.FullSizeImage;
  }
});
Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function get() {
    return _layout.Grid;
  }
});
Object.defineProperty(exports, "Heading", {
  enumerable: true,
  get: function get() {
    return _typography.Heading;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _image.Image;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _typography.Link;
  }
});
Object.defineProperty(exports, "ListItem", {
  enumerable: true,
  get: function get() {
    return _typography.ListItem;
  }
});
Object.defineProperty(exports, "Markdown", {
  enumerable: true,
  get: function get() {
    return _markdown.Markdown;
  }
});
Object.defineProperty(exports, "MarkdownPreHelper", {
  enumerable: true,
  get: function get() {
    return _markdown.MarkdownPreHelper;
  }
});
Object.defineProperty(exports, "MarkdownSlide", {
  enumerable: true,
  get: function get() {
    return _markdown.MarkdownSlide;
  }
});
Object.defineProperty(exports, "MarkdownSlideSet", {
  enumerable: true,
  get: function get() {
    return _markdown.MarkdownSlideSet;
  }
});
Object.defineProperty(exports, "Notes", {
  enumerable: true,
  get: function get() {
    return _notes.default;
  }
});
Object.defineProperty(exports, "OrderedList", {
  enumerable: true,
  get: function get() {
    return _typography.OrderedList;
  }
});
Object.defineProperty(exports, "Progress", {
  enumerable: true,
  get: function get() {
    return _progress.default;
  }
});
Object.defineProperty(exports, "Quote", {
  enumerable: true,
  get: function get() {
    return _typography.Quote;
  }
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _slide.default;
  }
});
Object.defineProperty(exports, "SlideContext", {
  enumerable: true,
  get: function get() {
    return _slide.SlideContext;
  }
});
Object.defineProperty(exports, "SpectacleLogo", {
  enumerable: true,
  get: function get() {
    return _logo.default;
  }
});
Object.defineProperty(exports, "Stepper", {
  enumerable: true,
  get: function get() {
    return _appear.Stepper;
  }
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _table.Table;
  }
});
Object.defineProperty(exports, "TableBody", {
  enumerable: true,
  get: function get() {
    return _table.TableBody;
  }
});
Object.defineProperty(exports, "TableCell", {
  enumerable: true,
  get: function get() {
    return _table.TableCell;
  }
});
Object.defineProperty(exports, "TableHeader", {
  enumerable: true,
  get: function get() {
    return _table.TableHeader;
  }
});
Object.defineProperty(exports, "TableRow", {
  enumerable: true,
  get: function get() {
    return _table.TableRow;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _typography.Text;
  }
});
Object.defineProperty(exports, "UnorderedList", {
  enumerable: true,
  get: function get() {
    return _typography.UnorderedList;
  }
});
Object.defineProperty(exports, "defaultTheme", {
  enumerable: true,
  get: function get() {
    return _defaultTheme.default;
  }
});
Object.defineProperty(exports, "defaultTransition", {
  enumerable: true,
  get: function get() {
    return _transitions.defaultTransition;
  }
});
Object.defineProperty(exports, "fadeTransition", {
  enumerable: true,
  get: function get() {
    return _transitions.fadeTransition;
  }
});
Object.defineProperty(exports, "indentNormalizer", {
  enumerable: true,
  get: function get() {
    return _indentNormalizer.default;
  }
});
Object.defineProperty(exports, "isolateNotes", {
  enumerable: true,
  get: function get() {
    return _notes2.isolateNotes;
  }
});
Object.defineProperty(exports, "mdxComponentMap", {
  enumerable: true,
  get: function get() {
    return _mdxComponentMapper.default;
  }
});
Object.defineProperty(exports, "removeNotes", {
  enumerable: true,
  get: function get() {
    return _notes2.removeNotes;
  }
});
Object.defineProperty(exports, "slideTransition", {
  enumerable: true,
  get: function get() {
    return _transitions.slideTransition;
  }
});
Object.defineProperty(exports, "useMousetrap", {
  enumerable: true,
  get: function get() {
    return _useMousetrap.default;
  }
});
Object.defineProperty(exports, "useSteps", {
  enumerable: true,
  get: function get() {
    return _useSteps.useSteps;
  }
});

var _deck = _interopRequireDefault(require("./components/deck"));

var _slide = _interopRequireWildcard(require("./components/slide/slide"));

var _appear = require("./components/appear");

var _codePane = _interopRequireDefault(require("./components/code-pane"));

var _typography = require("./components/typography");

var _table = require("./components/table");

var _layout = require("./components/layout");

var _image = require("./components/image");

var _notes = _interopRequireDefault(require("./components/notes"));

var _progress = _interopRequireDefault(require("./components/progress"));

var _fullscreen = _interopRequireDefault(require("./components/fullscreen"));

var _markdown = require("./components/markdown/markdown");

var _logo = _interopRequireDefault(require("./components/logo"));

var _mdxComponentMapper = _interopRequireDefault(require("./utils/mdx-component-mapper"));

var _notes2 = require("./utils/notes");

var _indentNormalizer = _interopRequireDefault(require("./utils/indent-normalizer"));

var _deck2 = require("./components/deck/deck");

var _useMousetrap = _interopRequireDefault(require("./hooks/use-mousetrap"));

var _useSteps = require("./hooks/use-steps");

var _defaultTheme = _interopRequireDefault(require("./theme/default-theme"));

var _transitions = require("./components/transitions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }