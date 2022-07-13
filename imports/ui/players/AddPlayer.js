import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Teams } from '../../api/teams';

const AddPlayer = ({ gameId, teamId, teamName }) => {
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			let newPlayer = {
				gameId: gameId,
				teamId: teamId,
				isHome: teamName === 'Home',
				name: name,
				score: 0,
			};

			setName('');
			Meteor.call('addPlayer', newPlayer, (error) => {
				if (error) {
					alert('Oops seomthing went wrong: ' + error.reason);
				}
			});
		}
	};

	return (
		<div className="item">
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					name="playerName"
					placeholder="Player name"
					className="form__input"
					onChange={(e) => setName(e.target.value)}
				/>
				<button className="button">Add Player</button>
			</form>
		</div>
	);
};
export default AddPlayer;
