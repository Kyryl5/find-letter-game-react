export default function Button({
  setShuffledArr,
  setButtonDisabled,
  buttonDisabled,
  setMatrixOn,
}) {
  const onClickHandler = () => {
    setMatrixOn(true);
    setShuffledArr((prev) =>
      prev.map((el) => {
        return { ...el, hidden: false };
      })
    );
    setTimeout(() => {
      setShuffledArr((prev) =>
        prev.map((el) => {
          return { ...el, hidden: true };
        })
      );
    }, 5000);
    setButtonDisabled(true);
  };
  return (
    <button onClick={onClickHandler} disabled={buttonDisabled}>
      Start game
    </button>
  );
}
