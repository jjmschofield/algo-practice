// Given two strings, write a method to decide if one is a permutation of the other
// @flow
module.exports = {
    isPermutation: (strA: string, strB: string) => { // O(N+N)
        const sortedA = strA.split("").sort().join("");
        const sortedB = strB.split("").sort().join("");
        return sortedA === sortedB;
    }
};
