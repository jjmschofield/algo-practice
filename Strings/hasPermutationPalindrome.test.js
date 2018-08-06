const { hasPermutationPalindrome } = require('./hasPermutationPalindrome');

describe('Strings', function () {
  describe('hasPermutationPalindrome', function () {
    it("should return true when the permutation of a string is a palindrome", function(){
      expect(hasPermutationPalindrome("Tact Coa")).toEqual(true);
    });

    it('should return false when no permutation of a string is not a palindrome', function () {
      expect(hasPermutationPalindrome("not a palindrome")).toEqual(false);
    });

    it('should return true when the permutation of a string is a palindrome regardless of spaces', function () {
      expect(hasPermutationPalindrome("Ta ct Coa")).toEqual(true);
    });
  });
});