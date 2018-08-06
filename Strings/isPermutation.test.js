const { isPermutation } = require('./isPermutation');

describe('Strings', function () {
  describe('isPermutation', function () {
    it('should return true when given two strings with the same characters', function () {
      const strA = "abcdefg";
      const strB = "bdecagf";
      expect(isPermutation(strA,strB)).toEqual(true);
    });

    it('should return false when given two strings with different characters', function () {
      const strA = "notthesame";
      const strB = "bdecagf";
      expect(isPermutation(strA,strB)).toEqual(false);
    });
  });
});