const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, wrongLetters, draw } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  console.log("Je hebt " + wrongLetters(word,guesses) + " foute letters ingevoerd")
  console.log("Resultaat: ", displayWordSoFar(word,guesses));

  const letter = question("Raad een letter: ").toLowerCase();

  // voeg de geraden letter toe aan de array met guesses
  if (letter.length >1) {
    console.log ("Graag 1 letter tegelijk invoeren");
  }
  else {
    guesses.push(letter);
  }

  //teken een extra streepje als er een fout is gemaakt
  draw(word,guesses);

  // volgende ronde! we roepen game nog een keer aan
  if (isGameLost(word,guesses)) {
    console.log("Helaas!! Je hebt verloren.")
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
