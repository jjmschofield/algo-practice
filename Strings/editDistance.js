// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// pale, ple -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

// Solution A) Check each letter, recursively going back and padding where a letter has been omitted O(N!)
// Solution B) Create a map of count and positions and then calculate the difference O(A + B) - didn't work
// Solution C) Iterate A, if no match score 1, if length of a is greater add skip, if length of a is less minus skip O(N)
// @flow
module.exports = {
    isOneOrLessEditDistance: (strA: string, strB: string) => {
        const stringDistance = strA.length - strB.length;

        if (stringDistance > 1 || stringDistance < -1) return false;

        let score = 0;
        let skip = 0;

        for (let i = 0; i < strB.length; i++) {
            let aIndex = i + skip;

            if (aIndex >= strA.length) break;

            if (strA[aIndex] === strB[i]) continue;

            score++;

            if (score > 1) break;

            if (strA.length > strB.length) skip++;

            if (strA.length < strB.length) skip--;
        }

        return score <= 1 && score >= -1;
    }
};
