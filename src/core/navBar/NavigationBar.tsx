import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import axios, { AxiosError } from 'axios';
import { Notyf } from 'notyf';
import { DailyStatus } from '../../utils/interface';
import { BASEURL } from '../../utils/config';
import 'notyf/notyf.min.css';
import DateInput from './DateInput';

export default function NavationBar({ setDailyStatus }: Props) {
	const [from, setFrom] = useState<string>('2021-06-01');
	const [to, setTo] = useState<string>('2021-12-31');
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			if (!from || !to) throw new Error('Please enter full date');
			if (from > to) throw new Error("Your 'from' input must be lower tham the 'to' one");
			const { data } = await axios.get(`${BASEURL}/daily/getByRange?from=${from}&to=${to}`);
			setDailyStatus(data);
		} catch (error) {
			const err = error as AxiosError;
			const notyf = new Notyf();
			if (err.response) notyf.error(err.response?.data);
			else if (err.message) notyf.error(err.message);
			else notyf.error('Error occured');
		}
	};
	return (
		<Disclosure as="nav" className="bg-blue-400  w-full fixed z-10 top-0">
			{() => (
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-auto p-2 md:p-1">
						<div className="flex-1 flex flex-col items-center justify-center  ">
							<div className="flex-shrink-0 hidden md:flex md:items-center  ">
								<h1 className="text-3xl text-slate-50 font-mono font-semibold">Grocery shop</h1>
							</div>
							<div className="flex flex-col items-center mt-1">
								<div className="flex-shrink-0 flex items-center justify-around">
									<DateInput setState={setFrom} defaultValue="2021-06-01" msg="From" />
									<DateInput setState={setTo} defaultValue="2021-12-31" msg="To" />
								</div>
								<button
									className="m-1 text-lg font-thin transition md:w-1/2 ease-in-out duration-150 shadow bg-sky-600 md:transform hover:scale-110  focus:outline-none text-white  py-1 px-4 rounded"
									type="button"
									onClick={() => {
										fetchData();
									}}
								>
									Get data
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Disclosure>
	);
}

interface Props {
	setDailyStatus: Dispatch<SetStateAction<DailyStatus[]>>;
}
