const { isUnique } = require("./isUnique");

describe('Strings', function () {
  describe('isUnique', function () {
    it('should return true when given find a string with unique characters', function () {
      expect(isUnique("abcdefghijklmnop")).toEqual(true);
    });

    it('should return false when given find a string with non-unique characters', function () {
      expect(isUnique("abca")).toEqual(false);
    });

    it('should return return true when a string has unique characters and only one space', function () {
      expect(isUnique("abc defg")).toEqual(true);
    });

    it('should return return false when a string has unique characters and multiple spaces', function () {
      expect(isUnique("abc def g")).toEqual(false);
    });
  });
});