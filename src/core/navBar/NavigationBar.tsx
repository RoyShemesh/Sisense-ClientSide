/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Status } from '../../utils/interface';
import { fetchDataByDatesRange } from '../../utils/fetchDataUtilsFuncs';
import 'notyf/notyf.min.css';
import DateInput from './DateInput';
import GroupButton from './GroupButton/GroupButton';

export default function NavationBar({ setStatus, setPerTimeStamp }: Props) {
	const [from, setFrom] = useState<string>('2021-06-01');
	const [to, setTo] = useState<string>('2021-12-31');
	useEffect(() => {
		fetchDataByDatesRange(from, to, setStatus);
	}, []);
	return (
		<Disclosure as="nav" className="bg-blue-400  w-full fixed z-10 top-0">
			{() => (
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-auto p-2 md:p-1">
						<div className="flex-1 flex flex-col items-center justify-center  ">
							<div className="flex-shrink-0 md:flex md:items-center  ">
								<h1 className="text-3xl text-slate-50 font-mono font-semibold">Grocery shop</h1>
							</div>
							<div className="md:flex hidden flex-col items-center mt-1">
								<div className="flex-shrink-0 flex items-center justify-around">
									<DateInput setState={setFrom} defaultValue="2021-06-01" msg="From" />
									<DateInput setState={setTo} defaultValue="2021-12-31" msg="To" />
								</div>
								<div className="flex items-center justify-center ">
									<button
										className="m-1 mr-2 text-lg font-thin transition md:w-full ease-in-out duration-150 shadow bg-sky-600 md:transform hover:scale-110  focus:outline-none text-white  py-1 px-4 rounded"
										type="button"
										onClick={() => {
											fetchDataByDatesRange(from, to, setStatus);
										}}
									>
										Filter dates by:
									</button>
									<GroupButton setPerTimeStamp={setPerTimeStamp} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Disclosure>
	);
}

interface Props {
	setStatus: Dispatch<SetStateAction<Status[]>>;
	setPerTimeStamp: Dispatch<SetStateAction<string>>;
}
