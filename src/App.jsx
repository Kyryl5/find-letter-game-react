import Cards from './components/Cards'
import Title from './components/Title'
import Button from './components/Button'
import { getShuffleLetter, getShuffledArr } from './helpers'
import { useEffect, useState } from 'react'
import BasicModal from './components/Modal'
import { SnackbarProvider } from 'notistack'

export default function App() {
  const [shuffledLetter, SetShuffledLetter] = useState('')
  const [reloadGame, SetReloadGame] = useState(false)
  const [shuffledArr, setShuffledArr] = useState([])
  const [countWriteAnswers, setCountWriteAnswers] = useState(1)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [matrixOn, setMatrixOn] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  useEffect(() => {
    SetShuffledLetter(getShuffleLetter())
    setShuffledArr(getShuffledArr())
  }, [reloadGame])

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={1500}>
      <main>
        <Title shuffledLetter={shuffledLetter} matrixOn={matrixOn} />
        <div className="container">
          <Cards
            shuffledLetter={shuffledLetter}
            shuffledArr={shuffledArr}
            setShuffledArr={setShuffledArr}
            countWriteAnswers={countWriteAnswers}
            setCountWriteAnswers={setCountWriteAnswers}
            setButtonDisabled={setButtonDisabled}
            setMatrixOn={setMatrixOn}
            matrixOn={matrixOn}
            setShowMessage={setShowMessage}
            setOpenModal={setOpenModal}
            setModalMessage={setModalMessage}
          />
        </div>
        <Button
          setShuffledArr={setShuffledArr}
          setButtonDisabled={setButtonDisabled}
          buttonDisabled={buttonDisabled}
          setMatrixOn={setMatrixOn}
        />
        <BasicModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalMessage={modalMessage}
          SetReloadGame={SetReloadGame}
        />
      </main>
    </SnackbarProvider>
  )
}
