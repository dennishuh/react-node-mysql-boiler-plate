import React, { useState } from 'react';
import Tappable from 'react-tappable';
import { Meteor } from 'meteor/meteor';

const Player = ({ player, teamId }) => {
	const [score, setScore] = useState(player.score);

	const updateScore = (points) => {
		let currentPlayer = {
			id: player._id,
			isHome: player.isHome,
			teamId: teamId,
			currentScore: score,
			score: points,
		};
		Meteor.call('updatePlayer', currentPlayer, (error) => {
			if (error) {
				alert('Oops seomthing went wrong: ' + error.reason);
			} else {
				let playerScore = currentPlayer.score;
				let currentScore = currentPlayer.currentScore;
				let totalscore = currentScore + playerScore;
				let incAmount =
					totalscore < 0
						? -Math.abs(Math.abs(playerScore) + totalscore)
						: playerScore;
				let finalScore = score + incAmount;
				setScore(finalScore);
			}
		});
	};

	const onDeletePlayer = () => {
		if (confirm(`are you sure you want to delete player: ${player.name}?`)) {
			let currentPlayer = {
				id: player._id,
				isHome: player.isHome,
			};
			Meteor.call('deletePlayer', currentPlayer, (error) => {
				if (error) {
					alert('Oops seomthing went wrong: ' + error.reason);
				} else {
					console.log('player successfully deleted');
				}
			});
		}
	};
	return (
		<div key={player._id} className="item item--position">
			<div className="player row">
				<div className="col-xs-12 col-md-4">
					<h3 className="player__name">{player.name}</h3>
					<p className="player__stats"> {score} pts</p>
				</div>
				<div className="col-xs-12 col-md-8 player-actions">
					<div className="player__actions">
						<Tappable
							className="btn btn-info btn-points"
							onTap={() => {
								updateScore(2);
							}}
							onPress={() => {
								updateScore(-2);
							}}
						>
							2
						</Tappable>
						<Tappable
							className="btn btn-info btn-points"
							onTap={() => {
								updateScore(3);
							}}
							onPress={() => {
								updateScore(-3);
							}}
						>
							3
						</Tappable>
					</div>
				</div>
			</div>
			<button className="btn player-delete btn-cancel" onClick={onDeletePlayer}>
				X
			</button>
		</div>
	);
};
export default Player;
