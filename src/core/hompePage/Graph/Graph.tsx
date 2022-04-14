import React, { useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import Zoom from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';
import rotatePhone from '../../../styles/img/rotateYourDevice.png';
import { Status } from '../../../utils/interface';
import { generateData } from '../../../utils/chartUtilsFuncs';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Zoom
);

export default function Graph({ status, perTimeStamp }: Props) {
	const [notFound, setNotFound] = useState('');
	setTimeout(() => {
		setNotFound('No data found for those dates');
	}, 1500);
	const data = generateData(status, perTimeStamp);
	return (
		<div className="">
			<div className="hidden md:flex justify-center">
				{status[0] ? (
					<Line options={options} data={data} />
				) : (
					<div className="mt-20">{notFound}</div>
				)}
			</div>
			<div className="flex flex-col items-center font-thin text-2xl  md:hidden">
				Please rotate your phone
				<img src={rotatePhone} alt="" className="object-cover object-center w-full h-full" />
			</div>
		</div>
	);
}

const options = {
	responsive: true,
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
		},
		layout: {
			padding: 20,
		},
	},
};

interface Props {
	status: Status[];
	perTimeStamp: string;
}
