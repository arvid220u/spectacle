import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme/default-theme';
import { Table, TableRow, TableCell, TableBody, TableHeader } from './table';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
Enzyme.configure({
  adapter: new Adapter()
});

var mountWithTheme = function mountWithTheme(tree) {
  var WrappingThemeProvider = function WrappingThemeProvider(props) {
    return /*#__PURE__*/_jsx(ThemeProvider, {
      theme: defaultTheme,
      children: props.children
    });
  };

  return mount(tree, {
    wrappingComponent: WrappingThemeProvider
  });
};

describe('<Table />', function () {
  it('should render a <table> with a <tr> for each row and a <td> with text for each cell', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(Table, {
      children: /*#__PURE__*/_jsxs(TableBody, {
        children: [/*#__PURE__*/_jsxs(TableRow, {
          children: [/*#__PURE__*/_jsx(TableCell, {
            children: "Row 1"
          }), /*#__PURE__*/_jsx(TableCell, {
            children: "Row 1"
          })]
        }), /*#__PURE__*/_jsxs(TableRow, {
          children: [/*#__PURE__*/_jsx(TableCell, {
            children: "Row 2"
          }), /*#__PURE__*/_jsx(TableCell, {
            children: "Row 2"
          })]
        })]
      })
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a <table> with bold text for the header row', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(Table, {
      children: /*#__PURE__*/_jsx(TableHeader, {
        children: /*#__PURE__*/_jsxs(TableRow, {
          children: [/*#__PURE__*/_jsx(TableCell, {
            children: "Row 1"
          }), /*#__PURE__*/_jsx(TableCell, {
            children: "Row 1"
          })]
        })
      })
    }));
    expect(wrapper).toMatchSnapshot();
  });
});