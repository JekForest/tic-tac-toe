import Board from "./Board"
import useGameLogic from "../hooks/useGameLogic"

function Game() {
  const { xIsNext, currentSquares, handlePlay, moves } = useGameLogic()

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
export default Game
