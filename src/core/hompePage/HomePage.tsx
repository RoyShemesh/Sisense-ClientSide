import React from 'react';
import { DailyStatus } from '../../utils/interface';
import Graph from './Graph/Graph';
import WhoAmI from './WhoAmI/WhoAmI';
// import catPhoto from '../../styles/img/404.jpg';

export default function HomePage({ dailyStatus }: Props) {
	return (
		<div>
			<Graph dailyStatus={dailyStatus} />
			<WhoAmI />
		</div>
	);
}

interface Props {
	dailyStatus: DailyStatus[];
}
