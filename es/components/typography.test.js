import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme/default-theme';
import { Text, Heading, Quote, OrderedList, UnorderedList, ListItem, Link, CodeSpan } from './typography';
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

describe('<Text />', function () {
  it('should render a <div> with text', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(Text, {
      children: "Spectacle!"
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
describe('<Heading />', function () {
  it('should render a <Text /> component with h1 size', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(Heading, {
      children: "Spectacle!"
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
describe('<Quote />', function () {
  it('should render a <Text /> component with a left border', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(Quote, {
      children: "Spectacle!"
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
describe('<OrderedList />', function () {
  it('should render an <ol> with <li> children', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsxs(OrderedList, {
      children: [/*#__PURE__*/_jsx(ListItem, {
        children: "This is an"
      }), /*#__PURE__*/_jsx(ListItem, {
        children: "Ordered List"
      })]
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
describe('<UnorderedList />', function () {
  it('should render a <ul> with <li> children', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsxs(UnorderedList, {
      children: [/*#__PURE__*/_jsx(ListItem, {
        children: "This is an"
      }), /*#__PURE__*/_jsx(ListItem, {
        children: "Unordered List"
      })]
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
describe('<Link />', function () {
  it('should render an <a> with text', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(Link, {
      children: "Spectacle!"
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
describe('<CodeSpan />', function () {
  it('should render a <code> with text', function () {
    var wrapper = mountWithTheme( /*#__PURE__*/_jsx(CodeSpan, {
      children: "Code!"
    }));
    expect(wrapper).toMatchSnapshot();
  });
});