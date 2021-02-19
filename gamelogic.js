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
  if (wrongLetters(word,guesses)>=7) {
    return true;
  }
    return false;
}

function wrongLetters(word,guesses) {
    let resultaat=0;
    for (i=0; i<guesses.length; i++) {
        let element = guesses[i];
        if (!word.includes(element)) {
            resultaat++;
        }
    }
    return resultaat;
}

function draw (word,guesses) {
    let resultaat = wrongLetters(word, guesses);
    if (resultaat === 1) {
        console.log(`  
|      
|     
|       
|      
|
=========== 
`);
    }
    if (resultaat === 2) {
        console.log(`  
__________
|      
|     
|       
|      
|
===========
`);
    }
    if (resultaat === 3) {
        console.log(`  
__________
| /     
|/      
|       
|      
|
=========== 
`);
    }
    if (resultaat === 4) {
        console.log(`  
__________
| /     |
|/      
|       
|      
|
=========== 
`);
    }
    if (resultaat === 5) {
        console.log(`  
__________
| /     |
|/      o
|       O
|      
|
===========
`);
    }
    if (resultaat === 6) {
        console.log(`  
__________
| /     |
|/     _o_
|       O
|       
|
=========== 
`);
    }
    if (resultaat === 7) {
        console.log(`
__________
| /     |
|/     _o_
|       O
|      / \
|
=========== 
`);
    }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  wrongLetters: wrongLetters,
  draw: draw,
};
