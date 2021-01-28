const { displayWordSoFar, isGameWon, isGameLost, wrongLetters, draw } = require("./gamelogic");

test("displayWordSoFar should display an underscore followed by a space for each letter to guess", () => {
  // ARRANGE
  const word = "javascript";
  const guesses = [];

  // ACT
  const displayedWord = displayWordSoFar(word, guesses);

  // ASSERT
  expect(displayedWord).toBe("_ _ _ _ _ _ _ _ _ _ ");
});

test("displayWordSoFar should display the letters guessed so far", () => {
  // ARRANGE
  const word = "javascript";
  const guesses = ["a", "t", "i", "b", "k"];

  // ACT
  const displayedWord = displayWordSoFar(word, guesses);

  // ASSERT
  expect(displayedWord).toBe("_ a _ a _ _ _ i _ t ");
});

test("isGameWon should return false when all letters have not been guessed yet", () => {
  // ARRANGE
  const word = "javascript";
  const guesses = [];

  // ACT
  const gameWon = isGameWon(word, guesses);

  // ASSERT
  expect(gameWon).toBe(false);
});

test("isGameWon should return true when all letters have been guessed", () => {
  // ARRANGE
  const word = "javascript";
  const guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"];

  // ACT
  const gameWon = isGameWon(word, guesses);

  // ASSERT
  expect(gameWon).toBe(true);
});

test("isGameLost should return true if you've guessed 7 wrong letters or more", () => {
  // ARRANGE
  const word = "javascript";
  const guesses = ["q", "w", "e", "y", "u", "o", "d"];

  // ACT
  const gameLost = isGameLost(word, guesses);

  // ASSERT
  expect(gameLost).toBe(true);
});

test("isGameLost should return false if you've guessed less than 7 wrong letters", () => {
  // ARRANGE
  const word = "javascript";
  const guesses = ["q", "w", "e", "a", "t"];

  // ACT
  const gameLost = isGameLost(word, guesses);

  // ASSERT
  expect(gameLost).toBe(false);
});

  test("wrongLetters should return the number of wrong letters", () => {
    // ARRANGE
    const word = "javascript";
    const guesses = ["q", "w", "e", "a", "t"];

    // ACT
    const wrong = wrongLetters(word, guesses);

    // ASSERT
    expect(wrong).toBe(3);
  });

