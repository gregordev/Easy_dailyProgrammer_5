/*
  Name: Word funnel 1
  Inspiration: 
  https://www.reddit.com/r/dailyprogrammer/comments/98ufvz/20180820_challenge_366_easy_word_funnel_1/

*/

let string1 = 'mmmd';
let string2 = 'mmm';
let inputArray1 = [];
let inputArray2 = [];
function funnel(input1, input2) {

  let counter = 0;

  inputArray1 = string1.split('');
  inputArray2 = string2.split('');

  if(inputArray1.length === inputArray2.length+1) {
    for (let i = 0; i < inputArray2.length; i++) {
        if (inputArray1.includes(inputArray2[i])) {
          counter++;
        } else if (inputArray1.includes(inputArray2[i]) !== 1) {
      } else {
        console.log('something went wrong');
      }
    }
    console.log(`
    Word 1: ${string1}
    Word 2: ${string2}
    `);

    if (counter === inputArray2.length) {
      console.log('It IS possible to create word2 from word1 when I delete one letter from word1');
    } else {
      console.log('It IS NOT possible to create word2 from word1 when I delete one letter from word1');
    }

  } else {
    console.log('It IS NOT possible to create word2 from word1 when I delete one letter from word1');
  } 
}

funnel(string1, string2);