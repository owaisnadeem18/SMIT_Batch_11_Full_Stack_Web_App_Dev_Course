const words = ["tab", "bat", "pot", "top", "cat"];

function getAnagramGroups(words) {
  const anagramMap = [];

  words.forEach((word) => {
    // Word ko sorted form mein convert karo
    const sortedWord = word.split("").sort().join("");

    // Agar sortedWord anagramMap mein already hai
    if (anagramMap[sortedWord]) {
      anagramMap[sortedWord].push(word);
    } else {
      // Agar nahi hai, naya array create karo
      anagramMap[sortedWord] = [word];
    }
  });

  // Sorted keys se group ki list banayein
  const groupedAnagrams = Object.values(anagramMap);

  return groupedAnagrams;
}

const anagramGroups = getAnagramGroups(words);
console.log(anagramGroups);
