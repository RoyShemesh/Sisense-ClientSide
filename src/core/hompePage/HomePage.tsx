import React from 'react';
import { Status } from '../../utils/interface';
import Graph from './Graph/Graph';
import WhoAmI from './WhoAmI/WhoAmI';
// import catPhoto from '../../styles/img/404.jpg';

export default function HomePage({ status, perTimeStamp }: Props) {
	return (
		<div>
			<Graph status={status} perTimeStamp={perTimeStamp} />
			<WhoAmI />
		</div>
	);
}

interface Props {
	status: Status[];
	perTimeStamp: string;
}
