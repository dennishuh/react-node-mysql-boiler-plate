import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Teams } from '../../api/teams';
import { Games } from '../../api/games';
import TeamsContainer from './TeamsContainer';

const CurrentGame = () => {
	const params = useParams();
	const [gameId] = useState(params.gameid);
	const [gameTime, setGameTime] = useState('');
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		Tracker.autorun(() => {
			Meteor.subscribe('games', gameId);
			Meteor.subscribe('teams', gameId);
			const currentGame = Games.find().fetch();
			const teams = Teams.find({ gameId: gameId }).fetch();
			setGameTime(currentGame[0] && currentGame[0].timeStarted);
			setTeams(teams);
		});
	}, []);
	return (
		<div>
			<div className="wrapper container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<div className="game-time">
							<p className="gametime">Game started on {gameTime}</p>
						</div>
					</div>
				</div>
				<div className="row">
					<TeamsContainer gameId={gameId} teams={teams} />
				</div>
			</div>
		</div>
	);
};
export default CurrentGame;
