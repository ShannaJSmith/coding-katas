const { compressString } = require('../../js/compressString');

describe('compressString()', () => {
 test('compresses a string with repeated characters', () => {
   const input = 'aaabbbcccaaa';
   const expectedOutput = 'a3b3c3a3';
   expect(compressString(input)).toBe(expectedOutput);
 });

 test('returns the original string if compression does not reduce size', () => {
   const input = 'abc';
   const expectedOutput = 'abc';
   expect(compressString(input)).toBe(expectedOutput);
 });

 test('handles an empty string', () => {
   const input = '';
   const expectedOutput = '';
   expect(compressString(input)).toBe(expectedOutput);
 });
});
