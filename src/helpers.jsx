export function getShuffleLetter() {
  const letter = ["A", "B", "C"];
  let shuffledLetter = letter[Math.round(Math.random() * (letter.length - 1))];
  return shuffledLetter;
}

export function getShuffledArr() {
  const lettersArr = ["A", "A", "A", "B", "B", "B", "C", "C", "C"];
  let shuffledArr = lettersArr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .map((el) => ({ value: el, hidden: true }));
  return shuffledArr;
}
