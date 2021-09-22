import React from 'react';

export default function Square({ value, onClick, isWinningSquares }) {
  return (
    <button
      className="square"
      type="button"
      onClick={onClick}
      style={{ fontWeight: isWinningSquares ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
}
