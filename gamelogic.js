function displayWordSoFar(word, guesses) {
  let resultaat= "";
  for (i=0; i<word.length; i++) {
    let element = word[i];
    const geraden = guesses.includes(element)
        if (geraden) {
          resultaat = resultaat + element + " ";
        }
        else {
          resultaat = resultaat + "_ ";
        }
    }
  return resultaat;
}

function isGameWon(word, guesses) {
  let resultaat=true;
  for (i=0; i<word.length; i++) {
    let element = word[i];
    const geraden = guesses.includes(element);
    if (!geraden) {
      resultaat = false;
      return resultaat;
    }
  }
  return resultaat;
    }

function isGameLost(word, guesses) {
  // 7 of meer foute letters ----> true
  // 6 of minder foute letters ----> false
  let resultaat=0;
  for (i=0; i<guesses.length; i++) {
    let element = guesses[i];
    if (!word.includes(element)) {
      resultaat ++;
    }
  }
  if (resultaat>=7) {
    return true;
  }
    return false;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
