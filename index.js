const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, wrongLetters, draw } = require("./gamelogic");

function game(word, guesses) {
  console.log("Guessed so far: ", guesses);
  console.log("You entered " + wrongLetters(word,guesses) + " wrong letters")
  console.log("Result: ", displayWordSoFar(word,guesses));

  const letter = question("Guess a letter: ").toLowerCase();

  // voeg de geraden letter toe aan de array met guesses
  if (letter.length >1) {
    console.log ("Please insert 1 letter at a time");
  }
  else {
    guesses.push(letter);
  }

  //teken een extra streepje als er een fout is gemaakt
  draw(word,guesses);

  // volgende ronde! we roepen game nog een keer aan
  if (isGameLost(word,guesses)) {
    console.log("Sorry! You lost.");
    return;
  }
  else if (isGameWon(word,guesses)) {
    console.log("Yes! You won!");
    return;
  }
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("JAVASCRIPT".toLowerCase(), []);
