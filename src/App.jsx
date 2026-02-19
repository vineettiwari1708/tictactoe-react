import React, { useState } from 'react';
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
									id={rowIndex*3+colIndex}
									key={e}
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
