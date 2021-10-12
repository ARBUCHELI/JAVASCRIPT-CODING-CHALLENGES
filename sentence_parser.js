/* NAIVE SOLUTION WITHOUT USING ALGORITHMS AND DATA STRUCTURES*/

/*
Write a program that parses a sentence and replaces each word with the following: 
1) The first letter of the word
2) The number of distinct characters between first and last character
3) The last letter of the word. 
For example, Smooth would become S3h. 
Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form and location in the answer. 
A few of the things we will be looking at is accuracy, efficiency, solution completeness. 
*/

function wordParser(text) {
  let wordList = text.split(' ');
  let result = '';
  let distinctChar = 0;
  let stringChar = '';
  
  let parsedWords = [];
 
  for (let i = 0; i < wordList.length; i++) {
    parsedWords.push(wordList[i][0]);
    if (wordList[i].length == 2) {
        distinctChar = '';
    }
    if (wordList[i].length != 2) {
      let unique = '';
      if (wordList[i].includes('-')) {
        let subwordList = wordList[i].split('-');
        for (let j = 0; j < subwordList.length; j++) {
          for (let k = 1; k < subwordList[j].length-1; k++) {
            if (unique.includes(subwordList[j][k]) === false) {
              unique += subwordList[j][k];
              distinctChar = unique.length;
            }
          }
        }
      }  
      else {
        for (let j = 1; j < wordList[i].length-1; j++) {
          if (unique.includes(wordList[i][j]) === false && wordList[i]) {
            unique += wordList[i][j];
            distinctChar = unique.length;
            if (wordList[i][wordList[i].length-1] === '.' || wordList[i][wordList[i].length-1] === '!' || wordList[i][wordList[i].length-1] === '?'){
              distinctChar -= 1;
            }
          }
        }
      }
     }
   
  
      parsedWords[i] = parsedWords[i]+distinctChar.toString();
      if (wordList[i].includes('-')) {
        let subwordList = wordList[i].split('-');
        parsedWords[i] = parsedWords[i]+subwordList[0][subwordList[0].length-1]+'-'+subwordList[1];
      }
      if (wordList[i][wordList[i].length-1] === '.' || wordList[i][wordList[i].length-1] === '!' || wordList[i][wordList[i].length-1] === '?'){
        parsedWords[i] = parsedWords[i]+wordList[i][wordList[i].length-2]+wordList[i][wordList[i].length-1];
      }
      else {
        if (!parsedWords[i].includes('-')) {
          parsedWords[i] = parsedWords[i]+wordList[i][wordList[i].length-1];
        }  
      }
      
  }
    result = parsedWords.join(' ');
    return result;
}
    
     
  
   
      
    

var output = wordParser("Creativity is thinking-up new things. Innovation is doing new things!");
console.log(output);
// expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!
