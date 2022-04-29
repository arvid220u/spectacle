import { isolateNotes, removeNotes } from './notes';
describe('isolate notes', function () {
  it('returns empty string when there are no notes', function () {
    expect(isolateNotes("\n# Test Title\n    ")).toEqual('');
  });
  it('returns the given notes', function () {
    expect(isolateNotes("\n# test title\n      \nNotes: these are some test notes\n    ").trim()).toEqual('these are some test notes');
  });
});
describe('remove notes', function () {
  it('returns the full content when there are no notes', function () {
    expect(removeNotes("\n# Test Title\n    ").trim()).toEqual('# Test Title');
  });
  it('removes the given notes', function () {
    expect(removeNotes("\n# test title\n      \nNotes: these are some test notes\n    ").trim()).toEqual('# test title');
  });
});