"use strict";

var _indentNormalizer = _interopRequireDefault(require("./indent-normalizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('indentNormalizer', function () {
  it('handles empty cases', function () {
    // @ts-ignore
    expect((0, _indentNormalizer.default)()).toEqual(''); // @ts-ignore

    expect((0, _indentNormalizer.default)(null)).toEqual('');
    expect((0, _indentNormalizer.default)('')).toEqual('');
    expect((0, _indentNormalizer.default)(' ')).toEqual('');
    expect((0, _indentNormalizer.default)(' \n ')).toEqual('');
  });
  it('handles base cases', function () {
    expect((0, _indentNormalizer.default)('no indents')).toEqual('no indents');
    expect((0, _indentNormalizer.default)('no indents\nstill none')).toEqual('no indents\nstill none');
  });
  it('indents to smallest non-whitespace line level', function () {
    expect((0, _indentNormalizer.default)("\n    first lowest\n      second in\n    third\n        fourth way in\n    ")).toEqual("\nfirst lowest\n  second in\nthird\n    fourth way in\n    ".trim());
  });
  it('indents to smallest indent even in later lines', function () {
    expect((0, _indentNormalizer.default)("\n    first\n      second in\n  third lowest\n        fourth way in\n    ")).toEqual("  first\n    second in\nthird lowest\n      fourth way in");
  });
});