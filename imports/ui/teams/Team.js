import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import TeamScore from './TeamScore';
import PlayerList from '../players/PlayerList';
import AddPlayer from '../players/AddPlayer';

import { Teams } from '../../api/teams';
import { HomePlayers } from '../../api/homeplayers';
import { AwayPlayers } from '../../api/awayplayers';

const Team = ({ team, gameId }) => {
	const [teamId, setTeamId] = useState(team._id);
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		Tracker.autorun(() => {
			const subscriptionName = `${team.name.toLowerCase()}-players`;
			Meteor.subscribe(subscriptionName, teamId);
			addPlayers();
		});
	}, []);

	const addPlayers = () => {
		const players =
			team.name === 'Home'
				? HomePlayers.find({ teamId }).fetch()
				: AwayPlayers.find({ teamId }).fetch();
		setPlayers(players);
	};

	return (
		<div className="col-xs-6">
			<TeamScore teamScore={team.teamScore} teamName={team.name} />
			<PlayerList teamName={team.name} teamId={teamId} players={players} />

			<AddPlayer gameId={gameId} teamName={team.name} teamId={teamId} />
		</div>
	);
};

export default Team;
