import { Status } from './interface';

// eslint-disable-next-line import/prefer-default-export
export function generateData(allStatus: Status[], perTimeStamp: string) {
	const infoReadyByTimeStamp = infoPreparation(allStatus, perTimeStamp);
	const dates = infoReadyByTimeStamp.map((status) => status.date.toString().slice(0, 10));
	const incomes = infoReadyByTimeStamp.map((status) => status.income);
	const outcome = infoReadyByTimeStamp.map((status) => status.outcome);
	const revenue = infoReadyByTimeStamp.map((status) => status.revenue);
	const data = {
		labels: dates,
		datasets: [
			{
				label: 'Income',
				data: incomes,
				borderColor: 'rgb(252, 0, 0)',
				backgroundColor: 'rgba(252, 0, 0, 0.5)',
			},
			{
				label: 'Outcome',
				data: outcome,
				borderColor: 'rgb(0, 0, 252)',
				backgroundColor: 'rgba(0, 0,252, 0.5)',
			},
			{
				label: 'Revenue',
				data: revenue,
				borderColor: 'rgb(0, 252, 0)',
				backgroundColor: 'rgba(0, 252, 0, 0.5)',
			},
		],
	};
	return data;
}

const infoPreparation = (allStatus: Status[], perTimeStamp: string) => {
	switch (perTimeStamp) {
		case 'Day':
			return allStatus;
		case 'Week':
			return generateWeekData(allStatus);
		case 'Month':
			return generateMonthData(allStatus);
		default:
			return allStatus;
	}
};

const generateWeekData = (allStatus: Status[]) => {
	const info: Status[] = [
		{ date: allStatus[0].date.slice(0, 7), income: 0, outcome: 0, revenue: 0 },
	];
	let count = 0;
	for (let i = 0; i < allStatus.length; i += 1) {
		if (count === 7) {
			info.push({
				date: allStatus[i].date.slice(0, 7),
				income: 0,
				outcome: 0,
				revenue: 0,
			});
			count = 0;
		}
		info[info.length - 1].income += allStatus[i].income;
		info[info.length - 1].outcome += allStatus[i].outcome;
		info[info.length - 1].revenue += allStatus[i].revenue;
		count += 1;
	}
	return info;
};

const generateMonthData = (allStatus: Status[]) => {
	const info: Status[] = [
		{ date: allStatus[0].date.slice(0, 7), income: 0, outcome: 0, revenue: 0 },
	];
	for (let i = 0; i < allStatus.length; i += 1) {
		const month = allStatus[i].date.slice(0, 7);
		if (info[info.length - 1].date !== month)
			info.push({ date: month, income: 0, outcome: 0, revenue: 0 });
		info[info.length - 1].income += allStatus[i].income;
		info[info.length - 1].outcome += allStatus[i].outcome;
		info[info.length - 1].revenue += allStatus[i].revenue;
	}
	return info;
};
