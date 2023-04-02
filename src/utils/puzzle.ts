const characterSample = ['5', '3', '7', '1', '8', '2', '9', '4', '6', 'L'];
const frequency = [1, 3, 1, 1, 2, 2, 1, 1, 3, 1];

/**
 * The key is 16 characters long!
 * The "frequency" decides how many times each character appears.
 * Your task is to create a key using these characters.
 */
export function solveMe() {
  // Add the characters of the key in the respective order in this array according to the clues provided below!
  let key: string[] = [];

  // 1. List out the available characters w.r.t. their frequency.
  const availableCharacters: string[] = [];

  // 2. Clue: Even numbers overcome the odds in the first half of the key. (Use "availableCharacters" array)

  // 3. Clue: Odds of even indexed numbers in the second half arriving last are high. (Use "availableCharacters" array)

  return key.join('');
}
