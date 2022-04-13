import { DailyStatus } from './interface';

// eslint-disable-next-line import/prefer-default-export
export function generateData(dailyStatus: DailyStatus[]) {
	const dates = dailyStatus.map((status) => status.date.toString().slice(0, 10));
	const incomes = dailyStatus.map((status) => status.income);
	const outcome = dailyStatus.map((status) => status.outcome);
	const revenue = dailyStatus.map((status) => status.revenue);
	const data = {
		labels: dates,
		datasets: [
			{
				label: 'Income',
				data: incomes,
				borderColor: 'rgb(0, 0, 252)',
				backgroundColor: 'rgba(0, 0, 252, 0.5)',
			},
			{
				label: 'Outcome',
				data: outcome,
				borderColor: 'rgb(252, 0, 0)',
				backgroundColor: 'rgba(252, 0,0, 0.5)',
			},
			{
				label: 'revenue',
				data: revenue,
				borderColor: 'rgb(0, 252, 0)',
				backgroundColor: 'rgba(0, 252, 0, 0.5)',
			},
		],
	};
	return data;
}
