function countLetters() {
    var textInput = document.getElementById('textInput').value;
    var letterCount = {};
  
    for (var i = 0; i < textInput.length; i++) {
      var letter = textInput[i].toLowerCase();
      if (letter.match(/[a-z]/)) {
        if (letterCount[letter]) {
          letterCount[letter]++;
        } else {
          letterCount[letter] = 1;
        }
      }
    }
  
    var sortedLetters = Object.keys(letterCount).sort(function(a, b) {
      return letterCount[b] - letterCount[a];
    });
  
    var topLetters = sortedLetters.slice(0, 5);
  
    var resultElement = document.getElementById('result');
    if (topLetters.length > 0) {
      resultElement.textContent = 'The top 5 most frequent letters are: ' + topLetters.map(l => l.toUpperCase()).join(', ');
    } else {
      resultElement.textContent = 'No letters found in the text.';
    }
  }
  