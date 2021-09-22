import React from 'react';

export default function StatusMessage({ winner, current }) {
  const noMovesLeft = current.board.every(ele => ele !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `X and O tied`}
    </h2>
  );
}
