import React, { useState } from 'react';
import { render } from 'react-dom';
import Square from './Square';

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    if (board[position]) {
      return;
    }

    setBoard(prev => {
      return prev.map((sqr, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return sqr;
      });
    });

    setIsXNext(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
