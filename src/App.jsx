import React, { useEffect, useState } from 'react';
import './App.css';
import Square from '../src/square/Square';

const App = () => {
	const renderFrom = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];
	const [gameState, setGameState] = useState(renderFrom);
	const [currentPlayer, setCurrentPlayer] = useState('circle');
	const [finishedState, setFinishedState] = useState(false);
	const checkWinner = () => {
		//row
		for (let row = 0; row < gameState.length; row++) {
			if (
				gameState[row][0] === gameState[row][1] &&
				gameState[row][1] === gameState[row][2]
			) {
				return gameState[row][0];
			}
		}
		//col
		for (let col = 0; col < gameState.length; col++) {
			if (
				gameState[0][col] === gameState[1][col] &&
				gameState[1][col] === gameState[2][col]
			) {
				return gameState[0][col];
			}
		}
	};
	useEffect(() => {
		const winner = checkWinner();
		if(winner==='circle'||winner==='cross')
		{
			setFinishedState(winner);
			console.log(winner);
		}
	}, [gameState]);

	return (
		<div className="main-container">
			<div className="user-container">
				<div className="left">Left</div>
				<div className="right">Right</div>
			</div>
			<div>
				<h1 className="heading-container bg-light">Tic Tac Toe</h1>
				<div className="square-container">
					{gameState.map((arr, rowIndex) =>
						arr.map((e, colIndex) => {
							return (
								<Square
									id={rowIndex * 3 + colIndex}
									key={rowIndex * 3 + colIndex}
									finishedState={finishedState}
									setFinishedState={setFinishedState}
									setCurrentPlayer={setCurrentPlayer}
									currentPlayer={currentPlayer}
									setGameState={setGameState}
								/>
							);
						}),
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
