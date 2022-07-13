import React from "react";
import { useNavigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';

const NewGame = props => {
	let navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const gameTime = {
			timeStarted: moment().format('MMM Do YY, h:mm a')
		};
		Meteor.call('newGame', gameTime, (error, result) => {
			if (error) {
				alert('Oops seomthing went wrong: ' + error.reason);
			} else {
				//this.props.setGameId(result);
				navigate(`/games/${result}`);
			}
		});
	}

	return (
		<div className="item reset-game">
			<form onSubmit={handleSubmit} className="form ">
				<button className="btn btn-danger">New Game</button>
			</form>
		</div>
	);
};

export default NewGame;