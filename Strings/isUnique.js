// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

// Solution 1 -> Brute force each character against each character O(N^2) (doesn't require data structure)
// Solution 2 -> Map and increment O(N) <- chosen as no memory constraint given
// Solution 3 -> Sort and binary search O(N log N) (doesn't require data structure)

module.exports = {
  isUnique: (str) => {
    const countMap = toCountHashmap(str.split(""));
    return eachCountLessThan(countMap, 1);
  }
};

const toCountHashmap = (arr) =>{
  const charMap = {};

  arr.forEach((char)=>{
    if(charMap[char] === undefined){
      charMap[char] = 1;
    } else{
      charMap[char]++;
    }
  });

  return charMap;
};

const eachCountLessThan = (countMap, max) => {
  for(let key in countMap){
    if(countMap[key] > max) {
      return false;
    }
  }
  return true;
};