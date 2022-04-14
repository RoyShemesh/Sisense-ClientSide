import React, { Dispatch, SetStateAction, useEffect, createRef } from 'react';
import { Notyf } from 'notyf';
import { fetchDataByDatesRange } from '../../../utils/fetchDataUtilsFuncs';
import { Status } from '../../../utils/interface';
import DateInput from './DateInput';
import GroupButton from './GroupButton/GroupButton';
import 'notyf/notyf.min.css';

export default function SearchForm({ setStatus, setPerTimeStamp, setFrom, setTo }: Props) {
	const fromInput = createRef<HTMLInputElement>();
	const toInput = createRef<HTMLInputElement>();
	useEffect(() => {
		fetchDataByDatesRange('2021-06-01', '2021-12-31', setStatus);
	}, []);
	const searchDates = async () => {
		const from = fromInput.current?.value;
		const to = toInput.current?.value;
		if (from && to) {
			await fetchDataByDatesRange(from, to, setStatus);
			setFrom(from);
			setTo(to);
		} else {
			const notyf = new Notyf();
			notyf.error('Please enter full date');
		}
	};
	return (
		<div className="md:flex hidden flex-col items-center ">
			<div className="flex items-center ">
				<DateInput ref={fromInput} defaultValue="2021-06-01" msg="From" />
				<DateInput ref={toInput} defaultValue="2021-12-31" msg="To" />
			</div>
			<div className="flex items-center">
				<button
					className="m-1 mx-2 text-lg font-thin transition md:w-full ease-in-out duration-150 shadow bg-sky-600 md:transform hover:scale-110  focus:outline-none text-white  py-1 px-4 rounded"
					type="button"
					onClick={() => searchDates()}
				>
					Filter dates by:
				</button>
				<GroupButton setPerTimeStamp={setPerTimeStamp} />
			</div>
		</div>
	);
}
interface Props {
	setStatus: Dispatch<SetStateAction<Status[]>>;
	setPerTimeStamp: Dispatch<SetStateAction<string>>;
	setTo: Dispatch<SetStateAction<string>>;
	setFrom: Dispatch<SetStateAction<string>>;
}
