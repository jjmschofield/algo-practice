const { compress } = require('./compress');

describe('Strings', function () {
    describe('compress', function () {
        it('should return a compressed string when the compressed string would be shorter', function () {
            expect(compress("aabcccccaaa")).toEqual("a2b1c5a3");
        });

        it('should return the original string when the compressed string would be longer', function () {
            expect(compress("abcdefgh")).toEqual("abcdefgh");
        });
    });
});