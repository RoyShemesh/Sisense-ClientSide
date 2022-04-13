import React from 'react';
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
import { DailyStatus } from '../../../utils/interface';
import { generateData } from '../../../utils/utilsFuncs';

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
export const options = {
	responsive: true,
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	// Zoom: {
	// 	zoom: {
	// 		pan: { enabled: true, mode: 'xy', speed: 10 },
	// 		zoom: {
	// 			enabled: true,
	// 			drag: false,
	// 			mode: 'xy',
	// 			rangeMin: { x: 0, y: 0 },
	// 			rangeMax: { x: 10, y: 15 },
	// 		},
	// 	},
	// },
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			// text: 'Chart.js Line Chart',
		},
		layout: {
			padding: 20,
		},
	},
};
export default function Graph({ dailyStatus }: Props) {
	const data = generateData(dailyStatus);
	return (
		<div className="">
			<div className="hidden md:mt-28 mt-24 md:flex justify-center">
				<Line options={options} data={data} />
			</div>
			<div className="flex flex-col items-center font-thin text-2xl  mt-24 md:hidden">
				{' '}
				Please rotate your phone
				<img src={rotatePhone} alt="" className="object-cover object-center w-full h-full" />
			</div>
		</div>
	);
}

interface Props {
	dailyStatus: DailyStatus[];
}
