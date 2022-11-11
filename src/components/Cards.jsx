import { useSnackbar } from 'notistack'

export default function Cards({
  shuffledLetter,
  shuffledArr,
  setShuffledArr,
  SetReloadGame,
  countWriteAnswers,
  setCountWriteAnswers,
  setButtonDisabled,
  setMatrixOn,
  setShowMessage,
  matrixOn,
  setOpenModal,
  setModalMessage,
}) {
  const { enqueueSnackbar } = useSnackbar()
  const onClickHandler = (randomLetter, index) => {
    if (randomLetter === shuffledLetter) {
      setShowMessage(true)
      enqueueSnackbar(`Right letter ${shuffledLetter}`, { variant: 'success' })
      setTimeout(() => {
        setShowMessage(false)
      }, 300)
      setCountWriteAnswers(countWriteAnswers + 1)
      if (countWriteAnswers === 3) {
        setTimeout(() => {
          setCountWriteAnswers(1)
          setButtonDisabled(false)
          setMatrixOn(false)
          setModalMessage('Congratulations! You win!')
          setOpenModal(true)
        }, 500)
      }
      setShuffledArr((prev) =>
        prev.map((el, i) => {
          if (i === index) {
            return { ...el, hidden: false }
          }
          return el
        })
      )
    } else {
      setShuffledArr((prev) =>
        prev.map((el) => {
          return { ...el, hidden: false }
        })
      )
      setTimeout(() => {
        setCountWriteAnswers(1)
        setButtonDisabled(false)
        setMatrixOn(false)
        setModalMessage('You loose. Next time lucky')
        setOpenModal(true)
      }, 1000)
    }
  }

  return shuffledArr.map((item, index) => (
    <div
      onClick={
        matrixOn
          ? () => (item.hidden ? onClickHandler(item.value, index) : null)
          : null
      }
      className={item.hidden ? 'card cardHidden' : 'card'}
      key={index}
    >
      {!item.hidden && item.value}
    </div>
  ))
}
