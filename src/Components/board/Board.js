import { useState } from 'react';


var isplayer1 = true;
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if(calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if (squares[i] == null) {

            if (isplayer1) {
                nextSquares[i] = 'X';
                isplayer1 = false;
            }
            else {
                nextSquares[i] = 'O';
                isplayer1 = true;
            }
        }
        setSquares(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isplayer1 ? "X" : "O");
    }

    return (
        <>
            <div>{status}</div>
            <div >
                <Square className="board-row" value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square className="board-row" value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square className="board-row" value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div >
                <Square className="board-row" value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square className="board-row" value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square className="board-row" value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div >
                <Square className="board-row" value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square className="board-row" value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square className="board-row" value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }