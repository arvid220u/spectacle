import indentNormalizer from './indent-normalizer';
describe('indentNormalizer', function () {
  it('handles empty cases', function () {
    // @ts-ignore
    expect(indentNormalizer()).toEqual(''); // @ts-ignore

    expect(indentNormalizer(null)).toEqual('');
    expect(indentNormalizer('')).toEqual('');
    expect(indentNormalizer(' ')).toEqual('');
    expect(indentNormalizer(' \n ')).toEqual('');
  });
  it('handles base cases', function () {
    expect(indentNormalizer('no indents')).toEqual('no indents');
    expect(indentNormalizer('no indents\nstill none')).toEqual('no indents\nstill none');
  });
  it('indents to smallest non-whitespace line level', function () {
    expect(indentNormalizer("\n    first lowest\n      second in\n    third\n        fourth way in\n    ")).toEqual("\nfirst lowest\n  second in\nthird\n    fourth way in\n    ".trim());
  });
  it('indents to smallest indent even in later lines', function () {
    expect(indentNormalizer("\n    first\n      second in\n  third lowest\n        fourth way in\n    ")).toEqual("  first\n    second in\nthird lowest\n      fourth way in");
  });
});