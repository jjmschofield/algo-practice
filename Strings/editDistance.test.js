const { isOneOrLessEditDistance } = require('./editDistance');

describe('Strings', function () {
  describe('editDistance', function () {
    describe('isOneOrLessEditDistance', function () {
      it('should return true when string b is missing a character in the middle', function () {
        expect(isOneOrLessEditDistance("pale", "ple")).toEqual(true);
      });

      it('should return true when given when string b i missing a chracter at the end', function () {
        expect(isOneOrLessEditDistance("pales", "pale")).toEqual(true);
      });

      it('should return true when when string b has one changed character', function () {
        expect(isOneOrLessEditDistance("pale", "bale")).toEqual(true);
      });

      it('should return true when when string b has an extra character at the start', function () {
        expect(isOneOrLessEditDistance("ale", "bale")).toEqual(true);
      });

      it('should return false when string b has two changed characters', function () {
        expect(isOneOrLessEditDistance("pale", "bake")).toEqual(false);
      });

      it('should return false when string a is two longer then string b', function () {
        expect(isOneOrLessEditDistance("pale", "pa")).toEqual(false);
      });

      it('should return false when string b is two longer then string a', function () {
        expect(isOneOrLessEditDistance("pa", "pale")).toEqual(false);
      });
    });
  });
});
