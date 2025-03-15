
function Square({ value, onSquaresClick }) {

  return (
    <button className="square" onClick={onSquaresClick}>{value}</button>
  )
}
export default Square
