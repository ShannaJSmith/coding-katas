const { compressString } = require('../../js/compressString');

describe('Edge cases', () => {
  test('handles a string with all unique characters', () => {
    const input = 'abcdefg';
    const expectedOutput = 'abcdefg';
    expect(compressString(input)).toBe(expectedOutput);
  });

  test('handles a string with a single character', () => {
    const input = 'aaaaaa';
    const expectedOutput = 'a6';
    expect(compressString(input)).toBe(expectedOutput);
  });

  test('handles a very long string with mixed characters', () => {
    const input = 'a'.repeat(1000) + 'b'.repeat(500) + 'c'.repeat(2000);
    const expectedOutput = 'a1000b500c2000';
    expect(compressString(input)).toBe(expectedOutput);
  });
});
