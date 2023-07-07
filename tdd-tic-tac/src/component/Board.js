import {useState} from 'react';
import React from 'react';

function Square({value, onSquareClick, testId}){
  return( <button data-testid = {testId} classname = "square" onClick ={onSquareClick}>
    {value}</button>
    );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares))
      return;
    const nextSquares = squares.slice();
    if(xIsNext)
      nextSquares[i] = 'X';
    else
      nextSquares[i] = 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }
  else{
    status = "Next Player: " + (xIsNext?"X":"O");
  }
  
  return (
    <React.Fragment>
      <div className = "status">{status}</div>
      <div className = "board-row">
        <Square value = {squares[0]} onSquareClick = { ()=> handleClick(0)} testId = 'square0'/>
        <Square value = {squares[1]} onSquareClick = { ()=> handleClick(1)} testId = 'square1'/>
        <Square value = {squares[2]} onSquareClick = { ()=> handleClick(2)} testId = 'square2'/>
      </div>
      <div className = "board-row">
        <Square value = {squares[3]} onSquareClick = { ()=> handleClick(3)} testId = 'square3'/>
        <Square value = {squares[4]} onSquareClick = { ()=> handleClick(4)} testId = 'square4'/>
        <Square value = {squares[5]} onSquareClick = { ()=> handleClick(5)} testId = 'square5'/>
      </div>
      <div className = "board-row">
        <Square value = {squares[6]} onSquareClick = { ()=> handleClick(6)} testId = 'square6'/>
        <Square value = {squares[7]} onSquareClick = { ()=> handleClick(7)} testId = 'square7'/>
        <Square value = {squares[8]} onSquareClick = { ()=> handleClick(8)} testId = 'square8'/>
      </div>
    </React.Fragment>
  );
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  //return null;
}
