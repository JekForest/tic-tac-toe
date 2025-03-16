import useGameBoard from "../hooks/useGameBoard"
import Square from "./Square"

function Board({ xIsNext, squares, onPlay }) {
  const { status, handleClick } = useGameBoard({ xIsNext, squares, onPlay })

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquaresClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquaresClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquaresClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquaresClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquaresClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquaresClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquaresClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquaresClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquaresClick={() => handleClick(8)} />
      </div>
    </>
  )
}
export default Board
