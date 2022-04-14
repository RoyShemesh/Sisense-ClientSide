import React, { Dispatch, SetStateAction, useState } from 'react';
import { Status } from '../../utils/interface';
import Graph from './graph/Graph';
import SearchForm from './searchForm/SearchForm';
import WhoAmI from './whoAmI/WhoAmI';

export default function HomePage({ setTo, setFrom }: Props) {
	const [status, setStatus] = useState<Status[]>([]);
	const [perTimeStamp, setPerTimeStamp] = useState<string>('day');
	return (
		<div className="mt-20 ">
			<SearchForm
				setStatus={setStatus}
				setPerTimeStamp={setPerTimeStamp}
				setTo={setTo}
				setFrom={setFrom}
			/>
			<Graph status={status} perTimeStamp={perTimeStamp} />
			<WhoAmI />
		</div>
	);
}

interface Props {
	setTo: Dispatch<SetStateAction<string>>;
	setFrom: Dispatch<SetStateAction<string>>;
}
