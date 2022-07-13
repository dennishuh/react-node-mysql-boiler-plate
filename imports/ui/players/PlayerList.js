import React from 'react';
import Player from './Player';

const PlayerList = ({ players, updateScore, teamId }) => {
	function renderPlayers() {
		if (players.length === 0) {
			return (
				<div className="item">
					<p className="item__message">Add your first player to get started</p>
				</div>
			);
		}

		return players.map((player) => {
			return (
				<Player
					updateScore={updateScore}
					teamId={teamId}
					key={player._id}
					player={player}
				/>
			);
		});
	}

	return <div>{renderPlayers()}</div>;
};

export default PlayerList;
