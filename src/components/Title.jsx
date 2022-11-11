export default function Title({ shuffledLetter, matrixOn }) {
  return <h1>Find the letter {matrixOn && shuffledLetter}</h1>;
}
