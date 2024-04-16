'use strict';

const checkVowel = function () {
  let text = document.getElementById('text').value;
  isVowel(text);
  let vowelCount = 0;

  //   Convert text to lowercase
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  let result = document.getElementById('result');
  result.textContent = `Total vowels: ${vowelCount}`;
};

const isVowel = function (char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
};
