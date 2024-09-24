import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false)
  const toggleGamePlay = () => {
    setisGameStarted(!isGameStarted);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  )
}

export default App