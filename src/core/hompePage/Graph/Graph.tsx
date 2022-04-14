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
	const data = generateData(status, perTimeStamp);
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
