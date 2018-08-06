const { urlEscape } = require("./urlEscape");

describe('Strings', function () {
  describe('urlEscape', function () {
    it("should return a string which has spaces replaced with %20", function(){
      expect(urlEscape("Mr John Smith")).toEqual("Mr%20John%20Smith");
    });

    it("should return not add extra %20 to the end when the string has padding", function(){
      expect(urlEscape("Mr John Smith    ")).toEqual("Mr%20John%20Smith");
    });
  });
});