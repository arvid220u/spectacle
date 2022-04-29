"use strict";

var _notes = require("./notes");

describe('isolate notes', function () {
  it('returns empty string when there are no notes', function () {
    expect((0, _notes.isolateNotes)("\n# Test Title\n    ")).toEqual('');
  });
  it('returns the given notes', function () {
    expect((0, _notes.isolateNotes)("\n# test title\n      \nNotes: these are some test notes\n    ").trim()).toEqual('these are some test notes');
  });
});
describe('remove notes', function () {
  it('returns the full content when there are no notes', function () {
    expect((0, _notes.removeNotes)("\n# Test Title\n    ").trim()).toEqual('# Test Title');
  });
  it('removes the given notes', function () {
    expect((0, _notes.removeNotes)("\n# test title\n      \nNotes: these are some test notes\n    ").trim()).toEqual('# test title');
  });
});