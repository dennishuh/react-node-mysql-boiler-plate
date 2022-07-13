import React from 'react';
import Team from './Team';

const TeamsContainer = ({ teams, gameId }) => (
	<div>
		{teams.map((team) => (
			<Team key={team._id} gameId={gameId} team={team} />
		))}
	</div>
);
export default TeamsContainer;
