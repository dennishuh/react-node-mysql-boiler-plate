import React from 'react';

const TeamScore = ({ teamName, teamScore }) => (
	<div className="team-score">
		<h2>{teamName}</h2>
		<span>{teamScore}</span>
	</div>
);
export default TeamScore;
