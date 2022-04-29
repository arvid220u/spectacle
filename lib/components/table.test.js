"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

var _styledComponents = require("styled-components");

var _defaultTheme = _interopRequireDefault(require("../theme/default-theme"));

var _table = require("./table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

var mountWithTheme = function mountWithTheme(tree) {
  var WrappingThemeProvider = function WrappingThemeProvider(props) {
    return /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
      theme: _defaultTheme.default
    }, props.children);
  };

  return (0, _enzyme.mount)(tree, {
    wrappingComponent: WrappingThemeProvider
  });
};

describe('<Table />', function () {
  it('should render a <table> with a <tr> for each row and a <td> with text for each cell', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/React.createElement(_table.Table, null, /*#__PURE__*/React.createElement(_table.TableBody, null, /*#__PURE__*/React.createElement(_table.TableRow, null, /*#__PURE__*/React.createElement(_table.TableCell, null, "Row 1"), /*#__PURE__*/React.createElement(_table.TableCell, null, "Row 1")), /*#__PURE__*/React.createElement(_table.TableRow, null, /*#__PURE__*/React.createElement(_table.TableCell, null, "Row 2"), /*#__PURE__*/React.createElement(_table.TableCell, null, "Row 2")))));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a <table> with bold text for the header row', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/React.createElement(_table.Table, null, /*#__PURE__*/React.createElement(_table.TableHeader, null, /*#__PURE__*/React.createElement(_table.TableRow, null, /*#__PURE__*/React.createElement(_table.TableCell, null, "Row 1"), /*#__PURE__*/React.createElement(_table.TableCell, null, "Row 1")))));
    expect(wrapper).toMatchSnapshot();
  });
});