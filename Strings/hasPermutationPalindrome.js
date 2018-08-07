// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)
// @flow
module.exports = {
    hasPermutationPalindrome: (str: string) => { // O(N)
        const strLowerCase = str.toLowerCase();

        const countMap = toCountHashmap(strLowerCase.split(""));
        const counts = getOddsAndEvensCount(countMap);

        if (isEven(countMap.length)) {
            return counts.odds === 0;
        }

        return counts.odds <= 1;
    }
};

const getOddsAndEvensCount = (countMap) => {
    const counts = {
        evens: 0,
        odds: 0
    };

    for (let key in countMap) {
        if (isEven(countMap[key])) {
            counts.evens++;
        } else {
            counts.odds++;
        }
    }

    return counts;
};

const isEven = (num) => {
    return num % 2 === 0;
};

const toCountHashmap = (str) => {
    const charMap = {};

    str.forEach((char) => {
        if (char === " ") return;

        if (charMap[char] === undefined) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    });

    return charMap;
};
