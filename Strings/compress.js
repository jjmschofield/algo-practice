// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
// "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Solution: Iterate chars, if the char is a match add one to count, if not push a new char to the array, concat O(N)
// @flow
module.exports = {
    compress: (str: string) => {
        const compChars = [];

        let curChar = new CompressedChar();

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== curChar.char) {
                curChar = new CompressedChar(str[i]);
                compChars.push(curChar);
            }
            curChar.count++;
        }

        const compStr = compChars.reduce((compStr, compChar: CompressedChar) => {
            return `${compStr}${compChar.char}${compChar.count}`
        }, "");

        if (str.length < compStr.length) return str;

        return compStr;
    }
};

class CompressedChar {
    char: string;
    count: number;

    constructor(char: ?string) {
        this.char = char || "";
        this.count = 0;
    }
}
