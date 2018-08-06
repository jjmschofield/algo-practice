// Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end
// to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java,
// please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: "Mr John Smith "J 13
// Output: "Mr%20John%20Smith"

// Note, we don't do a string time and replace here as it seems a bit easy an is probably less efficient

module.exports = {
  urlEscape: (str) => { // O(N)
    const strArray = str.split("");

    strArray.reverse();

    let firstCharFound = false;

    const escapedArray = strArray.map((char) => {
      if (!firstCharFound && char === " ") {
        return;
      }
      else if (!firstCharFound && char !== " ") {
        firstCharFound = true;
      }

      if (char === " ") {
        return "%20"
      }

      return char;
    });

    escapedArray.reverse();

    return escapedArray.join("");
  }
};
