import React from 'react';

export default function Square({ value, onClick, isWinningSquares }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
}
