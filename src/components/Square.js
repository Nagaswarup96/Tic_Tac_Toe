import React from 'react';

export default function Square({ value, onClick }) {
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
}
