function displayWordSoFar(word, guesses) {

  let result= "";
  for (i=0; i<word.length; i++) {
    let element = word[i];
    const guessed = guesses.includes(element)
        if (guessed) {
          result = result + element + " ";
        }
        else {
          result = result + "_ ";
        }
    }
  return result;
}

function isGameWon(word, guesses) {
  let result=true;
  for (i=0; i<word.length; i++) {
    let element = word[i];
    const guessed = guesses.includes(element);
    if (!guessed) {
      result = false;
      return result;
    }
  }
  return result;
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
    let result=0;
    for (i=0; i<guesses.length; i++) {
        let element = guesses[i];
        if (!word.includes(element)) {
            result++;
        }
    }
    return result;
}

function draw (word,guesses) {
    let result = wrongLetters(word, guesses);
    if (result === 1) {
        console.log(`  
|      
|     
|       
|      
|
=========== 
`);
    }
    if (result === 2) {
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
    if (result === 3) {
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
    if (result === 4) {
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
    if (result === 5) {
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
    if (result === 6) {
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
    if (result === 7) {
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
